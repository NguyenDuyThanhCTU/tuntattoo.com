import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { convertDate, convertFieldValue } from "./Handle";
import { db } from "@config/firebase/Firebase";
import { message } from "antd";
import { RevalidateTags } from "@app/action";

export async function find(CollectionName: string) {
  let documents: any[] = [];
  let firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/xedienmientay-cb391/databases/(default)/documents/${CollectionName}`;

  async function fetchAndProcessData(nextPageToken?: string) {
    try {
      const response = await fetch(
        nextPageToken
          ? `${firebaseEndpoint}?pageToken=${nextPageToken}`
          : firebaseEndpoint,
        {
          cache: "force-cache",
          next: { tags: ["refetch"] },
        },
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not ok: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();

      // Kiểm tra an toàn: Đảm bảo data.documents tồn tại và là một mảng
      if (data.documents && Array.isArray(data.documents)) {
        const mappedDocs = data.documents.map((doc: any) => {
          const formattedDoc: any = {
            id: doc.name.split("/").pop(),
          };

          // Lặp qua các fields để convert dữ liệu
          for (const field in doc.fields) {
            if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
              formattedDoc[field] = convertFieldValue(doc.fields[field]);
            }
          }

          // Xử lý ngày tháng an toàn:
          // Ưu tiên field 'createdAt' (nếu bạn có tự định nghĩa trong Firestore),
          // nếu không có thì dùng 'createTime' mặc định của Firestore REST API
          const rawDate =
            formattedDoc.createdAt || doc.createTime || doc.updateTime;
          if (rawDate) {
            formattedDoc.date = convertDate(rawDate);
          }

          return formattedDoc;
        });

        // Đẩy toàn bộ documents đã format vào mảng chính
        documents.push(...mappedDocs);
      }

      // Tiếp tục fetch nếu có trang tiếp theo
      if (data.nextPageToken) {
        await fetchAndProcessData(data.nextPageToken);
      }
    } catch (error) {
      console.error(
        `Error getting data from collection: ${CollectionName}`,
        error,
      );
    }
  }

  await fetchAndProcessData();
  return documents;
}

export const insertOne = async (Collection: string, data: any) => {
  data.createdAt = serverTimestamp();

  try {
    const collectionRef = collection(db, Collection);

    const newDocument = await addDoc(collectionRef, data);

    message.success("Thêm thành công");
    RevalidateTags();
    return newDocument.id;
  } catch (error) {
    message.error(`Thêm thất bại: ${error}`);
  }
};

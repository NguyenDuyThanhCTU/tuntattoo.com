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
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();

      documents.push(
        ...data.documents.map((doc: any) => {
          const formattedDoc: any = {
            id: doc.name.split("/").pop(),
          };

          for (const field in doc.fields) {
            if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
              formattedDoc[field] = convertFieldValue(doc.fields[field]);
            }
          }

          formattedDoc.date = convertDate(formattedDoc.createdAt);
          return formattedDoc;
        })
      );
      if (data.nextPageToken) {
        await fetchAndProcessData(data.nextPageToken);
      }
    } catch (error) {
      console.error("Error getting data:", error);
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

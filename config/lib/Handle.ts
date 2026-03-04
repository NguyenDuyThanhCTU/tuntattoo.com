export function convertDocumentData(fields: any): any {
  const convertedData: any = {};

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      convertedData[field] = convertFieldValue(fields[field]);
    }
  }

  return convertedData;
}

export function convertFieldValue(value: any): any {
  if (!value) return null;

  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return parseInt(value.integerValue, 10);
  if ("doubleValue" in value) return parseFloat(value.doubleValue);
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("referenceValue" in value) return value.referenceValue;
  if ("geoPointValue" in value) return value.geoPointValue;

  // FIX LỖI MAP NẰM Ở ĐÂY: Xử lý an toàn cho mảng
  if ("arrayValue" in value) {
    // Nếu mảng rỗng, value.arrayValue.values sẽ undefined, ta ép về mảng rỗng []
    const values = value.arrayValue.values || [];
    return values.map((item: any) => convertFieldValue(item));
  }

  // Xử lý an toàn cho Object (mapValue)
  if ("mapValue" in value) {
    const fields = value.mapValue.fields || {};
    const result: any = {};
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        result[key] = convertFieldValue(fields[key]);
      }
    }
    return result;
  }

  return value;
}

export function convertDate(dateValue: any): string {
  if (!dateValue) return ""; // Nếu không có dữ liệu thì trả về chuỗi rỗng

  try {
    // Chuyển đổi chuỗi (hoặc timestamp) thành Object Date
    const date = new Date(dateValue);

    // Kiểm tra xem date có hợp lệ không (tránh lỗi Invalid Date)
    if (isNaN(date.getTime())) return "";

    // Trả về định dạng ngày tháng (bạn có thể đổi 'vi-VN' thành locale khác nếu muốn)
    return date.toLocaleDateString("vi-VN");
  } catch (error) {
    console.error("Lỗi khi convert ngày tháng:", error);
    return "";
  }
}

import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./../aws/index";
import { v4 } from "uuid";

/**
 * Upload a file to AWS S3 under "media/" directory.
 * @param {File} file - The file object (from input or drag-drop).
 * @returns {Promise<string>} - The uploaded file's S3 URL.
 */

export const uploadPhotoToS3 = async (file) => {
  const bucket = import.meta.env.VITE_AWS_BUCKET_NAME;
  const uniqueSuffix = v4();
  const key = `media/${uniqueSuffix}_${file.name.trim().replace(/\s+/g, "")}`;
  const arrayBuffer = await file.arrayBuffer();

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: arrayBuffer,
    ContentType: file.type,
  });

  try {
    await s3.send(command);
    const url = `${import.meta.env.VITE_AWS_S3_URL}/${key}`;
    return url;
  } catch (err) {
    console.error("S3 Upload Error:", err);
    throw err;
  }
};

import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../aws";
import { toast } from "react-toastify";

/**
 * Upload profile photo to S3 under "profilePhotos/{uid}.jpg"
 * @param {File} file - The profile photo file
 * @param {string} uid - Firebase user uid
 * @returns {Promise<string>} - The public URL of the uploaded photo
 */
export const uploadProfilePhotoToS3 = async (file, uid) => {
  const bucket = import.meta.env.VITE_AWS_BUCKET_NAME;
  const key = `profilePhotos/${uid}.jpg`;
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
    console.error("❌ Error uploading profile photo to S3:", err);
    toast.error("Profile photo upload failed.");
    throw err;
  }
};

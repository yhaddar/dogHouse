import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import bcrypt from "bcrypt";

export const supportedImage = (image: string): boolean => {
    const type: string[] = ["jpg", "jpeg", "png"];

    for(let i = 0; i < image.length; i++){
        if(type[i] == image)
            return true;

    }
    return false;

}

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
});

export const sendToS3 = async (image: File, name: string, buffer: Buffer<ArrayBuffer>) => {

    console.log("Sending file to S3...");
    await s3.send(
        new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: name,
            Body: buffer,
            ContentType: image.type
        })
    );
    console.log("Successfully send file to S3");
}

export const hashedPassword = async (password: string) => await bcrypt.hash(password, 12);
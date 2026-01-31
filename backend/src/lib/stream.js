import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
console.log("STREAM_API_KEY =", process.env.STREAM_API_KEY);
console.log("STREAM_API_SECRET =", process.env.STREAM_API_SECRET);


console.log("STREAM_API_KEY:", apiKey ? "FOUND" : "MISSING");
console.log("STREAM_API_SECRET:", apiSecret ? "FOUND" : "MISSING");

if (!apiKey || !apiSecret) {
    throw new Error("Stream API key or secret missing in environment variables");
}

export const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    await streamClient.upsertUsers([userData]);
};

export const generateStreamToken = (userId) => {
    return streamClient.createToken(userId.toString());
};

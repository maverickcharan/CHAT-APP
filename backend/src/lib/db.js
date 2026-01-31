import mongoose from "mongoose";
import dns from "dns";

// Workaround for Windows SRV DNS resolution issues
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    console.log("Attempting to connect with URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      family: 4,
      retryWrites: true,
      w: "majority",
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.error("Error details:", error.message);
    console.error("Error code:", error.code);
    process.exit(1);
  }
};

export default connectDB;

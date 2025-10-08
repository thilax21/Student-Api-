import mongoose from "mongoose";
export async function connectDB(uri) {
mongoose.set("strictQuery", true); // prevents deprecated query warnings
await mongoose.connect(uri);
console.log("✅ MongoDB connected");
}

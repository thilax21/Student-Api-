import { config } from "dotenv";
config(); // load .env
import app from "./src/app.js";
import { connectDB } from "./src/config/mongoose.js";
await connectDB(process.env.MONGO_URI);
app.listen(process.env.PORT, () =>
console.log(`🚀 Server running on http://localhost: ${process.env.PORT}`)
);
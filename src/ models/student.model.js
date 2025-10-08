import { Schema, model } from "mongoose";
const studentSchema = new Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true, lowercase: true },
age: { type: Number, min: 15 }
}, { timestamps: true });
export default model("Student", studentSchema);
const courseSchema = new Schema({
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    credits: { type: Number, default: 3 }
    }, { timestamps: true });
    export default model("Course", courseSchema);
const enrollmentSchema = new Schema({

    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    grade: { type: String, enum: ["A","B","C","D","F"], default: "A" }
    }, { timestamps: true });
    // ensure student can’t enroll same course twice
    enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });
    export default model("Enrollment", enrollmentSchema);
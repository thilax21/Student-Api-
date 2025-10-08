import Student from "../ models/student.model.js";
export const getStudents = async (_req, res) => {
const list = await Student.find();
res.json(list);
};

export const postStudent = async (req, res) => {
const s = await Student.create(req.body);
res.status(201).json(s);
};
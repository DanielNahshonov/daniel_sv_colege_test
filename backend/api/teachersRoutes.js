const express = require("express")
const {
  getTeachers,
  getTeachersById,
  createTeachers,
  removeTeachers,
  updateTeachers,
  getLowSalaryTeachers
} = require("../modules/teachersModule.js")

const router = express.Router()


router.get("/LowSalary", async (req,res)=>{
  try{
      const teachers = await getLowSalaryTeachers()
      res.json(teachers)
  } catch (error){
      res.status(500).send({message:error.message || 'no teachers with high avg grade'})

  }
})

router.get("/", async (req, res) => {
  try {
    const teachers = await getTeachers()
    res.json(teachers)
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" })
  }
})

router.get("/:TeachersId", async (req, res) => {
  try {
    const teachers = await getTeachersById(req.params.teachersId)
    res.json(teachers)
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" })
  }
})

router.post("/", async (req, res) => {
  try {
    const { text } = req.body // Assuming the teachers text is sent in the body
    const newTeacher = await createTeachers(text)
    res.status(201).json(newTeacher)
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" })
  }
})

router.delete("/:teachersId", async (req, res) => {
  try {
    await removeTeachers(req.params.teachersId)
    res.status(200).send({ message: "Teacher successfully deleted" })
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" })
  }
})

router.put("/:teachersId", async (req, res) => {
  try {
    const updates = req.body
    await updateTeachers(req.params.teachersId, updates)
    res.status(200).send({ message: "Teacher updated successfully" })
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" })
  }
})

module.exports = router

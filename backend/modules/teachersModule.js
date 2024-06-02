const dbModule = require("./dbModule.js")
const { toObjectId, getCollection } = dbModule

const collectionName = "teachers"

async function getTeachers() {
  try {
    const collection = await getCollection(collectionName)

    const teachers = await collection.find().toArray()

    if (!teachers || teachers.length === 0) return null
    return teachers
  } catch (error) {
    console.log({ error })
  }
}

async function createTeachers(fullname,id,salary,type) {
  try {
    const collection = await getCollection(collectionName)

    const teachers = {
      fullname: fullname,
      id:id,
      salary:salary,
      type:type,
    }

    const result = await collection.insertOne(teachers)
    teachers._id = result.insertedId
    return teachers
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function removeTeachers(teachersId) {
  try {
    const collection = await getCollection(collectionName)
    await collection.deleteOne({ _id: toObjectId(teachersId) })
  } catch (error) {
    throw error
  }
}

async function updateTeachers(teachersId, updates) {
  try {
    const collection = await getCollection(collectionName)
    const updateResult = await collection.updateOne(
      { _id: toObjectId(teachersId) },
      { $set: updates } // {fullname: "", isDone: false/true}
    )

    if (updateResult.matchedCount === 0) {
      throw new Error("Teacher not found")
    }

    return { success: true, message: "Teacher updated successfully" }
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function getTeachersById(teachersId) {
  try {
    const collection = await getCollection(collectionName)
    const teachers = await collection.findOne({ _id: toObjectId(teachersId) })
    if (!teachers) {
      throw new Error("Todo not found")
    }
    return teachers
  } catch (error) {
    console.error(error)
    throw error
  }
}


async function getLowSalaryTeachers(num) {
  try {
    const collection = await getCollection(collectionName);

    const teachers = await collection.find({ salary: { $lt: num } }).toArray();

    if (!teachers || teachers.length === 0) return null;
    return teachers;
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getTeachersById, getTeachers, createTeachers, removeTeachers, updateTeachers, getLowSalaryTeachers }

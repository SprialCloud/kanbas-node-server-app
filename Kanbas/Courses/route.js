import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";

export default function CourseRoutes(app) {
app.get("/api/courses", (req, res) => {
const courses = dao.findAllCourses();
res.send(courses);
});
app.post("/api/courses/:courseId/modules", (req, res) => {
  const { courseId } = req.params;
  const module = {
  ...req.body,
  course: courseId,
  };
  const newModule = modulesDao.createModule(module);
  res.send(newModule);
  });
  
app.delete("/api/courses/:courseId", (req, res) => {
  const { courseId } = req.params;
  const status = dao.deleteCourse(courseId);
  res.send(status);
  });
app.put("/api/courses/:courseId", (req, res) => {
  const { courseId } = req.params;
  const courseUpdates = req.body;
  dao.updateCourse(courseId, courseUpdates);
  res.sendStatus(204);
});  

app.get("/api/courses/:courseId/modules", (req, res) => {
  const { courseId } = req.params;
  const modules = modulesDao.findModulesForCourse(courseId);
  res.json(modules);
  });
  
app.get("/api/courses/:courseId/assignments", (req, res) => {
  const { courseId } = req.params;
  const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
  res.json(assignments);
});

app.post("/api/courses/:courseId/assignments/new", (req, res) => {
  const { courseId } = req.params;
  const assignment = {
    _id: new Date().getTime().toString(),
    course: courseId,
    title: req.body.title,
    description: req.body.description || "",
    points: req.body.points || 100,
    due: req.body.due || "2024-05-13T23:59",
    available: req.body.available || "2024-05-06T23:59",
    
  };
  const newAssignment = assignmentsDao.createAssignment(assignment);
  res.send(newAssignment);
});
}
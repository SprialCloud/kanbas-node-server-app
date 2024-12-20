const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
    };

const model = {
    id: 1, name: "NodeJS", description: "NodeJS with ExpressJS", course: "Web Development",
    };

    export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
        });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
    });    
    app.get("/lab5/assignment/completed/:completed", (req, res) => {
        const { completed } = req.params;
        assignment.completed = completed === "true";
        res.json(assignment);
      });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore);
    res.json(assignment);
    });
    app.get("/lab5/module", (req, res) => {
        res.json(model);
        });
    app.get("/lab5/module/name", (req, res) => {
        res.json(model.name);
        });
    app.get ("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        model.name = newName;
        res.json(model);
        });
    app.get ("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        model.description = newDescription;
        res.json(model);
        });
    };
    
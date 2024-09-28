// Write basic express boilerplate code,
// with express.json() middlware

const { createTodo } = require("./types");

const express = requre("express");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // Put the to do task in MongoDB
});

app.get("/todos", function (req, res) {
  return res.send(200);
});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
  return;
});

app.listen(3000);

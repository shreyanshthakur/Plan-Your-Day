/* eslint-disable no-unused-vars */
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input type="text" placeholder="title" onChange={function (e) {}}></input>{" "}
      <br />
      <input type="text" placeholder="description"></input> <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}

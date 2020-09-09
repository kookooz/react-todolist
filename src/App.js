import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoInput from "./componets/TodoInput";
import TodoList from "./componets/TodoList";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

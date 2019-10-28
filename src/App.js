import React, { useState } from "react";
import TodosContext from "./TodosContext";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import "./App.scss";

const TodosProvider = props => {
  const [state, setState] = useState({
    todos: [],
    input: "",
    error: "",
  });

  const { children } = props;

  return (
    <TodosContext.Provider value={[state, setState]}>
      {children}
    </TodosContext.Provider>
  );
};

function App() {
  return (
    <div className="app">
      <h1 className="display-1">TODO</h1>
      <TodosProvider>
        <NewTodo />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;

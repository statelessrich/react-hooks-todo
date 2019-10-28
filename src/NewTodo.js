import React, { useContext, useRef } from "react";
import {
  Button,
  Form,
  InputGroup,
  Overlay,
  Tooltip,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import TodosContext from "./TodosContext";

function NewTodo() {
  const [state, setState] = useContext(TodosContext);
  const target = useRef(null);

  const add = event => {
    event.preventDefault();

    if (state.error !== "" || state.input.trim() === "") {
      return;
    }

    setState({
      ...state,
      todos: [...state.todos, state.input.trim()],
      input: "",
    });
  };

  const handleInput = todo => {
    let error = "";

    if (state.todos.includes(todo.target.value.trim())) {
      error = "Todo already exists.";
    }

    setState({
      ...state,
      input: todo.target.value,
      error,
    });
  };

  return (
    <div className="new-todo">
      <Form onSubmit={add}>
        <InputGroup>
          <Overlay
            target={target.current}
            show={state.error !== ""}
            placement="bottom"
          >
            {props => (
              <Tooltip
                id="overlay-example"
                {...props}
                show={props.show.toString()}
              >
                <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
                {state.error}
              </Tooltip>
            )}
          </Overlay>
          <Form.Control
            ref={target}
            type="text"
            value={state.input}
            onChange={handleInput}
            maxLength="50"
            autoFocus
          />
          <InputGroup.Append>
            <Button
              className="add-btn"
              disabled={
                state.error !== "" || state.input.trim() === ""
              }
              onClick={add}
            >
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
}

export default NewTodo;

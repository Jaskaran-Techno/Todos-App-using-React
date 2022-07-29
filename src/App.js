import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const addTodo = (title, Desc) => {
    console.log("I am ading this todo", title, Desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      esc: Desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
 }
 

  const [todos, setTodos] = useState ([
    {
      sno: 1,
      title: "Boat Racing",
      desc: "A good river is nature's life work in song."
    },
    {
      sno: 2,
      title: "Hit the Gym",
      desc: "You need to go to the gym to stay fit"
    },
    {
      sno: 3,
      title: "Paragliding",
      desc: "Amazing adventure is always totally fun"
    },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo AddTodo={ AddTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

import React, { useState, ReactNode } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './todoPage.css';

import TodoList from '../components/todoList/todoList';
import TodoForm from '../components/todoForm/todoForm';

type todosProps = {
  id: string;
  endDate: Date;
  title: string;
  description: string;
  completed: boolean;
  currentDate: Date;
};

interface editTodosProps {
  id: string;
  title: string;
  description: string;
  endDate: Date;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<todosProps[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState(new Date());
  const [editData, setEditData] = useState<editTodosProps | null>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const date_diff_indays = function (date1: Date, date2: Date) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24)
    );
  };

  const newTodoHandler = (todo: any) => {
    if (editData) {
      todos.map((item) => {
        if (item.id === todo?.id) {
          item.title = todo.title;
          item.description = todo.description;
          item.endDate = todo.endDate;
        }
      });

      setTodos(todos);
      setEditData(null);
    } else {
      setTodos((prevState) => [todo, ...prevState]);
    }
  };

  const removeItem = (id: string) => {
    setTodos((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const editItem = (id: string) => {
    let todoUpdate = todos.findIndex((todo) => todo.id === id);

    let editItemData = todos[todoUpdate];
    setIsEdit(true);

    setTitle(editItemData.title);
    setDescription(editItemData.description);
    setEndDate(editItemData.endDate);

    setEditData(editItemData);

    console.log(editItemData);
  };

  const handleCheck = (id: string) => {
    const todoCheckedIndex = todos.findIndex((todo) => todo.id === id);

    setTodos((prevState) => {
      const newState = [...prevState];
      const todoChecked = newState[todoCheckedIndex];
      const updatedCheckedTodo = { ...todoChecked };
      updatedCheckedTodo.completed = !updatedCheckedTodo.completed;

      newState[todoCheckedIndex] = updatedCheckedTodo;

      return newState;
    });
  };

  return (
    <div className="main">
      <TodoForm editData={editData} onNewTask={newTodoHandler} />

      {todos.length !== 0 && (
        <TodoList
          data={todos}
          onTaskDone={handleCheck}
          onTaskRemove={removeItem}
          onTaskEdit={editItem}
          getDiffDays={date_diff_indays}
          className="card-wrapper"
        ></TodoList>
      )}
    </div>
  );
};

export default TodoPage;

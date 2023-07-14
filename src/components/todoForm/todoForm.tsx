import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

type todosProps = {
  id: string;
  endDate: Date;
  title: string;
  description: string;
  completed: boolean;
  currentDate: Date;
};

const TodoForm = ({ editData, onNewTask }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
      setEndDate(editData.endDate);
    }
  }, [editData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newTodo = {} as todosProps;

    if (editData) {
      newTodo = {
        id: editData.id,
        title: title,
        description: description,
        completed: editData.completed,
        endDate: editData.endDate,
        currentDate: new Date(),
      };
    } else {
      newTodo = {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        completed: false,
        endDate: endDate,
        currentDate: new Date(),
      };
    }

    onNewTask(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input className="form-input" type="text" id="todo-title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label htmlFor="todo-title">Title</label>
      </div>

      <div className="form-group">
        <textarea className="form-input" id="todo-description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <label htmlFor="todo-description">Description</label>
      </div>

      <div className="form-group">
        <DatePicker className="form-input" dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date: Date) => setEndDate(date)} />
        <label className="date-custom" htmlFor="todo-complete-date">
          Date
        </label>
      </div>

      <input type="submit" value={editData ? 'Edit task' : 'Create new task'} />
    </form>
  );
};

export default TodoForm;

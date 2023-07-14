import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const TodoItem = ({ data, onTaskDone, onTaskRemove, onTaskEdit, getDiffDays }: any) => {
  const { id, endDate, title, description, completed, currentDate } = data;

  return (
    <div key={id} className={`card ${completed && 'completed'}`}>
      <div className="checkbox">
        <input value={id} type="checkbox" onChange={() => onTaskDone(id)} />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="description">{description} </div>
        <div className="date-diff">{getDiffDays(currentDate, endDate)} Days remaining...</div>
      </div>
      <div className="buttons">
        <span className="edit" onClick={() => onTaskRemove(id)}>
          <RiDeleteBin6Line />
        </span>
        <span className="delete" onClick={() => onTaskEdit(id)}>
          <FaEdit />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

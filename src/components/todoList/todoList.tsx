import React, { useState } from 'react';
import TodoItem from '../todoItem/todoItem';
import { BsSearch } from 'react-icons/bs';

const TodoList = ({ data, onTaskDone, onTaskRemove, onTaskEdit, getDiffDays }: any) => {
  const [query, setQuery] = useState('');
  const filteredItems = data.filter((item: any) => {
    return item.description.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <div className="search-box">
        <BsSearch className="search-glass" />
        <input type="search" id="todo-search" placeholder="Wash car..." onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="card-wrapper">
        {filteredItems.length === 0 && <h1>Results not found: "{query}"</h1>}
        <div className="tasks-quantity">
          {filteredItems.length} {filteredItems.length === 1 ? ' Task' : ' Tasks'}
        </div>

        {filteredItems.map((item: any) => (
          <TodoItem key={item.id} data={item} onTaskDone={onTaskDone} onTaskRemove={onTaskRemove} onTaskEdit={onTaskEdit} getDiffDays={getDiffDays} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

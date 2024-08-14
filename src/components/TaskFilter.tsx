import React from 'react';

interface TaskFilterProps {
  filter: string;
  handleAllPendingCompleted: (filter:string)=>void
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, handleAllPendingCompleted }) => {
  return (
    <div>
      <div className="flex justify-center m-3 px-3 py-3">
        <button
          className={`bg-blue-700 text-white rounded-lg px-2 py-2 ml-2 ${filter === 'all' ? 'bg-white text-blue-900 border-2 border-blue-700' : ''}`}
          onClick={() => handleAllPendingCompleted('all')}
        >
          All
        </button>
        <button
          className={`bg-blue-700 text-white rounded-lg px-2 py-2 ml-2 ${filter === 'pending' ? 'bg-gray-200 text-black border border-black' : ''}`}
          onClick={() => handleAllPendingCompleted('pending')}
        >
          Pending
        </button>
        <button
          className={`bg-blue-700 text-white rounded-lg px-2 py-2 ml-2 ${filter === 'completed' ? 'bg-slate-200 text-black border border-black' : ''}`}
          onClick={() => handleAllPendingCompleted('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;

import React from 'react';
import Button from './Button';

interface TaskFilterProps {
  filter: string;
  handleAllPendingCompleted: (filter:string)=>void
}
const filterOption=["all","pending","completed"]

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, handleAllPendingCompleted }) => {
  
  return (
    <div>
      <div className="flex justify-center  ">
        {
          filterOption.map((option)=>(
            <Button key={option} text={option} isActive={filter === option} onClick={() => handleAllPendingCompleted(option)}/>
          ))
        }
          </div>
          {/* <Button text={"All"} isActive={filter === 'all'} onClick={() => handleAllPendingCompleted('all')}/>
          <Button text={"Pending"} isActive={filter === 'pending'} onClick={() => handleAllPendingCompleted('pending')}/>
          <Button text={"Completed"} isActive={filter === 'completed'} onClick={() => handleAllPendingCompleted('completed')}/> */}
    
    </div>
  );
  
};

export default TaskFilter;

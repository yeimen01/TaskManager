import React, {useState} from 'react';
import { TaskForm } from '../components/taskForm';
import { TaskList } from '../components/taskList';


export const Home = () =>{
    const [selectedTask, setSelectedTask]= useState(null);
    const [reload, setReload]= useState(false);

    const handleSuccess = () => {
        setSelectedTask(null);
        setReload(!reload);
    }
    return (
        <div>
            <h1>Gestion de tareas</h1>

            <TaskForm selectedTask = {selectedTask} onSuccess={handleSuccess}/>
            <hr/>
            <TaskList onEdit = {setSelectedTask} reloadTrigger={reload} />
        </div>
    );
}
import React, {useState, useEffect} from 'react';
import {createTask, updateTask} from '../api/taskService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const TaskForm = ({selectedTask, onSuccess}) =>{
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        isDone: false
    });

    useEffect(() =>{
        if(selectedTask){
            setTask(selectedTask)
        }
    }, [selectedTask]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            if(task.id){
                await updateTask(task.id, task);
            }else{
                await createTask(task);
            }

        onSuccess();
        setTask({title: '', description: '', dueDate: '', isDone: false})
        } catch (err)
        {
            alert('Error al guardar la tarea ' + err.Message);
        }

    }

    const handleChange = (e) =>{
        const {name ,value, type, checked} = e.target;
        setTask({ ...task, [name]: type === 'checkbox' ? checked : value})
    }

    return (
        <div>

        <Form className='form-control' onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label >Titulo</Form.Label>
                <Form.Control  name="title" value={task.title} onChange={handleChange} required placeholder='Titulo'/>

                <Form.Label className='mt-4'>Descripcion</Form.Label>
                <Form.Control  name="description" value={task.description} onChange={handleChange} placeholder='Descripcion'/>

                <input className='mt-3' type='date' name='dueDate' value={task.dueDate} onChange={handleChange} required />

                <Form.Check 
                    name="isDone"
                    type="switch"
                    id="custom-switch"
                    label="Completdado"
                    checked={task.isDone} 
                    onChange={handleChange}
                    className='mt-3 mb-2'
                />

            </Form.Group>
            
            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
        </div>
    );
}
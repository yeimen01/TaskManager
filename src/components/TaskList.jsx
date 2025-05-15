import React, {useState, useEffect} from 'react';
import {getTasks, deleteTask} from '../api/taskService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export const TaskList = ({onEdit, reloadTrigger}) =>{
    const [task, setTask] = useState([]);

    useEffect(() =>{
        load();
    }, [reloadTrigger]);

    const load = async () => {
        const res = await getTasks();
        if (res){
            setTask(res.data);
        }
    }

    return (
        <div>
            <div>
            <Table striped bordered hover>
                <thead>
                    <th style={{display:'none'}}>#</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Vencimiento</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Borar</th>
                </thead>
                    {task.map(task => (
                        <tbody>
                            <tr>
                                <td style={{display:'none'}}>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.dueDate}</td>
                                <td>{task.isDone ? 'Listo' : 'Sin concluir'}</td>
                                <td><Button onClick={() => onEdit(task)} variant="warning">Editar</Button></td>
                                <td><Button onClick={() => deleteTask(task.id).then(load)} variant="danger">Eiminar</Button></td>
                            </tr>
                        </tbody>
                ))}
            </Table>
            </div>
        </div>
    );
}
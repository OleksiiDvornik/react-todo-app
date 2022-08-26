//Core
import { useState, useEffect } from "react";

//Parts
import ErrorBoundary from './ErrorBoundary';
import Title from "../components/Title";
import Form from "../components/Form";
import Subtitle from "../components/Subtitle";
import Item from "../components/Item";

function Todos() {

    const [todos, setTodos] = useState([]);

    //Download todos from local storage
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')) || [])
    }, [])

    //Add new todo item
    const addTodo = ({ id, description, checked = false }) => {
        const newTodos = [...todos, {id, description, checked}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    //Check todo item
    const checkTodo = ({ id, checked }) => {
        const newTodos = todos.map(item => {
            if (item.id === id) {
                item.checked = checked;
            }
            return item;
        })
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    //Update todo item
    const updateTodo = ({ id, newDescription }) => {
        const updateTodos = todos.map(item => {
            if (item.id === id) {
                item.description = newDescription;
            }
            return item;
        })
        setTodos(updateTodos);
        localStorage.setItem('todos', JSON.stringify(updateTodos));
    }

    //Delete todo item
    const deleteTodo = (id) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <ErrorBoundary>
            <div className="todos">
                <Title className="title todos__title">Какие планы на сегодня?</Title>
                <Form className="form todos__form" onAdd={addTodo}/>
                <Subtitle className="subtitle todos__subtitle">Все задачи</Subtitle>
                <div className='todos__list'>
                    {todos.length !== 0
                        ? todos.map(item => (
                            <Item
                                description={item.description}
                                id={item.id}
                                key={item.id}
                                checked={item.checked}
                                onCheck={checkTodo}
                                onUpdate={updateTodo}
                                onDelete={deleteTodo}/>
                        ))
                        : <span className='todos__list-text'>Задач нет</span>}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default Todos;

/*
ToDoList 
By: KaiHao Chen
Rover Software entrance task 
*/


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [currentItem, NewItem] = useState<string>("");
    const [Lists, SetLists] = useState<ListItem[]>([]);
    const [CompletedList, SetCompletedList] = useState<ListItem[]>([]);
    const [description, setDescription] = useState<string>("");

    function addItem() {
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: currentItem,
            descriptions: [] as string[],
        };
        SetLists(oldList => [...oldList, item]);
        NewItem("");
    }

    function addDescription(id: number) {
        SetLists(oldList =>
            oldList.map(item =>
                item.id === id
                    ? {
                          ...item,
                          descriptions: [...item.descriptions, description],
                      }
                    : item
            )
        );
        setDescription(""); 
    }

    function deleteItem(id: number) {
        const excludeID = Lists.filter(item => item.id !== id);
        SetLists(excludeID);
    }

    function completeItem(id: number) {
        const itemToComplete = Lists.find(item => item.id === id);

        if (itemToComplete) {
            SetCompletedList(oldList => [...oldList, itemToComplete]);
            deleteItem(id);
        }
    }

    return (
        <div className="App">
            <header>
                <h1>To Do List</h1>
            </header>
            <div className="ToDo">
                <h3>ToDo's</h3>
                <ul>
                    {Lists.map(item => (
                        <li key={item.id}>
                            {item.value}
                            <ul>
                                {item.descriptions.map((desc: string, index: number) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                style={{ width: "250px" }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button
                                className="button button1"
                                onClick={() => addDescription(item.id)}
                            >
                                Add Description
                            </button>
                            <button className="button button2" onClick={() => deleteItem(item.id)}>
                                X
                            </button>
                            <button className="button button3" onClick={() => completeItem(item.id)}>
                                ✔️
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="completedTasks">
                <h3>Completed Tasks</h3>
                <ul>
                    {CompletedList.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
            </div>
            <div className="styled-input">
                <label htmlFor="name">Enter ToDo's</label>
                <input
                    type="text"
                    style={{ width: "250px" }}
                    value={currentItem}
                    onChange={(e) => NewItem(e.target.value)}
                />
                <button className="button button1" onClick={addItem}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default App;

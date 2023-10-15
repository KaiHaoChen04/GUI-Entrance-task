import React from 'react';
import './App.css'
import Box from './components/TaskList/ToDoBox'

function App(){
    return(
        <div className = "App">
            <header>
                <h1>To Do List</h1>
            </header>
            <div className = "box-container">
            <Box />
            </div>
        </div>
    );
}
export default App;
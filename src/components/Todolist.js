import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddNewItem from './AddNewItem';
import ItemList from './ItemList';


const Todolist = () => {

    // Task list to store all task
    const [taskList, setTaskList] = useState(['Dates', 'Coconuts', 'Bananas', 'Apples']);
    console.log(taskList);

    useEffect(() => {
        // Getting taskList from localStorage
        const getTaskList = JSON.parse(localStorage.getItem('taskList'));

        // Check taskList available in localStorage
        // If taskList not available then set in localStorage
        if (getTaskList) {
            setTaskList(getTaskList);
        } else {
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
        // eslint-disable-next-line
    }, [])

    // Selected task to store task and their id
    const [selectedTask, setSelectedTask] = useState({
        task: '',
        taskId: null
    });

    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    <AddNewItem
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                    {/* Item List Component */}
                    <ItemList
                        taskList={taskList}
                        setTaskList={setTaskList}
                        setSelectedTask={setSelectedTask}
                    />
                </div>
            </div>

        </div>
    </>)
}

export default Todolist;
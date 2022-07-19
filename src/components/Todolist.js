import React, { useEffect, useState } from 'react';

const Todolist = () => {

    // Task list to store all task
    const [taskList, setTaskList] = useState(['Dates', 'Coconuts', 'Bananas', 'Apples']);

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

                </div>
            </div>

        </div>
    </>)
}

export default Todolist;
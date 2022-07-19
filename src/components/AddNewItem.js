import React, { useState } from 'react';

//Style for task input, add button, remove all button
const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};

//Style for add button, remove all button
const btnWidth = { width: '100%' };

const AddNewItem = (props) => {

    // object destructuring of props
    const { taskList, setTaskList } = props;

    // useState for store new task
    const [task, setTask] = useState('');

    // Add new task action handle
    const handleForm = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        // Trim all white space from both side
        const trimUpdateTask = task.trim();
        if (trimUpdateTask !== '') {
            setTaskList([trimUpdateTask, ...taskList]);
            setTask('');
        }
    }

    // Remove all list action handle
    const removeAllHandle = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        setTaskList([]);
    }

    return (<>
        <div className="row">
            <div className="col-12">
                {/* Form start */}
                <form
                    className='form-group my-auto'
                    onSubmit={handleForm}
                >
                    <div className='row mb-3'>
                        <div className='col-12'>
                            {/* Input to take new task */}
                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type="text"
                                value={task} onChange={(e) => setTask(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="col-5 col-sm-4 p-0 mr-2">
                            {/* Add new task action button */}
                            <input
                                className='btn btn-light border addBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Add Task"
                            />
                        </div>
                        <div className='col-5 col-sm-4 p-0'>
                            {/* Remove all from taskList action button */}
                            <button
                                className='btn btn-light border removeAllBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={removeAllHandle}
                            >Remove All</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* Horizontal line */}
        <hr className='mb-2' />
    </>)
}

export default AddNewItem;
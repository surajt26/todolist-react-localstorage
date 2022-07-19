import React, { useState, useEffect } from 'react';

// Style for text input, add button, remove all button
const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};

// Style for update button, cancel button
const btnWidth = { width: '100%' };

const UpdateInput = (props) => {

    // object destructuring of props
    const { taskList, selectedTask, setSelectedTask, getList } = props;

    let tempTaskList = taskList;

    // useState to store update item
    const [updateText, setUpdateText] = useState('');

    useEffect(() => {
        setUpdateText(selectedTask.task);
    }, [selectedTask])

    // Update input action handle
    const updateItemHandle = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        // Trim all white space from both side
        const trimUpdateText = updateText.trim();
        if ((selectedTask !== null) && (trimUpdateText !== "")) {
            tempTaskList[selectedTask.taskId] = trimUpdateText;
            localStorage.setItem('taskList', JSON.stringify(tempTaskList));
            getList();
            setSelectedTask({
                task: '',
                taskId: null
            });
            setUpdateText('');
            // Add class to update-row component
            document.getElementById('update-row').classList.add('d-none');
        }
    }

    // Cancel update action handle
    const cancelUpdateHandle = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        setSelectedTask({
            task: '',
            taskId: null
        });
        setUpdateText('');
        // Add class to update-row
        document.getElementById('update-row').classList.add('d-none');
    }

    return (<>
        <div
            id='update-row'
            className="row position-absolute w-100 d-none"
            style={{
                // display: 'none',
                height: '100vh',
                zIndex: '10',
                top: '0',
                left: '15px',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
            }}
        >
            <div
                className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                mx-auto my-auto border rounded shadow bg-white"
                style={{ zIndex: '11' }}
            >
                {/* Form start */}
                <form
                    className='form-group'
                    onSubmit={updateItemHandle}
                >
                    <div className="row mt-3 mb-2">
                        <div className="col-12">
                            {/* Update input to take updated item */}
                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type='text'
                                value={updateText}
                                onChange={(e) => setUpdateText(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 col-sm-4 p-0 mr-2">
                            {/* Update action button */}
                            <input
                                className='btn btn-light border'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Update"
                            />
                        </div>
                        <div className="col-5 col-sm-4 p-0">
                            {/* Cancel update action button */}
                            <button
                                className='btn btn-light border'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={cancelUpdateHandle}
                            >Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default UpdateInput;
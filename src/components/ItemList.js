import React from 'react';
// Import some icons from 'Material-UI' website
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = (props) => {

    // object destructuring of props
    const { taskList, setTaskList, setSelectedTask } = props;

    // Task select action handle
    const selectHandle = (task, taskId) => {
        setSelectedTask({
            task: task,
            taskId: taskId
        });
        // Remove class to update-row component
        document.getElementById('update-row').classList.remove('d-none');
    }

    // Task delete action handle
    const deleteHandle = (task) => {
        // Filter taskList and return all task except selected task for delete
        const updatedTaskList = taskList.filter((value) => {
            return value !== task
        });
        setTaskList(updatedTaskList);
    }

    return (<>
        <div className='row mb-2'>
            <div
                className="col-12  overflow-auto"
                style={{ height: '300px' }}
            >
                {/* Unordered-list */}
                <ul className='list-group list-group-flush'>
                    {
                        // render entire task list
                        taskList.map((task, taskId) =>
                            <li
                                key={taskId}
                                className='list-group-item'
                            >
                                {/* Task */}
                                {task}
                                {/* delete task action */}
                                <span
                                    onClick={() => deleteHandle(task)}
                                    className='change-delete-icon float-right'
                                >
                                    {/* Icons for delete task */}
                                    <span className='delete-outline-icon'>
                                        <DeleteOutlineIcon />
                                    </span>
                                    <span className='delete-icon'>
                                        <DeleteIcon />
                                    </span>
                                </span>
                                {/* select task action */}
                                <span
                                    onClick={() => selectHandle(task, taskId)}
                                    className='change-edit-icon float-right mr-2'
                                >
                                    {/* Icons for edit task */}
                                    <span className='edit-outlined-icon'>
                                        <EditOutlinedIcon />
                                    </span>
                                    <span className='edit-icon'>
                                        <EditIcon />
                                    </span>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </>)
}

export default ItemList;
import React, { memo } from 'react';

const Header = () => {
    return (<>
        <div className='row mt-3'>
            <div className="col-12">
                {/* Heading */}
                <h2 className='text-center my-auto'>ToDoList</h2>
            </div>
        </div>
        {/* Horizontal line */}
        <hr />
    </>)
}

export default memo(Header);
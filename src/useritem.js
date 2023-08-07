import React, { useState } from 'react';

const UserItem = ({user}) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
    setShowDetails(!showDetails);
    };


return (
    <div className='userItem'>
        <div>
            <img src={user.picture.thumbnail} alt={user.name.first} /> 
            <h3> {`${user.name.first} ${user.name.last}`}</h3>
            <button onClick={toggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <div> 
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    {/* add other details you want to display */}
                    </div>
            )}
        </div>
    </div>
    );
};     

export default UserItem;

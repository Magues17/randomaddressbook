import React from "react";
import UserItem from './useritem';

const UserList = ({ users }) => {
    return (
        <div>
                {users.map((user, index) => (
                    <UserItem key={index} user={user} />
                ))}
        </div>
    );
};

export default UserList;


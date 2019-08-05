import React from 'react';

const User = ({ user }) => (
    <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.desc}</td>
    </tr>
);

export default User;

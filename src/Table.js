import React from 'react';
import { connect } from 'react-redux';
import User from './User'

const Table = ({ users = [] }) => (
    <table className="table-users">
        <thead>
            <tr>
                <th>Number</th>
                <th>name</th>
                <th>surname</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                />
            ))}
        </tbody>
    </table>
);

const mapState = (state) => {
    return {
        users: state.users
    };
};


// export default Table;
export default connect(mapState)(Table);
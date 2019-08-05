import React from 'react';
import { connect } from 'react-redux';
import User from './User'
import { perPage } from './Pagination'

const Table = ({ users = [], currentPage }) => (
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
            {users.filter((user, index) => ((index >= currentPage * perPage - perPage) && (index < currentPage * perPage)))
                .map(user => (
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
        users: state.users,
        currentPage: state.currentPage
    };
};

export default connect(mapState)(Table);
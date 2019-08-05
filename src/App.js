import React from 'react';
import './App.css';
import { getUsers } from './helpers/api';
import { connect } from 'react-redux';
import Table from './Table';
import Pagination from './Pagination';
import { SET_USERS } from './redux/store'

class App extends React.Component {
  async componentDidMount() {
    const { setUsers } = this.props;
    const users = await getUsers();
    setUsers(users);
  }

  render() {
    return (
      <div className="App">
        <h1>Table of <span>{this.props.count}</span> users</h1>
        <Table />
        <Pagination />
      </div>);
  }
}

const mapState = (state) => {
  return {
    count: state.users.length,
  };
};

const mapDispatch = (dispatch) => ({
  setUsers: (users) => dispatch({ type: SET_USERS, users: users }),
});

export default connect(mapState, mapDispatch)(App);
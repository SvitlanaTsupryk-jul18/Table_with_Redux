import React from 'react';
import './App.css';
import { getUsers } from './api';
import { connect } from 'react-redux';
import Table from './Table';
import Pagination from './Pagination';

class App extends React.Component {
  async componentDidMount() {
    const { setUsers } = this.props;

    const users = await getUsers();
    setUsers(users);
  }

  render() {
    return (
      <div className="App">
        <h1>Table of users</h1>
        <Table />
        <Pagination />
      </div>);
  }
}


const mapState = (state) => ({
  // visibleTodos: [],
  // query: '',
});

const mapDispatch = (dispatch) => ({
  setUsers: (users) => dispatch({ type: "SET_USERS", users: users }),
  // loadData: () => dispatch(loadDataAction),
});

export default connect(null, mapDispatch)(App);
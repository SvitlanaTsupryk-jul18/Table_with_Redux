import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_PAGE } from './redux/store'

export const perPage = 5;

const Pagination = ({ changePage }) => (
    <div className="pagination" onClick={(e) => changePage(e)}>
        <button type="button" name="prev" value="prev">{"<"}</button>
        <button type="button" name="1" value="1">1</button>
        <button type="button" name="2" value="2">2</button>
        <button type="button" name="3" value="3">3</button>
        <button type="button" name="4" value="4">4</button>
        <button type="button" name="next" value="next">></button>
    </div>
)

const mapDispatch = (dispatch) => ({
    changePage: (event) => dispatch({ type: CHANGE_PAGE, target: event.target, value: event.target.value }),
});

export default connect(null, mapDispatch)(Pagination);
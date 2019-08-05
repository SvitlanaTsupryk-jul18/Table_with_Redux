import React from 'react';
import { connect } from 'react-redux';
// import {changePage} from './store.js';

export const per_page = 5;

const Pagination = ({ changePage }) => (
    <div className="pagination" onClick={(e) => changePage(e)}>
        <button type="button" name="prev" value="prev">{"<"}</button>
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
        <button type="button" value="4">4</button>
        <button type="button" name="next" value="next">></button>
    </div>
)

const mapDispatch = (dispatch) => ({
    changePage: (event) => dispatch({ type: "CHANGE_PAGE", target: event.target, value: event.target.value }),

});



// export default Pagination;
export default connect(null, mapDispatch)(Pagination);
import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_PAGE } from './redux/store'

export const perPage = 5;

class Pagination extends React.Component {
    render() {
        const { changePage, users, currentPage } = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(users.length / perPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="pagination">
                <button type="button" name="prev" value="prev" onClick={() => changePage("prev")} className="pagination__btn"> {"<"}</button>
                {pageNumbers.map(number =>
                    <button key={number}
                        onClick={() => changePage(number)}
                        className={number === currentPage ? "pagination__btn focused" : "pagination__btn"} >
                        {number}
                    </button>
                )}
                <button type="button" name="next" value="next" onClick={() => changePage("next")} className="pagination__btn">></button>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        users: state.users,
        currentPage: state.currentPage
    };
};

const mapDispatch = (dispatch) => ({
    changePage: (currentPage) => dispatch({ type: CHANGE_PAGE, currentPage: currentPage }),
});

export default connect(mapState, mapDispatch)(Pagination);
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage, decCurrentPage, incCurrentPage } from '../actions/actionCreators';

export default function Pagination({ length }) {

    const { currentPage } = useSelector(state => state.paginationReducer)
    const dispatch = useDispatch()

    const allProducts = length
    const maxProducts = 50
    const countPages = Math.ceil(allProducts / maxProducts)

    const pages = []

    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    const handleclick = (index) => {
        dispatch(changeCurrentPage(index))
    }

    const handleArrowBtn = (e) => {
        e.currentTarget.classList.contains('btn-prev') ? dispatch(decCurrentPage()) : dispatch(incCurrentPage())
    }

    return (
        <Fragment>
            <button onClick={handleArrowBtn} className='btn-prev' disabled={currentPage === 0 || length === 0 ? true : false} >{'<<'}</button>
            {pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => handleclick(index)} className={index === currentPage ? 'active' : ''}>{page}</button>
                )
            })}
            <button onClick={handleArrowBtn} className='btn-next' disabled={(currentPage + 1 === countPages) || length === 0 ? true : false}>{'>>'}</button>
        </Fragment>
    )
}

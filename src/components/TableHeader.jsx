import { useDispatch } from "react-redux"
import { sortedByPrice, sortedBySize, sortedByTitle } from "../actions/actionCreators"

export default function TableHeader() {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        if (e.target.classList.contains('price')) {
            dispatch(sortedByPrice())
        } else if (e.target.classList.contains('size')) {
            dispatch(sortedBySize())
        } else {
            dispatch(sortedByTitle())
        }
    }

    return (
        <tr>
            <th onClick={handleClick} className='title' scope="col">Название</th>
            <th onClick={handleClick} className='size' scope="col">Размер</th>
            <th onClick={handleClick} className='price' scope="col">Стоимость</th>
        </tr>
    )
}
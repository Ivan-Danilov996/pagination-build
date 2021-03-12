import { useDispatch } from "react-redux"
import { filterChange } from "../actions/actionCreators"

export default function Filter({value}) {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(filterChange(e.target.value))
    }
    return (
        <input onChange={handleChange} value={value} placeholder='filter' type="text" />
    )
}
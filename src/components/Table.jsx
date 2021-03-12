import { useSelector } from "react-redux"
import Product from "./Product"
import TableHeader from "./TableHeader"


export default function Table({ filterProducts, value, products }) {
    const { currentPage } = useSelector(state => state.paginationReducer)

    return (
        <table className="table table-bordered">
            <thead>
                <TableHeader/>
            </thead>
            <tbody>
                {value ?
                    filterProducts.slice(currentPage * 50, (currentPage * 50) + 50).map((product, index) => {
                        return (
                            <Product key={product.id} {...product} index={index} />
                        )
                    })
                    :
                    products.slice(currentPage * 50, (currentPage * 50) + 50).map((product, index) => {
                        return (
                            <Product key={product.id} {...product} index={index} />
                        )
                    })}
            </tbody>
        </table>
    )
}
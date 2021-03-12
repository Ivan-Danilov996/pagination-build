export default function Product({index, title, sizes, price}) {
    return (
        <tr>
            <td>{title}</td>
            <td>{sizes[0].size}</td>
            <td>{price} руб.</td>
        </tr>
    )
}
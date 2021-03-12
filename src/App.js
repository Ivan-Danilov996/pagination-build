import './App.css';
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import Table from './components/Table';


function App() {

  const { products } = useSelector(state => state.productsReducer)
  const { value } = useSelector(state => state.filterReducer)

  const filterProducts = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))

  return (
    <Fragment>
      <Filter value={value}/>
      <Table filterProducts={filterProducts} value={value} products={products}/>
      <div className="pagination">
        <Pagination length={value ? filterProducts.length : products.length} />
      </div>
    </Fragment>
  );
}

export default App;

import './App.css';
import HelloWorld from './components/hello-world/hello-world';
import ProductTable from './components/product-table/product-table';

function App() {

  return (
    <>
    <HelloWorld firstname='stefan' lastname='her' gender="Y" />
    <ProductTable />
    </>
  )
}

export default App;

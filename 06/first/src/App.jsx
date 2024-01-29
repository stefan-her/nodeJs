import './App.css';
import HelloWorld from './components/hello-world/hello-world';
import ProductTable from './components/product-table/product-table';
import Counter from './components/counter/counter';
import OrganismInfo from './components/organism-info/organism-info';

function App() {

  return (
    <>
    <HelloWorld firstname='stefan' lastname='her' gender="Y" />
    <ProductTable />
    <Counter />
    {/* <OrganismInfo organismId={10215} /> */}
    </>
  )
}

export default App;

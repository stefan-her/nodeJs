import productData from './product-data.json';


const ProductTableHeader = () => (
    <thead>
        <tr>
            <td>Nom</td>
            <td>Description</td>
            <td>Prix</td>
        </tr>
    </thead>
);

const ProduitTableRow = ({name, desc, price, stock}) => (
    <tr className="">
        <td>{name}</td>
        <td>{desc}</td>
        <td>{price.toLocaleString('be-FR', { style: "currency", currency: "EUR" })} {stock && "dispo"}</td>
    </tr>
);

const ProductTable = () => {
    const productJSX = productData.map(product => 
        <ProduitTableRow {...product} key={product.id} />
    );

    return (
        <table>
            <ProductTableHeader />
            <tbody>
                {productJSX}
            </tbody>
        </table>
    );
}

export default ProductTable;
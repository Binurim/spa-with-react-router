import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, title: 'product1' },
  { id: 2, title: 'product2' },
  { id: 3, title: 'product3' },
  { id: 4, title: 'product4' },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
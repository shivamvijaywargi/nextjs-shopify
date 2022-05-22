import ProductList from '../components/ProductList';
import { getProductInCollection } from '../lib/shopify';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="">
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductInCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}

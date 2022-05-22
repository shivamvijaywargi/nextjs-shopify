import { getAllProducts, getProduct } from '../../lib/shopify';
import ProductPageContent from '../../components/ProductPageContent';

const ProductPage = ({ product }) => {
  return (
    <div>
      <ProductPageContent product={product} />
    </div>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  // const product = products.find((item) => {
  //   const handle = String(item.node.handle);

  //   return handle === params.handle;
  // });

  return {
    props: { product },
  };
}

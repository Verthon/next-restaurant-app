import { product } from "../../../models";

export async function getStaticPaths() {
  const products = await product.findMany();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const currentProduct = await product.findOne({
    where: { id: Number(context.params.id) },
  });
  return {
    props: { product: currentProduct },
  };
}

export default function AdminProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.priceCents}</p>
    </div>
  );
}

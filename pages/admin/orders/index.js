import { checkIfAdmin } from "../../../utils/session";

export async function getServerSideProps(context) {
  await checkIfAdmin(context.req, context.res);
  return {
    props: { products, categories },
  };
}

export default function OrdersPage() {
  return <div>Order page</div>;
}

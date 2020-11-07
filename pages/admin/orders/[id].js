import { useRouter } from "next/router";

import { checkIfAdmin } from "../../../utils/session";

export async function getServerSideProps(context) {
  await checkIfAdmin(context.req, context.res);
}

export default function OrderPage() {
  const router = useRouter();

  return <div>Order with id {router.query.id}</div>;
}

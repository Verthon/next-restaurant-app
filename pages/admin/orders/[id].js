import { useRouter } from "next/router";

export default function OrderPage() {
  const router = useRouter();

  return <div>Order with id {router.query.id}</div>;
}

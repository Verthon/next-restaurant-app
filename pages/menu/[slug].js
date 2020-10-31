import { useRouter } from "next/router";

export default function MenuItem() {
  const router = useRouter();

  return <div>Menu Item {router.query.slug}</div>;
}

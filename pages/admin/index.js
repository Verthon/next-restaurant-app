import Link from "next/link";
import { checkIfAdmin } from "../../utils/session";

export async function getServerSideProps(context) {
  await checkIfAdmin(context.req, context.res)
}

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <Link href="/admin/products">
        <a>Products</a>
      </Link>
      <Link href="/admin/orders">
        <a>Home</a>
      </Link>
    </div>
  );
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getServerSideProps(context) {
  const products = await prisma.product.findMany()
  return {
    props: { products }
  }
}

export default function AdminProductsPage ({ products }) {
  console.log(products)
  return (
    <div>Products page</div>
  )
}
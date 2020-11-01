import { PrismaClient } from "@prisma/client";
import { useState } from "react";
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const products = await prisma.product.findMany();
  const categories = await prisma.category.findMany();
  return {
    props: { products, categories },
  };
}

export default function AdminProductsPage({ products, categories }) {
  const DEFAULT_CATEGORY = categories[0].name;
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: DEFAULT_CATEGORY,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/admin/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        category: form.category,
        price: form.price,
      }),
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>List of available products</h1>
      <h2>Add new product</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.priceCents}</p>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Product name
          <input
            name="name"
            type="text"
            placeholder="Product name"
            onChange={handleChange}
          />
        </label>
        <label>
          Product price in cents
          <input
            name="price"
            type="text"
            placeholder="Product price in cents"
            onChange={handleChange}
          />
        </label>
        <select name="category" onChange={handleChange}>
          {categories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

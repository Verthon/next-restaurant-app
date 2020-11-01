import { getSession } from "next-auth/client";
import { product } from "../../../../models";

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {  
    res.statusCode = 401
    res.json({ error: "Unauthorized" })
  }

  const newProduct = await product.create({
    data: {
      name: req.body.name,
      category: { create: { name: req.body.category } },
      priceCents: Number(req.body.price),
    },
  });
  res.json({ product: newProduct });
};

import { product } from "../../../../models";

export default async (req, res) => {
  const newProduct = await product.create({
    data: {
      name: req.body.name,
      category: {create: {name: req.body.category} },
      priceCents: Number(req.body.price)
    },
  });
  res.json({ product: newProduct });
};

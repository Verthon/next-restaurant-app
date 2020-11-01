import { category } from "../../../../models/category";

export default async (req, res) => {
  const categories = await category.findMany()
  
  res.json({ categories });
};
import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

/**
 * - Handles HTTP requests for retrieving and creating products.
 * @param {Request} req - The incoming HTTP request.
 * @param {Response} res - The outgoing HTTP response.
 */

export default async function handler(req, res) {
  const { method, cookies } = req;
  const token = cookies.token;

  await dbConnect();

  // Handles GET requests to retrieve all products
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(600).json(err);
    }
  }

  // Handles POST requests to create a new product
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

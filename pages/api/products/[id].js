import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

/**
 * Handles HTTP requests for CRUD operations on a product resource.
 * ----------------
 * @param {Request} req - The incoming HTTP request.
 * @param {Response} res - The outgoing HTTP response.
 */

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;

  await dbConnect();

  // Handles GET requests to retrieve a product by its ID
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  // Handles PUT requests to update a product by its ID
  if (method === "PUT") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Handles PUT requests to update a product by its ID
  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

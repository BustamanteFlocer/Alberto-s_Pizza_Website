import dbConnect from "@/util/mongo";
import Order from "@/models/Order";

/*
 * - Handles HTTP requests for retrieving and creating orders.
 * @param {Request} req - The incoming HTTP request.
 * @param {Response} res - The outgoing HTTP response.
 */
const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  // Handles GET requests to retrieve all orders
  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Handles POST requests to create a new order
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;

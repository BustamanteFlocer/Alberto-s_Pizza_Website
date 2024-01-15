import dbConnect from "@/util/mongo";
import Order from "@/models/Order";

/*
 * - Handles HTTP requests for retrieving and creating orders.
 * @param {Request} req - The incoming HTTP request.
 * @param {Response} res - The outgoing HTTP response.
 */
const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  /**
   * Establishes a connection to the MongoDB database
   */
  await dbConnect();

  // Handles GET requests to retrieve an order by its ID
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Handles PUT requests to update an order by its ID
  if (method === "PUT") {
    try {
      // Return the updated order document
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Handles DELETE requests to delete an order by its ID
  if (method === "DELETE") {
    try {
      await Order.findByIdAndDelete(id);
      res.status(200).json("The order has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;

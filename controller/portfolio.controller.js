import prisma from "../utils/prisma.js";

export const saveMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = await prisma.portfolio.create({
        data: {
            name,
            email,
            message
        }
    })

    res.status(201).json({ message: "Message sent successfully" , newMessage});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

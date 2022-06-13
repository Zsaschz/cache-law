import express from "express";
import cors from "cors";
import { prisma } from "./prisma/prisma.js";

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.get("/:npm", async (req, res) => {
  const { npm } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      npm: npm,
    },
  });

  res.send({ status: "OK", npm: user.npm, nama: user.name });
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running"));

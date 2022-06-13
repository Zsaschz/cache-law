import express from "express";
import cors from "cors";
import { prisma } from "./prisma/prisma.js";

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const { npm, nama } = req.body;

  const user = await prisma.user.upsert({
    where: {
      npm: npm,
    },
    update: {
      npm: npm,
      name: nama,
    },
    create: {
      npm: npm,
      name: nama,
    },
  });

  res.send({ status: "OK" });
});

app.listen(process.env.PORT || 5001, () => console.log("Server is running"));

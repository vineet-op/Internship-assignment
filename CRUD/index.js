const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let items = [
  { id: 1, name: "Raju" },
  { id: 2, name: "Sham" },
  { id: 3, name: "Babu Bhaiya" },
];

app.use(bodyParser.json());

app.get("/api/items", (req, res) => {
  return res.json(items);
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  if (!newItem) {
    return res.status(404).json({ message: "Enter valid data" });
  } else {
    items.push(newItem);
    return res.status(200).json({ message: "Entered Succesfully" });
  }
});

app.put("/api/items:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  items = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, ...updatedItem };
    }
    return item;
  });

  return res.json({ message: "Items Updated" });
});

app.delete("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  return res.json({ message: `Item with ID ${itemId} deleted` });
});

app.listen(PORT, () => {
  console.log("Server Started on 3000");
});

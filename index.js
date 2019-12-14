const express = require("express")
const bodyParser = require('body-parser')
const newsRepo = require("./db/news.repo")
const app = express();

app.use(bodyParser.json())
app.get("/news", (req, res) => {

  newsRepo.get().then(data => {
    res.send(data)
  }).catch(() => {
    res.status(500).send()
  })
})

app.post("/news", (req, res) => {

  const { title, body } = req.body;

  newsRepo.create({ title, body }).then(() => {
    res.send({ message: 'Saved' })
  })
    .catch((err) => {
      res.status(500).send(err)
    })
})

app.put("/news/:id", (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  newsRepo.update(id, { title, body }).then(() => {
    res.send({ message: "Saved" });
  }).catch(err => {
    res.status(500).send(err)
  })
})

app.listen(3000)
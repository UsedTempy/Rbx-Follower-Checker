const express = require('express')
const app = express()

app.use(express.json())

app.get("/IsFollowing/:Id", (req, res) => {
  const id = req.params.Id
  const isFollowing = false;

  fetch(`https://friends.roblox.com/v1/users/${id}/followings?limit=10&sortOrder=Asc`)
  .then(res => res.json())
  .then(data => {
    res.status(200).json(data)
  })
})

app.listen(3000, () => console.log(`Server running at https://localhost:${3000}`))
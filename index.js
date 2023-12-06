const express = require('express')
const app = express()

const PORT = 3000;

app.use(express.json())

app.get("/IsFollowing/:id/:id_check", (req, res) => {
  const id = req.params.id
  const id_check = req.params.id_check

  fetch(`https://friends.roblox.com/v1/users/${id}/followings?limit=100&sortOrder=Desc`)
  .then(res => res.json())
  .then(data => {
    const isFollowing = data.data.some(item => item.id == id_check);

    res.status(200).json({
      response: isFollowing
    });
  })
  .catch(error => {
    console.error("Error:", error);
    // Handle the error appropriately
    res.status(500).json({
      error: "Internal Server Error"
    });
  });
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
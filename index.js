const express = require('express')
const app = express()

const PORT = 3000;

app.use(express.json())

app.get("/IsFollowing/:UserId/:InputId", (req, res) => {
  const id = req.params.UserId
  const InputId = req.params.InputId
  var isFollowing = false;

  fetch(`https://friends.roblox.com/v1/users/${id}/followings?limit=100&sortOrder=Desc`)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].id == InputId) {
            isFollowing = true
            break
        }
    }

    res.status(200).json({
      response: isFollowing
    })
  })
  .catch(error => {
    res.status(404).json({response: false})
  })
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
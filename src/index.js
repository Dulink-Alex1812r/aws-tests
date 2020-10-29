const app = require('express')();

app.get('/', (req, res) => {
  res.send('SERVER WORKING!');
});

app.listen(process.env.PORT || 8000, () => {
  console.log("SERVER WORKING!")
});

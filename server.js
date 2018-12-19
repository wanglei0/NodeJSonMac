var express = require('express')

var server = express()

server.use(express.json())

var users = [
    {
        username: 'John'
    }
]

server.get('/users', function(req, res){
    res.json(users)
})

server.get('/', function(req, res){
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>hello</h1>
<script>
    // fetch('/users').then(res=>res.json()).then(body=>body[0].username).then(username=>document.write(username))
</script>
</body>
</html>`)
})

server.post('/users', (req, res) => {
    var user = req.body
    users.push(user)
    res.json(user)
})

//server.listen(3000)

module.exports  = server
var express = require('express')

var server = express()

server.use(express.json())

var users = [
    {
        name: 'John'
    }
]

server.get('/users', function(req, res){
    res.json(users)
})



server.post('/users', (req, res) => {
    var user = req.body
    users.push(user)
    res.json(user)
})

server.put('/users', (req, res) => {
    var user = req.body
    console.log(user)
    users = users.filter(value=>value.name != user.name)
    console.log(users)
    res.json(user)
})

server.delete('/users/:id', (req, res) => {
    var index = req.params.id
    console.log(req.body, 'body')
    console.log(index, 'index')
    users = users.filter((value, i)=>i != index)
    console.log(users)
    res.json(users)
})

// server.put('/user', (req, res) => {
//     var index = req.body
//     console.log(req.body, 'body')
//     console.log(index, 'index')
//     users = users.filter((value, i)=>i != index)
//     console.log(users)
//     res.json(users)
// })

//server.listen(3000)

module.exports  = server
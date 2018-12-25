const React = require('react')
const ReactDOM = require('react-dom')
import axios from 'axios'
import 'babel-polyfill'

// import React from 'react'
// import ReactDOM from 'react-dom'

let user = {}
// let users = [{name:'a'},{name:'b'}]



// function handleChange(e) {
//     user.name = e.target.value
// }



function Users(){
    const [users, setUsers] = React.useState([])
    const  [nameInput, setNameInput] = React.useState([])

    function handleChange(e) {
        setNameInput(e.target.value)
    }

    React.useEffect(async ()=>{
        let response = await axios.get('/users')
        setUsers(response.data)

    }, [])

    async function createUser() {
        let res = await axios.post('/users', user)
        // users.push(res.data)
        // setUsers(users)
        let response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }

    async function deleteUserByIndex(index) {
        console.log('index', index)
        let res = await axios.delete(`/users/${index}`)
        // let res = await axios.put(`/user`, index, {headers:{'Content-Type': 'application/json'}})
        let response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }

    async function deleteUserByName() {
        let res = await axios.put('/users', user)
        let response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }

    return(
        <div>
            <ul id = "items" >{users.map(
                function (user, index) {
                    return <li className = "item">
                        {user.name}
                        <button id={index} onClick={()=>deleteUserByIndex(index)}>delete</button>
                    </li>
                }
            )}
            </ul>
            <input id='username' type="text" onChange={handleChange}/>
            <button onClick={createUser}>++</button>
            <button onClick={deleteUserByName}>--</button>
        </div>)
}

ReactDOM.render(<Users />, document.getElementById('root'))




let axiosist = require('axiosist')
const server = require('./server')


function sum(a,b)
{
    return a+b
}

test('should return sum', ()=>{
    expect(sum(1,1)).toBe(2)

})

test('should return username', async ()=>{
    let response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data).toEqual([{"username": "John"}])

    response = await axiosist(server).post('/users', {username: 'Jane'})
    expect(response.status).toBe(200)

    response = await axiosist(server).get('/users')
    expect(response.data).toEqual([{"username": "John"}, {"username": "Jane"}])

})
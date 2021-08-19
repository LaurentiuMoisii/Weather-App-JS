const todos = [
    {text: 'play wot', author: 'copuck'},
    {text: 'earn btc', author: 'copuck'},
    {text: 'eat', author: 'copuck'}
]

console.log(JSON.stringify(todos))
localStorage.setItem('todos', JSON.stringify(todos))


const stored = localStorage.getItem('todos')

console.log(JSON.parse(stored))
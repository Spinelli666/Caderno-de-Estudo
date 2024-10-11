// 28 - JSON para objeto e objeto para JSON

const myJson = 
    '{"name": "John", "age": 31, "skills": ["HTML", "CSS", "JS"]}'

const myObject =  JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

// json invalido

const badJson = '{"name": "John", "age": 31}'

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
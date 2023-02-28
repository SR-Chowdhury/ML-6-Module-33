/**
 * 33-2 Intro to JSON, JSON Structure, parse, stringify
 */

const obj1 = {
    id: 1, 
    name: 'Shakib'
}

const jsonObj1 = JSON.stringify(obj1);

console.log(obj1); //{ id: 1, name: 'Shakib' }
console.log(jsonObj1); //{"id":1,"name":"Shakib"}

/**
 * It means convert JSON.stringify(obj) convert obj to string
 */

const objJson = JSON.parse(jsonObj1);
console.log(objJson); //{ id: 1, name: 'Shakib' }

/**
 * Its back to previous stage; JSON.parse(jsonObj) convert string to object
 */

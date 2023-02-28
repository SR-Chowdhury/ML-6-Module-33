/**
 * 33-3 JSON placeholder, GET data, display data on UI
 */

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function func() {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayData(data))
}


function displayData(data) {
    const olList = document.getElementById('ol-list');
    olList.classList.add('ol-padding');
    for (const element of data) {
        const li = document.createElement('li');
        li.innerHTML = `Name : ${element.name}`;
        olList.appendChild(li);
    }     
}
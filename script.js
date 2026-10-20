(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
  })

  cw2.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const table = document.createElement('table')
        table.className = 'posts'
        posts.slice(0, 10).forEach(post => {
          const row = table.insertRow()
          const cell = row.insertCell()
          cell.className = 'post'
          const title = document.createElement('h3')
          title.textContent = post.title
          const body = document.createElement('p')
          body.textContent = post.body
          cell.append(title, body)
        })
        answer.innerHTML = ''
        answer.appendChild(table)
      })
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();

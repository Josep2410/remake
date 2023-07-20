

const trashcan = document.querySelector('.delete')
const likeBtn = document.querySelector('.likeBtn')
const likeButton = document.querySelector('#likeBtn')

trashcan.addEventListener('click', (e) => {
  const endpoint = `/profiles/${trashcan.dataset.doc}`
  fetch(endpoint, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err))
})

likeBtn.addEventListener('click', (e) => {

  const endpoint = `/profiles/${likeBtn.dataset.doc}`
  fetch(endpoint, { method: 'PUT' })
    .then(res => res.json())
    .then(data => console.log("Updated"))
    .catch(err => console.log(err))
})

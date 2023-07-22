


const likeBtn = document.querySelector('.likeBtn')

likeBtn.addEventListener('click', (e) => {
  changeBtnText(likeBtn)
  const endpoint = `/profiles/${likeBtn.dataset.doc}`
  fetch(endpoint, { method: 'PUT' })
    .then(res => res.json())
    .then(data => console.log("Updated"))
    .catch(err => console.log(err))
})


function changeBtnText(btn) {
  if (btn.textContent === 'Like') {
    btn.textContent = 'Unlike'
  } else {
    btn.textContent = 'Like'
  }
}

const tema = document.getElementById('tema')

tema.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
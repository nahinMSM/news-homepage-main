document.querySelector('.menu-mobile').addEventListener("click", () => {
  const openMenuImage = document.querySelector('.openMenu')
  const closeMenuImage = document.querySelector('.closeMenu')

  document.querySelector('.menu-lateral').classList.toggle('show')

  if (openMenuImage.style.display !== 'none') {
    openMenuImage.style.display = 'none'
    closeMenuImage.style.display = 'block'

    document.querySelector('.menu-lateral').innerHTML =
      `<ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>`

  } else {
    openMenuImage.style.display = 'block'
    closeMenuImage.style.display = 'none'

    document.querySelector('.menu-lateral').innerHTML = ``
  }
})

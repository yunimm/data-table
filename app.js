const input = document.getElementById('action__input_1')

const toggleMenu = e => {
  const menu = document.getElementById('action__menu_1')
  menu.classList.toggle('hidden')
}

input.addEventListener('click', toggleMenu)

// ------------------ dark mode-----------------------

const darkModeToggle = document.getElementById('dark__mode__toggle')

const darkModeToggleHandler = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

darkModeToggle.addEventListener('change', darkModeToggleHandler)

// --------------- markup effect-------------------
const checkBox = document.querySelectorAll('input[type="checkbox"]')
const select = document.querySelector('.checkall')
const allRow = document.querySelectorAll('.table__row')

function selectRow () {
  for (let i = 2; i < checkBox.length; i++) {
    checkBox[i].onclick = function () {
      if (checkBox[i].checked) {
        this.parentElement.parentElement.classList.add('table__row--markup')
      } else {
        this.parentElement.parentElement.classList.remove('table__row--markup')
      }
    }
  }
}

function SelectAll () {
  for (let i = 1; i < checkBox.length; i++) {
    checkBox[i].checked = select.checked
    for (let j = 0; j < allRow.length; j++) {
      if (select.checked) {
        allRow[j].classList.add('table__row--markup')
      } else {
      allRow[j].classList.remove('table__row--markup')
      }
    }
  }
}

select.addEventListener('click', SelectAll)
selectRow()

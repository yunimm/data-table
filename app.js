// target the input element
const input = document.getElementById('action__input_1')
// click handler
const toggleMenu = e => {
  // target the menu element
  const menu = document.getElementById('action__menu_1')
  menu.classList.toggle('hidden')
}
// bind the event
input.addEventListener('click', toggleMenu)

// ------------------ dark mode-----------------------
// target the switch element
const darkModeToggle = document.getElementById('dark__mode__toggle')
// toggle handler
const darkModeToggleHandler = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

// bind the event
darkModeToggle.addEventListener('change', darkModeToggleHandler)

// --------------- markup effect-------------------
// 設立選取範圍
const BOX = document.querySelectorAll('input[type="checkbox"]')
const select = document.querySelector('.checkall')
const allRow = document.querySelectorAll('.table__row')

function selectRow () {
  for (let i = 2; i < BOX.length; i++) {
    BOX[i].onclick = function () {
      if (BOX[i].checked) {
        this.parentElement.parentElement.classList.add('table__row--markup')
      } else {
        this.parentElement.parentElement.classList.remove('table__row--markup')
      }
    }
  }
}

function SelectAll () {
  if (select.checked == true) {
    for (let i = 1; i < BOX.length; i++) {
      BOX[i].checked = true
      for (let j = 0; j < allRow.length; j++) {
        allRow[j].classList.add('table__row--markup')
      }
    }
  } else if (select.checked == false) {
    for (let i = 1; i < BOX.length; i++) {
      BOX[i].checked = false
      for (let j = 0; j < allRow.length; j++) {
        allRow[j].classList.remove('table__row--markup')
      }
    }
  }
}

select.addEventListener('click', SelectAll)
selectRow()

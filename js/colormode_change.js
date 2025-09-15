(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  const updateButton = (theme) => {
    const btn = document.querySelector('#theme-toggle')
    if (theme === 'light') {
      btn.textContent = '🌞'
    } else {
      btn.textContent = '🌙'
      btn
    }
  }

  // induláskor téma beállítás
  let currentTheme = getPreferredTheme()
  setTheme(currentTheme)

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#theme-toggle')
    updateButton(currentTheme)

    btn.addEventListener('click', () => {
      currentTheme = (currentTheme === 'light') ? 'dark' : 'light'
      setStoredTheme(currentTheme)
      setTheme(currentTheme)
      updateButton(currentTheme)
    })
  })
})()

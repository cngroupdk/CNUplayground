let interval
  const timeToPlay = '30.0'
  const scoreBoard = document.querySelector('.score span')
  const timer = document.querySelector('.timeValue')
  const game = document.querySelector('.game')
  const holes = document.querySelectorAll('.hole > img')
  const moles = document.querySelectorAll('.mole > img')
  const gameOver = document.querySelector('.gameOver')
  const startButton = document.querySelector('button')

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const getScore = () => parseInt(scoreBoard.innerText)
  const increaseScore = () => scoreBoard.innerText = getScore() + 1
  const setVisibleStyle = (el, visible) => el.style.visibility = visible ? 'visible' : 'hidden'
  const setText = (element, text) => element.innerText = text
  setText(timer, timeToPlay)

  const setDefaults = () => {
    clearInterval(interval)
    setText(scoreBoard, 0)
    game.style.pointerEvents = 'all'
    setVisibleStyle(gameOver, false)
    moles.forEach(a => setVisibleStyle(a, false))
    setText(timer, timeToPlay)
    setText(startButton, 'Start again!')
    interval = startCountdown()
  }

  const endGame = () => {
    const text = 'Game over! You have made ' + getScore() + ' points!'
    setText(gameOver, text)
    setVisibleStyle(gameOver, true)
    game.style.pointerEvents = 'none'
    clearInterval(interval)
  }

  const startCountdown = () => {
    return setInterval(() => {
      if(parseFloat(timer.innerText) !== 0.0) {
        const val = parseFloat(parseFloat(timer.innerText).toFixed(1) - 0.1).toFixed(1)
        setText(timer, val)
      } else {
        endGame()               
      }
    }, 100)
  }
  
  const startGame = () => { 
    setDefaults()
    showMoles(randomNumber(0,5))
  }

  const getMoles = (amount, passIndex) => {
    const molesToKill = []
    const getMoleIndex = () => randomNumber(0, 5)
    while(molesToKill.length === 0) {
      for (let index = 0; index < amount; index++) {
        const currentIndex = getMoleIndex()
        if(currentIndex !== passIndex) {
          molesToKill.push(currentIndex)
        }
      }      
    }
    return molesToKill
  }

  const showMoles = (passIndex) => {
    const molesToKill = getMoles(randomNumber(1,4), passIndex)
    molesToKill.forEach(a => setVisibleStyle(moles[a], true))
  }

  moles.forEach((a, index) => {
    a.addEventListener('click', () => {
      setVisibleStyle(a, false)
      increaseScore()
      showMoles(index)
    })
  })
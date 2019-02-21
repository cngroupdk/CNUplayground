/* [CW - www.codewars.com](www.codewars.com) The kata training */

//* [CW 01 - Love vs friendship](https://www.codewars.com/kata/love-vs-friendship/train/javascript)
const wordsToMarks = (string) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const values = {}
  let result = 0
  letters.forEach(letter => values[letter] = parseInt(letters.indexOf(letter) + 1))
  string.split('').forEach(stringLetter => result += values[stringLetter])
  return result
}

//* [CW 02 - Animal years](https://www.codewars.com/kata/cat-years-dog-years)
const humanYearsCatYearsDogYears = (humanYears) => {
  const animalFirstYear = 15
  const nextYears = (isCat) => {
    if(humanYears === 1) {
      return 0
    } else {
      return 9 + ((isCat ? 4 : 5) * (humanYears - 2))
    }
  }
  return [ humanYears, animalFirstYear + nextYears(true), animalFirstYear + nextYears(false) ]
}

//* [CW 03 - Lost without map](https://www.codewars.com/kata/beginner-lost-without-a-map)
const maps = (x) => x.map(el => el * 2)

//* [CW 04 - Multiple of index](https://www.codewars.com/kata/multiple-of-index)
const multipleOfIndex = (array) => {
  const arr = []
  return array.map((el, index) => {
    if(Number.isInteger(el / index)) {
      return el
    }
  })
  return arr
}

//* [CW 05 - Reduce but grow](http://www.codewars.com/kata/beginner-reduce-but-grow)
const grow = (x) => {
  let result = 0
  x.forEach(e => {
     result = result === 0 ? e : result * e
  })
  return result
}

//* [CW 06 - Abbreviating a name](http://www.codewars.com/kata/abbreviate-a-two-word-name)
const abbrevName = (name) => {
  const a = name.split(' ')
  return (a[0][0] + '.' + a[1][0]).toUpperCase()
}

//* [CW 07 - No loops](http://www.codewars.com/kata/no-loops-2-you-only-need-one)
const check = (a,x) => {
  let res = false
  a.map(e => {
    if(!res) {
      res = e === x ? true : false
    }
  })
  return res
}
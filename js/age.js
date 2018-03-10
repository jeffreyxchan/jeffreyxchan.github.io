let birthDate = new Date('Jan 16, 1997').getTime()

let x = setInterval(() => {
  let now = new Date().getTime()
  let distance = now - birthDate

  let years = Math.floor(Math.floor(distance / (1000 * 60 * 60 * 24)) / 365)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) % 365
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  if (minutes < 10) minutes = '0' + minutes
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  if (seconds < 10) seconds = '0' + seconds

  let ageText = years + ' Years ' + days + ' Days ' + hours + ':' + minutes + ':' + seconds
  document.getElementById('age').innerHTML = ageText
}, 1000)

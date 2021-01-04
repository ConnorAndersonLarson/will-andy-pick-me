var answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now. ',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
]

var randomAnswer = ''

var input = document.querySelector('#question');
var answer = document.querySelector('.answer');
var clear = document.querySelector('.clear')
var img = document.querySelector('.output')

answer.addEventListener('click', getAnswer)
clear.addEventListener('click', changePage)

function getAnswer() {
  randomAnswer = answers[Math.floor(Math.random()*Math.floor(answers.length))]
  changePage(randomAnswer)

}

function changePage(randString) {
  if (randString === randomAnswer) {
    img.innerHTML=`
                <section class="mirror">
                </section>
                <section class="response">
                </section>
              `
  } else {
    img.innerHTML=`<img class="ball" src="./assets/eight-ball.png">`
  }
}

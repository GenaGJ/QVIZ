const btnAnswer = document.querySelector('.btnAnswer')
const inputAnswer = document.querySelector('.inputAnswer')
const correctAnswer = document.querySelector('.answerValue')
const trueAnswerElem = document.querySelector('.trueAnswer')
const falseAnswerElem = document.querySelector('.falseAnswer')

let score = 0

btnAnswer.addEventListener('click', () => {
    if(inputAnswer.value.toLowerCase() === correctAnswer.textContent.toLowerCase()){
        trueAnswerElem.style.display = 'block'
        score += 100
    }
    else falseAnswerElem.style.display = 'block'
})

module.exports = score
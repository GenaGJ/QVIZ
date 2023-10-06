const btnAnswer = document.querySelector('.btnAnswer')
const inputAnswer = document.querySelector('.inputAnswer')
const correctAnswer = document.querySelector('.answerValue')
const trueAnswerElem = document.querySelector('.trueAnswer')
const falseAnswerElem = document.querySelector('.falseAnswer')
const scoreElem = document.querySelector('.score')
const answerForm = document.querySelector('.answerForm')
let score = 0

if(answerForm){
    answerForm.addEventListener('submit', async (e) => {
        console.log('--------');
        e.preventDefault()
        const {answer, method, action} = e.target
        const res = await fetch(action, {
            method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                answer: answer.value,
                id: e.target.dataset.id
            })
        })
        const data = await res.json()
        if(data.message === 'success'){
            trueAnswerElem.style.display = 'block'
        }
        else falseAnswerElem.style.display = 'block'
    })
}


// if(inputAnswer.value.toLowerCase() === correctAnswer.textContent.toLowerCase()){
//     trueAnswerElem.style.display = 'block'
//     score += 100
//     console.log(score);
//     scoreElem.textContent = score
// }
// else falseAnswerElem.style.display = 'block'
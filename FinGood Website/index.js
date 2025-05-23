var questions = document.querySelectorAll('.question')


questions.forEach(function (question) {
    question.addEventListener('click', function(){
        question.classList.toggle('active')
    })
})

//function nome (argumento) {
// content
//}
/*
what you need:
page 1:
header, that says 'welcome to the test'
and a start button

page 2: when the start button is pressed, refill the header with the question text, and generate buttons with the answers
when you hit submit, go to the next set of questions

when the timer hits 0, or you're done, then show an input bar that says 'what's your name', and send high score and name to localstorage to save for the future

*/

var questionArray = [{question:"what is css?",choices:["stylesheet","lunch","some game my kids play"], answer:0},{question:"what is Java script?",choices:["An ice cream flavor","a coding language","a coding propery","a coding value"], answer:0},{question:"HTML stands for?", choices:["Hypertext Markup Language", "Hypertext Makeup Language","Hypertext Madeup Language","Hypertext Macthing Language"], answer:0},{question:"What is the last step to launch an App onlie?", choices:["git pull", "git commit","git push","git add"], answer:0}]

var position= -1

var time = 60

document.addEventListener("click",function(event){
    console.log(position)
        nextQuestion(); 
    })



function nextQuestion(){
    position++
    document.querySelector("#question_header").innerText = "<h4>"+questionArray[position].question+"</h4>"

}

function timer (){
 time--60
 if(time--0){
     stopInterval(){}
     stopQuiz(){
         console.log("you need to code out how to stop the quiz")
     }
 }
}

startInterval(/*always two paramaters*/ timer,1000)

stopInterval(timer, 1000)


// questionArray[position]
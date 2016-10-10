
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  // console.log(answerPTagWithValue.innerHTML)
  var currntNumb = answerPTagWithValue.innerHTML
  var currntNumb = parseInt(currntNumb)
  //console.log(currntNumb)

  answerPTagWithValue.innerHTML = currntNumb * 2

})

var counterNumb = 0
document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var chngColorCirl = document.querySelector( '#circle-bw' )
  counterNumb += 1

  // console.log(counterNumb)

  if (counterNumb % 2 === 0){
     chngColorCirl.style.backgroundColor = 'white';
 } else {
    chngColorCirl.style.backgroundColor = 'black';
}


})
var sizeCheck = false
var redCirWH = 40;
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  var redGrwCirl = document.querySelector( '.circle-red');
  // console.log(redGrwCirl.offsetWidth);


  console.log(redCirWH)
  if ( sizeCheck === true){
    redCirWH = redCirWH / 2
   if (redCirWH === 40){
      sizeCheck = false
      }
   } else {
   redCirWH = redCirWH * 2
   if (redCirWH >= 320){
      sizeCheck = true
   }
}
redGrwCirl.style.width = redCirWH + 'px'
redGrwCirl.style.height = redCirWH + 'px'
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var usrListHldr = document.querySelector('#user-list')
  var inactiveUsr = document.querySelectorAll('#user-list .inactive')
  console.log(usrListHldr)
   for (var i = 0; i < inactiveUsr.length; i++){
      usrListHldr.removeChild(inactiveUsr[i])

   }



})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var boxHoldr = document.querySelector('#reverse-squares .answer-box')
  var boxLstHldr = document.querySelectorAll('#reverse-squares span')

  console.log(boxLstHldr[0])


  for (var i = boxLstHldr.length -1; i >= 0; i--){
     boxHoldr.removeChild(boxLstHldr[i])
     boxHoldr.appendChild(boxLstHldr[i])

 }






})

document.querySelector("#pig-latin button").addEventListener('click',function(){

   var taskLstHldr = document.querySelectorAll('#tasks li')
   console.log(taskLstHldr[1].innerHTML)

   for (var i = 0; i < taskLstHldr.length; i++){
      var currtentTsk = taskLstHldr[i].innerHTML
      var newStrg = ''
      for (var j = currtentTsk.length -1; j >= 0; j = j -1){
         console.log(currtentTsk[j])
         newStrg = newStrg + currtentTsk[j]
      }
      taskLstHldr[i].innerHTML = newStrg
   }





})
var countrHldr = 1
document.querySelector("#cycle-image button").addEventListener('click',function(){
   var imgColctr = document.querySelector('#city-img')
   var imgSorc = ''
   console.log(imgSorc)


   if (countrHldr === 10){
      countrHldr = 1

   } else {
      countrHldr += 1


   }

   imgSorc = 'images/city-photo-' + countrHldr + '.jpg'



   document.getElementById('city-img').src = imgSorc;
   console.log(imgSorc)
   console.log(countrHldr)
})

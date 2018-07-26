
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var reply = document.querySelector('#inject-html .answer-box')
  reply.innerHTML = "<h2>Here is some text for you!!</h2>"
})



document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var value = document.querySelector('#compoundInvestment')
  // you do the rest
  var result = parseInt(value.innerText);
  var reply = result *= 2;
  if (reply<= 268435456){
    document.querySelector('#compoundInvestment').textContent = reply;
  }
});

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('#blow-up .answer-box .circle-red');
  var maxHeight = circle.offsetHeight *= 2;
  var maxWidth = circle.offsetWidth *= 2;

  if(maxHeight <= 320 && maxWidth <= 320){
    document.querySelector('#blow-up .answer-box .circle-red').style.height = maxHeight + "px";
    document.querySelector('#blow-up .answer-box .circle-red').style.width = maxWidth + "px";
  } else {
    maxHeight = 40;
    maxWidth = 40;
    document.querySelector('#blow-up .answer-box .circle-red').style.height = maxHeight + "px";
    document.querySelector('#blow-up .answer-box .circle-red').style.width = maxWidth + "px";
  }
});

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
  var userList = document.querySelectorAll('#user-list li');
  var fullList = document.querySelector('#user-list');
  var array = [...userList];
  array.forEach(function(list){
    if(list.className === 'inactive'){
      fullList.removeChild(list);
    }
  });
});


document.querySelector('#reverse-squares button').addEventListener('click',function(){
  // TASK #5
  var list = document.querySelectorAll('#squares-box span')
  var listMax = document.querySelector('#squares-box')
  var arrayList2 = [...list];
  var arrayReverse = arrayList2.reverse()
  arrayReverse.forEach(function(listElement){
    listMax.appendChild(listElement)
  });
});

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
var backwards = document.querySelectorAll('#tasks li');
console.log(backwards)
backwards.forEach(function(backwards){
// console.log(backwards.textContent);
var content = backwards.textContent;
console.log(content);
var backwardsText = content.split('').reverse().join('');
console.log(backwardsText);
backwards.textContent = backwardsText;
  });
});


document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
   // console.log(x);
   var photo = document.querySelector('#city-img');
   var anotherPhoto = photo.src; 
   var result = anotherPhoto[anotherPhoto.length-5];
   var x = result*1;
   x++;
   photo.setAttribute('src', './images/city-photo-' + x + '.jpg')
});



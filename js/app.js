// VARIABLES
var boxText = document.getElementById("boxText");
var wordCount = document.getElementById("wordCount");
var button = document.getElementById("nt-submit");
var printTweet = document.getElementById('printTweet');
var tweetTime = document.getElementById('tweet-time');
var textarea = document.querySelector('textarea');


boxText.addEventListener("keyup",function(){
    var characters = boxText.value.split('',140);
  wordCount.innerText = characters.length;
});

boxText.addEventListener("keyup", counter);

//EVENTOS
tweetTime.addEventListener('click',addTweet);
button.addEventListener('click', addTweet);
textarea.addEventListener('keydown', autosize);


//FUNCIONES 

function counter() {
     var characters = boxText.value.split('');
     console.log(characters.length);
     wordCount.innerText = 140 - (characters.length);
    if (characters.length >= 121 && characters.length < 130) {
        wordCount.style.color = 'yellow';
    } else if (characters.length >= 131 && characters.length < 140) {
        wordCount.style.color = 'red';
    } else if (characters.length < 120) {
        wordCount.style.color = 'black';
    }
    if (characters.length > 0) {
        button.removeAttribute('disabled')
        button.style.backgroundColor = 'blue';
    }
    if (boxText.value == '' || boxText.value[0] == "\n" || characters.length > 140) {
        button.setAttribute('disabled', 'true');
        button.style.backgroundColor = 'grey';
    }
}



function gettingTime() {
 	var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var meridian = '';
    if (minutes < 10) {
        minutes = (String(0) + String(minutes));
    }
    if (hours >= 13) {
        hours = hours - 12;
        meridian = 'PM';
    } else {
        meridian = 'AM';
    }
    return hours + ':' + minutes + ' ' + meridian;
}



function addTweet(event) {
    event.preventDefault();

      var container = document.createElement('div');
      var message = document.createElement('p');
      var time = document.createElement('p');
      var author = document.createElement('p');
      var author = document.createTextNode('Bill Shakespeare');
      var account = document.createElement('p');
      var account = document.createTextNode('@2bOrNot2b');
      var profilePicture = document.createElement('button');

      message.innerText = boxText.value; //agregando atributos
        time.textContent = gettingTime();

      // agregar los elementos a los elementos existentes
      container.appendChild(author);
      container.appendChild(account);
      container.appendChild(message);
      container.appendChild(time);
      printTweet.appendChild(container);

   boxText.value = ' ';  // Para dejar vacio el textarea despues de dar submit
     wordCount.textContent=140;                    

}






function autosize(){ //ajusta el tamaño del textarea.
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


const loginbtn = document.querySelector('#login-btn');
const usernameform = document.querySelector('#username');
const logindiv = document.querySelector('.login');

const textarea = document.querySelector('.text-area');
const profilearea = document.querySelector('.profile-area');

function typeText(target, message, interval, index=0) {
  if(index < message.length) {
    target.innerHTML += message[index++];
    setTimeout(function() {typeText(target, message, interval, index)}, interval);
  }
}

const holding = document.querySelector('.holding');

loginbtn.addEventListener('click', function() {
  logindiv.style.display = 'none';
  textarea.style.display = 'block';
  profilearea.style.display = 'block';
  typeText(holding, "Hi, I'm BioChat! I'm an AI powered chat bot here to help you with any medical concerns you may have.", 10)
});

const name = document.querySelector("#name");

function createCheckBox(parent, text) {
  parent.appendChild(document.createElement('br'));
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  parent.appendChild(checkbox);
  checkbox.name = text;
  let label = document.createElement('label');
  label.htmlFor = text;
  label.innerHTML = text;
  parent.appendChild(label);
}

function firstresponse() {
  let response = document.createElement('div');
  textarea.appendChild(response);
  response.setAttribute('class', 'airesponse');
  let speed = 10;
  let wholetext = "Considering your family history and age, this is most likely no cause for concern. You haven't had a vision checkup for awhile, and headaches often stem from a need for glasses. Are you experiencing any of the following?";
  typeText(response, wholetext, speed);
  let timer1 =  speed * wholetext.length;
  setTimeout(function() {createCheckBox(textarea, "Dull squeezing pain on both sides of the head")}, timer1);
  setTimeout(function() {createCheckBox(textarea, "Shoulder and kneck aches")}, timer1 + 200);
  setTimeout(function() {createCheckBox(textarea, "Fatigue, emotional stress")}, timer1 + 400);
  setTimeout(function() {createCheckBox(textarea, "Jaw muscle, or joint pain")}, timer1 + 600);

  setTimeout(function() {secondresponse()}, timer1 + 800);
}

function secondresponse() {
  textarea.appendChild(document.createElement('br'));
  let response = document.createElement('button');
  response.innerHTML = 'Submit';
  textarea.appendChild(response);

  let wholetext = "Do you often experience a severe headache after any of the following?";
  response = document.createElement('div');
  let speed = 10;
  //textarea.appendChild(document.createElement('br'));
  textarea.appendChild(response);
  response.setAttribute('class', 'airesponse');
  let timer1 = speed * wholetext.length;
  typeText(response, wholetext, speed);
  setTimeout(function() {createCheckBox(textarea, "Change in weather: humidity or heat")}, timer1 + 200);
  setTimeout(function() {createCheckBox(textarea, "Lack of sleep or oversleeping")}, timer1 + 400);
  setTimeout(function() {createCheckBox(textarea, "Fatigue")}, timer1 + 600);
  setTimeout(function() {createCheckBox(textarea, "Emotional Stress")}, timer1 + 800);
  setTimeout(function() {createCheckBox(textarea, "Bright or flickering lights, loud noises, strong smells")}, timer1 + 1000);
  setTimeout(function() {createCheckBox(textarea, "Missing a meal or consuming alcohol, chocolate, aged cheese, increase or descrease in caffeine")}, timer1 + 1200);
  setTimeout(function() {createCheckBox(textarea, "Sinuses")}, timer1 + 1400);

  setTimeout(function() {thirdresponse()}, timer1 + 1600);
}

function thirdresponse() {
  textarea.appendChild(document.createElement('br'));
  let response = document.createElement('button');
  response.innerHTML = 'Submit';
  response.addEventListener('click', function() {
    let response = document.createElement('div');
    let speed = 10;
    textarea.appendChild(response);
    response.setAttribute('class', 'airesponse');
    let wholetext = "Based on what you selected, it is most likely you are experiecing migraines, which are more common in women than men. The best treatment is to avoid the triggers you selected. If you experience blurry vision and intense pain, you should also look into getting over the counter or prescription migraine medicine.";
    typeText(response, wholetext, speed);
  });
  textarea.appendChild(response);

  let wholetext = "If you feel a sharp severe pain in one area, this is probably a cluster headache and can last for months. There are many treatment options.";
  response = document.createElement('div');
  let speed = 10;
  textarea.appendChild(response);
  response.setAttribute('class', 'airesponse');
  typeText(response, wholetext, speed);
}

document.onkeypress = function(e) {
  e = e || window.event;

  if(e.keyCode == 13) {
    firstresponse();
  }

  console.log(e.keyCode);
}

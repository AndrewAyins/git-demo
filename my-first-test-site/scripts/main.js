var myHeading = document.querySelector("h1"); // Значение переменной для Абзаца h1
myHeading.textContent = "Привет Мир!"; // Вывод текста приветствия для переменной myHeading



var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/321.png") {
    myImage.setAttribute("src", "images/231.png");
  } else {
    myImage.setAttribute("src", "images/321.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Пожайлуста укажите свое имя:");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Тестовая страница классная, " + myName;
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Тестовая страница классная, " + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };

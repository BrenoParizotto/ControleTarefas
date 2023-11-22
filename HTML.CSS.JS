<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Documento de Tarefas</title>

<style>
body {
  margin: 0;
  min-width: 250px;
}

* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


ul li:nth-child(odd) {
  background: #aaa9a9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #c0bfbf;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #00ff0d;
  text-decoration: line-through;
  color: #000000;
  text-decoration: double;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #030303;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #56a6b4;
  padding: 20px 20px;
  color: white;
  text-align: center;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
</head>
<body>

<div id="myDIV" class="header">
  <h2 class="Mylist" style="margin:5px">Minha lista de tarefas</h2>
  <input type="text" id="myInput" placeholder="Digite a tarefa...">
  <span onclick="newElement()" class="addBtn">Adicionar</span>
</div>

<ul id="myUL">
  
</ul>

<script>

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function newElement() {

  var currentDate = new Date();

var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes;

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; 
var year = currentDate.getFullYear();


var dayString = (day < 10 ? '0' : '') + day;
var monthString = (month < 10 ? '0' : '') + month;


var daymonth = dayString + '/' + monthString + '/' + year;





  var li = document.createElement("li");

  var inputValue = (document.getElementById("myInput")).value.toUpperCase();

  // Criar um nó de texto com o valor do input e o horário
  var t = document.createTextNode("TAREFA CRIADA: "+ inputValue + " ----------------------------------------------------------------------- ÁS " + formattedTime + ". NA DATA DE: " + daymonth);

  // Adicionar o nó de texto ao elemento da lista
  li.appendChild(t);

  // Verificar se o valor do input está vazio
  if (inputValue === '') {
    window.alert("Você precisa informar algo.");
  } else {
    // Adicionar o elemento da lista à lista UL
    document.getElementById("myUL").appendChild(li);
  }

  // Limpar o valor do input
  document.getElementById("myInput").value = "";

  // Criar um botão de fechar (X) para cada item da lista
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Adicionar a funcionalidade de fechar para cada botão de fechar
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

</script>

</body>
</html>

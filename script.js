var category = "";

var container = document.createElement('div');
container.setAttribute('class', 'container');

var body = document.getElementsByTagName('body');
body[0].appendChild(container);

var heading = document.createElement('h1');
heading.textContent = "New York Times Sections";
container.appendChild(heading);

var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('class','form-control');
input.setAttribute('id','mainInput');
input.setAttribute('onkeyup', 'searchFunction()');
input.setAttribute('placeholder','Search for the section in which you would like to explore...');
container.appendChild(input);

var ulist = document.createElement('ul');
ulist.setAttribute('class', 'list-group');
ulist.setAttribute('id', 'myList');
container.appendChild(ulist);

var list1 = document.createElement('li');
list1.setAttribute('class', 'list-group-item');
var a1 = document.createElement('a');
a1.setAttribute('href','main.html')
a1.textContent = 'arts';
list1.appendChild(a1);
list1.addEventListener('click',() => {
  sessionStorage.setItem("category", list1.textContent);
})
ulist.appendChild(list1);

var list2 = document.createElement('li');
list2.setAttribute('class', 'list-group-item');
var a2 = document.createElement('a');
a2.setAttribute('href','main.html')
a2.textContent = 'automobiles';
list2.appendChild(a2);
list2.addEventListener('click',() => {
  sessionStorage.setItem("category", list2.textContent);
});
ulist.appendChild(list2);

var list3 = document.createElement('li');
list3.setAttribute('class', 'list-group-item');
var a3 = document.createElement('a');
a3.setAttribute('href','main.html')
a3.textContent = 'books';
list3.appendChild(a3);
list3.addEventListener('click',() => {
  sessionStorage.setItem("category", list3.textContent);
});
ulist.appendChild(list3);

var list4 = document.createElement('li');
list4.setAttribute('class', 'list-group-item');
var a4 = document.createElement('a');
a4.setAttribute('href','main.html')
a4.textContent = 'business';
list4.appendChild(a4);
list4.addEventListener('click',() => {
  sessionStorage.setItem("category", list4.textContent);
});
ulist.appendChild(list4);

var list5 = document.createElement('li');
list5.setAttribute('class', 'list-group-item');
var a5 = document.createElement('a');
a5.setAttribute('href','main.html')
a5.textContent = 'fashion';
list5.appendChild(a5);
list5.addEventListener('click',() => {
  sessionStorage.setItem("category", list5.textContent);
});
ulist.appendChild(list5);

var list6 = document.createElement('li');
list6.setAttribute('class', 'list-group-item');
var a6 = document.createElement('a');
a6.setAttribute('href','main.html')
a6.textContent = 'food';
list6.appendChild(a6);
list6.addEventListener('click',() => {
  sessionStorage.setItem("category", list6.textContent);
});
ulist.appendChild(list6);

var list7 = document.createElement('li');
list7.setAttribute('class', 'list-group-item');
var a7 = document.createElement('a');
a7.setAttribute('href','main.html')
a7.textContent = 'health';
list7.appendChild(a7);
list7.addEventListener('click',() => {
  sessionStorage.setItem("category", list7.textContent);
});
ulist.appendChild(list7);

var list8 = document.createElement('li');
list8.setAttribute('class', 'list-group-item');
var a8 = document.createElement('a');
a8.setAttribute('href','main.html')
a8.textContent = 'home';
list8.appendChild(a8);
list8.addEventListener('click',() => {
  sessionStorage.setItem("category", list8.textContent);
});
ulist.appendChild(list8);

var list9 = document.createElement('li');
list9.setAttribute('class', 'list-group-item');
var a9 = document.createElement('a');
a9.setAttribute('href','main.html')
a9.textContent = 'insider';
list9.appendChild(a9);
list9.addEventListener('click',() => {
  sessionStorage.setItem("category", list9.textContent);
});
ulist.appendChild(list9);

var list10 = document.createElement('li');
list10.setAttribute('class', 'list-group-item');
var a10 = document.createElement('a');
a10.setAttribute('href','main.html')
a10.textContent = 'magazine';
list10.appendChild(a10);
list10.addEventListener('click',() => {
  sessionStorage.setItem("category", list10.textContent);
});
ulist.appendChild(list10);

var list11 = document.createElement('li');
list11.setAttribute('class', 'list-group-item');
var a11 = document.createElement('a');
a11.setAttribute('href','main.html')
a11.textContent = 'movies';
list11.appendChild(a11);
list11.addEventListener('click',() => {
  sessionStorage.setItem("category", list11.textContent);
});
ulist.appendChild(list11);

var list12 = document.createElement('li');
list12.setAttribute('class', 'list-group-item');
var a12 = document.createElement('a');
a12.setAttribute('href','main.html')
a12.textContent = 'home';
list12.appendChild(a12);
list12.addEventListener('click',() => {
  sessionStorage.setItem("category", list12.textContent);
});
ulist.appendChild(list12);

var list13 = document.createElement('li');
list13.setAttribute('class', 'list-group-item');
var a13 = document.createElement('a');
a13.setAttribute('href','main.html')
a13.textContent = 'obituaries';
list13.appendChild(a13);
list13.addEventListener('click',() => {
  sessionStorage.setItem("category", list13.textContent);
});
ulist.appendChild(list13);

var list14 = document.createElement('li');
list14.setAttribute('class', 'list-group-item');
var a14 = document.createElement('a');
a14.setAttribute('href','main.html')
a14.textContent = 'us';
list14.appendChild(a14);
list14.addEventListener('click',() => {
  sessionStorage.setItem("category", list14.textContent);
});
ulist.appendChild(list14);

var list15 = document.createElement('li');
list15.setAttribute('class', 'list-group-item');
var a15 = document.createElement('a');
a15.setAttribute('href','main.html')
a15.textContent = 'world';
list15.appendChild(a15);
list15.addEventListener('click',() => {
  sessionStorage.setItem("category", list15.textContent);
});
ulist.appendChild(list15);

function searchFunction() {
  var filter, ul, li, i;
  filter = input.value.toUpperCase();
  listSet = document.getElementsByTagName("li");
  for (i = 0; i < listSet.length; i++) {
    txtValue = listSet[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listSet[i].style.display = "";
    } else {
      listSet[i].style.display = "none";
    }
  }
}

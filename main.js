var myContainer = document.getElementById('myContainer');
var myDiv = document.createElement('div');
myDiv.setAttribute('class', 'row');
myContainer.appendChild(myDiv);

var category = sessionStorage.getItem("category");

var url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GBAWRzevNGxUUoY3kx0JFbQbKMuekqnD`

getNews();

async function getNews(){
  try {
    var data = await (await fetch(url)).json();
    console.log(data.results);
    var newData = data.results;
    newData.forEach((value) => {
      var innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'float-container');

      var div1 = document.createElement('div');
      div1.setAttribute('class','float-child div1');

      var heading = document.createElement('h2');
      heading.textContent = value.section;

      var date = document.createElement('p');
      var b = value.created_date;
      var c = b.slice(0,10);
      date.textContent = c;

      var p1 = document.createElement('p');
      p1.textContent = value.abstract;

      var title = document.createElement('h6');
      title.textContent = value.title;

      var byLine = document.createElement('p');
      byLine.textContent = value.byline;

      var itemType = document.createElement('p');
      itemType.textContent = "Item Type:" + value.item_type;

      var link = document.createElement('a');
      link.setAttribute('href', value.url);
      link.textContent = 'Click here to see full article here';
      // link.addEventListener('click',() => {
      //   sessionStorage.setItem("category", list1.textContent);
      // })

      var div2 = document.createElement('div');
      div2.setAttribute('class','float-child');
      var image = document.createElement('img');
      if((value.multimedia == null) || (value.multimedia == undefined) || (value.multimedia[4] == "")){
        image.src = "https://media.jewelfeed.com/tsj-apps/tsj-catalog-local/temp-inventory-landing.jpg"
      }else{
      image.src = (value.multimedia[4].url);
      }
      image.setAttribute('class', 'card-img-top');


      myDiv.appendChild(innerDiv);
      innerDiv.appendChild(div1);
      innerDiv.appendChild(div2);
      div1.appendChild(heading);
      div1.appendChild(title);
      div1.appendChild(byLine);
      div1.appendChild(date);
      div1.appendChild(p1);
      div1.appendChild(itemType);
      div1.appendChild(link);
      div2.appendChild(image);


    });
  }
  catch (error) {
    console.log("something went wrong") ;
  }
}

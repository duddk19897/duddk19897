const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink ='rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// content //
let container = document.querySelector('#container-wrap')

let html =''
for(items of data){
    html = html + ` 
    <div class='card-row' id='content' style="background-color:${items.color}">
    <div class="heading-container">
        <h5>${items.topic}</h5>
        <h3>${items.title}</h3></div>
        <button>Read for ${items.price}</button>
     </div> `
}
container.innerHTML = html


var border = document.querySelectorAll('.card-row');
for (var i = 0; i < border.length; i++){
    border[i].style.borderRadius = "10px";
}

var color = document.querySelectorAll('.card-row');
for (var i = 0; i < color.length; i++){
    border[i].style.color = "white";
}


// Instructions
// Take the data above and display it as tiles on the page

// var box = doucment.querySelector("#content");
// var context = div.getContext("2d");
// var width = 400;
// var height =400;



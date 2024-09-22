# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/vitejs-vite-99w1mq?file=1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,1-colorChanger%2Fmain.js,index.html&terminal=dev)

# Solution code

## project 1

```Javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener("click",function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id // grey
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id // grey
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id // grey
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id // grey
    }
  })
});


```
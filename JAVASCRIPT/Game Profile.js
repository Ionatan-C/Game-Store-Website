document.addEventListener("DOMContentLoaded", function () {
  //1. Declare a variable for select, and html, and write a query selector to reference them respectively
  const select = document.querySelector('#theme');
  const html = document.querySelector('html');
  
  //2. Add a change event listerner to select  
  select.addEventListener('change', () => {
  const choice = select.value;
  
  //3.  Write a switch statement that takes "choice" as a condition and case an update() function that takes two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so need to be wrapped in quotes.
  // for example
  
  switch(choice){
  case 'white':
    update('white','black');
    break;
  }
  
  switch(choice){
  case 'black':
    update('black','white');
    break;
  }
  
  
  switch(choice){
  case 'purple':
    update('purple','white');
    break;
  }
  
  switch(choice){
  case 'yellow':
    update('yellow','black');
    break;
  }
  
  switch(choice){
  case 'blue':
    update('blue','white');
    break;
  }
  
  });
  //3.1 Write the update() function here!
  function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  
  function changeFontSize(type){
    
    console.log(type);
  
    let ids = ['#maintitle', '#colour', '#best'];
  
    ids.foreach(id => {
  
      let el = document.querySelector(id);
  
      let fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
  
      fontSize = parseFloat(fontSize);
  
      if(type === 'increase'){
        el.style.fontSize = (fontSize + 5) + 'px';
      }else{
        el.style.fontSize = (fontSize - 5) + 'px';
      }
  
    });
  
  }

  const animatedCanvas = document.querySelector("#animatedCanvas");
  const animatedRenderingContext = animatedCanvas.getContext("2d");

  let xPos = 0;

  function draw() {
    animatedRenderingContext.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height); // this all will allow the animation above the navbar to work 
    const rectWidth = 100;

    animatedRenderingContext.fillStyle = "red";
    animatedRenderingContext.fillRect(xPos, 0, rectWidth, 10);

    xSpeed = 5;

    if (xPos <= 0) // if the xposition equals to 0 then it will start to go back to the right and same goes for the other one
      xDirection = 1;

    if (xPos >= animatedCanvas.width-rectWidth)
      xDirection = -1;

    xPos += xSpeed * xDirection

    requestAnimationFrame(draw);
  }
  draw();

  const games = ["../IMAGES/Fallen-Order-Box-Art.jpg", "../IMAGES/game-uplay-tom-clancys-rainbow-six-siege-cover.jpg", "../IMAGES/Escape_from_Tarkov.jpg", "../IMAGES/Elder scrolls.jpg", "../IMAGES/AC Valhalla.png", "../IMAGES/Kingdom_Come_Deliverance.jpg", "../IMAGES/Ghost Runner.jpg", "../IMAGES/MHW.jpg"];
  const anchors = ["Star Wars Jedi Fallen Order.html", "Rainbow Six Siege.html", "Escape From Tarkov.html", "Skyrim.html", "AC Valhalla.html", "Kingdom Come Deliverence.html", "Ghost Runner.html", "Monster Hunter World.html"]

  const currentSource = `../IMAGES/${document.getElementById("Game").src.split("IMAGES/")[1].split(`%20`).join(" ")}`;   //trying to get a relative position to an absolute position

  const index = games.indexOf(currentSource);

  console.log(currentSource)

  console.log(index)

  if (index != -1) {
    games.splice(index, 1);
    anchors.splice(index, 1);
  };
  
  

  var num = Math.floor(Math.random() * (games.length));
  document.getElementById("RandIMG").src= games[num];
  document.getElementById("RandomSource").href ="../HTML/"+ anchors[num];

 

    

  
  });
  
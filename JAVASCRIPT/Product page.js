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

    const animatedCanvas = document.querySelector("#animatedCanvas");
    const animatedRenderingContext = animatedCanvas.getContext("2d");
  
    let xPos = 0;
    let direction = "right";
  
    function draw() {
      animatedRenderingContext.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height);
      const rectWidth = 100;

      animatedRenderingContext.fillStyle = "red";
      animatedRenderingContext.fillRect(xPos, 0, rectWidth, 10);
  
      xSpeed = 5;

      if (xPos <= 0)
        xDirection = 1;
  
      if (xPos >= animatedCanvas.width-rectWidth)
        xDirection = -1;
  
      xPos += xSpeed * xDirection
  
      requestAnimationFrame(draw);
    }
    draw();
    });
    
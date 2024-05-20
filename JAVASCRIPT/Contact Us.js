document.addEventListener("DOMContentLoaded", function () {

    const myForm = document.querySelector('#form');
    const message1 = document.querySelector('#email1');
    const message2 = document.querySelector('#name1');
    const message3 = document.querySelector('#enquiry1');


    console.log("Test2")

    myForm.addEventListener('submit', function(event){
        //event.preventDefault();
        
        let errorCounter = 0;
        
        message1.classList.remove('error');
        message2.classList.remove('error');
        message3.classList.remove('error');
        
        

        const nameField = document.querySelector('#name');
        if (
            nameField.value == null ||
            nameField.value.length < 5 ||
            nameField.value.length > 50
        ){
            errorCounter++;
            
            message1.innerText = "Name must be between 5-50 characters.";
            message1.classList.remove('hidden');
            message1.classList.add('error');
            message1.classList.remove('success');
            //return;
            }
        
        const emailField = document.querySelector('#email');
        if(
            
            emailField.value == null||
            emailField.value.length < 5 ||
            emailField.value.length > 30 ||
            emailField.value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/)
        ) {
            errorCounter++;
            message2.innerText = 'The Email address must be a valid email address which is at least 5 characters long and no longer than 30.';
            message2.classList.remove('hidden');
            message2.classList.add('error');
            message2.classList.remove('success');
            //return;
        }
        
        const enquiryField = document.querySelector('#enquiry');
        if (
            enquiryField.value == null ||
            enquiryField.value.length < 10 ||
            enquiryField.value.length > 500
        ) {
            errorCounter++;
            message3.innerText = 'The enquiry must have at least 10 characters and cannot be more than 500 characters long';
            message3.classList.remove('hidden');
            message3.classList.add('error');
            message3.classList.remove('success');
            //return;
        }

        console.log(errorCounter);

        if (errorCounter > 0)
        {
            event.preventDefault();
            return;
        }
    
    })

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

});
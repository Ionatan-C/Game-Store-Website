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

var cart = {
      // (A) PROPERTIES
      hPdt : null, // HTML products list
      hItems : null, // HTML current cart
      items : {}, // Current items in cart
    
      // (B) LOCALSTORAGE CART
      // (B1) SAVE CURRENT CART INTO LOCALSTORAGE
      save : function () {
        localStorage.setItem("cart", JSON.stringify(cart.items));
      },
    
      // (B2) LOAD CART FROM LOCALSTORAGE
      load : function () {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { cart.items = {}; }
        else { cart.items = JSON.parse(cart.items); }
      },
    
      // (B3) EMPTY ENTIRE CART
      empty : function () {
        if (confirm("Empty cart?")) {
          cart.items = {};
          localStorage.removeItem("cart");
          cart.list();
        }
      },
    
      // (C) INITIALIZE
      init : function () {
        // (C1) GET HTML ELEMENTS
        cart.hPdt = document.getElementById("cart-products");
        cart.hItems = document.getElementById("cart-items");
    
        // (C2) DRAW PRODUCTS LIST
        cart.hPdt.innerHTML = "";
        let p, item, part;
        for (let id in products) {
          // WRAPPER
          p = products[id];
          item = document.createElement("div");
          item.className = "p-item";
          cart.hPdt.appendChild(item);
    
          // PRODUCT IMAGE
          part = document.createElement("img");
          part.src = "../IMAGES/" + p.img;
          part.className = "p-img";
          item.appendChild(part);
    
          // PRODUCT NAME
          part = document.createElement("div");
          part.innerHTML = p.name;
          part.className = "p-name";
          item.appendChild(part);
    
          // PRODUCT DESCRIPTION
          part = document.createElement("div");
          part.innerHTML = p.desc;
          part.className = "p-desc";
          item.appendChild(part);
    
          // PRODUCT PRICE
          part = document.createElement("div");
          part.innerHTML = "£" + p.price;
          part.className = "p-price";
          item.appendChild(part);
    
          // ADD TO CART
          part = document.createElement("input");
          part.type = "button";
          part.value = "Add to Cart";
          part.className = "cart p-add";
          part.onclick = cart.add;
          part.dataset.id = id;
          item.appendChild(part);
        }
    
        // (C3) LOAD CART FROM PREVIOUS SESSION
        cart.load();
    
        // (C4) LIST CURRENT CART ITEMS
        cart.list();
      },
    
      // (D) LIST CURRENT CART ITEMS (IN HTML)
      list : function () {
        // (D1) RESET
        cart.hItems.innerHTML = "";
        let item, part, pdt;
        let empty = true;
        for (let key in cart.items) {
          if(cart.items.hasOwnProperty(key)) { empty = false; break; }
        }
    
        // (D2) CART IS EMPTY
        if (empty) {
          item = document.createElement("div");
          item.innerHTML = "Cart is empty";
          cart.hItems.appendChild(item);
        }
    
        // (D3) CART IS NOT EMPTY - LIST ITEMS
        else {
          let p, total = 0, subtotal = 0;
          for (let id in cart.items) {
            // ITEM
            p = products[id];
            item = document.createElement("div");
            item.className = "c-item";
            cart.hItems.appendChild(item);
    
            // NAME
            part = document.createElement("div");
            part.innerHTML = p.name;
            part.className = "c-name";
            item.appendChild(part);
    
            // REMOVE
            part = document.createElement("input");
            part.type = "button";
            part.value = "X";
            part.dataset.id = id;
            part.className = "c-del cart";
            part.addEventListener("click", cart.remove);
            item.appendChild(part);
    
            // QUANTITY
            part = document.createElement("input");
            part.type = "number";
            part.value = cart.items[id];
            part.dataset.id = id;
            part.className = "c-qty";
            part.addEventListener("change", cart.change);
            item.appendChild(part);
    
            // SUBTOTAL
            subtotal = cart.items[id] * p.price;
            total += subtotal;
          }
    
          // EMPTY BUTTON
          item = document.createElement("input");
          item.type = "button";
          item.value = "Empty";
          item.addEventListener("click", cart.empty);
          item.className = "c-empty cart";
          cart.hItems.appendChild(item);
        
          

          // CHECKOUT BUTTON
          item = document.createElement("input");
          item.type = "button";
          item.value = "Checkout - " + "£" + total;
          item.className = "c-checkout cart";
          item.addEventListener("click", () =>{

          });
          cart.hItems.appendChild(item);

          a = document.createElement("a");
            a.href = "../HTML/Checkout.html";
            item.parentNode.insertBefore(a, item);
            a.appendChild(item);
          
          
        }

      },
    
      // (E) ADD ITEM INTO CART
      add : function () {
        if (cart.items[this.dataset.id] == undefined) {
          cart.items[this.dataset.id] = 1;
        } else {
          cart.items[this.dataset.id]++;
        }
        cart.save();
        cart.list();
      },
    
      // (F) CHANGE QUANTITY
      change : function () {
        if (this.value == 0) {
          delete cart.items[this.dataset.id];
        } else {
          cart.items[this.dataset.id] = this.value;
        }
        cart.save();
        cart.list();
      },
      
      // (G) REMOVE ITEM FROM CART
      remove : function () {
        delete cart.items[this.dataset.id];
        cart.save();
        cart.list();
      },
      
      // (H) CHECKOUT
      checkout : function () {
        // SEND DATA TO SERVER
        // CHECKS
        // SEND AN EMAIL
        // RECORD TO DATABASE
        // PAYMENT
        // WHATEVER IS REQUIRED

        //getElementsByClassName("c-checkout cart").href = "../HTML/Checkout.html";

                  
          
  
      }
    };

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

    window.addEventListener("DOMContentLoaded", cart.init);

    

    });
    
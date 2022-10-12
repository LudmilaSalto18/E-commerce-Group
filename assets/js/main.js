const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]


/*--------------------- CONFIG BOTON MENU ----------------*/
  window.addEventListener("DOMContentLoaded", (event) => {

    const menuBtn = document.getElementById("menu");
    const infoMen = document.querySelector(".infoMenu");
    const lun = document.querySelector(".navLuna")

    menuBtn.addEventListener("click", (event) => {
           menuBtn.classList.toggle("salir");
           infoMen.classList.toggle("visible");
           lun.classList.toggle("visible");
    });
  });
/*------------------------------------------------------*/  

/*-------------------- CONFIG BOTON CART ----------------*/ 
  window.addEventListener("DOMContentLoaded", (event) => {

    const bagBtn = document.getElementById("bag");
    const infoCart = document.querySelector(".myCart");
    const lun = document.querySelector(".navLuna")
    

    bagBtn.addEventListener("click", (event) => {
           bagBtn.classList.toggle("salir");
           infoCart.classList.toggle("visible");
           lun.classList.toggle("visible");
    });
  });
  /*------------------------------------------------------*/

  window.addEventListener("DOMContentLoaded", (event) => {

    const lunaBtn = document.getElementById("luna");
    const backbody = document.querySelector("body");
    
    lunaBtn.addEventListener("click", (event) => {
           lunaBtn.classList.toggle("salir");
           backbody.classList.toggle("visible");
           
    });
  });
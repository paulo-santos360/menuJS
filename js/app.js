const menu = [
  {
    id: 1,
    title: "fone com bluetooth",
    category: "fone com bluetooth",//breakfast
    price: 80.99,
    img: "img/fone-1.png",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento.`,
  },
  {
    id: 2,
    title: "fone com bluetooth",
    category: "fone com bluetooth",
    price: 80.99,
    img: "img/fone-2.png",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento.`,
  },
  {
    id: 3,
    title: "fone com bluetooth",
    category: "fone com bluetooth",//schakes
    price: 80.99,
    img: "img/fone-3.jpg",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento.`,
  },
  {
    id: 4,
    title: "fone com bluetooth",
    category: "fone com bluetooth",
    price: 80.99,
    img: "img/fone-4.jpg",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento. `,
  },
  {
    id: 5,
    title: "placa-mae",
    category: "placa-mae",//lunch
    price: 22.99,
    img: "img/placa-1.jpg",
    desc: `A base do seu PC, repleta de desempenho e confiabilidade.`,
  },
  {
    id: 6,
    title: "fone com bluetooth",
    category: "fone com bluetooth",//schakes
    price: 80.99,
    img: "img/fone-7.jpg",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento.`,
  },
  {
    id: 7,
    title: "fone com bluetooth",
    category: "fone com bluetooth",
    price: 98.99,
    img: "img/fone-5.jpg",
    desc: `Áudio sem fio de alta qualidade, design compacto e confortável. A trilha sonora perfeita para a sua vida em movimento.`,
  },
  {
    id: 8,
    title: "placa-mae",
    category: "placa-mae",
    price: 300.99,
    img: "img/placa-2.jpg",
    desc: `A base do seu PC, repleta de desempenho e confiabilidade.`,
  },
  {
    id: 9,
    title: "Mouse",
    category: "Mouse",
    price: 100.99,
    img: "img/mouse.jpg",
    desc: `Navegue, clique e controle com facilidade. O nosso mouse oferece precisão excepcional e conforto ergonômico para horas de uso sem esforço. Potencialize sua experiência computacional com este dispositivo essencial.`,
  },
  {
    id: 10,
    title: "placa-mae",
    category: "placa-mae",
    price: 300.99,
    img: "img/placa-3.jpg",
    desc: `A base do seu PC, repleta de desempenho e confiabilidade.`,
  },
  {
    id: 11,
    title: "placa-mae",
    category: "placa-mae",
    price: 300.99,
    img: "img/placa-4.jpg",
    desc: `A base do seu PC, repleta de desempenho e confiabilidade.`,
  },
  {
    id: 12,
    title: "Mouse",
    category: "Mouse",
    price: 100.99,
    img: "img/mouse-2.jpg",
    desc: `Navegue, clique e controle com facilidade. O nosso mouse oferece precisão excepcional e conforto ergonômico para horas de uso sem esforço. Potencialize sua experiência computacional com este dispositivo essencial.`,
  },
  {
    id: 13,
    title: "Mouse",
    category: "Mouse",
    price: 100.99,
    img: "img/mouse-3.jpg",
    desc: `Navegue, clique e controle com facilidade. O nosso mouse oferece precisão excepcional e conforto ergonômico para horas de uso sem esforço. Potencialize sua experiência computacional com este dispositivo essencial.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelector(".filter-btn");


/* window.addEventListener("DOMContentLoaded", function () {
  //console.log("fone and")
  let displayMenu = menu.map(function (item) {
    //console.log(item);
    //return item;

    return ` <!-- single item -->
        <article class="menu-item">
            <img src="${item.img}" class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <div class="price">
                    ${item.price}
                </div>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>
         <!-- end single item -->`;
  });
  displayMenu = displayMenu.join("")
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}); */

// Model 2 Refactor Codic

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItem(menu)
});

// filter items
filterBtns.forEach(function (btn) {
 btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset);
});
});

function displayMenuItem(menuItem) {
     //console.log("fone and")
  let displayMenu = menuItem.map(function (item) {
    //console.log(item);
    //return item;

    return ` <!-- single item -->
        <article class="menu-item">
            <img src="${item.img}" class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <div class="price">
                    ${item.price}
                </div>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>
         <!-- end single item -->`;
  });
  displayMenu = displayMenu.join("")
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}
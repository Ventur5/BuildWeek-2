const romeRooms = [
  {
    imgSrc: "https://a0.muscache.com/im/pictures/ab947823-a193-4e81-8303-cf970f8abd4a.jpg?im_w=1200",
    imgAlt: "room picture",
    roomTitle: "Appartamento · San Salvario",
    roomDate: "20-22 oct",
    roomHost: "Host privato",
    roomPrice: "14€ per 2 notti",
    roomRating: "★ 4,76",
    isLovedByGuests: true,
  },
];
/*

https://a0.muscache.com/im/pictures/ab947823-a193-4e81-8303-cf970f8abd4a.jpg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-1492065800186557669/original/f2d82934-65cf-47e2-b142-2aa93a7b9d8a.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/2ed4fb7d-1135-4b17-b8ac-efca8a610d5f.jpg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjM3MzY4MjAzOTAxNzcxNTYz/original/9f434ad6-0b47-49cc-8150-7c5922d298b6.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-1358142750492175350/original/55ac83bc-b31e-47f5-98eb-339e2f9fdb3f.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-1249865826204295449/original/9d872fc3-4eb0-48c0-83b3-3f7e13356aea.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0NzIwMzU2NDkwNzg3NjMyOQ%3D%3D/original/c5b8b391-cf0e-4a00-9cc2-dcb37c5b2bcc.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-1274717510563473530/original/445d7df4-f391-4ba0-8222-006647a9c787.jpeg?im_w=1200

https://a0.muscache.com/im/pictures/hosting/Hosting-1290641430319416998/original/e32fd6b1-b111-422e-845e-191a6e320c5b.jpeg?im_w=1200

*/

const swiperSlide = document.querySelector(".swiper-slide");

function createAndAppendCard(room, container) {

  const airbnbCard = document.createElement("div");
  airbnbCard.classList.add("airbnb-card", "position-relative");
  container.appendChild(airbnbCard);

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("card-img-container");
  airbnbCard.appendChild(cardImgContainer);

  const cardImg = document.createElement("img");
  cardImg.src = room.imgSrc;
  cardImg.alt = room.imgAlt;
  cardImgContainer.appendChild(cardImg);

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-descriptions");
  airbnbCard.appendChild(cardDescription);

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = room.roomTitle;
  cardDescription.appendChild(cardTitle);

  const cardInfoFirstContainer = document.createElement("div");
  cardInfoFirstContainer.classList.add("card-info", "d-flex");
  cardDescription.appendChild(cardInfoFirstContainer);

  const cardDate = document.createElement("p");
  cardDate.innerText = room.roomDate;
  cardInfoFirstContainer.appendChild(cardDate);

  const firstInfoBull = document.createElement("p");
  firstInfoBull.classList.add("mx-1");
  firstInfoBull.innerText = "·";
  cardInfoFirstContainer.appendChild(firstInfoBull);

  const cardHost = document.createElement("p");
  cardHost.innerText = room.roomHost;
  cardInfoFirstContainer.appendChild(cardHost);

  const cardInfoSecondContainer = document.createElement("div");
  cardInfoSecondContainer.classList.add("card-info", "d-flex");
  cardDescription.appendChild(cardInfoSecondContainer);

  const cardPrice = document.createElement("p");
  cardPrice.innerText = room.roomPrice;
  cardInfoSecondContainer.appendChild(cardPrice);

  const secondInfoBull = document.createElement("p");
  secondInfoBull.classList.add("mx-1");
  secondInfoBull.innerText = "·";
  cardInfoSecondContainer.appendChild(secondInfoBull);

  const cardRating = document.createElement("p");
  cardRating.innerText = room.roomRating;
  cardInfoSecondContainer.appendChild(cardRating);

  const badgeHeartContainer = document.createElement("div");
  badgeHeartContainer.classList.add("d-flex", "justify-content-between", "align-items-center", "position-absolute", "badge-hearth-container");
  airbnbCard.appendChild(badgeHeartContainer);

  if (room.isLovedByGuests) {

    const cardBadge = document.createElement("p");
    cardBadge.classList.add("m-0", "position-absolute", "loved-by-guests-badge");
    cardBadge.innerText = "Amato dagli ospiti";
    airbnbCard.appendChild(cardBadge);

  }

  const cardHeartContainer = document.createElement("div");
  cardHeartContainer.classList.add("heart-container", "position-absolute");
  cardHeartContainer.innerHTML = `<svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
       2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
       C13.09 3.81 14.76 3 16.5 3
       19.58 3 22 5.42 22 8.5
       c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>`;
  airbnbCard.appendChild(cardHeartContainer);

};

romeRooms.forEach(room => {
  createAndAppendCard(room, swiperSlide)
})
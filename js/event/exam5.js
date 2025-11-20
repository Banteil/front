const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
// card-title : 제품명
// card-text : 가격

const cardGroup = document.querySelector(".card-group");
const cards = cardGroup.querySelectorAll(".card");

cards.forEach((card, index) => {
  const cardTitle = card.querySelector(".card-title");
  const cardText = card.querySelector(".card-text");
  if (cardTitle && cardText) {
    cardTitle.textContent = products[index].title;
    cardText.textContent = products[index].price + "₩";
  }
});

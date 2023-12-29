let myData;

async function fetchData() {
  try {
    const response = await fetch("../data.json");
    if (!response.ok) {
      throw new Error("Netwrok response was not ok");
    }
    myData = await response.json();
  } catch (error) {
    console.error("Error fetching or parsing data: ", error);
  }
}
fetchData().then(() => {
  const cardSection = document.querySelector(".card-section");
  for (const card of myData) {
    const smallCard = createSmallCard(card);
    cardSection.appendChild(smallCard);
  }

  const continueButton = document.createElement("button");
  continueButton.className = "btn";
  continueButton.textContent = "Continue";
  cardSection.appendChild(continueButton);
});

function createSmallCard(card) {
  const template = `
    <div class="small-card">
      <div>
        <img src="${card.icon}" alt="" class="logo" />
        <p>${card.category}</p>
      </div>
      <p><span>${card.score}</span> / 100</p>
    </div>
  `;

  const div = document.createElement("div");
  div.innerHTML = template.trim();

  return div.firstChild;
}

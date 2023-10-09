import FRUITS from "../db/data.js"

function generateCards() {
  console.log("working on with generate cards")
  
  const fruitsWrapper = document.querySelector('.fruits-wrapper')

  fruitsWrapper.innerHTML = ""

  for (let i = 0; i < FRUITS.length; i++){
    let fruitCard = FRUITS[i]

    fruitsWrapper.innerHTML += `
      <div class="fruits-wrapper">

        <div class="fruit-card">
          <div class="fruit-card-head">
            <img class="fruit-icon" src="${fruitCard.image}" alt="">
            <h4>${fruitCard.name}</h4>
            <button class="btn btn-icon">
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </button>
          </div>

          <div class="fruit-card-body toggle-body">
            <div class="fruit-frame">
            <img src="${fruitCard.image}" alt="">
            </div>

            <div class="fruit-detail">
              <h4>Name: ${fruitCard.name}</h4>
              <h4>Family: ${fruitCard.family}</h4>
              <h4>Genus: ${fruitCard.genus}</h4>
              <h4>Nutritions: </h4>
              <ul>
                <li>Calories: ${fruitCard.nutritions["calories"]}</li>
                <li>Fat: ${fruitCard.nutritions["fat"]}</li>
                <li>Sugar: ${fruitCard.nutritions["sugar"]}</li>
                <li>Carbohydrates: ${fruitCard.nutritions["carbohydrates"]}</li>
                <li>Protein: ${fruitCard.nutritions["protein"]}</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
  `



  }

}

export default generateCards
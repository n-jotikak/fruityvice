import FRUITS from "../db/data.js"

function handleSearch() {
  const resultWrapper = document.querySelector(".result-wrapper")
  const searchForm = document.querySelector("#searchForm")
  const searchFruit = document.querySelector("#searchFruit")
  resultWrapper.innerHTML = ``


  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()


    let fruitname = searchFruit.value.toLowerCase()
    fruitname = fruitname.replace(fruitname.at(0), fruitname.at(0).toUpperCase())
    console.log(fruitname)
    // Start your code from here

    let foundFruit = FRUITS.find(FRUITS[2])
    // console.log("found")

    if (foundFruit) {
      resultWrapper.innerHTML += `
      <div class="fruits-wrapper">

        <div class="fruit-card">
          <div class="fruit-card-head">
            <img class="fruit-icon" src="${foundFruit.image}" alt="">
            <h4>${foundFruit.name}</h4>
            <button class="btn btn-icon">
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </button>
          </div>

          <div class="fruit-card-body toggle-body">
            <div class="fruit-frame">
            <img src="${foundFruit.image}" alt="">
            </div>

            <div class="fruit-detail">
              <h4>Name: ${foundFruit.name}</h4>
              <h4>Family: ${foundFruit.family}</h4>
              <h4>Genus: ${foundFruit.genus}</h4>
              <h4>Nutritions: </h4>
              <ul>
                <li>Calories: ${foundFruit.nutritions["calories"]}</li>
                <li>Fat: ${foundFruit.nutritions["fat"]}</li>
                <li>Sugar: ${foundFruit.nutritions["sugar"]}</li>
                <li>Carbohydrates: ${foundFruit.nutritions["carbohydrates"]}</li>
                <li>Protein: ${foundFruit.nutritions["protein"]}</li>
              </ul>
            </div>

          </div>
        </div>

      </div>`
    } else {
      console.log('404 NOT FOUND')
    }

    












    // DONE: reset the value in search input, and handle closeBtn
    searchFruit.value = ""

    const closeBtn = document.querySelector("#closeBtn")
    closeBtn.addEventListener("click", () => {
      resultWrapper.innerHTML = ``
    })

  })

}

export default handleSearch
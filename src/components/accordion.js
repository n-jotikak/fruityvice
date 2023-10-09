function accordion() {

  // console.log("working on with accordion")

  const accordionHeads = document.querySelectorAll('.fruit-card-head')
  const currentBody =  document.querySelector('.fruit-card-body')

  for (let i = 0; i < accordionHeads.length; i++){
    let currentHead = document.querySelectorAll('.fruit-card-head')
    
    currentBody.classList.remove('toggle-body')
    

  }


}

export default accordion
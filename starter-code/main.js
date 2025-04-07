const rulesBtn = document.getElementById('rules')
const playBtn = document.getElementById('play_btn')
const backBtn = document.querySelector('.back_btn')
const categoryBtns = document.querySelectorAll('.category')
const categoryPlace = document.querySelector('#cats')


function ChangeLocationOnClick(button, url){
    if(button){
        button.addEventListener('click', () =>{
            window.location.href = url
         })
    }
}
ChangeLocationOnClick(rulesBtn, './rules.html')
ChangeLocationOnClick(playBtn, './category.html')
ChangeLocationOnClick(backBtn, './index.html')


categoryBtns.forEach((btn) =>{
btn.addEventListener('click', () =>{
    let category = btn.innerHTML
    localStorage.setItem('selectedCategory', category)

      window.location.href = './game.html'
})
})
const cat = localStorage.getItem('selectedCategory')
categoryPlace.innerHTML = cat



function lowerCaseCat(chosenCategory){
   return chosenCategory.charAt(0) + chosenCategory.slice(1).toLowerCase() 
}


const getWord = async(chosenCategory) => {
   try{
    const response = await fetch('data.json')
    const data = await response.json()
    
    // console.log(data.categories.Movies)
    let choise = lowerCaseCat(chosenCategory) 
    let category = data.categories
    let lettersParent = document.querySelector('#letters_place')

    Object.entries(category).forEach(([categoryName, arr]) =>{
        if(categoryName === choise){
            let number = Math.ceil(Math.random() * arr.length)

            const randomWord = arr[number].name
            
            const letters = randomWord.replace(' ', '').split('')
            letters.forEach(letter =>{
               lettersParent.innerHTML += `<div class="letter">${letter}</div>`
            })
        }
    })
    // if(){
    //     console.log(choise)
    // }
    
    // console.log(chosenCategory)
//     if (data.categories.hasOwnProperty('Movies')) {
//         console.log(data.categories[category]); // logs array of movie objects
//       } else {
//         console.log("Category not found in data.");
//       }
   }
   catch{

   }
}


getWord(cat)
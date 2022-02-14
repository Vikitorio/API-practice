const input = document.querySelector('.header__input')
const closeButton =document.querySelector('.header__close')
const url = 'https://api.themoviedb.org/3/movie/550?api_key=be054bcfb514d9dfca10a8344ab60a0a'
let baseUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be054bcfb514d9dfca10a8344ab60a0a&page=1'
let posterUrl='https://image.tmdb.org/t/p/w1280'
let searchUrl='https://api.themoviedb.org/3/search/movie?&api_key=be054bcfb514d9dfca10a8344ab60a0a&query='
let filmArr=[];
/*async function getData() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data
  }

  */

  window.addEventListener('load', ()=>{document.querySelector('.header__input').select()})
  input.addEventListener('input',xAdd)
  input.addEventListener('change',xAdd)
  closeButton.addEventListener('click',cleanValue)


  function cleanValue(){
    document.querySelector('.header__input').value=''
    xAdd()
  }

  function xAdd(){
    console.log('start')
    if(input.value!==''){
      console.log('start')
      document.querySelector('.header__close').classList.remove('hiden__close')
    }
    else {
      document.querySelector('.header__close').classList.add('hiden__close')
    }
  }








function clinFilms(){
  if(document.querySelectorAll('.film')){
  let filmDiv =document.querySelectorAll('.film')
  for(let i=0;i<filmDiv.length;i++){
    console.log(filmDiv[i].remove())
  }
  }
}


  async function getData(baseUrl) {
    const response =  await fetch(baseUrl)
    const result = await response.json()
    result['results'].map((object)=>{
      if(object.poster_path!== null){
      addFilm(object)}})
  }
   getData(baseUrl)






function addFilm(object) {
console.log('start')
const main = document.querySelector('.main')
const filmContainer = document.createElement('div');
filmContainer.classList.add('film')
main.appendChild(filmContainer)

const filmPoster =document.createElement('img')
filmPoster.src=posterUrl+object.poster_path
filmPoster.classList.add('film__poster')
filmContainer.appendChild(filmPoster)

const filmTitle = document.createElement('div')
filmTitle.classList.add('film__title')
filmContainer.appendChild(filmTitle)

const filmName =document.createElement('h3')
filmName.textContent=object.title
filmName.classList.add('h3')
filmTitle.appendChild(filmName)


const filmScore =document.createElement('span')
filmScore.classList.add('film__score')
filmScore.textContent=`${object.vote_average}`
filmTitle.appendChild(filmScore)

const filmDescriptionContainer =document.createElement('div')
filmDescriptionContainer.classList.add('film__description')
filmDescriptionContainer.textContent=object.overview
filmContainer.appendChild(filmDescriptionContainer)
}





//input event
function findFilm(){
  clinFilms()
  const keyword = document.querySelector('.header__input').value
  getData(`${searchUrl+keyword.replaceAll(' ','-')}`)

}


const inputAray = document.querySelector('.header__input')
inputAray.addEventListener('keyup',(event)=>{if(event.keyCode===13&&inputAray.value!==''){
  findFilm()
}})

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')
console.log(cardsContainer)

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
  // handle success
  const cardInfo = data.data
  // console.log('card component', myCards(cardInfo)) //myCards(cardInfo)is the return value
  console.log('card data', cardInfo);
  cardInfo.articles.bootstrap.forEach(info => {
    cardsContainer.appendChild(myCards(info))

  })
  cardInfo.articles.javascript.forEach(info => {
    cardsContainer.appendChild(myCards(info))

  })
  cardInfo.articles.jquery.forEach(info => {
    cardsContainer.appendChild(myCards(info))

  })
  cardInfo.articles.node.forEach(info => {
    cardsContainer.appendChild(myCards(info))

  })
  cardInfo.articles.technology.forEach(info => {
    cardsContainer.appendChild(myCards(info))

  })
})
.catch(error => {
  // handle error
  console.log('currently down', error);
})



function myCards(cardObject) {
  console.log('card object', cardObject)

  const card = document.createElement('div')
  const headline = document.createElement('div')
  const authorContainer = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorsName = document.createElement('span')

  // cardsContainer.classList.add('card')
  card.classList.add('card')
  headline.classList.add('headline')
  authorContainer.classList.add('author')
  imgContainer.classList.add('img-container')
  // img.classList.add('img')

  headline.textContent = cardObject.headline
  authorsName.textContent = cardObject.authorName
  img.src = cardObject.authorPhoto
  

  // cardsContainer.appendChild(card)
  card.appendChild(headline)
  card.appendChild(authorContainer)
  authorContainer.appendChild(imgContainer)
  imgContainer.appendChild(img)
  authorContainer.appendChild(authorsName)

  // card.appendChild(imgContainer)
  // card.appendChild(authorsName)

  return card
}

// cardsContainer.appendChild(myCards()); // outside of the function
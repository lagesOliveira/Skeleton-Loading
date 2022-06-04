const news = document.querySelector('.newsCards');
const card = document.querySelector('.card');

for (i = 0; i < 10; i++) {
  news.append(card.cloneNode(true));
}

fetch('https://inshorts.deta.dev/news?category=science')
  .then(T => T.json())
  .then(data => {

    news.innerHTML = '';
    
    let content = data.data;
    
    content.forEach(dataContent => {

      currentNew = card.cloneNode(true);

      const img = currentNew.querySelector('.img-load')
      const title = currentNew.querySelector('.title-load')
      const content = currentNew.querySelector('.desc')
      
      img.innerHTML = `<img src="${dataContent.imageUrl}">`
      title.innerHTML = dataContent.title
      content.innerHTML = dataContent.content

      img.classList.remove('load')
      title.classList.remove('load')

      news.append(currentNew)

    })
    
  })

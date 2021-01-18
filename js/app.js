const searchNews = document.getElementById('searchNews');
const results = document.getElementById('results');
const enterTerm = document.getElementById('searched-word');


//clear results
results.innerHTML = ''

//keywords for live news
searchNews.addEventListener('submit',function(e){
    e.preventDefault();
    //get the value of the input
    const textInput = document.getElementById('textNews');
    if(textInput.value !== ''){
        getKeywords(textInput.value)
        .then(data => {

            //enter kaywords term
            keyTerm(textInput.value);

            //get all the body data
            getKeyData(data.data);
        })
        .catch(err => console.log(err))
    }else{
        alert('Please Enter a Keyword!')
    }
    
})

//get all body data in search keywords
function getKeyData(data){
    results.innerHTML = data.map(dat => `
    <a href="${dat.url}" target=_blank >
    <div class="box">
    <article class="media">
      <div class="media-left">
          <img src="${dat.image === null ? '../img/download.png' : dat.image}" alt="Image" class="img">
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <strong class="spacing">Source : ${capitalizeFirstLetter(dat.source)}</strong> <small><strong>Date </strong>: ${dat.published_at.slice(0,10)}</small>
            <br>
            <h6>${dat.title}</h6>
            ${dat.description.slice(0,100)}...
          </p>
        </div>

        <div class="content">
              <strong class="spacing">Author : ${dat.author}</strong> <small>Category: ${capitalizeFirstLetter(dat.category)}</small>
          </div>
      </div>
    </article>
  </div>

  </a>
    `).join('')
   
}




//capitalize the first Letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//enter kaywords and enter db
function keyTerm(text){
    //enter term
    enterTerm.innerHTML = `You Searched : '${text}'`;
}
const dateForm = document.getElementById('dateNews');
const resultsdate = document.getElementById('results-date');

//enter dadte form
dateForm.addEventListener('submit',function(e){
    e.preventDefault();
    const date = document.getElementById('datetime');
    getDate(date.value)
    .then(data => getDateNews(data.data))
    .catch(err => console.log(err));
})

function getDateNews(items){
    resultsdate.innerHTML = items.map(item =>  `
        <a href="${item.url}" target=_blank >
        <div class="box">
        <article class="media">
        <div class="media-left">
            <img src="${item.image === null ? '../img/download.png' : item.image}" alt="Image" class="img">
        </div>

        <div class="media-content">
            <div class="content">
            <p>
                <strong class="spacing">Source : ${capitalizeFirstLetter(item.source)}</strong> <small><strong>Date </strong>: ${item.published_at.slice(0,10)}</small>
                <br>
                <h6>${item.title}</h6>
                ${item.description.slice(0,100)}...
            </p>
            </div>

            <div class="content">
                <strong class="spacing">Author : ${item.author}</strong> <small>Category: ${capitalizeFirstLetter(item.category)}</small>
            </div>
        </div>
        </article>
        </div>
        </a>
    ` ).join('')
}



//capitalize the first Letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

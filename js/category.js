const selectForm = document.getElementById('selectNews');
const resultsCategory = document.getElementById('results-category');

//clear body
resultsCategory.innerHTML = ''

//submit category 
selectForm.addEventListener('submit',function(e){
    e.preventDefault();
    const select = document.getElementById('select');
    getCategory(select.value)
    .then(data => getItems(data.data))
    .catch(err => console.log(err))
    
})


//get category
function getItems(items){
    resultsCategory.innerHTML = items.map(item => `

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
    `).join('')
}


//capitalize the first Letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

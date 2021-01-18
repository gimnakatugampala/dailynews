//Utility
const apiKey = '4a70604938c7ee13e50cb08653cb4cb9';

//search by keyword
async function getKeywords(word){
    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${word}&languages=en`)
    const keywords = await res.json();

    return keywords;
}

//search by categpory
async function getCategory(item){
    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${item}&languages=en`)
    const category = await res.json();

    return category;
}


//search by date
async function getDate(date){
    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&date=${date}&languages=en`)
    const day = await res.json();

    return day;
}
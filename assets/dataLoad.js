var data;

// fetches data from api 
const xhr = new XMLHttpRequest();
const url='https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init';

xhr.open("GET", url);
xhr.send();

xhr.onload =async function() {
    data=JSON.parse(xhr.response).list;
    for(let item of data){
        await addData(item);
    }
}

function addData(item){
    console.log(item);
    let child = document.createElement('a');
    child.id = item.id;
    child.href = item.url;
    child.className = "child";
    child.target="_blank";

    // creating new child with item 
    child.innerHTML = (`
        <img src="${item.thumbnail[0].url}">
        <div class="content">
            <h3>${item.name}</h3>
            <p>${item.branding} | <b>${item.categories[0].toUpperCase()}</b></p>
        </div>
    `);

    // adding child in container
    document.getElementById('container').appendChild(child); // adding all details to existing table
}

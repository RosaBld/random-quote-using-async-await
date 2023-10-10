const createbtn=document.querySelector('.create').addEventListener('click', refreshQuote);
const quote=document.querySelector('.quote');
window.addEventListener('load', createQuote);

async function createQuote(){
    try {
        const response=await fetch("https://thatsthespir.it/api");
        if (!response.ok) {
            throw new Error(response.status);
        }

        const json=await response.json();
        console.log(json);

        let h3=document.createElement('h3');
        quote.appendChild(h3);
        h3.textContent=json.quote;

        let p = document.createElement('p');
        quote.appendChild(p);
        p.textContent=json.author;

        let img=document.createElement('img');
        quote.appendChild(img);
        img.src=json.photo;
        
    } catch {
        console.log("There was an error!", error);
        quote.textContent="There was an error!";
    }
}

function refreshQuote () {
    const quote=document.querySelector('.quote');
    while (quote.firstChild) {
        quote.removeChild(quote.firstChild);
    }
    createQuote();
}


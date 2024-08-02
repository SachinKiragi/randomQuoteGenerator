
const result = document.getElementById('result');


async function getQuote(){

    try{

        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: { 'X-Api-Key': 'MyH1I1/AI/noVIetsno/Rg==mQz81QE8MwqOtC03' },
            contentType: 'application/json'
    });

    let data = await response.json();

    
    result.innerHTML = `
        <p class="quote" id="quote">${data[0].quote}</p>

        <h1 class="font-bold">${ data[0].author}</h1>
    `
    } catch(e){
        console.log("could not find quote");
    }

    
}

// Wenn die Abfrage nicht geht, liegt es wahrscheinlich daran, dass die maximale Anzahl der Abfrage erreicht wurden.
// Am besten bei der Website: https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-image-search
// einen Account machen. Eine bestimmte Anzahl von Abfragen wird zur Verfügung gestellt.


async function generate(query, event){
    event.preventDefault();
    const url = 'https://real-time-image-search.p.rapidapi.com/search?query='+query+'&region=us'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb5c4db86cmsh2d70097e9d529dcp1099eajsn5bafeb6fa442',
		    'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options)
    const img = await response.json();
    // console.log(img.data[0].url);
    return <img src={img.data[0].url} alt="output"></img>
}
export default generate
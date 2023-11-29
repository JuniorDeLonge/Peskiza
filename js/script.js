// @juniordelonge

const API_KEY = 'AIzaSyD5FBuMk_7_CCk4ws1qE4Z5uNZaTG7CACY';
const CX_CODE = 'a31b17ca840904da5';

async function suggestGoogle() {
    try {
        const searchQuery = document.getElementById('searchInput').value;
        const url = "https://www.googleapis.com/customsearch/v1";
        const params = {
            key: API_KEY,
            cx: CX_CODE,
            q: searchQuery
        };

        const response = await axios.get(url, { params });
        const suggestions = response.data.spelling.correctedQuery;

        document.getElementById('suggestions').innerHTML = suggestions ? 'Você quis dizer: ' + suggestions : '';
    } catch (error) {
        console.error("Erro ao buscar sugestões:", error);
    }
}

async function searchGoogle() {
    try {
        const searchQuery = document.getElementById('searchInput').value;
        const url = "https://www.googleapis.com/customsearch/v1";
        const params = {
            key: API_KEY,
            cx: CX_CODE,
            q: searchQuery
        };

        const response = await axios.get(url, { params });
        const results = response.data.items.map(item => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.snippet}</p>
                </div>
            </div>
        `);

        document.getElementById('searchResults').innerHTML = results.join('');
    } catch (error) {
        console.error("Erro ao buscar resultados:", error);
    }
}

async function searchImages() {
    try {
        const searchQuery = document.getElementById('searchInput').value;
        const url = "https://www.googleapis.com/customsearch/v1";
        const params = {
            key: API_KEY,
            cx: CX_CODE,
            q: searchQuery,
            searchType: 'image'
        };

        const response = await axios.get(url, { params });
        const results = response.data.items.map(item => `
            <div class="card mb-3">
                <img src="${item.link}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.snippet}</p>
                </div>
            </div>
        `);

        document.getElementById('searchResults').innerHTML = results.join('');
    } catch (error) {
        console.error("Erro ao buscar resultados de imagens:", error);
    }
}
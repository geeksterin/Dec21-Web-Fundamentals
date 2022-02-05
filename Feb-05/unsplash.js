console.clear();
console.log('😎');

const API_KEY = "7jU9WtqNhEfVMVwvYOxmTLeqbLal3gLE9wwQ-W53o7M";
const API_SECRET = "7txsPHXA7V9HolUEmdNc1-OKiFQ97Kodt8-yE0iaTTE";

let search_param = "orange";
fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${search_param}&per_page=30`)
.then(function(res) {
    return res.json();
})
.then(function(res) {
    console.log(res.results.length);
    for(let i = 0; i < res.results.length; i = i + 1) {
        let single_result = res.results[i];
        let single_url = single_result.urls.regular;
        console.log(single_url);
    }
})
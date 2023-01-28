var input_url;
var btn = document.getElementById("btn");
var short_url = document.getElementById("shortened-url");
var short_urls = [];

btn.onclick = function()
{
    input_url = document.getElementById("input-url").value;
    fetch("https://api.shrtco.de/v2/shorten?url=" + input_url)
    .then(response => {
        return response.json();
    })
    .then(api_response => {
        var api_response = JSON.parse(JSON.stringify(api_response));
        console.log(api_response.result.short_link);
        short_url.innerHTML = input_url + "  -  " + api_response.result.short_link;
    });
};
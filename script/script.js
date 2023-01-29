var input_url;
var btn = document.getElementById("btn");
var shortened_url;

btn.onclick = async function()
{
    input_url = document.getElementById("input-url").value;

    await fetch("https://api.shrtco.de/v2/shorten?url=" + input_url)
    .then(response => {
        return response.json();
    })
    .then(api_response => {
        var api_response = JSON.parse(JSON.stringify(api_response));
        shortened_url = api_response.result.short_link;
    });

    var shortened_url_element = document.createElement("div");
    var button = document.createElement("button");
    button.innerText = "close";

    var copy = document.createElement("button");
    copy.innerText = "copy";

    shortened_url_element.innerHTML = shortened_url;

    shortened_url_element.className = "shortened-urls-container";
    button.className = "short-url-btn";
    copy.className = "short-url-btn";

    document.body.appendChild(shortened_url_element);
    shortened_url_element.appendChild(copy);
    shortened_url_element.appendChild(button);

    button.onclick = function()
    {
        button.parentElement.remove();
    }

    copy.onclick = function()
    {
        navigator.clipboard.writeText(shortened_url);
    }
};
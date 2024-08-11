function controlBot(action) {
    fetch(`/${action}`)
        .then(response => response.text())
        .then(data => alert("ERROR 404!!!!!!"))
        .catch(error => console.error('Error:', error));
}

function foxkzz_web() {
    window.location.href="./foxkzz_web/index.html" 
}

function tang_web() {
    window.location.href="./tang_web/index.html" 
}
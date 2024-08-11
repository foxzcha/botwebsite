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

const btn = document.querySelector(`.btn`);



btn.addEventListener(`click`, () => {
    btn.style.backgroundColor = `#fa120a`;
    btn.style.boxShadow = `0 0 50px #fa120a`;
    btn.style.transition = `.8s ease `;
    btn.textContent = "server joined :)";
    btn.text.transition = "1.4s ease"
});
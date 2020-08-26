let values = ['😉', '🤣', '😘', '😋', '🤓', '😣', '😍', '😵', '😴', '🤔'];
let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val3 = document.getElementById('val3');
let lever = document.getElementById('lever');

lever.onclick = () => {
    val1.classList.add('running');
    val2.classList.add('running');
    val3.classList.add('running');
    let start = setInterval(() => {
        val1.textContent = values[Math.floor(Math.random() * 10)];
        val2.textContent = values[Math.floor(Math.random() * 10)];
        val3.textContent = values[Math.floor(Math.random() * 10)];
    },400);
    setTimeout(() => {
        clearInterval(start);
        val1.classList.remove('running');
        val2.classList.remove('running');
        val3.classList.remove('running');
        if(val1.textContent === val2.textContent === val3.textContent){
            alert("Congratulations");
        }else{
            alert("Try again");
        }
    },2000);
}
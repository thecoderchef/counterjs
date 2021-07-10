let lowerCount = document.getElementById("lower-count");
let addCount = document.getElementById("add-count");
let counter = document.getElementById("counter");
let count_var = +Number(counter.innerHTML)
lowerCount.addEventListener('click', () => {
    if (count_var === 0) { return; }
    count_var--;
    counter.innerHTML = count_var
})

addCount.addEventListener('click', () => {
    if (count_var === 50) { return; }
    count_var++;
    counter.innerHTML = count_var
})

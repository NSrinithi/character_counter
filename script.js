var inp = document.getElementById("inp");
var count = document.getElementById("count");
var remaining = document.getElementById("remaining");
var btn = document.getElementById("btn");
var progress_bar = document.getElementById("progress_bar");
inp.addEventListener("input", function () {
    let c = inp.value.length;
    let r = 200 - c;
    let percentage = (c / 200) * 100;
    progress_bar.style.width = percentage + "%";
    if (c < 100) {
        count.style.color = "black";
        remaining.style.color = "black";
        remaining.textContent = r + " characters remaining";
        progress_bar.style.backgroundColor = "green";
    }
    else if (c < 150) {
        count.style.color = "orange";
        remaining.style.color = "orange";
        remaining.textContent = r + " characters remaining";
        progress_bar.style.backgroundColor = "orange";
    }
    else if (c < 200) {
        count.style.color = "red";
        remaining.style.color = "red";
        remaining.textContent = "⚠️ You're close to the limit.";
        progress_bar.style.backgroundColor = "red";

    }
    else {
        count.style.color = "red";
        remaining.style.color = "red";
        remaining.textContent = "✅ Character limit reached.";
        progress_bar.style.backgroundColor = "red";
    }
    count.textContent = c + "/200 characters";
})

btn.addEventListener("click", function () {
    console.log("hi");
    inp.value = "";
    count.textContent = "0/200 characters";
    remaining.textContent = "200 characters remaining";
    count.style.color = "black";
    remaining.style.color = "black";
    progress_bar.style.width = "0%";

})
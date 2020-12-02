// Grabbing Button
let loadBtn = document.querySelector(".load-btn");

// grabbing elements
let ul = document.querySelector(".display-data");

// ======================================== AJAX Starts Here
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
    if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        // code for displaying first 6 data
        for (var i = 0; i < 6; i++) {
            let createdli = document.createElement("li");
            createdli.setAttribute("class", "data-li");
            createdli.innerHTML = `<h2 class="title">Title:${users[i].id}</h2><span class="title-content">${users[i].title}</span><h2 class="title">Description:</h2><span class="title-content">${users[i].body}</span>`;
            ul.appendChild(createdli);
        }
        var a = i;
        // adding event listener on LOAD BUTTON
        loadBtn.addEventListener("click", () => {
            console.log("Button Clicked");
            for (var j = a; j < a + 6; j++) {
                if (j < 100) {
                    let createdli = document.createElement("li");
                    createdli.setAttribute("class", "data-li");
                    createdli.innerHTML = `<h2 class="title">Title:${users[j].id}</h2><span class="title-content">${users[j].title}</span><h2 class="title">Description:</h2><span class="title-content">${users[j].body}</span>`;
                    ul.appendChild(createdli);
                } else if (j >= 99) {
                    loadBtn.style.display = "none";
                }
            }
            a += 6;
        });
    } else {
        console.log("Some Error Occured");
        let createdli = document.createElement("li");
        createdli.textContent = "Oops..! Some Error Occured.";
        ul.appendChild(createdli);
    }
};
xhr.send();






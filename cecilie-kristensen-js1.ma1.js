// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

// question 2

const heading = document.querySelector("h3");

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");
console.log(heading.className);

// question 5

const paragraphs = document.querySelectorAll("p");

// question 6

const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7

function catName(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name)
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

catName(cats);

// question 8

function catNameh5(catArray){

    let names ="";

    for (let i = 0; i < catArray.length; i++){
        names += `<h5>${catArray[i].name}</h5>`;
    }

    console.log(names);

    return names;
}

// question 9 

resultsContainer.innerHTML = catNameh5(cats);

// question 10

function catNameDiv(catArray){

    let html ="";
    
    for (let i = 0; i < catArray.length; i++){

        let age = "Age unknown";

        if(catArray[i].age){
            age = catArray[i].age
        }

        html += `<div>
        <h5>${catArray[i].name}</h5>
        <p>${age}</p>
        </div>`;
    }

    console.log(html);

    return html;
}

resultsContainer.innerHTML = catNameDiv(cats);

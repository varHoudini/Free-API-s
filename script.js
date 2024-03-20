const naam = document.getElementById("name");
const gender = document.getElementById("gender");

function getGender() {
    const url = `https://api.genderize.io?name=${naam.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.gender) {
            gender.innerHTML = `${data.gender}`;
        } else {
            gender.innerHTML = "Gender not found";
        }
    })
    .catch(error => console.error('Error fetching gender:', error));
};
function getGender() {
    const naam = document.getElementById("name-gen");
    const gender = document.getElementById("gender");
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

function dataUsa() {
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    fetch(url)
    .then(res => res.json())
    .then(data => {

        const tableBody = document.querySelector('.container-2 tbody');
        tableBody.innerHTML = '';

        data.data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry['Nation']}</td>
                <td>${entry['Population']}</td>
                <td>${entry['Year']}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function nationalize() {
    const name = document.getElementById("name-nat");
    const nationality = document.getElementById("nationality");
    const url = `https://api.nationalize.io?name=${name.value}`;
    
    fetch(url)
    .then (res => res.json())
    .then(data => {
        if (data.country && data.country.length > 0) {

            const mostLikelyCountry = data.country[0];
            nationality.innerHTML = mostLikelyCountry.country_id;
            
        } else {
            nationality.innerHTML = "Nationality not found";
        }
    })
    .catch(error => console.error('Error fetching nationality:', error));
}




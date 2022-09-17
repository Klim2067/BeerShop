let beers = [];
let searchedItems = JSON.parse(localStorage.getItem('searched'));


function requestData() {
        fetch('https://api.punkapi.com/v2/beers?beer_name='+ searchedItems[0]).then(data => data.json())
        .then(data => beers = data)
        .then(() => renderBeers())
        }     
        
        function currentSearch() {
         fetch('https://api.punkapi.com/v2/beers?beer_name='+ document.querySelector('input').value).then(data => data.json())
        .then(data => beers = data)
        .then(() => clearView())
        .then(() => renderBeers())
        }

            function renderBeers() {
                const container = document.getElementById('container');
                beers.forEach(beer => {
                    const card = document.createElement('div');
                    card.classList.add('card')
                    const header = document.createElement('div')
                    header.style.textAlign='center'
                    header.style.padding='5px'    
                    header.innerText = beer.name;
                    const img = document.createElement('img');
                    img.classList.add('img')
                    img.src = beer.image_url;
                    
                    card.appendChild(img);
                    card.appendChild(header);
                    card.id = beer.id;
                    card.addEventListener('click', () => {
                        localStorage.setItem('idBeer', card.id)
                window.location.href = "second.html";      
                    });   
                    container.appendChild(card)
                })
            }
           
           requestData();

           function cartFun() {
                window.location.href = 'cart.html';
            }

            function clearView() {
                const elements = document.getElementsByClassName('card');
                while(elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
    }
            } 

            function catalog() {
                window.location.href = 'main.html';
            }

           
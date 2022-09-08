
let beers = [];
let pageId = 1;
let sum = 1;

        function requestData() {
let mainLink = 'https://api.punkapi.com/v2/beers?page=' + `${pageId}` + '&per_page=35'; 
          pageId++;          fetch(mainLink).then(data => data.json())
                .then(data => beers = data)
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
                card.id = sum;
                sum+=1;
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
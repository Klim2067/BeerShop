let beers = [];
let cartAr = JSON.parse(localStorage.getItem('cart'));
sum = 1 ;

        function requestData() {
            cartAr.forEach(el =>{if (el!==null) {

            fetch('https://api.punkapi.com/v2/beers/'+ el).then(data => data.json())
            
                .then(data => beers.push(data))
                .then(() => renderBeers())
            }
                })
        }
        
        function renderBeers() {
            console.log(beers)
            beers.forEach(beer => {
                const table = document.getElementById('table');
            let pivo = document.createElement('div');
          table.appendChild(pivo);
          pivo.id = sum;
          let img = document.createElement('img');
          let nameBeer = document.createElement('div');
          img.src = beer[0].image_url;
          nameBeer.innerText= beer[0].name
          pivo.appendChild(img);
          pivo.appendChild(nameBeer);


          
            })
            sum+=1;
        }

        requestData();
        function addToCart() {
            console.log('addToCart')
        }
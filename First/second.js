let beers = [];

        function requestData() {
            fetch('https://api.punkapi.com/v2/beers/'+ localStorage.getItem('idBeer')).then(data => data.json())
            
                .then(data => beers = data)
                .then(() => renderBeers())
        }
        function renderBeers() {
            const container = document.getElementById('container');
            console.log(beers)
                const nameOfBeer = document.getElementById('name');
                const aboutBeer = document.getElementById('aboutBig');
                const aboutSmall = document.getElementById("aboutSmall");
                const cost = document.getElementById('price');
                const unit = document.getElementById('unit');

                
                nameOfBeer.innerText = beers[0].name;
                aboutBeer.innerText = beers[0].name;
                aboutSmall.innerText = beers[0].description;
                cost.innerText = (beers[0].volume).value;
                unit.innerText = (beers[0].volume).unit;

                const picOfBeer = document.getElementById('pictureLeft');
                const smallPicOfBeer= document.getElementById("smallPictureLeftDown");
                const sellerPic = document.getElementById('picSeller');
                
                const img = document.createElement('img');
                img.classList.add('img')
                img.src = beers[0].image_url;
                picOfBeer.appendChild(img);
                const img2 = document.createElement('img');
                img2.classList.add('img2');
                img2.src = beers[0].image_url;
                smallPicOfBeer.appendChild(img2);
                const img3 = document.createElement('img');
                img3.classList.add('img3');
                img3.src = beers[0].image_url;
                sellerPic.appendChild(img3);
        }

        requestData();
        function addToCart() {
            console.log('addToCart')
        }
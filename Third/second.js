let beers = []

        function requestData() {
            fetch('https://api.punkapi.com/v2/beers/random').then(data => data.json())
            
                .then(data => beers = data)
                .then(() => renderBeers())
        }
        function renderBeers() {
            const container = document.getElementById('container');
            console.log(beers)
                const nameOfBeer = document.getElementById('name');
                const aboutBeer = document.getElementById('aboutBig');
                
                nameOfBeer.innerText = beers[0].name;
                aboutBeer.innerText = beers[0].name;

                const picOfBeer = document.getElementById('pictureLeft');
                const smallPicOfBeer= document.getElementById("smallPictureLeftDown")
                
                const img = document.createElement('img');
                img.classList.add('img')
                img.src = beers[0].image_url;
                picOfBeer.appendChild(img);
                const img2 = document.createElement('img');
                img2.classList.add('img2');
                img2.src = beers[0].image_url;
                smallPicOfBeer.appendChild(img2)
        }

        requestData();
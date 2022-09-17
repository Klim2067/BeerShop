let beers = [];
let cartAr = JSON.parse(localStorage.getItem('cart'));
let sum = 1 ;
let filterCartSecond = cartAr.filter(el => el!==null);
let ar = [];
let obj = {
    number : null,
    amount : 0 
}

for (let i = 0 ; i<filterCartSecond.length; i++) {
 obj.number =filterCartSecond[i];

    for (let x = 0 ; x<filterCartSecond.length; x++) {
        if (filterCartSecond[i]=== filterCartSecond[x]) {
         obj.amount+=1;
         
        }
    }
    ar.push(obj);
    obj = {
        number : null,
        amount : 0 
    };
}
let arTest = [];

ar.forEach(el => arTest.push(el.number))

console.log(arTest);    

for ( let i = 0; i<arTest.length;i++) { 
    for (let x = i+1; x<arTest.length;x++) {
       
        if (arTest[i] === arTest[x]) {

            ar[x] = null 
        }
    }
    }

console.log(ar);
let filterCart = ar.filter(el => el!==null);
console.log(filterCart)

let arData = [];





        function requestData() {
            filterCart.forEach(el =>{
            fetch('https://api.punkapi.com/v2/beers/'+ el.number).then(data => data.json())
                .then(data => beers.push(data))
                .then(arData.push(el.amount))
                })
                fetch('https://api.punkapi.com/v2/beers/').then(data => data.json())
                
                .then(() => renderBeers())
        }
       
        
        function renderBeers() {
            console.log(beers)
            beers.forEach(beer => {
                const table = document.getElementById('table');
            let pivo = document.createElement('div');
          table.appendChild(pivo);
          pivo.id = filterCart[sum-1].number;
          sum+=1;
          pivo.className = 'allCart';
          let img = document.createElement('img');
          let nameBeer = document.createElement('div');
          let divPicText = document.createElement('div');
          let divDeleteCount = document.createElement('div');
          let deleteBut = document.createElement('img');
          let count = document.createElement('input');
          divPicText.classList = 'divPicText';
count.classList = 'count';
divDeleteCount.classList = 'divDeleteCount';
count.placeholder= arData[sum-2];
          img.src = beer[0].image_url;
          deleteBut.src = 'http://cdn.onlinewebfonts.com/svg/img_177378.png';
          img.classList = 'image';
          deleteBut.classList = 'deleteBut';
          nameBeer.innerText= beer[0].name;
          nameBeer.classList = 'nameOfBeer';
          let sum2 = 1;
          deleteBut.addEventListener('click', () => {
       
          let vodka = document.getElementById(pivo.id);
         vodka.remove()
         let nasral = pivo.id;
     
         
let deleteFilter = filterCartSecond.filter(el => el !== nasral )
filterCartSecond = deleteFilter;
         localStorage.setItem('cart', JSON.stringify(deleteFilter))


        });
       
          pivo.appendChild(divPicText);
          divPicText.appendChild(img);
          divPicText.appendChild(nameBeer);
          pivo.appendChild(divDeleteCount);
          divDeleteCount.appendChild(count);
          divDeleteCount.appendChild(deleteBut);
          
            })
            
        }

        requestData();
        function addToCart() {
            console.log('addToCart')
        }
        function pivasik() {
       
            let delDiv = document.getElementById("mainCart");
            delDiv.remove();
            document.getElementById("clearAll").remove();
  localStorage.removeItem('cart')
  
          }

          function catalog() {
            window.location.href = 'main.html';
        }
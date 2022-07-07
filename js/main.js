const foto = {
    '15452':{
        'brend':'Барбара Палвин', 
        'img': 'https://i0.wp.com/bigbucks.com.ua/wp-content/uploads/2021/01/31-barbara-palvin.jpg', 
        'fotoSize':'20 х 50', 
        'country': 'Венгрия', 
        'reiting': 115, 
        'price': 719, 
        'sklad': 'yes',
    },
    '246545':{
        'brend':'Жасмин Тукс', 
        'img': 'https://karavan.ua/wp-content/uploads/2020/09/GettyImages-626804278.jpg',
        'fotoSize': '40 х 40' ,
        'country': 'США',
        'reiting': 53, 
	    'price': 619,
        'sklad':'yes',
    },
    '3223':{
        brend:'Леоми Андерсон', 
        'img': 'https://karavan.ua/wp-content/uploads/2017/11/GettyImages-876613968.jpg', 
        'fotoSize': '52 x 52', 
        'country': 'Ямайка', 
        'reiting': 75,
        'price': 319, 
        'sklad':'yes',
    },
    '4561':{brend:'Адриана Лима', 
        'img': 'https://i0.wp.com/bigbucks.com.ua/wp-content/uploads/2021/01/26-adriana-lima.jpg', 
        'fotoSize':'20 x 20', 
        'country': 'Бразилия', 
        'reiting': 48, 
        'price': 419, 
        'sklad':'yes',
	},
    '5421':{
        'brend':'Стелла Максвелл', 
        'img': 'https://karavan.ua/wp-content/uploads/2019/03/GettyImages-1059478782-e1552650222340.jpg', 
        'fotoSize':'20 x 20',
        'country':'Бельгия', 
        'reiting': 78, 
        'price': 552, 
        'sklad':'no',
    },
}
console.log(foto);

const angels = [
    {
        'brend':'Барбара Палвин', 
        'img': 'https://i0.wp.com/bigbucks.com.ua/wp-content/uploads/2021/01/31-barbara-palvin.jpg', 
        'fotoSize':'20 х 50', 
        'country': 'Венгрия', 
        'reiting': 115, 
        'price': 719, 
        'sklad': 'yes',
    },
    {
        'brend':'Жасмин Тукс', 
        'img': 'https://karavan.ua/wp-content/uploads/2020/09/GettyImages-626804278.jpg',
        'fotoSize': '40 х 40' ,
        'country': 'США',
        'reiting': 53, 
	    'price': 552,
        'sklad':'yes',
    },
    {
        brend:'Леоми Андерсон', 
        'img': 'https://karavan.ua/wp-content/uploads/2017/11/GettyImages-876613968.jpg', 
        'fotoSize': '52 x 52', 
        'country': 'Ямайка', 
        'reiting': 75,
        'price': 319, 
        'sklad':'yes',
    },
    {brend:'Адриана Лима', 
        'img': 'https://i0.wp.com/bigbucks.com.ua/wp-content/uploads/2021/01/26-adriana-lima.jpg', 
        'fotoSize':'20 x 20', 
        'country': 'Бразилия', 
        'reiting': 48, 
        'price': 419, 
        'sklad':'yes',
	},
    {
        'brend':'Стелла Максвелл', 
        'img': 'https://karavan.ua/wp-content/uploads/2019/03/GettyImages-1059478782-e1552650222340.jpg', 
        'fotoSize':'20 x 20',
        'country':'Бельгия', 
        'reiting': 78, 
        'price': 552, 
        'sklad':'no',
    },
]
// вывод в html
let outFoto = '';
for (let key in foto){
    outFoto += 'Имя: ' + foto[key].brend + '<br>';
    outFoto += '<img src="' + foto[key].img+'">' +'<br>';
    outFoto += 'Размер: ' + foto[key].fotoSize + '<br>';
    outFoto += 'Страна: ' + foto[key].country + '<br>';
    outFoto += 'Рейтинг: ' + foto[key].reiting + '<br>';
    outFoto += 'Цена: ' + foto[key].price + '<br>';
    outFoto += 'Наличие на складе: ' + foto[key].sklad + '<br>' + '<hr>';
}

document.querySelector('.outselect').innerHTML = outFoto;
// сортировка
let newList = []

for(const item of angels){
    if (angels.price == 552) newList.push(user) 
}
console.log(newList);
function filter(arr,prop,value){
    
}

//coртировка по убыванию
let prodactSelectUp = document.querySelector('.doun');
//сортировка по рейтингу
// сортировка по размеру
//сортировка страна
// for (let i = 0; i<= foto.lenght; i++){
//     for(let d = i; d < foto.lenght; d++){
//         if(foto[i] > foto[d]){
//             let temp = foto[i];
//             foto[i] =foto[d];
//         } 
//     }
// }
// console.log(foto);

// function mySort(){
//     let nav = document.querySelector(.nav);
//     for(let i = 0; i< nav.children.lenght; i++){
//         for( let d = 0; d < nav.children.lenght; d++){
//             if(+nav.children[i].getAttribute('.data-sort') > +nav.children[d].getAttribute('.data-sort'))
//         }
//     }
// }

// let nav = document.querySelector('.nav');
// replacedNode = wraper.replaceChild(nav.children[1],nav.children[0]);

// const prodacts = document.querySelector('.prodacts');
// render(){
//     foto.forEach(({country,reiting}) =>{
//         console.log('country','reiting');
//     })
// } 
// const productPage = new Products();
// productPage.render();






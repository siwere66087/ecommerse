const product = [
    {
        id: 0,
        image: 'https://th.bing.com/th/id/R.0bab76be29423ddc290ccf64fe5166a1?rik=Pzm1hIjsKd37XQ&riu=http%3a%2f%2fwww.bikerperformance.com%2fimages%2fproducts%2ffirstgear-the-new-kenya-menstextile-jacket-black-81366.jpg&ehk=ew8wQeVat3HeXd0FtQjAoY3AOMT8R0tl7JJDSBL%2boLg%3d&risl=&pid=ImgRaw&r=0',
        title: 'men jacket',
        description:'',
        price:299
    },
    {
        id: 1,
        image: 'https://th.bing.com/th/id/OIP.4vTwrv8zrAs3N0_tYmnFRgHaJ4?pid=ImgDet&rs=1',
        title: 'jacket ',
        description:'bomber jacket aviator',
        price: 460,
    },
    {
        id: 2,
        image: 'https://th.bing.com/th/id/OIP.Wta10aWlDd_dskBaKc5vWgHaKu?pid=ImgDet&rs=1',
        title: 'jacket',
        description:'puffer jacket',
        price: 330,
    },
    {
        id: 3,
        image: 'https://th.bing.com/th/id/R.72ff45591494e8a734daec91be285c7a?rik=K%2fVZowvpj%2feuig&riu=http%3a%2f%2fwww.countryoutfitter.com%2fon%2fdemandware.static%2f-%2fSites-master-product-catalog-shp%2fdefault%2fdwcb68efda%2fimages%2fB22%2f082B22_47_P1.JPG&ehk=lAzpU92R%2bLSg%2f5LTix%2f0tYWs7FqEHr3C0oI94SmA5z0%3d&risl=&pid=ImgRaw&r=0',
        title: 'jacket',
        description:'lambskin',
        price: 460,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title,description, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <p>${description}</p>
        <h2>R ${price}.00</h2>
        `+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        <div class = "color-content">
        <h3>select color</h3>
        <div class = "color-groups">
          <div class = "color color-white active-color"></div>
          <div class = "color color-black" >  </div>
          <div class = "color color-yellow"></div>
          <div class = "color color-blue"></div>
          <div class = "color color-red"></div>
        </div>
      </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.unshift({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.slice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }
    else{
       {
            var {image, title,description, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <p style='font-size:8px;'>${description}</p>
                <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        };
    }

    
}

const color_btns = document.querySelectorAll('.color');
color_btns .forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if(!color.classList.contains('active-color')){
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
            resetActiveBtns();
            color.classList.add('active-color');
            setNewColor(colorName)
        }
    });
})


function resetActiveBtns(){
    color_btns.forEach(color => {
        color.classList.remove('active-color');
    });
}


function setNewColor(color){
    document.querySelector('.row-img').src = `_${color}.`;
}



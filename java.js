let i=0;
let cont=0;
// Carrusel de imagenes
// Largo Contenedor de imagenes
const ul = document.querySelector(".slide-ul");
let slide = ul.children;
let numIma = slide.length;
let slideUlWidth = numIma*100;

ul.style.width = `${slideUlWidth}%`;

const productsTitle = document.querySelector(".products-title");
const productsContainer = document.querySelector(".products");
const kitsTitle = document.querySelector(".kits-title");
const kitsContainer = document.querySelector(".kits");
const shampooTitle = document.querySelector(".shampoo-title");
const shampooContainer = document.querySelector(".shampoo");
const aboutUsTitle = document.querySelector(".info-title");
const aboutUsContainer = document.querySelector(".info");
let productsTimer,kitsHeightTimer,shampooHeightTimer;

let containerInfo = {
	products : {
		state: "closed" ,
		length: productsContainer.children.length/2,
		arrow: document.getElementById("open-products")
	},
	kits : {
		state: "closed" ,
		length: kitsContainer.children.length,
		arrow: document.getElementById("open-kits")
	},
	shampoo : {
		state: "closed" ,
		length: shampooContainer.children.length,
		arrow: document.getElementById("open-shampoo")
	},
	aboutUs: {
		state: "closed",
		arrow: document.getElementById("open-info")
	}
};

productsTitle.addEventListener("click",()=>{
	clearTimeout(productsTimer);
	if (containerInfo.products.state=="closed") {
		productsContainer.style.height = "auto";
		productsContainer.style.maxHeight = `${50*containerInfo.products.length}px`;
		containerInfo.products.arrow.style.transform = "rotate(90deg)";
		containerInfo.products.state="opened";
	}
	else{
		
		productsContainer.style.maxHeight = `0px`;
		containerInfo.products.state = "closed";
		containerInfo.products.arrow.style.transform = "rotate(0deg)";
		
		kitsContainer.style.padding = `0px`;
		kitsContainer.style.maxHeight = `0px`;
		containerInfo.kits.state = "closed";
		containerInfo.kits.arrow.style.transform = "rotate(0deg)";

		shampooContainer.style.padding = `0px`;
		shampooContainer.style.maxHeight = `0px`;
		containerInfo.shampoo.state = "closed";
		containerInfo.shampoo.arrow.style.transform = "rotate(0deg)";

		productsTimer = setTimeout(()=>{
			productsContainer.style.height = "0px";
			kitsContainer.style.height = "0px";
			shampooContainer.style.height = "0px";
			clearTimeout(productsTimer);
		},1000)
	}
})

kitsTitle.addEventListener("click",()=>{
	clearTimeout(kitsHeightTimer);
	if (containerInfo.kits.state=="closed") {
		kitsContainer.style.height = "auto";
		kitsContainer.style.padding = `10px 0px`;
		kitsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)}px`;
		containerInfo.kits.arrow.style.transform = "rotate(90deg)";

		if (containerInfo.shampoo.state=="opened") {
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;	
		}
		else{
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+50*containerInfo.products.length}px`;
		}	
		containerInfo.kits.state="opened";
	}
	else{
		kitsContainer.style.maxHeight = `0px`;
		kitsContainer.style.padding = `0px 0px`;
		containerInfo.kits.arrow.style.transform = "rotate(0deg)";

		if (containerInfo.shampoo.state=="opened") {
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;	
		}
		else{
			productsContainer.style.maxHeight = `${50*containerInfo.products.length}px`;
		}	
		kitsHeightTimer = setTimeout(()=>{
			kitsContainer.style.height = "0px";
			clearTimeout(kitsHeightTimer);
		},1000)
		containerInfo.kits.state = "closed";
	}
})

shampooTitle.addEventListener("click",()=>{
	clearTimeout(shampooHeightTimer);
	if (containerInfo.shampoo.state=="closed") {
		shampooContainer.style.height = "auto";
		shampooContainer.style.padding = `10px 0px`;
		shampooContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)}px`;
		containerInfo.shampoo.arrow.style.transform = "rotate(90deg)";

		if (containerInfo.kits.state=="opened") {
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;	
		}
		else{
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;
		}	
		containerInfo.shampoo.state="opened";
	}
	else{
		shampooContainer.style.maxHeight = `0px`;
		shampooContainer.style.padding = `0px 0px`;
		containerInfo.shampoo.arrow.style.transform = "rotate(0deg)";

		if (containerInfo.kits.state=="opened") {
			productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+50*containerInfo.products.length}px`;	
		}
		else{
			productsContainer.style.maxHeight = `${50*containerInfo.products.length}px`;
		}	

		shampooHeightTimer = setTimeout(()=>{
			shampooContainer.style.height = "0px";
			clearTimeout(shampooHeightTimer);
		},1000)
		containerInfo.shampoo.state = "closed";
	}
})

window.addEventListener("resize",()=>{
	if(containerInfo.shampoo.state=="opened" && containerInfo.kits.state=="opened"){
		shampooContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)}px`;
		kitsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)}px`;
		productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;
	}
	else if(containerInfo.shampoo.state=="opened"){
		shampooContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)}`;
		productsContainer.style.maxHeight = `${rowHeight(containerInfo.shampoo.length)+50*containerInfo.products.length}px`;
	}
	else if (containerInfo.kits.state=="opened") {
		kitsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)}px`;
		productsContainer.style.maxHeight = `${rowHeight(containerInfo.kits.length)+50*containerInfo.products.length}px`;
	}
})

aboutUsTitle.addEventListener("click",(e)=>{
	if (containerInfo.aboutUs.state=="closed") {
		aboutUsContainer.style.maxHeight = `110%`;
		aboutUsContainer.style.padding = "10px 0px";
		containerInfo.aboutUs.state="opened";
		containerInfo.aboutUs.arrow.style.transform = "rotate(90deg)";
	}
	else if (containerInfo.aboutUs.state="opened") {
		aboutUsContainer.style.maxHeight = `0`;
		aboutUsContainer.style.padding = "0px 0px";
		containerInfo.aboutUs.state="closed";
		containerInfo.aboutUs.arrow.style.transform = "rotate(0deg)";
	}
})

function rowHeight(containerLength){
	if (window.innerWidth<540) {
		return containerLength*460;
	}
	else if(containerLength<=Math.floor(window.innerWidth/270)){
		return 460;
	}
	else{
		// Revisar
		return Math.ceil(containerLength/Math.floor(window.innerWidth/270))*460;
	}
}


// Carrito

// Agregar al carrito

const list = document.querySelector(".purchases-list");
const kitButton = document.querySelector(".kit-button");
const acondicionadorButton = document.querySelector(".acondicionador-button");
const caidaButton = document.querySelector(".caida-button");
const grasoButton = document.querySelector(".graso-button");
const normalButton = document.querySelector(".normal-button");
const secoButton = document.querySelector(".seco-button");

const carritoIcon = document.querySelector(".carrito-icon");
const carritoHeart = document.querySelector(".carrito-heart");
const carrito = document.querySelector(".carrito");
const carritoContent = document.querySelector(".purchases");
const shadow = document.querySelector(".shadow");

const kitCardPrice = document.getElementById("kit-price");
const kitCardQuantity = document.getElementById("kit-quantity");

const acoCardPrice = document.getElementById("aco-price");
const acoCardQuantity = document.getElementById("aco-quantity");

const caidaCardPrice = document.getElementById("caida-price");
const caidaCardQuantity = document.getElementById("caida-quantity");

const grasoCardPrice = document.getElementById("graso-price");
const grasoCardQuantity = document.getElementById("graso-quantity");

const normalCardPrice = document.getElementById("normal-price");
const normalCardQuantity = document.getElementById("normal-quantity");

const secoCardPrice = document.getElementById("seco-price");
const secoCardQuantity = document.getElementById("seco-quantity");

const subtotalPrice = document.getElementById("subtotal-price");
const subtotalQuantity = document.getElementById("subtotal-quantity");


let kitCard;

let productList = {
	length: 6,
	kitInfo:{
		compra:true,
		cantidad: 0,
		precio:1500,
		carrito:""
	},
	acoInfo:{
		compra:true,
		cantidad: 0,
		precio:1000,
		carrito:""
	},
	caidaInfo:{
		compra:true,
		cantidad: 0,
		precio:1200,
		carrito:""
	},
	grasoInfo:{
		compra:true,
		cantidad: 0,
		precio:1150,
		carrito:""
	},
	normalInfo:{
		compra:true,
		cantidad: 0,
		precio:900,
		carrito:""
	},
	secoInfo:{
		compra:true,
		cantidad: 0,
		precio:1250,
		carrito:""
	}
};

// C Altura

// Plegado y desplegado

let plegado = true;

carrito.addEventListener("click",plegar);
shadow.addEventListener("click",plegar);

function plegar(){
	if (plegado) {
		mostrar("0px","20","#0009");
		carritoIcon.style.color = "#7c54ab";
		plegado = false;
	}
	else{
		mostrar("-101vw","-20","#0000");
		plegado = true;
	}
}

function mostrar(rightposition,zindexvalue,backgroundvalue){
	carritoContent.style.right = rightposition;
	shadow.style.zIndex = zindexvalue;
	shadow.style.backgroundColor = backgroundvalue;
}

function selection(pInfo){
	if (pInfo.compra==false) {
		pInfo.carrito[0].addEventListener("change",()=>{ 
			pInfo.carrito[1].innerHTML = `$${productList.grasoInfo.precio*grasoCardQuantity.value}`;
		});
	}
}

// Agregar al carrito

let rows = 0;

kitCardQuantity.addEventListener("change",()=>{ 
	kitCardPrice.innerHTML = `$${productList.kitInfo.precio*kitCardQuantity.value}`;
});
acoCardQuantity.addEventListener("change",()=>{ 
	acoCardPrice.innerHTML = `$${productList.acoInfo.precio*acoCardQuantity.value}`;
});
caidaCardQuantity.addEventListener("change",()=>{ 
	caidaCardPrice.innerHTML = `$${productList.caidaInfo.precio*caidaCardQuantity.value}`;
});
grasoCardQuantity.addEventListener("change",()=>{ 
	grasoCardPrice.innerHTML = `$${productList.grasoInfo.precio*grasoCardQuantity.value}`;
});
normalCardQuantity.addEventListener("change",()=>{ 
	normalCardPrice.innerHTML = `$${productList.normalInfo.precio*normalCardQuantity.value}`;
});
secoCardQuantity.addEventListener("change",()=>{ 
	secoCardPrice.innerHTML = `$${productList.secoInfo.precio*secoCardQuantity.value}`;
});

kitButton.addEventListener("click",()=>{
	productList.kitInfo.cantidad+=parseInt(kitCardQuantity.value);
	agregarAlCarrito(productList.kitInfo.compra,"slide/Kit Lupina.png","Kit Lupina",productList.kitInfo.precio,productList.kitInfo.cantidad,"cantidadKit","precioKit","deleteKit","deleteSymbolKit");	
	productList.kitInfo.compra = false;
});

acondicionadorButton.addEventListener("click",()=>{
	productList.acoInfo.cantidad+=parseInt(acoCardQuantity.value);
	agregarAlCarrito(productList.acoInfo.compra,"slide/Acondicionador sólido natural.png","Acondicionador",productList.acoInfo.precio,productList.acoInfo.cantidad,"cantidadAco","precioAco","deleteAco","deleteSymbolAco");
	productList.acoInfo.compra = false;
});

caidaButton.addEventListener("click",()=>{
	productList.caidaInfo.cantidad+=parseInt(caidaCardQuantity.value);
	agregarAlCarrito(productList.caidaInfo.compra,"slide/Shampoo sólido natural Control Caída.png","Control Caída",productList.caidaInfo.precio,productList.caidaInfo.cantidad,"cantidadCaida","precioCaida","deleteCaida","deleteSymbolCaida");	
	productList.caidaInfo.compra = false;
});

grasoButton.addEventListener("click",()=>{
	productList.grasoInfo.cantidad+=parseInt(grasoCardQuantity.value);
	agregarAlCarrito(productList.grasoInfo.compra,"slide/Shampoo sólido natural para Cabello Graso.png","Cabello Graso",productList.grasoInfo.precio,productList.grasoInfo.cantidad,"cantidadGraso","precioGraso","deleteGraso","deleteSymbolGraso");
	productList.grasoInfo.compra = false;
});

normalButton.addEventListener("click",()=>{
	productList.normalInfo.cantidad+=parseInt(normalCardQuantity.value);
	agregarAlCarrito(productList.normalInfo.compra,"slide/Shampoo sólido natural para Cabello Normal.png","Cabello Normal",productList.normalInfo.precio,productList.normalInfo.cantidad,"cantidadNormal","precioNormal","deleteNormal","deleteSymbolNormal");
	productList.normalInfo.compra = false;
});

secoButton.addEventListener("click",()=>{
	productList.secoInfo.cantidad+=parseInt(secoCardQuantity.value);
	agregarAlCarrito(productList.secoInfo.compra,"slide/Shampoo sólido natural para Cabello Seco.png","Cabello Seco",productList.secoInfo.precio,productList.secoInfo.cantidad,"cantidadSeco","precioSeco","deleteSeco","deleteSymbolSeco");
	productList.secoInfo.compra = false;
});


function agregarAlCarrito(time,portada,titulo,valor, cantidadProd, cantidadID, precioID, deleteContID, deleteSymbolID){

	if (time) {
		const trashCont = document.createElement("DIV");
		trashCont.classList.add("delete");
		trashCont.setAttribute("id", deleteContID);

		const trash = document.createElement("I");
		trash.classList.add("fa-solid");
		trash.classList.add("fa-trash-can");
		trash.setAttribute("id", deleteSymbolID);

		const pInList = document.createElement("DIV");
		pInList.classList.add("product-in-list");

		const refer = document.createElement("DIV");
		refer.classList.add("reference");

		const texto = document.createElement("P");
		texto.innerHTML = titulo;

		const ima = document.createElement("IMG");
		ima.setAttribute("src",portada);

		const precio = document.createElement("P");
		precio.classList.add("list-values");
		precio.innerHTML = `$${valor*cantidadProd}`;
		precio.setAttribute("id", precioID);

		const numInp = document.createElement("P");
		numInp.classList.add("list-values");
		numInp.innerHTML = cantidadProd;
		numInp.setAttribute("id", cantidadID);

		trashCont.appendChild(trash);

		refer.appendChild(texto);
		refer.appendChild(ima);

		pInList.appendChild(trashCont);
		pInList.appendChild(refer);
		pInList.appendChild(numInp);
		pInList.appendChild(precio);

		list.appendChild(pInList);
		list.style.gridTemplateRows= `repeat(${list.children.length}, 25vh)`;

		eliminar(trashCont,pInList,"deleteKit","deleteAco","deleteCaida","deleteGraso","deleteNormal","deleteSeco");
		eliminar(trash,pInList,"deleteSymbolKit","deleteSymbolAco","deleteSymbolCaida","deleteSymbolGraso","deleteSymbolNormal","deleteSymbolSeco");
	}
	else{
		const inpChange = document.getElementById(cantidadID);
		const priceChange = document.getElementById(precioID);
		cantidadProd = parseInt(cantidadProd);
		inpChange.innerHTML = cantidadProd;
		priceChange.innerHTML = valor*cantidadProd;
	}
	subtotalPrice.innerHTML = `$${productList.kitInfo.cantidad*productList.kitInfo.precio+productList.acoInfo.cantidad*productList.acoInfo.precio+productList.caidaInfo.cantidad*productList.caidaInfo.precio+productList.grasoInfo.cantidad*productList.grasoInfo.precio+productList.normalInfo.cantidad*productList.normalInfo.precio+productList.secoInfo.cantidad*productList.secoInfo.precio}`;
	subtotalQuantity.innerHTML = productList.kitInfo.cantidad+productList.acoInfo.cantidad+productList.caidaInfo.cantidad+productList.grasoInfo.cantidad+productList.normalInfo.cantidad+productList.secoInfo.cantidad;

	carritoIcon.style.color="#0a3";
	carritoHeart.style.color="#0a3";
	carritoHeart.style.top="-10px";
	setTimeout(()=>{
		carritoHeart.style.color="transparent";
		carritoHeart.style.top="15px";
	},200);
}

function eliminar(eliminator,eliminated,kitCase,acoCase,caidaCase,grasoCase,normalCase,secoCase){
	eliminator.addEventListener("click",(e)=>{
		switch(e.target.id){
			case kitCase :
			productList.kitInfo.compra = true;
			productList.kitInfo.cantidad = 0;
			break;

			case acoCase:
			productList.acoInfo.compra = true;
			productList.acoInfo.cantidad = 0;
			break;

			case caidaCase:
			productList.caidaInfo.compra = true;
			productList.caidaInfo.cantidad = 0;
			break;

			case grasoCase:
			productList.grasoInfo.compra = true;
			productList.grasoInfo.cantidad = 0;
			break;

			case normalCase:
			productList.normalInfo.compra = true;
			productList.normalInfo.cantidad = 0;
			break;

			case secoCase:
			productList.secoInfo.compra = true;
			productList.secoInfo.cantidad = 0;
			break;
		}

		eliminated.remove();
		list.style.gridTemplateRows= `repeat(${list.children.length}, 25vh)`;
		subtotalPrice.innerHTML = `$${productList.kitInfo.cantidad*productList.kitInfo.precio+productList.acoInfo.cantidad*productList.acoInfo.precio+productList.caidaInfo.cantidad*productList.caidaInfo.precio+productList.grasoInfo.cantidad*productList.grasoInfo.precio+productList.normalInfo.cantidad*productList.normalInfo.precio+productList.secoInfo.cantidad*productList.secoInfo.precio}`;
		subtotalQuantity.innerHTML = productList.kitInfo.cantidad+productList.acoInfo.cantidad+productList.caidaInfo.cantidad+productList.grasoInfo.cantidad+productList.normalInfo.cantidad+productList.secoInfo.cantidad;
	})
}

// Puntos

const radio = document.querySelector(".radio");
const radioFragment = document.createDocumentFragment();

for(cont=0; cont<numIma; cont++){
	const point = document.createElement("INPUT");
	point.classList.add("point");
	point.type = "radio";
	point.name = "change";
	if (cont==0) {
		point.checked = true ;
	}
	radioFragment.appendChild(point);
}

radio.appendChild(radioFragment);
let input = radio.children;
radio.addEventListener("click", pointChange);

// Flechas

const derecha = document.querySelector(".right-container");
const izquierda = document.querySelector(".left-container");

setInterval(move,5000);

derecha.addEventListener("click",move);

izquierda.addEventListener("click",(e)=>{
	i-=2;
	if(i==-2){
		i=numIma-2;
	}
	move();
});

function move(){
	i+=1;
	if (i>numIma-1) {
		i=0;
	}
	ul.style.transform = `translateX(${-100*i}vw)`;
	input[i].checked = true;
}

function pointChange(){
	for(cont=0; cont<numIma; cont++){
		if (input[cont].checked) {
			ul.style.transform = `translateX(${-100*cont}vw)`;
			i=cont;
		}
	}
}

// COMPRAR

const buyButton = document.querySelector(".buy");

buyButton.addEventListener("click",()=>{
	if (list.children.length>0) {
		alert("Lo lamento, esta función no esta disponible de momento");
	}	
})
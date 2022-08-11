import './index.css'


class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){
        const element = document.createElement('div')
        element.classList.add('card')
        element.innerHTML = `
            <div>
                <strong class="strong">Product</strong>: <span class="mr-6" >${product.name}</span>
                <strong class="strong">Price</strong>: <span class="mr-6" >${product.price}$</span>
                <strong class="strong">Year</strong>: <span class="mr-6" >${product.year}</span>    
            </div>

            <a name="delete"  class="px-3 py-4 font-medium text-white bg-red-700 hover:bg-red-500 transition duration-200  rounded-lg" href="#"> Delete </a>
        `

        document.getElementById('product-list').appendChild(element)
        
    }

    deleteProduct(element){
        if(element.name === "delete"){
            element.parentElement.remove()
        }
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }
}

// Eventos
document.getElementById('product-form')
.addEventListener('submit', (e)=>{
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const ui = new UI()
    const product = new Product(name, price, year)
    ui.addProduct(product)

    ui.resetForm()
    e.preventDefault()

})

document.getElementById('product-list')
.addEventListener('click' ,(e)=>{

    const ui = new UI()
    ui.resetForm()
    ui.deleteProduct(e.target)
})
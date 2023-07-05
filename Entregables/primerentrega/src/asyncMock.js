const products =[
    {
        id:'1',
        name: 'Guirnaldas',
        price: 250,
        category: 'decoracion',
        img: 'https://i.pinimg.com/originals/ce/d1/58/ced158db57123f8487294e0b0deef214.jpg',
        stock: 500,
        description: 'Guirnaldas poersonalizadas Precio p/Letra',
    },
    {
        id:'2',
        name: 'Amigurumis',
        price: 1500,
        category: 'juguetes',
        img: 'https://amigurumi.today/wp-content/uploads/2022/12/Crissy-Crochet-Doll-Amigurumi-Pattern.jpg',
        stock: 500,
        description: 'Amigurumis varios - Selecciona el amigo que deseas',
    },
    {
        id:'3',
        name: 'Vinchas',
        price: 1500,
        category: 'vinchas',
        img: 'https://i.ytimg.com/vi/5BnysAnv0HU/maxresdefault.jpg',
        stock: 500,
        description: 'Vinchas y Bufandas',
    }


]

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id===productId))
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}

/*
export const getProductsByCategory=(productCategory)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.category===productCategory))
        },500)
    })
}*/
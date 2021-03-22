let products = [
    { id: 1, name: "book1" },
    { id: 2, name: 'book2' },
    { id: 3, name: 'book3' }
]

function update(idToUpdate) {
    const productIndex = products.findIndex((product) => {
        return product.id == idToUpdate;
    })

    console.log('Product index', productIndex);
    products[productIndex] = { id: 4, name: 'book4' };
}

function create(req) {
    const body = req.body;
    products.push(body);
}

function app_delete(idToDelete) {
    const productIndex = products.findIndex(p => p.id == idToDelete) 
    products.splice(productIndex, 1);
}

console.log(products);
update(1);

create({ body: { id: 4, name: 'book4' } })

app_delete(1);
console.log(products);
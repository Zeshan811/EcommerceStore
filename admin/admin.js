let products = JSON.parse(localStorage.getItem('products')) || [];

const form = document.getElementById('productForm');
const tableBody = document.querySelector('#inventoryTable tbody');

let editIndex = -1;

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
    renderTable();
}

function renderTable() {
    tableBody.innerHTML = '';

    products.forEach((product, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
                <td><img src="${product.image}" width="50"></td>
                <td>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function validateProduct(product) {
    return (
        product.name &&
        product.category &&
        product.image &&
        product.price > 0 &&
        product.stock > 0
    );
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = {
        name: form.name.value.trim(),
        price: parseFloat(form.price.value),
        category: form.category.value.trim(),
        stock: parseInt(form.stock.value),
        image: form.image.value.trim()
    };

    if (!validateProduct(product)) {
        alert("Please enter valid product details.");
        return;
    }

    if (editIndex === -1) {
        const existingIndex = products.findIndex(
            p => p.name === product.name &&
                p.category === product.category &&
                p.price === product.price &&
                p.image === product.image
        );

        if (existingIndex !== -1) {
            products[existingIndex].stock += product.stock;
        } else {
            products.push(product);
        }
    } else {
        products[editIndex] = product;
        editIndex = -1;
    }

    saveProducts();
    form.reset();
});
function deleteProduct(index) {
    if (confirm("Are you sure to delete this product?")) {
        products.splice(index, 1);
        saveProducts();
    }
}

function editProduct(index) {
    const product = products[index];

    form.name.value = product.name;
    form.price.value = product.price;
    form.category.value = product.category;
    form.stock.value = product.stock;
    form.image.value = product.image;

    editIndex = index;
}

renderTable();
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const productList = document.getElementById('productList');

    fetchButton.addEventListener('click', () => {
        fetch('/api/v1/products')
            .then(response => response.json())
            .then(data => {
                productList.innerHTML = '';

                data.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.textContent = `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price.toFixed(2)}`;
                    productList.appendChild(productItem);
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    });
});
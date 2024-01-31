// script.js
function sortProducts() {
    var sortSelect = document.getElementById('sortSelect');
    var productSection = document.getElementById('productSection');
    var products = Array.from(document.querySelectorAll('.product'));

    if (sortSelect.value === 'lowToHigh') {
        var sortedProducts = products.sort(function (a, b) {
            var priceA = parseFloat(a.querySelector('p').innerText.split('$')[1]);
            var priceB = parseFloat(b.querySelector('p').innerText.split('$')[1]);
            return priceA - priceB;
        });

        sortedProducts.forEach(function (product) {
            productSection.appendChild(product);
        });
    } else {
        // Reset to default order
        products.forEach(function (product) {
            productSection.appendChild(product);
        });
    }
}


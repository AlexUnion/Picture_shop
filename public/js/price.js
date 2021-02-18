const beautiPrice = function () {
    document.querySelectorAll('.price').forEach(node => {
        node.textContent = new Intl.NumberFormat(
            'en-En',
            {
                style: 'currency',
                currency: 'USD'
            }).format(node.textContent);
    });
};

beautiPrice();
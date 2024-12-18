function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
}

function updateTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-details p').textContent.split(': ')[1]);
        const quantity = parseInt(item.querySelector('input[type="number"]').value);
        total += price * quantity;
    });
    document.querySelector('.cart-total h2').textContent = `Загальна сума: ${total} грн`;
}

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', () => removeItem(button));
});

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', updateTotal);
});

updateTotal();


document.getElementById('checkout-btn').addEventListener('click', function(e) {
    if (document.querySelectorAll('.cart-item').length === 0) {
        e.preventDefault();
        alert('Ваш кошик порожній. Додайте товари перед оформленням замовлення.');
    }
});
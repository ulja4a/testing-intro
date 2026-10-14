function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
  return cart.map((item) => {
    if (item.id === product.id) {
      return { ...item, quantity: existingProduct.quantity + quantity };
    }

    return item;
  });
}

  return [...cart, { ...product, quantity }]; 
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

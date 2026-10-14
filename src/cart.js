function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  if (quantity <= 0) {
    throw new RangeError('Некорректное количество');
  }
  if (quantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    if (existingProduct.quantity + quantity > product.stock) {
      throw new RangeError('Недостаточно товара на складе');
    }
  return cart.map((item) => {
    if (item.id === product.id) {
      return { ...item, quantity: existingProduct.quantity + quantity };
    }
    return item;
  });
  }
  return [...cart, { ...product, quantity }]; 
}
function changeQuantity(cart, productId, quantity) { 
  if (quantity <= 0) {
    throw new RangeError('Некорректное количество');
  }
  return cart.map((item) => {
    if (item.id === productId) {
      if (quantity > item.stock) {
        throw new RangeError('Недостаточно товара на складе');
      }
      return { ...item, quantity: quantity };
    }
    return item;
  }); 
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

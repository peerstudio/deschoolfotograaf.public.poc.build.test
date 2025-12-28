!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "99069e462683fde0ac533c0f9d57bdbde12d31be" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9617fc55-22ef-4353-9f44-e9b76f652830", e._sentryDebugIdIdentifier = "sentry-dbid-9617fc55-22ef-4353-9f44-e9b76f652830");
    })();
  } catch (e) {
  }
}
class CartStore {
  #items = [];
  #isOpen = false;
  CART_VERSION = 2;
  // Increment this when cart structure changes
  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      const version = localStorage.getItem("cartVersion");
      if (saved && version === String(this.CART_VERSION)) {
        try {
          this.#items = JSON.parse(saved);
        } catch (e) {
          console.error("Failed to load cart from localStorage", e);
        }
      } else {
        localStorage.removeItem("cart");
        localStorage.setItem("cartVersion", String(this.CART_VERSION));
      }
    }
  }
  saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(this.#items));
      localStorage.setItem("cartVersion", String(this.CART_VERSION));
    }
  }
  get total() {
    return this.#items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  get totalItems() {
    return this.#items.reduce((sum, item) => sum + item.quantity, 0);
  }
  get allDownloadable() {
    return this.#items.length > 0 && this.#items.every((item) => item.partNumber?.toUpperCase() === "DWNLD");
  }
  get isEmpty() {
    return this.#items.length === 0;
  }
  get items() {
    return this.#items;
  }
  get isOpen() {
    return this.#isOpen;
  }
  add(product) {
    const existingItem = this.#items.find((item) => item.photoLinkId === product.photoLinkId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.#items.push({ ...product, quantity: 1 });
    }
    this.saveToStorage();
  }
  remove(photoLinkId) {
    this.#items = this.#items.filter((item) => item.photoLinkId !== photoLinkId);
    this.saveToStorage();
  }
  updateQuantity(photoLinkId, quantity) {
    const item = this.#items.find((item2) => item2.photoLinkId === photoLinkId);
    if (item) {
      if (quantity <= 0) {
        this.remove(photoLinkId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
      }
    }
  }
  getQuantity(photoLinkId) {
    const item = this.#items.find((item2) => item2.photoLinkId === photoLinkId);
    return item ? item.quantity : 0;
  }
  toggle() {
    this.#isOpen = !this.#isOpen;
  }
  close() {
    this.#isOpen = false;
  }
  clear() {
    this.#items = [];
  }
  clearStorage() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartVersion");
    }
  }
}
const cart = new CartStore();

export { cart as c };
//# sourceMappingURL=cart.svelte-BcxLrLPl.js.map

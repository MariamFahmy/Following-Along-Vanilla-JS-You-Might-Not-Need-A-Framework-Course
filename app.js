import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
// Link my Web Components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js'
import OrderPage from './components/OrderPage.js'
import ProductItem from './components/ProductItem.js'
import CartItem from './components/CartItem.js';

window.app = {}
app.store = Store; // one store for whole app, making Store global
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
    loadData()
    app.router.init()
})

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge")
    const quantity = app.store.cart.reduce(
        (acc, item) => acc + item.quantity, 0
    )
    badge.textContent = quantity
    badge.hidden = quantity == 0
})
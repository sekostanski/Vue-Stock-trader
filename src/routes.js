import Home from './components/Home.vue';
import ShopStocks from './components/StockShop/ShopStocks.vue';
import MyStocks from './components//Portfolio/MyStocks.vue';

export const routes = [
    {path: "/", component: Home},
    {path: "/buystocks", component: ShopStocks},
    {path: "/portfolio", component: MyStocks},
];
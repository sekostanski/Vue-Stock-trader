import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        stocks: [
            { id: 1, name: 'BMW', currentPrice: 110, startPrice: 110},
            { id: 2, name: 'Google', currentPrice: 200, startPrice: 200},
            { id: 3, name: 'Apple', currentPrice: 250, startPrice: 250},
            { id: 4, name: 'Twitter', currentPrice: 98, startPrice: 98},
            { id: 5, name: 'CryptoWallet', currentPrice: 78, startPrice: 78},
            { id: 6, name: 'Amazon', currentPrice: 313, startPrice: 313}
        ],
        portfolioStocks: [],
        balance: 12500
    },
    mutations: {
        buyStock: (state, payload) => {
            let stock = {
                id: payload.id,
                name: payload.name,
                purchasePrice: payload.currentPrice,
                up: payload.up,
                quantity: payload.quantity,
                averagePrice: [payload.currentPrice * payload.quantity]
            }
            state.portfolioStocks.push(stock);
        },
        updateStock: (state, payload) => {
            state.portfolioStocks[payload.index].quantity += payload.addQuantity;
            state.portfolioStocks[payload.index].purchasePrice = payload.averagePrice.toFixed(2);
            
        },
        sellAllStock: (state, payload) => {
            state.portfolioStocks.splice(payload.index,1);     
        },
        sellPartStock: (state, payload) => {
            state.portfolioStocks[payload.index].quantity -= payload.quantity;
        },
        changePrice: state => {
            state.stocks.map(el => {
                var randomNumber = Math.floor(Math.random()*19) - 9;
                if(el.currentPrice <= 10){
                    el.currentPrice += 10;
                } else {
                    el.currentPrice += randomNumber;
                }
            });
        },
        loadData: state => {
            Vue.http.get('data.json')
                .then(response => response.json())
                .then(data => {
                    if(data){
                        state.stocks = data.stocks;
                        state.balance = data.balance;
                        state.portfolioStocks = data.portfolioStocks ? data.portfolioStocks : [];
                    }
                });
        }
    },
    actions: {
        changePrice: context => {
            setInterval(function(){
                context.commit('changePrice');
            }, 3000);
        },
        fetchData: context => {
            context.commit('loadData');
        }

    }
})






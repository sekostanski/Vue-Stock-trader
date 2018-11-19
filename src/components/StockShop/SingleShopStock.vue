<template>
    <div class="singleStock__container">
        <tr class="singleStock__single-item">
            <td class="singleStock__id">{{stock.id}}</td>
            <td class="singleStock__name">{{stock.name}}</td>
            <td class="singleStock__price">{{stock.currentPrice}}</td>
            <td class="singleStock__start-price">{{stock.startPrice}}</td>
            <td class="singleStock__amount"><input type="number" min="0" v-model.number="quantity" placeholder="0"></td>
            <td class="singleStock__bttn-container"><button class="bttn" :disabled="isDisabled" @click.prevent="checkBuyingOptions">Buy it</button> </td>
        </tr>
    </div>
</template>
<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: null
        }
    },
    methods: {
        isEnoughFunds(){
            if(this.quantity * this.stock.currentPrice > this.$store.state.balance){
                this.$swal({
                    type: 'error',
                    title: "You don't have enough funds"
                })
                return false;
            } else {
                this.$store.state.balance -= (this.quantity * this.stock.currentPrice); 
                this.$swal({
                    title: this.quantity + " " + this.stock.name + " Stocks added to your portfolio"
                })
                return true;
            }
        },
        checkBuyingOptions(){
            if(this.isEnoughFunds()){
                let isInPortfolio = this.$store.state.portfolioStocks.findIndex(el => el.id === this.stock.id);

                if(isInPortfolio == -1){
                    this.$store.commit('buyStock', {
                        id: this.stock.id,
                        name: this.stock.name,
                        currentPrice: this.stock.currentPrice,
                        up: this.stock.up,
                        quantity: this.quantity
                    }
                );
                this.clearInputs();    
                } else {
                    this.$store.state.portfolioStocks[isInPortfolio].averagePrice.push(this.stock.currentPrice * this.quantity);

                    this.$store.commit('updateStock', {
                        index: isInPortfolio,
                        addQuantity: this.quantity,
                        purchasePrice: this.stock.currentPrice,
                        averagePrice: this.averagePrice(isInPortfolio)
                    });
                    this.clearInputs();
                }
            }
        },
        averagePrice(index){
            let sum = null;
            this.$store.state.portfolioStocks[index].averagePrice.forEach((el) => {
                sum += el
            })
            
            return (sum / (this.$store.state.portfolioStocks[index].quantity + this.quantity));
        },
        clearInputs: function(){
            this.quantity = 0;
        }
    },
    computed: {
        isDisabled() {
            return (this.quantity <= 0 || !Number.isInteger(this.quantity)) 
        }
    }
}
</script>
<style lang="scss">
    .singleStock {

        &__container {
            padding: 20px 0 20px 0;
            border-radius: 5px;
            font-size: 14px;
            transition: .5s all;
            &:hover {
               background-color: #fff; 
            }
        }
        &__single-item {
            width: 100%;
        }
        &__id {
            width: 7%;
            padding-left: 16px;
        }
        &__name {
            width: 45%;
            padding-left: 7px;
            font-weight: 700;
        }
        &__price {
            width: 12%;
            padding-left: 0.6rem;
        }
        &__start-price {
            width: 12%;
            padding-left: 2.2rem;
        }
        &__amount {
            width: 12%;
            & input {
                width: 54%;
                border: 1px solid #cbd4e7;
                border-radius: 5px;
                padding: 12px 18px;
                text-align: center;
                transition: .5s all;
                &:focus {
                    outline: 0;
                    border: 1px solid #9eaac7; 
                }   
            }
        }
        &__bttn-container {
            
            width: 12%;

            .bttn {
                width: 92%;
            }
            & .bttn:disabled {
                opacity: 0.5;
            }
            & .bttn:hover {
                background: linear-gradient(to right, #a556fd 0%,#a556fd 100%);
            }
            & .bttn:active {
                box-shadow: 0px 2px 7px 0px rgba(165,86,253,0.33);
            }
            & .bttn:focus {
               outline: 0;
            }
        }
    }

    @media (min-width: 780px) and (max-width: 1169px) {
        .singleStock {
            &__container {
                width: 98%;
            }
            &__name {
                width: 38%;
            }
            &__start-price {
                display: none;
            }
        }
    }
    @media only screen and (max-width: 779px) {
        .singleStock {
            &__container {
                width: 100%;
            }
            &__name {
                width: 33%;
            }
            &__start-price {
                display: none;
            }
            &__amount {
                width: 20%;
                input {
                    padding: 12px 0;
                }
            }
            &__bttn-container{
                width: 18%;
                .bttn {
                    font-size: 1.1rem;
                }
            }
        }
    }
</style>


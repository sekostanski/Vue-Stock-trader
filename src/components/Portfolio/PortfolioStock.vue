<template>
        <div class="portfolioStock">
            <div class="portfolioStock__info">
                <div class="portfolioStock__info-name"><h3>{{stock.name}}</h3></div>
                <div class="portfolioStock__info-purchase-price"><p>Purchase price: <span>{{stock.purchasePrice}}</span></p></div>
                <div class="portfolioStock__info-current-price"><p>Current price: <span>{{stockData[stock.id-1].currentPrice}}</span></p></div>
            </div>
            <div class="portfolioStock__sellContainer">
                <div class="portfolioStock__sell-quantity">
                    <input type="number" min="0" v-model.number="quantity" placeholder="0">
                </div>
                <div class="portfolioStock__stock-quantity"><h3>Possessed stocks: <span>{{stock.quantity}}</span></h3></div>
                <div class="portfolioStock__bttn-container">
                    <button @click="sellStock" :disabled="insufficientStocks || this.quantity == 0" class="bttn">Sell</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        stockData(){
            return this.$store.state.stocks;
        },
        insufficientStocks(){
            let stockIndex = this.$store.state.portfolioStocks.findIndex(el => el.id === this.stock.id);
            return this.quantity > this.$store.state.portfolioStocks[stockIndex].quantity;
        }
    },
    methods: {
        sellStock: function(){

            let checkIndex = this.$store.state.portfolioStocks.findIndex(el => el.id === this.stock.id);

            if(this.stock.quantity == this.quantity){
                this.$store.commit('sellAllStock', {
                    index: checkIndex
                });

                this.$store.state.balance += (this.quantity * this.stockData[this.stock.id-1].currentPrice);
                this.$swal({
                    title: "You just sold: " + this.quantity + " " + "actions"
                })
            } else {
                this.$store.commit('sellPartStock', {
                    index: checkIndex,
                    quantity: this.quantity,
                    sellingPrice: this.stockData[this.stock.id-1].currentPrice
                });

                this.$store.state.balance += (this.quantity * this.stockData[this.stock.id-1].currentPrice);
                this.$swal({
                    title: "You just sold:" + this.quantity + " " + "actions"
                })
                this.clearInputs();
            }
        },
        clearInputs: function(){
            this.quantity = 0;
        }
    }
}
</script>

<style lang="scss">
    .portfolioStock {
        flex-basis: 49%;
        background-color: #fff;
        margin: 15px 0;
        padding: 0 15px;
        border-radius: 5px;
        &__info {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #cbd4e7; 
            &-name {
                flex-basis: 34%;
            }
            &-purchase-price {
                flex-basis: 33%;
                text-align: center;
                border-right: 1px solid #cbd4e7;
                span {
                    font-weight: 700;
                }
            }
            &-current-price {
                flex-basis: 33%;
                text-align: center;
                span {
                    font-weight: 700;
                }
            }
        }
        &__sellContainer {
            margin: 20px 0;
            display: flex;
            align-items: center;    
        }
        &__sell-quantity {
            flex-basis: 30%;
            & input {
                width: 94%;
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
        &__stock-quantity {
            
            flex-basis: 30%;

            h3 {
                font-size: 1.5rem;
                font-weight: 400;
                span {
                    font-weight: 700;
                }
            }
        }
        &__bttn-container {

            display: flex;
            justify-content: flex-end;
            flex-basis: 40%;

            .bttn {
                width: 72%;
                margin-right: 1rem;
                transition: .3s all;
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
    .portfolioStock {
      &__container {
        width: 98%;
      }
    }
  }
    @media only screen and (max-width: 779px) {
    .portfolioStock {
        flex-basis: 100%;
        padding: 0 10px;

        &__container {
          width: 98%;
        }
        &__info {

            &-name {
                flex-basis: 28%;
            }
            &-purchase-price {
                flex-basis: 36%;
                span {
                    display: block;
                }
            }
            &-current-price {
                flex-basis: 36%;
                span {
                    display: block;
                }
            }
        }
        &__stock-quantity {
            margin-left: .6rem;
        }
    }
  }       
</style>


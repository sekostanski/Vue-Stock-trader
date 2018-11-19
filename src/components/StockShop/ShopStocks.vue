<template>
    <div class="buyStocks__container">
        <div class="buyStocks__offer-table">
            <table class="buyStocks__table">
                <tr class="buyStocks__table-header">
                    <th class="buyStocks__table-id">Id</th>
                    <th class="buyStocks__table-name">Stock name</th>
                    <th class="buyStocks__table-price">Price</th>
                    <th class="buyStocks__table-dprice">Debut price</th>
                    <th class="buyStocks__table-amount">Amount</th>
                    <th class="buyStocks__table-buy">Buy</th>
                </tr>
            </table>
            <single-shop-stock :stock="stock" v-for="stock in stocks" :key="stock.id"></single-shop-stock>
        </div>
    </div>
</template>
<script>
import SingleShopStock from './SingleShopStock.vue'

export default {
    computed: {
        stocks(){
            return this.$store.state.stocks;
        }
    },
    components: {
        // eslint-disable-next-line
        singleShopStock: SingleShopStock
    }
}
</script>
<style lang="scss">
    .buyStocks {

        &__container {
            width: 1170px;
            margin: 0 auto;
        }
        &__table {
            margin-bottom: 30px;
            &:first-child {
                padding: 50px 0 15px 0;
                width: 100%;
                border-bottom: 1px solid #cbd4e7;
                text-align: left;
                font-size: 14px;
            }
            &-id {
                width: 7%;
                padding-left: 15px;
            }
            &-name {
                width: 45%;
            }
            &-price {
                width: 12%;
            }
            &-dprice {
                width: 12%;
            }
            &-amount {
                width: 12%;
                padding-left: 1rem;
            }
            &-buy {
                width: 12%;
                text-align: center;
                padding-right: 2.1rem
            }
        }
        &__table-header {
            margin: 0 10px 0 10px;
        }
    }

    @media (min-width: 780px) and (max-width: 1169px) {
        .buyStocks {
            &__container {
                width: 98%;
            }
            &__table {

                &-name {
                    width: 47%;
                }
                &-dprice {
                    display: none;
                }
                &-price {
                    width: 15%;
                }
                &-amount {
                    width: 14%;
                    padding-left: 0;
                }
                &-buy {
                    width: 16%;
                    padding-right: 3.6rem;
                }
            }
        }
    }
    @media only screen and (max-width: 779px) {
        .buyStocks {
            &__container {
                width: 98%;
            }
            &__table {

                &-name {
                    width: 33%;
                }
                &-price {
                    width: 15%;
                }
                &-dprice {
                    display: none;
                }
                &-amount {
                    width: 18%;
                    padding-left: 0;
                }
                &-buy {
                    width: 18%;
                    padding-right: 3.6rem;
                }
            }
        }
    }
</style>


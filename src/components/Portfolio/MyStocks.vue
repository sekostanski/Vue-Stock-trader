<template>
    <div>
        <div class="myStocks__container">
          <div class="myStocks__grid">
            <div class="myStocks__no-stocks" v-if="this.$store.state.portfolioStocks.length === 0"><p>Currently no stocks in portfolio</p></div>
            <app-portfolio-stock :stock="stock" v-for="stock in portfolioStocks" :key="stock.number"></app-portfolio-stock>    
          </div>
        </div>
    </div>
</template>
<script>
import PortfolioStock from './PortfolioStock.vue'

export default {
  data(){
    return {
      isEmptyPortfolio: true
    }
  },
  computed: {
    portfolioStocks(){
      return this.$store.state.portfolioStocks;
    }
  },
  // eslint-disable-next-line
  components: {
    // eslint-disable-next-line
    appPortfolioStock: PortfolioStock
  }
}
</script>
<style lang="scss">
  .myStocks {

    &__container {
      width: 1170px;
      margin: 0 auto;  
    }
    &__grid {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 50px;
    }
    &__no-stocks {
      width: 100%;
      p {
        font-size: 2.5rem;
        text-align: center;
        font-weight: 700;
        color: #b9c5de;
      }
    }
  }
  @media (min-width: 780px) and (max-width: 1169px) {
    .myStocks {
      &__container {
        width: 98%;
      }
    }
  }

    @media only screen and (max-width: 779px) {
    .myStocks {
      &__container {
        width: 98%;
      }
      &__no-stacks {
        width: 50%;
      }
    }
  }

</style>


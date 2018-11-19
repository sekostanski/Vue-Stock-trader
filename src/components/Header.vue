<template>
    <div class="header__container">
        <div class="header__brand">
                <router-link to="/"><img class="header__brand-logo" src="../assets/logo.png" alt="Brand logo"></router-link>
        </div>
        <nav class="header__menu">
            <div class="header__mobile-view" v-if="!showMobileMenu" :class="{active : showMobileMenu}" @click="showMobileMenu = !showMobileMenu"><img src="../assets/menu.png" alt=""></div>
            <div class="header__mobile-close" v-else :class="{active : showMobileMenu}" @click="showMobileMenu = !showMobileMenu"><img src="../assets/close.png" alt=""></div>
            <ul class="header__menu-links">
                <router-link to="/" tag="li"><a>Home</a></router-link>
                <router-link to="/buystocks" tag="li"><a>Buy stocks</a></router-link>
                <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link> 
            </ul>
        </nav>
        <div class="header__balance">
            <p>Your balance: <span>{{ this.$store.state.balance }}</span></p>
        </div>
        <div class="header__dropdown-menu">
            <button class="header__dropdown-select">Save and load</button>
            <div class="header__dropdown-content">
                <a href="#" @click.prevent="saveData">Save data</a>
                <a href="#" @click.prevent="loadData">Load data</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showMobileMenu: false
        }
    },
    methods: {
        saveData(){
            let data = {
                stocks: this.$store.state.stocks,
                portfolioStocks: this.$store.state.portfolioStocks,
                balance: this.$store.state.balance
            }
            this.$http.put('data.json', data);
        },
        loadData(){
            this.$store.dispatch('fetchData');
        }
    }
}
</script>
<style lang="scss">
    .header {

        &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1170px;
        height: 78px;
        margin: 0 auto;
        }
        &__brand {
            display: flex;
            align-items: center;
            width: auto;
            height: 100%;
        }
        &__mobile-view {
            display: none;
        }
        &__brand-logo {
            display: block;
            width: auto;
            height: 50px;
        }
        &__menu {
            display: flex;
            margin-left: auto;
            margin-right: 70px;
        }
        &__menu-links {
            display: flex;
        }
        &__menu-links li {
            display: inline-block;
            margin: 0 15px;
            font-weight: 400;
        }
        &__menu-links a {
            &:hover {
                color:#c653e8;
            }
        }
        &__balance {
            margin-right: 75px;
            span {
                font-weight: 700;
                margin-left: .3rem;
                }
        }
        &__dropdown-menu {
            position: relative;
            display: inline-block;
            &:hover .header__dropdown-content {
                display: block;
            }
        }
        &__dropdown-select {
            background: linear-gradient(to right, #e24ed9 0%,#a556fd 100%);;
            color: #fff;
            padding: 12px 18px;
            font-size: 15px;
            line-height: 1;
            border: none;
            box-shadow: 0px 5px 20px 0px rgba(165,86,253,0.33);
            border-radius: 30px;
            cursor: pointer;
        }
        &__dropdown-content {
            display: none;
            position: absolute;
            left: -16px;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
            z-index: 1;
            a {
                color: black;
                font-size: 15px;
                padding: 12px 16px;
                text-align: center;
                text-decoration: none;
                display: block;
                &:hover {
                    background-color: #f3f6fb;
                }
            }
        }
    }

    @media (min-width: 780px) and (max-width: 1169px) {
        .header {
            &__container {
                width: 98%;
            }
        }
    }
    @media only screen and (max-width: 779px) {
        .header {
            &__container {
                width: 98%;
                position: relative;
                
            }
            &__menu-links {
                display: none;
                position: absolute;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 0;
                padding: .5rem .5rem;
                top: 7.9rem;
                left: -.4rem;
                background-color: #fff;
                width: 100vw;
                height: 25rem;
                text-align: center;
                box-shadow: 0 2rem 2rem rgba(0,0,0,0.1);
                z-index: 99;
                li {
                    display: block;
                    width: 100%;
                    padding-bottom: 2rem;
                    font-size: 3.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    border-bottom: 1px solid #dedfec;
                    &:last-child {
                        border: none;
                    }
                }
            }
            &__menu {
                order: 5;
                margin-left: 0;
                margin-right: .5rem;
            }
            &__mobile-view {
                display: block;
            }
            &__balance {
                display: flex;
                justify-content: center;
                position: relative;
                text-align: center;
                margin: 0;
                p {
                    margin-top: -.5rem;
                }
                span {
                    position: absolute;
                    top: 1.3rem;
                    left: 1.6rem;
                }
            }
            &__mobile-view.active + ul{
               display: flex !important;
            }
            &__mobile-close.active + ul{
               display: flex !important;
            }
        }
    }
</style>


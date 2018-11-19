<template>
    <div class="home__container">
        <div class="home__info">
            <h2>Hello, welcome in fake stock simulator 3000</h2>
            <p>Start game with 12500 and earn much more!</p>
        </div>
        <div class="home__more-info">
            <div class="home__rules">
                <div><img class="home__rules-icon" src="../assets/timer.png" alt="Brand logo"></div>
                <p>Stocks prices change every <span>3 seconds</span></p>  
            </div>
            <div class="home__database">
                <div><img class="home__rules-icon" src="../assets/database.png" alt="database icon"></div>
                <p>Save and load data from Google Firebase</p>
            </div>     
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
    .home {

        &__container {
            display: flex;
            flex-wrap: wrap;
            width: 1170px;
            margin: 0 auto;
        }
        &__info {
            margin-top: 6.5rem;
            padding: 1.5rem;
            flex-basis: 100%;
            background-color: #fff;
            border-radius: .5rem;
            h2 {
                line-height: 1;
                margin: 1.5rem 0;
                font-size: 2.2rem;
                text-transform: uppercase;
            }
        }
        &__more-info {
            display: flex;
            justify-content: space-between;
            margin-top: 2.5rem;
            flex-basis: 100%;
        }
        &__rules {
            display: flex;
            align-items: center;
            flex-basis: 49%;
            padding: 1.5rem;
            background-color: #fff;
            border-radius: .5rem;
            p {
                padding-left: 3rem;
                span {
                    font-weight: 700;
                }
            }
        }
        &__rules-icon {
            width: 5rem;
            height: 5rem;
        }
        &__database {
            display: flex;
            align-items: center;
            flex-basis: 49%;
            padding: 1.5rem;
            background-color: #fff;
            border-radius: .5rem;
            p {
                padding-left: 3rem;
            }
        }
    }
    .home__container {
        width: 1170px;
        margin: 0 auto;
    }

    @media (min-width: 780px) and (max-width: 1169px) {
        .home {
            &__container {
                width: 98%;
            }
        }
    }

    @media only screen and (max-width: 779px) {
        .home {
            &__container {
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            &__info {
                flex-basis: 98%;
                h2 {
                    line-height: 1.3;
                }
            }
            &__more-info {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: .2rem;
            }
            &__more-info {
                flex-direction: column;
            }
            &__rules {
                width: 98%;
                margin-top: .5rem;
            }
            &__database {
                width: 98%;
                margin-top: .5rem;
            }
        }
    }
    
</style>


<template>
  <div id="app">
    <div class="header">
      <app-header></app-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';


export default {
  name: 'app',
  data(){
    return {
      counter: 0
    }
  },
  components: {
    // eslint-disable-next-line
    appHeader: Header,
  },
  created(){
    this.$store.dispatch('changePrice');
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #202020;
  }
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #202020;
    background-color: #e9edf6;
  }
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3.9rem;
  }
  h3 {
    font-size: 2.3rem;
  }
  p {
    font-size: 1.5rem;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #202020
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #202020
  }
  #app {
    width: 100vw;
    height: 100vh;
    background-color: #e9edf6;
  }
  .header {
    background-color: #fff;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.03);
  }
  .bttn {
    background: linear-gradient(to right, #e24ed9 0%,#a556fd 100%);;
    color: #fff;
    padding: 12px 18px;
    font-size: 15px;
    line-height: 1;
    border: none;
    box-shadow: 0px 5px 20px 0px rgba(165,86,253,0.33);
    border-radius: 30px;
    cursor: pointer;
    transition: .3s all;
  }
  .swal2-popup .swal2-title {
    font-size: 1.4rem !important;
  }
  #app.swal2-popup.swal2-styled.swal2-confirm {
    background: linear-gradient(to right, #e24ed9 0%,#a556fd 100%) !important;
    color: #fff !important;
    padding: 12px 18px !important;
    font-size: 15px !important;
    line-height: 1;
    border: none;
    box-shadow: 0px 5px 20px 0px rgba(165,86,253,0.33);
    border-radius: 30px !important;
    cursor: pointer;
  }
  
</style>

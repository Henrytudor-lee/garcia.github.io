<script setup lang="ts">
import { reactive } from "vue";
const imgDataList = reactive([
  {
    img: "/images/pink.jpg",
    from: "https://500px.com/photo/273810919/pink-sands-by-jack-hopkins",
  },
  {
    img: "/images/white.jpg",
    from: "https://500px.com/photo/222636895/bad-hair-day-by-bea-burin-herbst",
  },
  {
    img: "/images/blue.jpg",
    from: "https://500px.com/photo/1043856879/eba-by-my-world-vision-carlos-infante-luna",
  },
  {
    img: "/images/yellow.jpg",
    from: "https://500px.com/photo/214066731/yellow-memory-ii-by-milan-vopalensky",
  },
  {
    img: "/images/red.jpg",
    from: "https://500px.com/photo/1040154522/red-temple-in-the-dark-by-vitaly-tyuk",
  },
]);
</script>

<template>
  <div class="home">
    <div class="top">
      <div class="img-card" v-for="item in imgDataList">
        <img :src="item.img" :alt="item.from" />
      </div>
      <div class="title logo-title">
       Garcia World
      </div>
      <div class="nav-bar">

      </div>
      <div class="top-button">

      </div>
    </div>
    <div class="bottom">
     <h5 class="text-title">About Me</h5>
    </div>
  </div>
</template>

<style lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 450px;
    background-color: lightblue;
    overflow: hidden;
    display: flex;
    position: relative;
    .img-card {
      flex: 1;
      background-color: #e3e3e3;
      padding: 8px;
      filter: blur(2px);
      img {
        width: 100%;
      }
    }
    .title,.nav-bar,.top-button{
     position: absolute;
    }
    .title{
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     margin: auto;
     width: 300px;
     height: 80px;
     line-height: 80px;
     text-align: center;
    }
  }
  .bottom {
   height: 300px;
   padding: 8px;
  }
}
</style>

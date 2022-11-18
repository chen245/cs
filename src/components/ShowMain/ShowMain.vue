<template>
  <div class="main">
    <show-left class="showLeft"></show-left>
    <show-center class="showCenter"></show-center>
    <show-right class="showRight"></show-right>
  </div>
</template>

<script>
import ShowCenter from './components/ShowCenter.vue'
import ShowLeft from './components/ShowLeft.vue'
import ShowRight from './components/ShowRight.vue'
export default {
  name: 'ShowMain',
  components:{
    ShowLeft,
    ShowRight,
    ShowCenter
  }
}
</script>

<style scoped>
  .showLeft {
    float: left;
    width: 7.5rem;
    height: 9rem;
  }
  .showRight {
    float: right;
    width: 7.5rem;
    height: 9rem;
  }
  .showCenter {
    position: absolute;
    left: 4.8rem;
    top: 0rem;
    height: 9rem;
    width: 14.2rem;
  }
</style>

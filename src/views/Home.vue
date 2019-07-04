<template>
  <div class="main" style="width:100%;">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/MyHeader'
import MyFooter from '../components/MyFooter'
import Index from '@/views/Index.vue'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyFooter,
    Index,
  }
}
</script>

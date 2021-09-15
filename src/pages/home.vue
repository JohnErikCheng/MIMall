<template>
  <div>
    Home
    <nav-footer></nav-footer>
    <router-view></router-view>
    <nav-header></nav-header>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="scss" scoped></style>

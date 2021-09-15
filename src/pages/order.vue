<template>
  <div>
    <order-footer></order-footer>
    <router-view></router-view>
    <order-header></order-header>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'

export default {
  name: 'order',
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>

<style lang="scss" scoped></style>

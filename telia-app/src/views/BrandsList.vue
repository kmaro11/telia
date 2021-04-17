<template>
  <div class="phones-page">
    <div class="phones-page__wrap">
      <Phone
        v-for="(item, index) in allBrands"
        @selected-phone="selectedBrand"
        :key="index"
        :item="item"
        type="brands"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Phone from '../components/Phone'

export default {
  name: 'BrandsList',
  components: {
    Phone
  },

  data () {
    return {
      step: 'brand'
    }
  },

  computed: {
    ...mapState('phone', ['allBrands'])
  },

  methods: {
    ...mapActions('phone', ['getBrands']),
    selectedBrand (item) {
      this.$router.push({ name: 'phones', params: { brand: item.id } })
    }
  },
  mounted () {
    this.getBrands()
  }
}
</script>
<style lang="scss" scoped>
.phones-page {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
  }
}
</style>

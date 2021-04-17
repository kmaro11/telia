<template>
  <div>
    <h1>{{ selectedBrand }}</h1>
    <div class="phones-page__wrap" v-if="selectedBrandPhones">
      <Phone
        v-for="(item, index) in selectedBrandPhones"
        :key="index"
        :item="item"
        :active="activePhone(item)"
        @selected-item="selectedPhone"
        type="phones"
      />
    </div>
  </div>
</template>
<script>
import Phone from '../components/Phone'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'PhonesList',
  components: {
    Phone
  },
  data () {
    return {
      allSelectedPhones: []
    }
  },
  computed: {
    ...mapState('phone', ['allPhones']),
    ...mapGetters('phone', ['allPhonesList']),
    selectedBrandPhones () {
      return this.allPhonesList[this.selectedBrand]
    },
    selectedBrand () {
      return this.$route.params.brand
    }
  },
  methods: {
    ...mapActions('phone', ['getPhones', 'removePhoneFromList']),
    selectedPhone ({ action, item }) {
      action === 'delete' ? this.removePhone(item) : this.likePhone(item)
    },
    likePhone (item) {
      if (this.allSelectedPhones.some((item) => item === item.contentKey)) {
        this.allSelectedPhones = [...this.allSelectedPhones].filter(
          (item) => item !== item.contentKey
        )
      } else {
        this.allSelectedPhones = [...this.allSelectedPhones, item.contentKey]
      }
      this.saveSelectedPhones()
    },
    removePhone (item) {
      this.removePhoneFromList({
        brand: this.selectedBrand,
        phone: item.contentKey
      })
    },
    activePhone (phone) {
      return this.allSelectedPhones.some((item) => item === phone.contentKey)
    },
    saveSelectedPhones () {
      localStorage.setItem('selectedPhones', JSON.stringify({
        phoneBrand: this.selectedBrand,
        selectedPhones: this.allSelectedPhones
      }))
    },
    getSavedPhones () {
      const phones = localStorage.getItem('selectedPhones')
        ? JSON.parse(localStorage.getItem('selectedPhones'))
        : false

      if (phones.phoneBrand === this.selectedBrand) {
        this.allSelectedPhones = [...phones.selectedPhones]
      }
    }
  },
  mounted () {
    this.getPhones()
    this.getSavedPhones()
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

<template>
  <div class="phone" @click="selectPhone">
    <div class="phone__image-wrap">
      <img :src="phoneImage" alt="" class="phone__image"/>
    </div>
    <button
      class="phone__remove-icon"
      v-if="type === 'phones'"
      @click="selectAction('delete')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
        />
      </svg>
    </button>
    <button
      class="phone__like-icon"
      v-if="type === 'phones'"
      @click="selectAction('like')"
      :class="{ active: active }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
        />
      </svg>
    </button>
    <span class="phone__name">{{ item.displayName }}</span>
  </div>
</template>
<script>
export default {
  name: 'Phone',
  props: {
    item: {
      default: Object
    },
    type: {
      default: String
    },
    active: {
      default: false
    }
  },
  computed: {
    phoneImage () {
      return this.type === 'brands'
        ? this.item.displayImageUrl
        : this.item.imgUrl
    }
  },
  methods: {
    selectPhone () {
      this.$emit('selected-phone', this.item)
    },
    selectAction (type) {
      this.$emit('selected-item', { action: type, item: this.item })
    }
  }
}
</script>
<style lang="scss" scoped>
.phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  width: 100%;
  padding: 32px;
  margin: 32px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  button {
    border: none;
    background: white;
  }

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
  }

  &__image-wrap {
    max-width: 140px;
    margin-bottom: 16px;
  }

  &__image {
    width: 100%;
  }

  &__remove-icon,
  &__like-icon {
    cursor: pointer;
    position: absolute;

    svg {
      max-width: 24px;
      display: flex;
    }
  }

  &__remove-icon {
    top: 32px;
    left: 0;
  }

  &__like-icon {
    top: 32px;
    right: 0;

    &.active {
      svg {
        fill: #4B0082;
      }
    }
  }

  &__name {
    font-size: 18px;
  }
}
</style>

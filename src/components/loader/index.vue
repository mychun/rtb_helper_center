<template>
  <div class="loading-container" :class="{ isFulled }">
    <div class="spinner-border"></div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    isFulled: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
    display: flex;
  &.isFulled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    .spinner-border {
      width: 45px;
      height: 45px;
      border: 4px solid $color-theme;
    }
  }
  @-webkit-keyframes spinner-border {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes spinner-border {
    to {
      transform: rotate(1turn);
    }
  }

  .spinner-border {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid $color-theme;
    vertical-align: text-bottom;
    border-right-color: transparent !important;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;
  }
}
</style>

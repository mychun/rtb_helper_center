<template>
  <div class="loading-container">
    <div class="spinner-border"></div>
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 45px;
    height: 45px;
    vertical-align: text-bottom;
    border: 4px solid $color-theme;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;
  }
}
</style>

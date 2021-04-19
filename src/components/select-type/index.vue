<template>
  <div class="select-type-item clearfix">
    <div class="type-name">{{ typeLabel }}</div>
    <ul class="type-list">
      <li v-for="type in typeList" :key="type[typeId]">
        <label
          ><input
            type="checkbox"
            v-model="selectedTypeList"
            :value="type[typeId]"
          />{{ type[typeName] }}</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selectType',
  props: {
    typeLabel: {
      type: String,
      require: true
    },
    typeList: {
      type: Array,
      require: true
    },
    typeId: {
      type: String,
      require: true
    },
    typeName: {
      type: String,
      require: true
    },
    selectedList: {
      type: Array
    }
  },
  data() {
    return {
      selectedTypeList: []
    }
  },
  created() {
    this.selectedTypeList = this.selectedList
  },
  watch: {
    selectedTypeList(newVal) {
      if (newVal.join(',') === this.selectedList.join(',')) return
      this.$emit('selected', newVal)
    },
    selectedList(newVal) {
      // if (newVal.join(',') === this.selectedTypeList.join(',')) return
      this.selectedTypeList = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.select-type-item {
  padding: 5px;
  display: flex;
  .type-name {
    float: left;
    color: $color-assist;
    padding-right: 10px;
    overflow: hidden;
    padding-top: 5px;
  }
  .type-list {
    flex-grow: 1;
    li {
      display: inline-block;
      label {
        font-weight: normal;
        display: flex;
        width: auto;
        align-items: center;
        margin-bottom: 0;
        padding: 5px;
        cursor: pointer;
        input {
          display: inline-block;
          margin-right: 3px;
          margin-top: 0;
        }
      }
    }
  }
}
</style>

<template>
<div>
<span>店家時間</span>
<b-form-checkbox-group
          v-if="DataList"
          v-model="OpeningTime"
          :options="DataList"
          class="mb-3"
          value-field="Time"
          text-field="Time"
          disabled-field="OpeningTime"
        ></b-form-checkbox-group>
        </div>
</template>


<script>
export default {
  name: "ShopOpening",
  props: { DataList: Object, ShopData: Object },
  watch:{
    OpeningTime: function(newValue, oldValue){

      
      this.$emit("setOpening", newValue);
    }
  },
  data() {
    return {      
      OpeningTime: false,
      isDisable: true,
    };
  }
};
</script>
<style scoped>
</style>
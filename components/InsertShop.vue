<template>
  <div>
    
    <b-list-group>
      <b-list-group-item>
        <span>店家名稱</span>
        <b-form-input type="text" v-model="ShopData.Name" />
      </b-list-group-item>
      <b-list-group-item>
        <span>店家電話</span>
        <b-form-input type="text" v-model="ShopData.Tel" />
      </b-list-group-item>
      <b-list-group-item>
        <span>店家地址</span>
        <b-form-input type="text" v-model="ShopData.Address" />
      </b-list-group-item>
    </b-list-group>
  
  
   </div>
</template>
<script>
export default {
  name: "InsertShop",
  props: { ShopData: false },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
</style>

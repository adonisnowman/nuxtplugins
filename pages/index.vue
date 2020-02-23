<template>
  <b-container  class="container">
    <b-row>
      <title>基本練習</title>
      </b-row>
    <b-row>
    <b-col><InsertShop   :ShopData="ShopData"/></b-col>
    <b-col>
      
      <ShopOpening :DataList="AjaxData.List" :ShopData="ShopData" @setOpening="setOpening"/>
      
      <b-button @click="greet($event)" :disabled="SetDisable">
      Alert Opening
    </b-button></b-col>
    
    <b-col>
        <b-alert v-for="(item,index) in ShopData" :key="index" variant="success" show>{{item}}</b-alert>
          <b-alert v-for="(item,index) in OpeningTime" :key="index" variant="primary" show>{{item}}</b-alert>          
      </b-col>
      <b-col>
        
        <QuizList @setData="setData" :QuizList="QuizList.List"/>
        <QuizPages @setData="setData" :QuizPages="QuizList.ListPages.item"/>
       
        </b-col>
  </b-row>
    

    <footerAlert />
  </b-container >
</template>

<script>
import InsertShop from '~/components/InsertShop.vue'
import ShopOpening from '~/components/ShopOpening.vue'
import footerAlert from '~/components/footerAlert.vue'
import QuizList from '~/components/QuizList.vue'
import QuizPages from '~/components/QuizPages.vue'

export default {
  components: {
    InsertShop,
    ShopOpening,
    footerAlert,
    QuizList,
    QuizPages
  },
  methods: {
    greet: function(event) {
      // `this` 在方法里指向当前 Vue 实例
      let HelloWorldData = this;

      
      HelloWorldData.SetDisable = true;
      
      this.$axios({
        method: "get",
        url: this.UrlSubmit,
      }).then(function(res) {
            HelloWorldData.AjaxData = JSON. parse(JSON.stringify(res.data));
          

      });
    },
    setData: function(data){

        this.QuizList = data;
    },
    setOpening: function(data){

      
      this.OpeningTime = data;
    }
  },
  data() {
    return {  
      QuizList: false,    
      ShopData: {Name:'',Tel:'',Address:''},
      OpeningTime: Object,
      SetDisable: false,
      AjaxData: {
        List:false,
        ListPages:false,
      },
      UrlSubmit:'https://buzzorg.com/adonis/gettime',
      forsubmit:{
          
      },
      QuizList: {
        List:false,
        ListPages:false,
      },
    };
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
<div>
  <b-button-toolbar key-nav aria-label="Toolbar with button groups">
    
    <b-button-group class="mx-1">
      <b-button v-if="QuizPages" v-for="(item,index) in QuizPages" :key="index" @click="getQuiz(item)">{{item}}</b-button>
    </b-button-group>
    
  </b-button-toolbar>
</div>
</template>

<script>
export default {
  name: "QuizPages",
  props: { QuizPages: false },
  methods: {
    getQuiz: function(item) {
      // `this` 在方法里指向当前 Vue 实例
	  let QuizObject = this;
	        
      this.$axios({
        method: "get",
        url: this.UrlSubmit + item,
      }).then(function(res) {

				console.info(res.data);
            QuizObject.QuizList = JSON. parse(JSON.stringify(res.data));
          
            QuizObject.$emit("setData", QuizObject.QuizList);

      });
    },    
  },  
  data() {
    return {
		QuizPages:false,
      UrlSubmit:'https://buzzorg.com/adonis/getlist/',
      forsubmit:{
          
      }
    };
  }
};
</script>
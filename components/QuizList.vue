<template>
	<div>
		<b-button @click="getQuiz($event)" :disabled="SetDisable">
      Alert QiuzList
    </b-button>



    <b-list-group>
      <b-list-group-item v-for="(item,index) in QuizList" :key="index" >
        {{item.title}}
      </b-list-group-item>
      
    </b-list-group>

	</div>

</template>

<script>
export default {
	name: "QuizList",
  props: {    
    QuizList: Object,
  },
  methods: {
    getQuiz: function(event) {
      // `this` 在方法里指向当前 Vue 实例
      let QuizObject = this;

     
      QuizObject.SetDisable = true;
      // `event` 是原生 DOM 事件
     
      this.$axios({
        method: "get",
        url: this.UrlSubmit,
      }).then(function(res) {

				console.info(res.data);
            QuizObject.QuizList = JSON. parse(JSON.stringify(res.data));
          
            QuizObject.$emit("setData", QuizObject.QuizList);

      });
    },    
  },  
  data() {
    return {     
      
      QuizList: {
        List:false,
        ListPages:false,
      },
      UrlSubmit:'https://buzzorg.com/adonis/getlist',
      forsubmit:{
          
      }
    };
  }
}
</script>
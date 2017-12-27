<template>
  <div class='preview'>
    <p>Message is:{{haha}} </p>
    <button v-on:click = "add">click me </button>
  </div>
</template>

<script>
export default {
  // props:['resume']  
  computed : {
    haha : function(){
      return this.$store.state.count
    }
  },
  methods : {
    add(){
      this.$store.commit('increment')
      console.log(this.add)
    }
  }
}
</script>
<style lang='scss'>
  .preview{
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.1) inset;
  }

</style>

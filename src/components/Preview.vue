<template>
  <div class='preview'>
    <p>Message is: </p>
  </div>
</template>

<script>
export default {
  props:['resume']  
}
</script>
<style lang='scss'>
  .preview{
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.1) inset;
  }

</style>

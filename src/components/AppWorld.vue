<template lang="pug">
  span World
</template>

<script>

export default {
  
  mounted () {
    console.log('Hello World')
  }

};

</script>

<style scoped>
  
  span {
    background-color: #3771b740;
    display: inline-flex;
    width: 6em;
    height: 100%;
    box-shadow: inset 0px 0px 0px 1px #f9f9f980;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 0px 6px;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

</style>
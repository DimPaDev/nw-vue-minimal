<template lang="pug">

	.app-sidebar
		slot

</template>

<script>

export default {

	name: 'AppSideBar'

};

</script>

<style lang="scss" scoped>

  .app-sidebar {
    display: block;
    width: 6em;
    height: 100%;
    border-radius: 0px;
    color: white;
    text-shadow: 1px 1px 1px black;
    margin: 0px;
    padding: 1em;
    border-right: 1px solid #8e7c7c;
    background-color: #adadad45;
    overflow-y: auto;
    overflow-x: hidden;
  }

</style>

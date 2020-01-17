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
    background-color: #3771b740;
    display: inline-flex;
    width: 6em;
    height: calc(100% - 3px);
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 0px 6px;
    color: white;
    text-shadow: 1px 1px 1px black;
    margin: 1px;
  }

</style>

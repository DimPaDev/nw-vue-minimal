<template lang="pug">

	.nwjs-values
		.item( v-for = `item in nwValues` )
			.item-key {{ item.label }}
			.item-value {{ item.value }}

</template>

<script>
import nwValues from '@/modules/nw-values';

export default {

	name: 'NwValuesList',

	data: () => ({
		nwValues: nwValues
	})

};

</script>

<style lang="scss" scoped>

.nwjs-values {
	opacity: 1;
	overflow-y: auto;
	height: 100%;
	width: inherit;
	transition: opacity .6s;
}

.item {
	font-family: Segoe Ui, Ubuntu, sans-serif;
	background-color: #ffffffe6;
	margin: 10px;
	padding: 0px;
	font-size: 18px;
	border: 1px solid #6d6d6d;
	display: flex;
	justify-content: space-between;
	border-radius: 3px;
	box-shadow: 0px 0px 2px 1px #ffffff24;
	user-select: none;
}

.item-key {
	display: flex;
	align-items: center;
	padding-left: 10px;
	font-size: 16px;
	font-weight: 600;
	text-shadow: 1px 1px 1px white;
}

.item-value {
	background-color: #94949440;
	padding: 10px;
	border-radius: 0px 4px 4px 0px;
	border-left: 1px solid #c3c3c3;
	color: #093a6d;
	text-shadow: 1px 1px 1px white;
	font-size: 16px;
}

</style>

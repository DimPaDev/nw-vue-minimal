<template lang="pug">

	#Calculator( ref = 'Calculator' ): .container

		.display {{ currentValue || '0' }}
		.btn( @click = 'clear' ) C
		.btn( @click = 'switchSign' ) +/-
		.btn( @click = 'percentage' ) %
		.btn.operator( @click = 'divide' ) ÷

		.btn( @click = `insertNumber('7')` ) 7
		.btn( @click = `insertNumber('8')` ) 8
		.btn( @click = `insertNumber('9')` ) 9
		.btn.operator( @click = `multiply` ) x

		.btn( @click = `insertNumber('4')` ) 4
		.btn( @click = `insertNumber('5')` ) 5
		.btn( @click = `insertNumber('6')` ) 6
		.btn.operator( @click = `subtract` ) -

		.btn( @click = `insertNumber('1')` ) 1
		.btn( @click = `insertNumber('2')` ) 2
		.btn( @click = `insertNumber('3')` ) 3
		.btn.operator( @click = `sum` ) +

		.btn.zero( @click = `insertNumber('0')` ) 0
		.btn( @click = `dot` ) .
		.btn( @click = `result` ) =

</template>

<script>

export default {

	name: 'Calculator',

	components: {},

	data: () => ({
		currentValue: '',
		anteriorNumber: null,
		operator: null,
		operatorClicked: false
	}),

	created() {},

	mounted() {
		this.initWindowSize();
	},

	methods: {

		initWindowSize() {
			if (typeof nw !== 'undefined') {
				const win = nw.Window.get();
				win.resizeTo(266, 375);
				win.setMinimumSize(266, 375);
			}
		},

		clear() {
			this.currentValue = '';
		},

		switchSign() {
			this.currentValue = this.currentValue.charAt(0) === '-'
				? this.currentValue.slice(1)
				: `-${this.currentValue}`;
		},

		percentage() {
			this.currentValue = `${parseFloat(this.currentValue) / 100}`;
		},

		insertNumber(number) {
			if (this.operatorClicked) {
				this.currentValue = '';
				this.operatorClicked = false;
			}
			this.currentValue = `${this.currentValue}${number}`;
		},

		dot() {
			if (this.currentValue.indexOf('.') === -1) {
				this.insertNumber('.');
			}
		},

		setValue() {
			this.anteriorNumber = this.currentValue;
			this.operatorClicked = true;
		},

		divide() {
			this.operator = (num1, num2) => num1 / num2;
			this.setValue();
		},

		multiply() {
			this.operator = (num1, num2) => num1 * num2;
			this.setValue();
		},

		subtract() {
			this.operator = (num1, num2) => num1 - num2;
			this.setValue();
		},

		sum() {
			this.operator = (num1, num2) => num1 + num2;
			this.setValue();
		},

		result() {
			this.currentValue = `${this.operator(
				parseFloat(this.anteriorNumber),
				parseFloat(this.currentValue),
			)}`;
			this.anteriorNumber = null;
		}
	}
};

</script>

<style lang="scss">

#Calculator {

	height: inherit;
	background-color: #dadde8b5;
	transition: opacity 1s;
	opacity: 1;

	.container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(50px, auto);
		width: 100%;
		height: 100%;
		margin: 0 auto;
		font-size: 20px;
		font-family: Segoe Ui, Ubuntu, serif;
		color: #3e4750;
		text-shadow: 1px 1px 1px white;
		padding: 5px;
	}

	.display {
		grid-column: 1 / 5;
		background-color: #1f395024;
		color: #5a5a5a;
		display: inline-flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: .6em;
		font-size: 28px;
		text-shadow: 1px 1px 1px #e2e2e2;
		margin: 2px 3px;
		border-radius: 1px;
		box-shadow: inset 0 1px 3px 1px #00000014;
		border: 1px solid #929292;
	}

	.zero {
		grid-column: 1 / 3;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e0e0e0;
		border: 1px solid #8383848f;
		margin: 3px;
		border-radius: 4px;
		box-shadow: 0 1px 1px 1px #a8adb138,
			inset 1px 1px 1px 1px #ffffff3b;
		&:hover {
			border: 1px solid #ff7800;
			background-color: #ffdd2857;
		}
		&:hover:active {
			border: 1px solid #5589c1;
			background-color: #62adda63;
			box-shadow: inset 0 1px 3px 0 #00334c59;
		}
	}

	.operator {
		background-color: #ece07cde;
		color: #23130a;
		box-shadow: 0 1px 1px 0 #77777740,
			inset 0 0 1px 1px #f3b91063;
		border: 1px solid #79797994;
		text-shadow: 1px 1px 1px #d8d8d8;
		border-radius: 4px;
	}

}

</style>

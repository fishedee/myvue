<template>
<div>
	<div>{{ firstName }}</div>
	<div>{{ lastName }}</div>
	<div>{{ fullName }}</div>
	<div>{{ aLength }}</div>
	<button v-on:click="mod1">更改firstName</button>
	<button v-on:click="mod2">更改lastName</button>
</div>
</template>

<script>
export default {
	data () {
		return {
			firstName: 'Foo',
		    lastName: 'Bar',
		    isFirst:true,
		}
	},
	computed: {
	   	aLength:function(){
	    	console.log('22');
	    	return this.fullName.length;
	    },
	    fullName: function () {
	    	return this.firstName + ''+this.lastName;
	    },
	},
	methods:{
		mod1:function(){
			this.firstName += 'm';
		},
		mod2:function(){
			this.lastName += 'c';
		}
	}
}
</script>

<style>
.message {
 color: blue;
}
</style>
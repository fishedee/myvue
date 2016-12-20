<template>
	<div>
		<input v-model.lazy="message" placeholder="edit me">
		<p>Message is: {{ message }}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
		    message:'mm'
		}
	}
}
</script>

<style>
.message {
 color: blue;
}
</style>
<template>
	<div id="caregoty_head">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	        <form action="" class="goods_search_button">
	            <input type="search" class="goods_search_content" placeholder="搜索"  onkeypress="if(event.keyCode == 13) return false;" v-model="search_key">
	        </form>
	        <button class="search_button" @click="searchFunc()">搜索</button>
	    </header>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				search_key:"",
			}
		},
		methods: {
			searchFunc(){
				this.$parent.searchGoods(this.search_key);
			}
		}

	}
</script>
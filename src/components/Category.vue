<template>
	<div id="category">
		<CategoryHeadView></CategoryHeadView>
	  <main class="category_content">
	       <CategoryLeftView></CategoryLeftView>
	       <div id="cate_right">
		<div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="(item, index) in cateGoodsData" :key=index>
	                        <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
	                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>
	                
	                </ul>
	            </div>
	        </div>
	</div> 
	    </main>
	</div>
</template>
<script>
	import {myMoveScroll} from '../assets/js/category.js'
	import CategoryHeadView from './CategoryHead.vue';
	import CategoryLeftView from './CategoryLeft.vue';
	export default{
		components:{
			CategoryHeadView,
			CategoryLeftView,
		},
		mounted(){
			myMoveScroll();
			this.fetchData(this.$route.params.id);
		},
		data(){
			return {
				cateGoodsData:[]
			}
		},
		watch:{
			$route(to){
				//console.log(to);
				var reg=/catgory\/\d+/;
				if(reg.test(to.path)){
					var categotyId=this.$route.params.id || 0;
					this.fetchData(categotyId);
				}
			}
		},
		methods: {
			searchGoods(search_key){
				console.log(search_key);
			},
			fetchData(id){
				var _this=this;
				
				_this.$http.get('/categorygoods',{
					params: {
						mId: id
					}
				}).then((res)=>{
					_this.cateGoodsData = res.data;
				},(err)=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style> 
@import '../assets/css/category.css';
</style>
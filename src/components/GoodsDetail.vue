<template>
	<div class="goods_detail">
		<header class="top_bar">
            <a onclick="window.history.go(-1)" class="icon_back"></a>
            <h3 class="cartname">商品详情</h3>
            <a href="#" class="icon_menu"></a>
        </header>
        <main class="detail_box">
            <section class="banner_box" id="">
                <ul class="banner_child_box">
                    <li class="banner_item" v-for="(item, index) in goodsImages" :key="index">
                        <img :src="item" preview="1" preview-text="" alt="" class="banner_pic">
                    </li>
                </ul>

                <div class="banner_count">
                        <em id="slide-nub" class="fz18">1</em>
                        <em class="nub-bg">/</em>
                        <em id="slide-sum" class="fz12">{{goodsImages.length}}</em>
                </div>

            </section>
            <section class="product_info clearfix">
                <div class="product_left">
                    <p class="p_name">{{goodsData.product_name}}</p>
                    <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_price">{{goodsData.product_price}}</span>
                        <span>.00</span>
                    </div>
                    <!-- <div class="product_right" @click="showImage">
                        降价通知
                    </div> -->
                </div>

            </section>
            <section class="product_intro">
                <p class="pro_det">
                    {{goodsData.product_detail}}
                </p>
           </section>
          
        </main>
        <footer class="cart_d_footer">
            <div class="m">
                <ul class="m_box">
                    <li class="m_item">
                        <a href="" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">卖家</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">关注</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a href="#" class="buy_now">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
	</div>
</template>
<script>
   export default{
        mounted(){
            this.fetchData(this.$route.params.id);
        },
        data(){
            return {
                cateGoodsAllData:[],
                goodsImages:[],
                goodsData:[],
            }
        },
        watch:{
            $route(to){
                var reg=/detail\/\d+/;
                if(reg.test(to.path)){
                    var categotyId=this.$route.params.id || 0;
                    this.fetchData(categotyId);
                }
            }
        },
        methods:{
            fetchData(id){
                var _this=this;
                
                _this.$http.get('/api_shop/detail',{
                    params: {
                        p_id: id
                    }
                }).then((res)=>{
                    // _this.goodsImages = res.data[0];
                    _this.goodsData = res.data.goods_data;
                    _this.goodsImages = res.data.image_url_list;
                    this.$previewRefresh();
                },(err)=>{
                    console.log(err);
                })
            },
            showImage(){
                this.goodsImages.forEach(element => {
                    console.log(element.image_url)
                });

            }
        }
    }
</script>
<style>
@import '../assets/css/detail.css';
</style>
<template>
	<div>
	
	<section style="background: #f0f0f0;height: 100%;width: 1000px;">
	   <div class="container"> 
	    
		<el-card class="box-card" style="width: 1000px;text-align: center;">
			 <el-link type="primary"  v-for="(item, index) in tags">
				<div style="padding: 100 100 100;">{{item.title}}</div>
				 
			 </el-link>
			
		</el-card>
		
	   </div>
	   
	</section>
	</div>
	
</template>

<script>
	import { gettagList } from "../api/tags";
	
	export default{
		data(){
			return{
				tags:'',
			}
		},
		
		methods:{
			tagslist(){
				gettagList()
				.then(res=>{
					console.log(res)
					this.tags=res.data
				})
			}
			
		},
		mounted() {
			
			
			this.tagslist();
		}
		
		
	}
</script>

<style>
	element.style{
		height: 700px !important;
	}
	
</style>

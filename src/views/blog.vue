<template>
		
		<div class="contentArea">
		     <blogList
		        @showBlogContent="showBlogContent"
		        v-show="!showCatalog"
		        class="blogList"
		      ></blogList>
			  
			  <blogContent
			    :blogItem="blogItem"
			    @showBlogItem="showBlogItem"
			    class="blogContent"
			    v-if="showCatalog"
			  ></blogContent>
			  
			
			  		
		</div>
	
			
		 

	
</template>

<script>
	import blogList from './blogList'
	import blogContent from './blogContent'
	export default{
		components:{blogList,blogContent},
	
	
	data() {
	  return {
	    showCatalog: false,
	    blogItem: {},
	    blogToc: "",
	   

		
	  };
	},
	methods: {
		

	  
	  // 显示博客内容和目录
	  showBlogContent(item) {
	    this.showCatalog = true;
	    this.blogItem = item;

		
		
		
		
	  },
	  showBlogItem() {
	    this.showCatalog = false;
	  },
	  // 获得当前页

	}
}
</script>

<style>
</style>

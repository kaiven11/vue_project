<template>
  <div>
    <header>
      <menuList></menuList>
    </header>
	
	
	
  <section style="background:#f0f0f0 ;height: 100%">
     <div class="container"> 
	 <router-view></router-view>
	   <div class="right">
		 
	       <personalInfo class="personalCard"></personalInfo>
	       <catalog
	         :blogToc=blogToc
	         class="catalogCard"
	       ></catalog>
	     </div>
	    
	 </div>
	
    </section>
	
    <footer></footer>
	
	
   
  </div>
</template>

<script>
import menuList from "../sidebar/menu";
import blogList from "./blogList";
import personalInfo from "./PersonalInfo";
import catalog from "./blogCatalog";
import blogContent from "./blogContent";
import {getCataList} from "../api/blogCataLog"
require("../viewstyle/blog.scss");
export default {
  components: {
    menuList,
    personalInfo,
    catalog,
  },
  data() {
    return {
      showCatalog: false,
      blogItem: {},
      blogToc: "",
	  show:false
    };
  },

  

};
</script>

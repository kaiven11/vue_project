<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
	  router
      default-active="2" 
      text-color="#fff" 
      active-text-color="#909399"
	  @select="handleSelect"
    >
      <el-menu-item  class="menuItem" index="/" id="home"
        ><Icon class="ios-home" type="ios-home" size="22" />
		
		首页
		
		</el-menu-item
      >
      <el-menu-item class="menuItem"  index="/classify" id="kind"
        ><Icon class="md-apps" type="md-apps" size="22" />分类</el-menu-item
      >
      <el-menu-item class="menuItem"  index="/tag" id="label"
        ><Icon
          class="md-pricetags"
          type="md-pricetags"
          size="22"
        />标签</el-menu-item>
      <el-menu-item class="menuItem"   index="/about" id="about"
        ><i class="el-icon-s-custom" style="font-size: 20px;"></i
        ><span>关于</span></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
	
require("../viewstyle/menu.scss");
import personalInfo from "../views/PersonalInfo";
export default {
  data() {
    return {
      
	  
	  
    };
  },
  components:{
	personalInfo  
  },
  
  mounted() {
    document.getElementById("home").style.backgroundColor = "#409EFF";
    document.getElementById("home").style.color = "#fff";
    document.getElementById("kind").style.backgroundColor = "#fff";
    document.getElementById("kind").style.color = "#909399";
    document.getElementById("label").style.backgroundColor = "#fff";
    document.getElementById("label").style.color = "#909399";
    document.getElementById("about").style.backgroundColor = "#fff";
    document.getElementById("about").style.color = "#909399";
  },
  methods: {
    handleSelect(val) {
      this.activeIndex = val;
	  console.log(this.active,'.............')
      if (this.activeIndex == "/") {
        document.getElementById("home").style.backgroundColor = "#409EFF";
        document.getElementById("home").style.color = "#fff";
        document.getElementById("kind").style.backgroundColor = "#fff";
        document.getElementById("kind").style.color = "#909399";
        document.getElementById("label").style.backgroundColor = "#fff";
        document.getElementById("label").style.color = "#909399";
        document.getElementById("about").style.backgroundColor = "#fff";
        document.getElementById("about").style.color = "#909399";
		
		
      } else if (this.activeIndex == "/classify") {
        document.getElementById("home").style.backgroundColor = "#fff";
        document.getElementById("home").style.color = "#909399";
        document.getElementById("kind").style.backgroundColor = "#409EFF";
        document.getElementById("kind").style.color = "#fff";
        document.getElementById("label").style.backgroundColor = "#fff";
        document.getElementById("label").style.color = "#909399";
        document.getElementById("about").style.backgroundColor = "#fff";
        document.getElementById("about").style.color = "#909399";
		
		
      } else if (this.activeIndex == "/tag") {
        document.getElementById("home").style.backgroundColor = "#fff";
        document.getElementById("home").style.color = "#909399";
        document.getElementById("kind").style.backgroundColor = "#fff";
        document.getElementById("kind").style.color = "#909399";
        document.getElementById("label").style.backgroundColor = "#409EFF";
        document.getElementById("label").style.color = "#fff";
        document.getElementById("about").style.backgroundColor = "#fff";
        document.getElementById("about").style.color = "#909399";
		
		
      } else if (this.activeIndex == "/about") {
        document.getElementById("home").style.backgroundColor = "#fff";
        document.getElementById("home").style.color = "#909399";
        document.getElementById("kind").style.backgroundColor = "#fff";
        document.getElementById("kind").style.color = "#909399";
        document.getElementById("label").style.backgroundColor = "#fff";
        document.getElementById("label").style.color = "#909399";
        document.getElementById("about").style.backgroundColor = "#409EFF";
        document.getElementById("about").style.color = "#fff";
		
      }
    }
  }
};
</script>


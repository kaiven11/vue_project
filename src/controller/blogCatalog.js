require("../viewstyle/catalog.scss");
import {getCataList} from '../api/blogCataLog'
import marked from "marked";
export default {
  data() {
    return {
      catalog: ""
    };
  },
  
  methods:{
  	  loadCatelog(){
  		  getCataList().then(res=>{
  			  this.catalog=res.data
  		  })
  	  }
  	  
  },
  
  created() {
	  this.loadCatelog();
    this.catalog = marked(this.catalog);
  }
};

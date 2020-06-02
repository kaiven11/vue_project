import { getblogList, updateViews } from "../api/blogList";
import {formatDate} from '../util/date.js'
import qs from 'qs'
require("../viewstyle/blogList.scss");
export default {
 
  data() {
    return {
      tableData: [],
	  total:1,
	  page:1,
    };
  },
  watch: {
    page() {
      this.currentChange()
    }
  },
  
  filters: {
      formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
     }
  },
  methods: {
	
	  
	  getCurrentPage(currentPage) {
	    this.page = currentPage
	  },
    // 显示博客内容
    showBlogContent(item) {
      this.$emit("showBlogContent", item);
	  updateViews(item.id).then(res=>{
		  if(res.statusText=='OK'){
			  return;
		  }
	  })
	  
	  
    },
    // 展示博客列表信息
    showBlogList() {
      getblogList()
        .then((response) => {
          if (response.statusText == 'OK') {
            this.tableData = response.data.results;
			this.total = response.data.count;

          } else {
            this.$notify.error({
              title: "错误",
              message: response.data.msg
            });
          }
        })
        .catch((error) => {
          this.$notify.error({
            title: "错误",
            message: error
          });
        });
    },
    // 当前页的改变
    currentChange() {
      let obj = {
        page: this.page,
        // pageSize: 1
        }
      getblogList(obj).then((response) => {
		  this.tableData=response.data.results;

      }).catch((error) => {
          this.$notify.error({
            title: "错误",
            message: error
          });
      })
    }
  },
  mounted() {
    this.showBlogList();
	
  }
};

require("../viewstyle/blogContent.scss");
import marked from "marked";
import {formatDate} from '../util/date.js'
export default {
  props: ["blogItem"],
  data() {
    return {};
  },
  methods: {
    showBlogItem() {
      this.$emit("showBlogItem");
    }
  },
  filters: {
      formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
     }
  },
  created() {
    this.blogItem.blogcontent = marked(this.blogItem.content);
  }
};

require("../viewstyle/personalInfo.scss");
import { getPersonalInfo } from "../api/personalInfo";
export default {
  data() {
    return {
      name: "HYL",
      motto: "Keep learn",
      Info: {}
    };
  },
  methods: {
    personalInfo() {
      getPersonalInfo()
        .then((response) => {
          if (response.statusText == 'OK') {
            this.Info = response.data[0];
          } else {
            this.$notify.error({
              title: "错误",
              message: response.msg
            });
          }
        })
        .catch((error) => {
          this.$notify.error({
            title: "错误",
            message: error
          });
        });
    }
  },
  mounted() {
    this.personalInfo();
  }
};

<template>
  <div>
    <el-card
      v-for="(item, index) in tableData"
      :key="index"
      class="blogListCard"
    >
      <div @click="showBlogContent(item)">
        <div class="blogtitle">
          {{ item.title }}
        </div>
        <div class="briefContent">
          {{ item.describe }}
        </div>
        <div class="iconGroup">
          <div class="publishTime">
            <Icon type="md-time" color="gray" size="19" />
            <p>{{ item.time|formatDate }}</p>
          </div>
          <div class="watchNum">
            <Icon
              type="ios-eye"
              color="gray"
              size="25"
              style="margin-top: -3px;"
            />
            <p>{{ item.views }}</p>
          </div>
          <div class="label">
            <Icon
              type="ios-pricetag"
              color="gray"
              size="17"
              style="margin-top: 2px;"
            />
            <div class="labelArray">
              <div class="labelName">
                <Tag
                  v-for="(item, index) in item.tags"
                  :key="index"
                  :color="item.color"
                  >{{ item.title }}</Tag
                >
              </div>
            </div>
          </div>
          <div class="fileType">
            <Icon
              type="ios-folder"
              color="gray"
              size="19"
              style="margin-top: 1px;"
            />
            <div class="fileTypeArray">
              <div class="fileLabelName">
                <Tag
                
                  >{{ item.category }}</Tag
                >
              </div>
            </div>
          </div>
        </div>
		
		
		
      </div>
	  
	 
    </el-card>
	<el-pagination
	        @current-change="getCurrentPage"
	        class="page"
	        background
			:page-size=5
	        layout="prev, pager, next"
	        :total="total"
	      >   
		</el-pagination>
		
		
		<div style="text-align: center;margin-bottom: 0px;">
			<span>尚进网</span>&nbsp;
			<span >网站备案号:京ICP备19059437</span>
		</div>
		
		<div style="text-align: center;margin-bottom: 0px;">
			<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011102001290" style="display:inline-block;text-decoration:none;"><img src="" style="float:left;"/><p style="float:left;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11011102001290号</p></a>
		</div>
		
		
				 
  </div>
</template>

<script src="../controller/blogList.js"></script>


<template>
  <div>
    <el-card class="blogContent">
      <div class="blogContentTitle">
        {{ blogItem.title }}
      </div>
      <div class="closeIcon" @click="showBlogItem">
        <Icon type="md-close" size="35" />
      </div>
      <div class="contentIconGroup">
        <div class="contentTime">
          <Icon type="md-time" color="gray" size="19" />
          <p>{{ blogItem.time |formatDate }}</p>
        </div>
        <div class="contentWatchNum">
          <Icon
            type="ios-eye"
            color="gray"
            size="25"
            style="margin-top: -3px;"
          />
          <p>{{ blogItem.views }}</p>
        </div>
        <div class="contentLabel">
          <Icon
            type="ios-pricetag"
            color="gray"
            size="17"
            style="margin-top: 1px;"
          />
          <div class="contLabelArray">
            <div class="contLabelName">
              <Tag
                v-for="(item, index) in blogItem.tags"
                :key="index"
                :color="item.color"
                >{{ item.title }}</Tag
              >
            </div>
          </div>
        </div>
        <div class="contentFileType">
          <Icon
            type="ios-folder"
            color="gray"
            size="19"
            style="margin-top: 1px;"
          />
          <div class="contFileArray">
            <div class="contFileName">
              <Tag
               
                >{{ blogItem.category }}</Tag
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="markdown-body"
        v-html="blogItem.content"
        v-highlight
      ></div>
    </el-card>
  </div>
</template>

<script src="../controller/blogContent.js"></script>



<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="hui-sidebar col-md-4 col-xl-3 col-12">
          <b-img center rounded="circle" alt="Circle image" src="https://picsum.photos/250/250/?image=54"></b-img>
          <h2 class="text-center">
            Habit
          </h2>
        </div>
        <div class="hui-content col-md-8 col-xl-9 col-12 pb-md-3 pl-md-3">
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h2 class="text-muted">基本信息</h2>
              <div>
                <b-row class="pb-3">
                  <b-col class="font-weight-bold col-2">性别</b-col>
                  <b-col>男</b-col>
                </b-row>
                <b-row class="pb-3">
                  <b-col class="font-weight-bold col-2">出生日期</b-col>
                  <b-col>1989年07月16日</b-col>
                </b-row>
                <b-row class="pb-3">
                  <b-col class="font-weight-bold col-2">手机</b-col>
                  <b-col>1834500XXXX</b-col>
                </b-row>
                <b-row>
                  <b-col class="font-weight-bold col-2">E-MAIL</b-col>
                  <b-col>habit_shine@163.com</b-col>
                </b-row>
              </div>
            </div>
          </div>
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h5>Markdown</h5>
              <div>
                <VueMarkdown :source="markdown"></VueMarkdown>
              </div>
            </div>
          </div>
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h5>基本信息</h5>
            </div>
          </div>
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h5>基本信息</h5>
            </div>
          </div>
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h5>基本信息</h5>
            </div>
          </div>
          <div class="hui-content__body">
            <div class="hui-content__main">
              <h5>基本信息</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="hui-bg-block hidden-sm hidden-xs" height="519" width="758">
      <polygon points="0,455,693,352,173,0,92,0,0,71" style="fill:#d2d2d2;stroke:purple;stroke-width:0; opacity: 0.5"></polygon>
    </svg>
    <svg class="hui-bg-block hidden-sm hidden-xs" height="536" width="633">
      <polygon points="0,0,633,0,633,536" style="fill:#99CCFF;stroke:purple;stroke-width:0"></polygon>
    </svg>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'App',
  data() {
    return {
      markdown: ''
    }
  },
  created() {
    this.$axios.get('demo.md').then(res => {
      this.markdown = res.data
    })
  },
  components: {
    VueMarkdown
  }
}
</script>
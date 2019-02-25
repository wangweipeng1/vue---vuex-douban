<template>
  <div>
    <h1 class="page-header">{{ title }}</h1>

    <div class="media" v-for="(item, i) in subjects" :key="i">
      <div class="media-left">
        <router-link :to="{name:'moviedetail',params:{id:item.id}}">
          <img :src="'https://images.weserv.nl?url='+item.images.small.substr(7)" alt="海报点击链接">
        </router-link>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ item.title }}</h4>
        {{ item.genres }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    // this.setData(this.$route.name)
    this.setData();
  },
  watch: {
    // '$route' (to, from) {
    //     this.setData(to.name)
    // }
    $route(to, from) {
      this.setData();
    }
  },
  computed: {
    ...mapState("movielist", ["title", "subjects"])
  },
  methods: {
    ...mapActions("movielist", ["setData"])
  }
};
</script>

<style>
</style>

<template>
  <div>
    <h4 class="section-title">Gallery</h4>
    <div class="section-content row mx-0">
      <div v-for="(image, index) in images" class="col-6 col-sm-6 col-md-3 p-0">
        <img v-lazy="image.thumb" style="width: 100%" @click="openGallery(index)">
      </div>
      <lightbox ref="lightbox" :images="images" :showLightBox="false" :showCaption="false" :siteLoading="'http://lorempixel.com/640/320/transport/'"></lightbox>
    </div>
  </div>
</template>
<script>
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
import Lightbox from 'vue-image-lightbox'
export default {
  data () {
    return {
      images: [
        {
          src: 'http://lorempixel.com/640/320/people/1/',
          thumb: 'http://lorempixel.com/640/320/people/1/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/animals/2/',
          thumb: 'http://lorempixel.com/640/320/animals/2/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/technics/3/',
          thumb: 'http://lorempixel.com/640/320/technics/3/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/animals/4/',
          thumb: 'http://lorempixel.com/640/320/animals/4/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/people/5/',
          thumb: 'http://lorempixel.com/640/320/people/5/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/people/6/',
          thumb: 'http://lorempixel.com/640/320/people/6/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/animals/0/',
          thumb: 'http://lorempixel.com/640/320/animals/0/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/technics/4/',
          thumb: 'http://lorempixel.com/640/320/technics/4/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/people/9/',
          thumb: 'http://lorempixel.com/640/320/people/9/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        },
        {
          src: 'http://lorempixel.com/640/320/technics/10/',
          thumb: 'http://lorempixel.com/640/320/technics/10/',
          caption: 'caption to display. receive <html> <b>tag</b>'
        }
      ]
    }
  },
  components: {
    Lightbox
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>
<style>

</style>

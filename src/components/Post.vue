Ï<template>
  <div class="wrapper-content clearfix">
    <div class="container">
  
      <div class="row">
  
        <div class="col-sm-8 blog-main">
  
          <div class="blog-post">
            <div class="float-left">
              <h2 class="blog-post-title">{{item.name}}</h2>
              <p class="blog-post-meta">{{item.updated_at | moment("dddd, MMMM Do YYYY") }} by
                <a href="#">Mark</a>
              </p>
            </div>
            <div class="float-right">
              <social-sharing :url="url" :title="item.name" media="http://www.freeiconspng.com/uploads/pokeball-icon-15.png" :description="item.description" inline-template class="my-3 social-sharing">
                <div>
                  <network network="facebook">
                    <icon name="facebook" scale="1.3"></icon>
                  </network>
                  <network network="googleplus">
                    <icon name="google-plus" scale="1.5"></icon>
                  </network>
                  <network network="twitter">
                    <icon name="twitter" scale="1.3"></icon>
                  </network>
                </div>
              </social-sharing>
            </div>
  
            <img :src="'http://lorempixel.com/640/320/people/'+(Math.floor(Math.random() * 10) + 1)+'/'" class="mb-3" width="100%">
  
            <p>{{item.description}}</p>
          </div>
          <!-- /.blog-post -->
  
          <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav>
  
          <comComments class="mt-3" :id="item.id"></comComments>
  
        </div>
        <!-- /.blog-main -->
  
        <div class="col-sm-3 offset-sm-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta
              <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
              <li>
                <a href="#">March 2014</a>
              </li>
              <li>
                <a href="#">February 2014</a>
              </li>
              <li>
                <a href="#">January 2014</a>
              </li>
              <li>
                <a href="#">December 2013</a>
              </li>
              <li>
                <a href="#">November 2013</a>
              </li>
              <li>
                <a href="#">October 2013</a>
              </li>
              <li>
                <a href="#">September 2013</a>
              </li>
              <li>
                <a href="#">August 2013</a>
              </li>
              <li>
                <a href="#">July 2013</a>
              </li>
              <li>
                <a href="#">June 2013</a>
              </li>
              <li>
                <a href="#">May 2013</a>
              </li>
              <li>
                <a href="#">April 2013</a>
              </li>
            </ol>
          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ol>
          </div>
        </div>
        <!-- /.blog-sidebar -->
  
      </div>
      <!-- /.row -->
  
    </div>
  </div>
</template>
<script>
import comComments from '@/components/Comments'
export default {
  data () {
    return {
      item: { name: 'post' },
      url: window.location.href
    }
  },
  metaInfo () {
    return {
      title: this.item.name,
      meta: [
        { property: 'fb:app_id', content: '220299868046727' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.item.name },
        { property: 'og:url', content: this.url },
        { property: 'og:image', content: 'http://www.freeiconspng.com/uploads/pokeball-icon-15.png' }
      ]
    }
  },
  created () {
    console.log('created!')
    this.axios.get('http://localhost:8000/api/products/' + this.$route.params.id).then((response) => {
      this.item = response.data
      // console.log(response.data)
    })
  },
  components: {
    comComments
  }
}
</script>
<style>
.social-sharing span {
  background-color: rgba(35, 84, 110, 0.2);
  padding: 10px 8px 2px;
}
</style>


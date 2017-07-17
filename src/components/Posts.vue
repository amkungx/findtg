<template>
  <div class="container wrapper-content">
    <div class="col-12 col-md-12">
      <div class="section-title">
        <h2>แจ้งหายล่าสุด</h2>
      </div>
      <div class="row">
        <div class="box-item col-xs-12 col-sm-6 col-md-6 col-lg-4 box-item pb-4 pt-3" v-for="(item, index) in items">
          <img v-lazy="'http://lorempixel.com/640/320/people/'+index+'/'" class="mb-3" width="100%">
          <!--<img :src="'/static/img/'+item.image" class="mb-3" width="100%">-->
          <h4>{{item.name}}
            <span class="float-right total-viewed">
              <i class="el-icon-search"></i> {{(Math.floor(Math.random() * 100) + 1)}} ครั้ง</span>
          </h4>
          <p>
            {{ item.description }}
          </p>
          <hr class="dim">
          <div class="float-left date-time">
            {{item.image}} {{item.updated_at | moment("dddd, MMMM Do YYYY") }}
          </div>
          <div class="float-right">
            <el-button size="small" @click="readPost(item.id)">อ่านต่อ</el-button>
          </div>
        </div>
      </div>
      <!--/row-->
    </div>
    <el-button @click="test_button">Test Button</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      items: []
    }
  },
  created () {
    console.log('created!')
    this.axios.get('http://localhost:8000/api/products?sort=name|desc&page=1&per_page=9').then((response) => {
      this.items = response.data.data
    })
  },
  methods: {
    test_button () {
      console.log(this.items)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    readPost (id) {
      this.$router.push({ name: 'Post', params: { id: id } })
      // console.log(id)
    }
  }
}
</script>
<style>
.box-item h4,
.box-item span {
  font-family: 'Kanit';
  font-weight: 200;
}

.box-item .total-viewed {
  font-size: 12px;
  margin-top: 8px;
  font-weight: 400;
}

.box-item .date-time {
  font-size: 14px;
  margin-top: 6px;
  font-weight: 200;
}

.dim {
  opacity: 0.6;
  border-style: dashed;
}
</style>

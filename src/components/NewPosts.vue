<template>
  <div class="container wrapper-content">
    <div class="col-12 col-md-12">
      <div class="section-title">
        <h2>แจ้งหายล่าสุด</h2>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="ทั้งหมด" name="first">
          <div class="row">
            <div class="box-item col-xs-12 col-sm-6 col-md-6 col-lg-4 box-item pb-4 pt-3" v-for="(item, index) in items" @click="readPost(item.id)">
              <img v-lazy="'http://lorempixel.com/640/320/people/'+index+'/'" class="mb-3" width="100%">
              <!--<img :src="'/static/img/'+item.image" class="mb-3" width="100%">-->
              <h4>{{item.name}}
                <span class="float-right total-viewed">
                  <i class="el-icon-search"></i> {{(Math.floor(Math.random() * 100) + 1)}} ครั้ง</span>
              </h4>
              <p>
                {{item.description}}
              </p>
              <hr class="dim">
              <div class="float-left date-time">
                {{item.updated_at | moment("dddd, MMMM Do YYYY") }}
              </div>
              <div class="float-right">
                <el-button size="small" @click="readPost(item.id)">อ่านต่อ</el-button>
              </div>
            </div>
          </div>
          <!--/row-->
        </el-tab-pane>
        <el-tab-pane label="คนหาย" name="second">
          <div class="row">
            <div class="box-item col-xs-12 col-sm-6 col-md-6 col-lg-4 box-item pb-4 pt-3" v-for="(item, index) in items_humans">
              <img v-lazy="'http://lorempixel.com/640/320/people/'+index+'/'" class="mb-3" width="100%">
              <!--<img :src="'/static/img/'+item.image" class="mb-3" width="100%">-->
              <h4>{{item.name}}
                <span class="float-right total-viewed">
                  <i class="el-icon-search"></i> {{(Math.floor(Math.random() * 100) + 1)}} ครั้ง</span>
              </h4>
              <p>
                {{item.description}}
              </p>
              <hr class="dim">
              <div class="float-left date-time">
                {{item.updated_at | moment("dddd, MMMM Do YYYY") }}
              </div>
              <div class="float-right">
                <el-button size="small" @click="readPost(item.id)">อ่านต่อ</el-button>
              </div>
            </div>
          </div>
          <!--/row-->
        </el-tab-pane>
        <el-tab-pane label="สัตว์หาย" name="third">
          <div class="row">
            <div class="box-item col-xs-12 col-sm-6 col-md-6 col-lg-4 box-item pb-4 pt-3" v-for="(item, index) in items_animals">
              <img v-lazy="'http://lorempixel.com/640/320/animals/'+index+'/'" class="mb-3" width="100%">
              <!--<img :src="'/static/img/'+item.image" class="mb-3" width="100%">-->
              <h4>{{item.name}}
                <span class="float-right total-viewed">
                  <i class="el-icon-search"></i> {{(Math.floor(Math.random() * 100) + 1)}} ครั้ง</span>
              </h4>
              <p>
                {{item.description}}
              </p>
              <hr class="dim">
              <div class="float-left date-time">
                {{item.updated_at | moment("dddd, MMMM Do YYYY") }}
              </div>
              <div class="float-right">
                <el-button size="small" @click="readPost(item.id)">อ่านต่อ</el-button>
              </div>
            </div>
          </div>
          <!--/row-->
        </el-tab-pane>
        <el-tab-pane label="ของหาย" name="fourth">
          <div class="row">
            <div class="box-item col-xs-12 col-sm-6 col-md-6 col-lg-4 box-item pb-4 pt-3" v-for="(item, index) in items_humans">
              <img v-lazy="'http://lorempixel.com/640/320/technics/'+index+'/'" class="mb-3" width="100%" @click="readPost(item.id)">
              <!--<img :src="'/static/img/'+item.image" class="mb-3" width="100%">-->
              <h4>{{item.name}}
                <span class="float-right total-viewed">
                  <i class="el-icon-search"></i> {{(Math.floor(Math.random() * 100) + 1)}} ครั้ง</span>
              </h4>
              <p>
                {{item.description}}
              </p>
              <hr class="dim">
              <div class="float-left date-time">
                {{item.updated_at | moment("dddd, MMMM Do YYYY") }}
              </div>
              <div class="float-right">
                <el-button size="small" @click="readPost(item.id)">อ่านต่อ</el-button>
              </div>
            </div>
          </div>
          <!--/row-->
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-button @click="test_button">Test Button</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      items: [],
      items_humans: [],
      items_animals: [],
      items_things: []
    }
  },
  created () {
    console.log('created!')
    this.axios.get('http://localhost:8000/api/products?sort=name|desc&page=1&per_page=9').then((response) => {
      this.items = response.data.data
    })
    this.axios.get('http://localhost:8000/api/products?sort=name|asc&page=1&per_page=9').then((response) => {
      this.items_humans = response.data.data
    })
    this.axios.get('http://localhost:8000/api/products?sort=id|asc&page=1&per_page=9').then((response) => {
      this.items_animals = response.data.data
    })
    this.axios.get('http://localhost:8000/api/products?sort=updated_at|asc&page=1&per_page=9').then((response) => {
      this.items_things = response.data.data
    })
  },
  methods: {
    test_button () {
      console.log(this.items)
      console.log(this.items_humans)
      console.log(this.items_animals)
      console.log(this.items_things)
      this.items = this.items_humans
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


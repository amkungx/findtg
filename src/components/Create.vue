<template>
  <div class="wrapper-content clearfix">
    <div class="container">
      <div class="section-title mb-4">
        <h2>แจ้งหาย</h2>
      </div>
      <div class="mt-3">
        <el-input placeholder="หัวข้อที่ต้องการแจ้งหาย" v-model="input5">
          <el-select v-model="select" slot="prepend" placeholder="ประเภท">
            <el-option label="คนหาย" value="1"></el-option>
            <el-option label="สัตว์หาย" value="2"></el-option>
            <el-option label="สิ่งของหาย" value="3"></el-option>
          </el-select>
        </el-input>
      </div>
      <div class="mt-3">
        <el-input type="textarea" :rows="4" placeholder="ข้อมูลการหาย" v-model="textarea">
        </el-input>
      </div>
      <div class="mt-3">
        <el-input placeholder="Please input" v-model="input3"></el-input>
        <template slot="prepend">
          <i class="el-icon-information"></i>
        </template>
      </div>
  
      <div class="mt-3">
        <div class="block">
          <el-date-picker v-model="input4" type="datetime" placeholder="Select date and time">
          </el-date-picker>
        </div>
      </div>
  
    </div>
  </div>
</template>

<style>
.el-date-editor--datetimerange.el-input,
.el-date-editor.el-input {
  width: 100%;
}
.el-picker-panel{
  max-width: 400px;
}
</style>
<script>
export default {
  data () {
    return {
      textarea: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value10: []
    }
  }
}
</script>

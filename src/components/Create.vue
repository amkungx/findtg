<template>
  <div class="wrapper-content clearfix">
    <div class="container form">
      <div class="section-title mb-4">
        <h2>แจ้งหาย</h2>
      </div>
      <div class="mt-3">
        <el-input placeholder="หัวข้อที่ต้องการแจ้งหาย" v-model="input">
          <el-select v-model="select" slot="prepend" placeholder="ประเภทการหาย">
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
        <el-input placeholder="Please input" v-model="input2"></el-input>
        <template slot="prepend">
          <i class="el-icon-information"></i>
        </template>
      </div>
  
      <div class="mt-3">
        <div class="block">
          <el-date-picker v-model="input3" type="datetime" placeholder="Select date and time">
          </el-date-picker>
        </div>
      </div>
      <div class="mt-3">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or
            <em>click to upload</em>
          </div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
  
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textarea: '',
      input: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      value10: [],
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
<style>
.form,
.form .el-select-dropdown__item span {
  font-family: 'Kanit' !important;
  font-weight: 200 !important;
}

.el-date-editor--datetimerange.el-input,
.el-date-editor.el-input {
  width: 100%;
}

.el-select .el-input {
  width: 140px;
}

.el-picker-panel {
  max-width: 400px;
}
</style>

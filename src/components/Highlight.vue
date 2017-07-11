<template>
  <div>
    <div class="hero">
      <div class="text-center p-5" style="color: white;">
        <h1>คนหาย สัตว์เลี้ยงหาย ของหาย</h1>
        <h2>คุณสามารถลงประกาศ แจ้งหายไว้ได้ที่นี่ แล้วให้พวกเราช่วยตามหา</h2>
        <el-button type="danger" icon="edit" @click="goCreate">แจ้งหาย</el-button>
      </div>
      <p class="credits">
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goCreate () {
      this.$router.push({ name: 'Create' })
    }
  }
}
</script>

<style>
.hero h1,
.hero h2,
.hero a {
  font-weight: 200;
}

.hero span {
  font-family: 'Kanit', sans-serif;
}

.hero {
  font-family: 'Kanit', sans-serif;
  padding: 60px;
  /*background-image: url(/assets/charity-header.jpg);*/
  background-position: 50% 50%;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url('/static/img/charity-header.jpg');
}
</style>

<template>
  <div id="app">
    <main>
      <layoutHeader></layoutHeader>
      <el-collapse-transition>
        <router-view></router-view>
      </el-collapse-transition>
    </main>
    <layoutFooter></layoutFooter>
  </div>
</template>

<script>
import layoutHeader from '@/layouts/Header'
import layoutFooter from '@/layouts/Footer'
export default {
  name: 'app',
  components: {
    layoutHeader,
    layoutFooter
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, 'Kanit', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 200;
}

main {
  min-height: 100%;
  margin-bottom: -100px;
  padding-bottom: 100px;
}

.wrapper-content {
  margin: 40px auto;
}

.section-title h2 {
  font-weight: 200 !important;
  font-family: 'Kanit', sans-serif;
}

.el-button {
  border-radius: 2px;
}
</style>

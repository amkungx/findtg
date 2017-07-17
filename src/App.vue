<template>
  <div id="app">
    <main>
      <layoutHeader></layoutHeader>
      <el-collapse-transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
  font-family: 'Avenir', Helvetica, 'Kanit', Arial, sans-serif !important;
  margin: 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: 'Avenir', Helvetica, 'Kanit', Arial, sans-serif;
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

h1.section-title,
h2.section-title,
h3.section-title,
h4.section-title {
  font-family: 'Avenir', Helvetica, 'Kanit', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 200;
  font-size: 1.3rem;
}

.section-content {}

.el-button {
  border-radius: 2px;
}
</style>

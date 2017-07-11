<template>
  <header class="bg-success" id="header">
    <div class="container">
      <b-navbar toggleable type="inverse" variant="success">
  
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-link class="navbar-brand" to="/">
          <span>Logo</span>
        </b-link>
  
        <b-collapse is-nav id="nav_collapse">
  
          <b-nav is-nav-bar>
            <b-nav-item to="/posts">ดูประกาศตามหา</b-nav-item>
            <b-nav-item>แจ้งหาย</b-nav-item>
            <b-nav-item>ช่วยเหลือ</b-nav-item>
          </b-nav>
  
          <b-nav is-nav-bar class="ml-auto">
  
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item to="#">EN</b-dropdown-item>
              <b-dropdown-item to="#">ES</b-dropdown-item>
              <b-dropdown-item to="#">RU</b-dropdown-item>
              <b-dropdown-item to="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
  
            <b-nav-item-dropdown right>
  
              <!-- Using button-content slot -->
              <template slot="button-content">
                <span style="font-weight: bold;">User</span>
              </template>
  
              <b-dropdown-item to="#">Profile</b-dropdown-item>
              <b-dropdown-item to="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
  
          </b-nav>
        </b-collapse>
      </b-navbar>
  
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    handleScroll: function (event) {
      if (event.target.body.scrollTop > 150) {
        document.getElementById('header').classList.add('smaller')
      } else {
        document.getElementById('header').classList.remove('smaller')
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>
<style scope>
.navbar.bg-success {
  background-color: transparent !important;
}

.bg-success {
  background-color: rgba(35, 84, 110, 1) !important;
  /*background-color: transparent !important;*/
}


/*header {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0683c9;
  -webkit-transition: height 0.3s;
  -moz-transition: height 0.3s;
  -ms-transition: height 0.3s;
  -o-transition: height 0.3s;
  transition: height 0.3s;
}

header.smaller {
  height: 50px;
}*/
</style>


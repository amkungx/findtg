<template>
  <div>
    <gmap-map ref="map" :center="center" :zoom="zoom" @click="setMarker" :options="options" style="width: 100%; height: 500px; will-change: transform; transform: translateZ(0);">
      <gmap-marker :key="index" v-for="(m, index) in markers" :animation=4 :title="'Your location'" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
      </gmap-marker>
      <gmap-circle :center="position" :radius="500" v-if="showRadius"></gmap-circle>
    </gmap-map>
    <div class="mt-2">
      <el-button type="primary" @click="setCurrent">Current location</el-button>
      <el-button type="primary" @click="showRadius=!showRadius">Show Radius</el-button>
    </div>
  </div>
</template>
<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCh86t9AKLq8kPqiWjnCJylcOkT_ZpIIXs',
    v: '3.29'
    // libraries: 'places', //// If you need to use place input
  }
})
export default {
  data () {
    return {
      options: {
        scaleControl: true,
        scrollwheel: false,
        clickableIcons: true,
        streetViewControl: true,
        panControlOptions: true,
        gestureHandling: 'greedy',
        fullscreenControl: true,
        mapTypeControl: true,
        setMyLocationEnabled: true
      },
      zoom: 13,
      showRadius: false,
      center: { lat: 13.7248944, lng: 100.4926842 },
      markers: [],
      current: null,
      position: null
    }
  },
  watch: {
    '$route' (to, from) {
      Vue.$gmapDefaultResizeBus.$emit('resizePreserveCenter')
    },
    position (position) {
      // this.center.lat = position[1].subtitle
      // this.center.lng = position[3].subtitle
      // this.$emit('setMapCenter', this.center)
      console.log('position changed')
      console.log(position)
      // this.getLocationsNearToUser()
    },
    center (center) {
      console.log('center changed')
      console.log(center)
    }
  },
  methods: {
    setPosition (position) {
      this.position = position
    },
    getPosition () {
      return this.position
    },
    setLocation (position) {
      this.setPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
      this.current = this.getPosition()
      this.center = this.getPosition()
      this.markers = [{
        position: this.getPosition()
      }]
      // this.$refs.map.setMyLocationEnabled(true)
    },
    setMarker (place) {
      this.setPosition({ lat: place.latLng.lat(), lng: place.latLng.lng() })
      this.markers = [{
        position: this.getPosition()
      }]
    },
    setCurrent () {
      this.setPosition(this.current)
      this.$refs.map.panTo(this.current)
      this.markers = [{
        position: this.getPosition()
      }]
    }
  },
  created () {
    // if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
    //   // mMap.setMyLocationEnabled(true);
    //   console.log('s')
    // } else {
    //   // Show rationale and request permission.
    //   console.log('x')
    // }
    if ('geolocation' in navigator) {
      /* geolocation is available */
      console.log('geolocation is available')
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)
      })
      var watchID = navigator.geolocation.watchPosition((position) => {
        // console.log('position changed!')
        navigator.geolocation.clearWatch(watchID)
        this.setLocation(position)
      })
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available')
    }
  }
}
</script>
<style>

</style>

<template>
  <div>
    <gmap-autocomplete :value="description" @place_changed="setPlace" style="width: 100%;">
    </gmap-autocomplete>
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
    v: '3.29',
    libraries: 'places'
  }
})
export default {
  data () {
    return {
      description: 'รามอินทรา ซอย 23',
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
      center: { lat: 13.7248, lng: 100.4926 },
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
      // console.log(position)
      // this.getLocationsNearToUser()
    },
    center (center) {
      console.log('center changed')
      // console.log(center)
    },
    description (description) {
      console.log(description)
    }
  },
  methods: {
    setDescription (description) {
      this.description = description
    },
    setPlace (place) {
      if (place.geometry) {
        this.setPosition({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() })
        this.current = this.getPosition()
        this.center = this.getPosition()
        this.markers = [{
          position: this.getPosition()
        }]
      } else {
        console.log(place)
      }
    },
    tryFreeGeoIP () {
      this.axios.get('http://freegeoip.net/json/').then((response) => {
        // this.items = response.data.data
        // console.log(response.data.latitude)
        // console.log(response.data.longitude)
        setTimeout(this.setLocation({ lat: response.data.latitude, lng: response.data.longitude }), 100)
        // this.setLocation({ lat: response.data.latitude, lng: response.data.longitude })
      })
    },
    setPosition (position) {
      this.position = position
      console.log(this.getPosition())
    },
    getPosition () {
      return this.position
    },
    setLocation (position) {
      this.setPosition(position)
      this.current = this.getPosition()
      this.center = this.getPosition()
      this.markers = [{
        position: this.getPosition()
      }]
      // this.$refs.map.setMyLocationEnabled(true)
    },
    setMarker (place) {
      console.log(place)
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
    // this.axios.get('https://www.google.co.th/maps/search/รามอินทรา').then((response) => {
    //   console.log(response)
    // })

    if ('geolocation' in navigator) {
      // if (this.showRadius) {
      /* geolocation is available */
      console.log('geolocation is available')
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position)
          this.setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
        },
        (failure) => {
          // console.log(failure)
          this.tryFreeGeoIP()
        }
      )
      // var watchID = navigator.geolocation.watchPosition((position) => {
      //   // console.log('position changed!')
      //   navigator.geolocation.clearWatch(watchID)
      //   this.setLocation(position)
      // })
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available')
      this.tryFreeGeoIP()
    }
  }
}
</script>
<style>

</style>

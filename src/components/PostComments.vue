<template>
  <div>
    <h4 class="section-title">Comment</h4>
    <b-card class="section-content border-0">
      <b-media>
        <img slot="aside" src="https://placeholdit.imgix.net/~text?txt=64x64&w=64&h=64">
        <h5 class="mt-0">Media Title {{id}}</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <b-media>
          <img slot="aside" src="https://placeholdit.imgix.net/~text?txt=64x64&w=64&h=64">
          <h5 class="mt-0">Nested Media</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ['id']
}
</script>
<style>
.section-content .card-block {
  background-color: #f9f9f9;
}
</style>


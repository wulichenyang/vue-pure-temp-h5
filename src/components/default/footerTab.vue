<template lang="html">
<footer class="footer-wrap">
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
      <mu-bottom-nav-item value="books" title="Books" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
  </footer>
</template>

<script>

export default {
  name: 'footer',
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>


<style lang="scss">

</style>
<template>
  <div>
    <audio ref="audio1">
      <source src="../audio/Heartbeat.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio2">
      <source src="../audio/Pop_Banner.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio3">
      <source src="../audio/jack_in_the_box.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio4">
      <source src="../audio/Bleep2.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio5">
      <source src="../audio/Blop.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio6">
      <source src="../audio/Pling.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio7">
      <source src="../audio/Robot_blip.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio8">
      <source src="../audio/Robot_blip_2.mp3" type="audio/mpeg">
    </audio>
    <audio ref="audio9">
      <source src="../audio/Woosh.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>

import eventBus from '../helpers/EventBus'

export default {
  name: 'Audio',
  props: [

  ],
  data () {
    return {

    }
  },
  beforeMount(){
    eventBus.$on('audio:play', this.play );
  },
  methods: {
    play( audioName ){
      switch( audioName ){
        case 'heartbeat':
          this.$refs.audio1.currentTime = 0
          this.$refs.audio1.play();
          break
        case 'pop_banner':
          this.$refs.audio2.currentTime = 0
          this.$refs.audio2.play();
          break
        case 'lullaby':
          this.$refs.audio3.currentTime = 0
          this.$refs.audio3.play();
          break
        case 'beep':
          this.$refs.audio4.currentTime = 0
          this.$refs.audio4.play();
          break
        case 'blop':
          this.$refs.audio5.currentTime = 0
          this.$refs.audio5.play();
          break
        case 'pling':
          this.$refs.audio6.currentTime = 0
          this.$refs.audio6.play();
          break
        case 'robot_blip':
          this.$refs.audio7.currentTime = 0
          this.$refs.audio7.play();
          break
        case 'robot_blip_2':
          this.$refs.audio8.currentTime = 0
          this.$refs.audio8.play();
          break
        case 'woosh':
          this.$refs.audio9.currentTime = 0
          this.$refs.audio9.play();
          break
      }
    },
  }

}
</script>

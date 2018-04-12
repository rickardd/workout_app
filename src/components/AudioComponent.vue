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
      <source src="../audio/Bleep.mp3" type="audio/mpeg">
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

    <button @click="play('heartbeat')" type="button">Play Audio</button>
    <button @click="play('pop_banner')" type="button">Play Audio</button>
    <button @click="play('lullaby')" type="button">Play Audio</button>
    <button @click="play('beep')" type="button">Play Audio</button>
    <button @click="play('blop')" type="button">Play Audio</button>
    <button @click="play('pling')" type="button">Play Audio</button>
    <button @click="play('robot_blip')" type="button">Play Audio</button>
    <button @click="play('robot_blip_2')" type="button">Play Audio</button>
    <button @click="play('woosh')" type="button">Play Audio</button>

  </div>
</template>

<script>

export default {
  name: 'Audio',
  props: [

  ],
  data () {
    return {

    }
  },
  beforeMount(){
    console.log('mounted', this);

    this.$on('audio:play', this.play );
  },
  methods: {
    play( audioName ){
      console.log('play', audioName);
      switch( audioName ){
        case 'heartbeat':
          console.log('heartbeat')
          this.$refs.audio1.currentTime = 0
          this.$refs.audio1.play();
          break
        case 'pop_banner':
          console.log('pop_banner')
          this.$refs.audio2.currentTime = 0
          this.$refs.audio2.play();
          break
        case 'lullaby':
          console.log('lullaby')
          this.$refs.audio3.currentTime = 0
          this.$refs.audio3.play();
          break
        case 'beep':
          console.log('beep')
          this.$refs.audio4.currentTime = 0
          this.$refs.audio4.play();
          break
        case 'blop':
          console.log('blop')
          this.$refs.audio5.currentTime = 0
          this.$refs.audio5.play();
          break
        case 'pling':
          console.log('pling')
          this.$refs.audio6.currentTime = 0
          this.$refs.audio6.play();
          break
        case 'robot_blip':
          console.log('robot_blip')
          this.$refs.audio7.currentTime = 0
          this.$refs.audio7.play();
          break
        case 'robot_blip_2':
          console.log('robot_blip_2')
          this.$refs.audio8.currentTime = 0
          this.$refs.audio8.play();
          break
        case 'woosh':
          console.log('woosh')
          this.$refs.audio9.currentTime = 0
          this.$refs.audio9.play();
          break
      }
    },
  }

}
</script>

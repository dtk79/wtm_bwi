export const welcomePage = {
  termsAccepted: false,
  
  goToVideo() {
    if (this.termsAccepted) {
      this.currentPage = 'video'
      this.$nextTick(() => {
        if (this.$refs.videoPlayer) {
          this.$refs.videoPlayer.play()
        }
      })
    }
  }
}
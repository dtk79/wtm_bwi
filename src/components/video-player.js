export const videoPlayerComponent = {
  canSkip: false,
  videoStartTime: 0,

  init() {
    this.videoStartTime = Date.now()
  },

  handleTimeUpdate() {
    const videoTime = this.$refs.videoPlayer.currentTime
    if (videoTime >= 5 && !this.canSkip) {
      this.canSkip = true
    }
  },

  skipVideo() {
    if (this.canSkip) {
      this.currentPage = 'final'
    }
  },

  handleVideoEnd() {
    this.currentPage = 'final'
  }
}
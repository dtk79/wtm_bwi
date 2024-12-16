import { PAGES, VIDEO_CONFIG, NETWORK_CONFIG } from '../config/constants.js'
import { welcomePage } from './pages/welcome.js'
import { videoPage } from './pages/video.js'
import { finalPage } from './pages/final.js'

export const wifiPortalComponent = {
  currentPage: PAGES.WELCOME,
  VIDEO_CONFIG,
  NETWORK_CONFIG,
  
  // Merge page components
  ...welcomePage,
  ...videoPage,
  ...finalPage
}
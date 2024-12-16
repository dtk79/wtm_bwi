import './index.css'
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import { wifiPortalComponent } from './components/wifi-portal.js'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.plugin(persist)

// Register the wifiPortal component
Alpine.data('wifiPortal', () => wifiPortalComponent)

// Start Alpine.js
Alpine.start()
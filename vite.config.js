// Source - https://stackoverflow.com/a/71618444
// Posted by Daniel Elkington, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-21, License - CC BY-SA 4.0

import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: {
    host: '127.0.0.1',
  },
  plugins: [ mkcert() ]
})

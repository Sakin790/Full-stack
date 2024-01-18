# Here is Proxy Setting
```javaScript

export default defineConfig({
  server:{
proxy:{
  '/api':'http://localhost:8080',
}
  },
  plugins: [react()],
})
```

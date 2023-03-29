const app = Vue.createApp({
    data() {
      return {
        recipes: null
      } 
    },
    mounted: function() {
      fetch('https://gregstull.fly.dev/recipes/', {
        method: 'get'
      })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        this.recipes = data;
      })
    }
  })
  
  app.mount('#app')
  
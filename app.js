const app = Vue.createApp({
    data() {
      return {
        recipes: null
      } 
    },
    mounted: function() {
      fetch('https://gstulldjangorestapi.herokuapp.com/recipes/', {
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
  
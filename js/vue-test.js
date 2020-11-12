import 'uikit/dist/css/uikit.min.css'
import '../styles/style.scss'

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

const app = new Vue ({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

const app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })

const app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos:[
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
})

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

const app6 = new Vue ({
    el: '#app-6',
    data: {
        message: 'Hello, Vue!'
    }
})

const app7 = new Vue ({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Что там ещё люди едят?' }
        ]
    }
})
Vue.component('global-componant', {
    template: '<p>I am a global componant</p>'
})

var localComponant = 
{
    template: '<p>I am a local componant</p>'
}

var globalComponantApp = new Vue({
    el: '#globalComponantApp',
})

var localComponantApp = new Vue({
    el: '#localComponantApp',
    components: {
        'local-componant': localComponant
    }
})

Vue.component('props-componant', {
    props: ['message'],
    template: '<p>{{ message }}</p>'
})

Vue.component('events-componant', {
    template: `<button @click="$emit('event')">Show message</button>`
})

Vue.component('slots-componant', {
    template: `<div><p>This message:</p><slot></slot><p>Was brought to you with slots</p></div>`
})

var app = new Vue({
    el: '#app',
    data: {
        message: ""
    }
})
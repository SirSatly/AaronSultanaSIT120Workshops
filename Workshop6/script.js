var app = new Vue({
    el: '#app',
    data() {
        return {
            name: '',
            password: '',
            email: '',
            checkedValues: [],
            selected: '',
            dynamicallySelected: '',
            dynamicValues: [1, 2, 3, 4, 5, 6],
            age: 0
        }
    },
    methods: {

    },
    computed: {
        calcuate() {
            return this.age + 10;
        }
    }
})
new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: ''
    },
    methods: {
        updateName(e) {
            // console.log(e.target.value)
            this.name = e.target.value
        }
    }
})
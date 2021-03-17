const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am the template</h2>'

    data(){
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title){
            this.title="Word of Randiance"
            this.title=title
        }
    }
});

app.mount('#app');
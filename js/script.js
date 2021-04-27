
var app = new Vue({
    el: '#root',
    data: {
        emailArray:[]
    },
    methods: {

    },
    mounted(){

        for(let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const mail = response.data.response;
                    this.emailArray.push(mail);
                });
            }
    }
  })
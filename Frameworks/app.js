Vue.component('picture-card',{
    props:['title', 'picture_url'],
    template: '#template-picture'
});


const vm = new Vue({
    el: '#main',
    data:{
        pictures:[
            {id:1, title:'Take it!', picture_url:'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        ]
    }
});
import Vue from 'vue/dist/vue'
new Vue({
    el:'.main',
    data:{
    services:[
        {
        name:'Web Development',
        price:300.00,
        active:true,
    },
    {
        name:'Design',
        price:400.00,
        active:false,
    },
    {
        name:'Integration',
        price:250.00,
        active:false,
    },
    {
        name:'Training',
        price:220.00,
        active:false,
    }
]},

methods:
{
    active(s){
        s.active=!s.active;
    },
   
    total: function(){

        var total = 0;

        this.services.forEach(function(s){
            if (s.active){
                total+= s.price;
            }
        });

       return total;
    }
}


});

Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});



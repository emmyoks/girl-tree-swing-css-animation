let mousedown = false;
let touchdown = false;

let resizeAnimation =  new Vue({
    el:'#animation',
    data:{
        size:100
    },
    methods:{
        resize: function(inc){
            if(inc === true){
                this.size++
            }else if(inc === false){
                this.size--
            }
        },
        scale: function(e){
            if(mousedown){
            let scaleLength = e.view.innerWidth - (0.05 * e.view.innerWidth);
            let clientX = e.clientX - (0.05 * e.view.innerWidth);
            let scalerPos = (clientX / scaleLength) * 100;
            this.size = parseInt(scalerPos);
            } else if(touchdown){
                
            let scaleLength = e.view.innerWidth - (0.05 * e.view.innerWidth);
            let clientX = e.touches[0].clientX - (0.05 * e.view.innerWidth);
            let scalerPos = (clientX / scaleLength) * 100;
            this.size = parseInt(scalerPos);
            }
        }
    }
})

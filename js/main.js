const vm = new Vue({
    el : "#app",

    data : {
        welcomeMessage : "Our first Vue app!",

        anothermessage: "yay! you can haz vue!",

        footermessage: "This should be in the footer",

        targetURL : "http://vuejs.org",

        anchorOff: true,

        hazVue: true,

        deliciousFruit: [
            {name: "apple", flavour: "tasty!"},
            {name: "oranges", flavour: "sweet"},
            {name: "pineapple", flavour: "tangy!"}
        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        }
    }
            changeText(){
                this.anothermessage = "changed this from a function call";
            }

});

const vm2 = new Vue ({
    el: "#footer",
    
    data: {
        footermessage : "I should be in the footer"
    }
});
(() =>{

    //set up vue instance
    const vm = new Vue({
            el : "#app",

            data : {
                message : "Welcome to your first vue app! HI!", //can call message whatever you want
                
                targetURL : "https://google.ca",

                vuemessage : "Yay! You can haz vue",

                anchorOff : true,

                deliciousFruit : [
                    {name: "apple", flavour: "tasty"}, //this is an array loop
                    {name: "orange", flavour: "juicy"},
                    {name: "pineapple", flavour: "tangy!"}
                ],

                hazVue : true //this is a boolian, it is true or false //need to use colon instead of = because it is in an object

            },

            methods : {
                logFruit(e) {
                    console.log(e.currentTarget); // you need to write e.currentTarget instead of this to get the element 
                }
            }

            });

            const vm2 = new Vue({ //this is not recommended to get another section like the footer to connect, but you can look into components
                el: "#footer",

                data : {
footermessage: "this is a message in the footer"

                }

            })
            
        
            
            
            //don't have to do document query selector anymore
            //view model is the js file that's controlling
            //(html) markup is considered the view cause htat's what you're looking at

})();
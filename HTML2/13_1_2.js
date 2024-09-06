document.addEventListener("DOMContentLoaded",
    function(e){
        document.addEventListener("keydown",
            function(e){
                console.log(e.key)
                if (e.key === "q"){
                    alert("this is Q!")
                }
            }
        )
    }
)
let button = document.querySelector("input")
button.addEventListener("input",
    function(e){
        console.log(e.target.value)
    }
)


//<p>태그에서 인라인 이벤트 모델로 호출할 함수를 정의합니다.

function hi(){
    alert("hi")
    
}
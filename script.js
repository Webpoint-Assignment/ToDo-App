let text = document.querySelector(".text")
let subButton = document.querySelector(".button")
let Score =0
let score = document.querySelector(".score")



subButton.addEventListener("click" ,function(){
    Score = Score+1
    score.innerHTML=`You have ${Score} pending Task`
    textvalue = text.value
    if(textvalue.trim()!=0){
        let check = localStorage.getItem("localtask")
        if(check==null){
           checkObj =[]
        }
        else{
          checkObj = JSON.parse(check)
        }
         checkObj.push(textvalue)
         localStorage.setItem("localtask",JSON.stringify(checkObj))
         showTask()
    }     
})
showTask()

function showTask(){
    let check = localStorage.getItem("localtask")
    if(check==null){
        checkObj =[]
    }
    else{
        checkObj = JSON.parse(check)
    }
    let html =''
    let  List = document.querySelector(".list")
    checkObj.forEach((item,index) => {
        html += `
                  <div>
                    <th>${index +1}</th>
                     <td>${item}</td>
                     <button class="dButton" onclick ="deleteitem(${index})">Delete</button>
                  </div>  
                  `
        
   
              });
    List.innerHTML =html

}
function deleteitem(index){
    let check = localStorage.getItem("localtask")
    let  checkObj = JSON.parse(check)
    checkObj.splice(index,1)
    localStorage.setItem("localtask",JSON.stringify(checkObj))
    
    Score = Score-1
    score.innerHTML=`You have ${Score} pending Task`
    showTask()


}



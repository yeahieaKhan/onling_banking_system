
const depositeBtn = document.getElementById("depositeBtn");
depositeBtn.addEventListener("click", function(){
    const despositeNumber =getInput("depositeAmount");
    
    updateAmount("currentAmount", despositeNumber);
    document.getElementById("depositeAmount").value = "";

    updateAmount("currentBlance",  despositeNumber);
})

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function(){
    const withAmoun = getInput("withrawAmount");
    console.log(withAmoun);
    
})

function getInput(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}



function updateAmount(id, despositeNumber){
    const currentBlance = document.getElementById(id).innerText;
    const currentBlanceNumber = parseFloat(currentBlance);
    let totalCurrentBlace = currentBlanceNumber + despositeNumber;
    document.getElementById(id).innerText = totalCurrentBlace;
}













// const withdawAmount = document.getElementById("withdawAmount");
// withdawAmount.addEventListener("click", function(){
//     const withdawAmount = document.getElementById("withrawAmount").value;
//     const withOutM = document.getElementById("withdrawblance").innerText;
//     const withount =parseFloat(withOutM);
//     const sub = withdawAmount + withount;
//     document.getElementById("withdrawblance").innerText = sub;
    
// })
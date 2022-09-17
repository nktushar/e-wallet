
// Login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    if(depositAmount == ""){
        depositAmount = 0;
    }
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    if(withdrawAmount == ""){
        withdrawAmount = 0;
    }
    const withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

// Common Function
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


const form = document.getElementById("form");
const amount = document.getElementById("amount");
const years = document.getElementById("years");
const intrest = document.getElementById("intrest");
const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const repay = document.getElementById("monthly-payment");
const totalRepay = document.getElementById("total-repayment");
const preResult = document.getElementById("pre-result");
const postResult = document.getElementById("post-result");



form.addEventListener("submit", e=> {
    e.preventDefault();

    if(validateInputs()){
        submitSuccess();
    }

})


function setError(element){
    const inputControl = element.closest('.input-container, .mortgages, .checkbox');
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = "This field is required";
    inputControl.classList.add('error');
}

function setSuccess(element){
    const inputControl = element.closest('.input-container, .mortgages');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}





function validateInputs(){

    const amountValue = amount.value.trim();
    const yearsValue = years.value.trim();
    const intrestValue = years.value.trim();
    const isDot1Checked = dot1.checked;
    const isDot2Checked = dot2.checked;

    let isValidate = true;

    if(amountValue === ""){
        setError(amount);
        isValidate = false;
    }else{
        setSuccess(amount);
    }
    

    if(yearsValue === ""){
        setError(years);
        isValidate = false;
    }else{
        setSuccess(years);
    }

    if(intrestValue === ""){
        setError(intrest);
        isValidate = false;
    }else{
        setSuccess(intrest);
    }

    if (!isDot1Checked && !isDot2Checked) {
        const errorDisplay = document.querySelector('.mortgages .error');
        errorDisplay.innerHTML = "This field is required";
        isValidate = false;
    } else {
        const errorDisplay = document.querySelector('.mortgages .error');
        errorDisplay.innerHTML = "";
        
    }
    

    return isValidate;






}

function submitSuccess(){
    let monthlyPayment = 0;
    let totalRepayment = 0;
    console.log("All fields complete");
    const amountValue = parseFloat(amount.value.trim());
    const yearsValue = parseInt(years.value.trim());
    const intrestValue = parseFloat(intrest.value.trim());
    const isDot1Checked = dot1.checked;
    if(isDot1Checked){
        ({monthlyPayment, totalRepayment} = repayment(amountValue, intrestValue, yearsValue));
    }else{
        ({monthlyPayment, totalRepayment} = intrestOnly(amountValue, intrestValue, yearsValue));
        
    }

    repay.innerHTML = monthlyPayment;
    totalRepay.innerHTML = totalRepayment;
    postResult.classList.remove("close");
    preResult.classList.add("close");

    


}

function repayment(principal,annualRate,termYears){
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    let monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    let totalRepayment = monthlyPayment * numberOfPayments;
   
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2)
    };
    
}

function intrestOnly(principal, annualRate, termYears) {
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = principal * monthlyRate;
    const totalRepayment = (monthlyPayment * termYears * 12) + principal;
    
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2)
    };
    
}



---

# Mortgage Calculator

This project is a mortgage calculator that helps users calculate their monthly mortgage payments and total repayment amount based on the provided mortgage amount, term, interest rate, and mortgage type (Repayment or Interest Only).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [License](#license)

## Features

- Input fields for mortgage amount, term, and interest rate.
- Option to select mortgage type (Repayment or Interest Only).
- Validation for all input fields.
- Display of calculated monthly payments and total repayment amount.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mortgage-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mortgage-calculator
   ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Enter the mortgage amount.
2. Enter the mortgage term (in years).
3. Enter the interest rate.
4. Select the mortgage type (Repayment or Interest Only).
5. Click on the "Calculate Payments" button.
6. The monthly payments and total repayment amount will be displayed.

## Code Overview

### HTML

The HTML file contains the structure of the mortgage calculator interface, including the form for user inputs and the sections for displaying results.

```html
<div class="main-container">
    <div class="main-interface">
        <div class="interface-title">
            Mortgage Calculator <span>Clear All</span>
        </div>
        <form action="" id="form">
            <div class="user-details">
                <div class="input-container">
                    <span>Mortgage Amount</span>
                    <div class="input-field">
                        <span>$</span><input type="number" id="amount">
                    </div>
                    <div class="error"></div>
                </div>
                <div class="bi">
                    <div class="input-container years">
                        <span>Mortgage Term</span>
                        <div class="input-field">
                            <input type="number" id="years"><span>years</span>
                        </div>
                        <div class="error"></div>
                    </div>
                    <div class="input-container intrest">
                        <span>Interest Rate</span>
                        <div class="input-field">
                            <input type="text" id="intrest"><span>%</span>
                        </div>
                        <div class="error"></div>
                    </div>
                </div>
                <div class="mortgages">
                    <input type="radio" name="mortgage-type" id="dot-1">  
                    <input type="radio" name="mortgage-type" id="dot-2">  
                    <span>Mortgage Type</span>
                    <div class="mortgage-type">
                        <div class="mortgage-cover">
                            <label class="first" for="dot-1">
                                <span class="dot one"></span>
                                <span class="type">Repayment</span>
                            </label>
                        </div>
                        <div class="mortgage-cover">
                            <label class="second" for="dot-2">
                                <span class="dot two"></span>
                                <span class="type">Interest Only</span>
                            </label>
                        </div>
                        <div class="error"></div>
                    </div>
                </div>
            </div>
            <div class="button">
                <button type="submit">Calculate Payments</button>
            </div>
        </form>
    </div>
    <div class="result-interface">
        <div class="pre-result-interface" id="pre-result">
            <div class="title">Results shown here</div>
            <div class="sub-text">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</div>
        </div>
        <div class="post-result-interface close" id="post-result">
            <div class="title">Your results</div>
            <div class="subtext">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</div>
            <div class="result-modal">
                <div class="upper-result">
                    <div class="title">Your monthly repayments</div>
                    <div class="repay">$<span id="monthly-payment"></span></div>
                </div>
                <div class="lower-result">
                    <div class="title">Total you'll repay over the term</div>
                    <div class="total-repay">$<span id="total-repayment"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### CSS

The CSS file contains the styles for the mortgage calculator interface, including layout, colors, and responsiveness.

```css
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: "Plus Jakarta Sans", sans-serif;
}

body {
    height: 100vh;
    background-color: hsl(202, 86%, 94%);
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
}

.main-container {
    background-color: white;
    align-items: center;
    height: auto;
    width: 900px;
    max-height: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
}

.main-interface {
    background-color: white;
    height: 100%;
    margin-top: 45px;
    padding: 30px;
}

.result-interface {
    background-color: hsl(202, 55%, 16%);
    height: 100%;
    border-bottom-left-radius: 70px 70px;
}

.interface-title {
    color: hsl(202, 55%, 16%);
    font-size: 25px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.interface-title span {
    color: hsl(200, 26%, 54%);
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-container span,
.mortgages span {
    color: hsl(200, 24%, 40%);
}

.input-field {
    display: flex;
    flex-direction: row;
    height: 40px;
    border: 1px solid hsl(200, 24%, 40%);
    border-radius: 5px;
    padding: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.input-field.error {
    border-color: hsl(4, 69%, 50%);
}

.input-field:hover,
.input-field:focus {
    border: 1px solid hsl(202, 55%, 16%);
    z-index: 1000;
    cursor: pointer;
}

.input-field input {
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
}

.input-field span {
    background-color: hsl(202, 86%, 94%);
    color: hsl(200, 24%, 40%);
    padding: 0px 15px 0px 15px;
    height: 100%;
    border-radius: 3px;
    display: flex;
    align-items: center;
    font-weight: 700;
}

.input-field.error span {
    background-color: hsl(4, 69%, 50%);
    color: white;
}

.bi {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.mortgage-type {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
}

.mortgage-cover {
    border: 1px solid hsl(200, 24%, 40%);
    border-radius: 5px;
    font-weight: 700;
}

.mortgage-cover:hover {
    border: 1px solid hsl(61, 70%, 52%);
    cursor: pointer;
}

.mortgage-cover span {
    color: hsl(202, 55%, 16%);
}

.mortgage-cover label {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
}

.mortgage-cover label {
    cursor: pointer;
}

.mortgage-cover label .dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid hsl

(200, 24%, 40%);
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    transition: all 0.3s ease;
}

.mortgage-cover label .dot::after {
    content: '';
    width: 9px;
    height: 9px;
    background-color: hsl(61, 70%, 52%);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
}

#dot-1:checked ~ .mortgage-type .mortgage-cover label .one::after,
#dot-2:checked ~ .mortgage-type .mortgage-cover label .two::after {
    transform: translate(-50%, -50%) scale(1);
}

#dot-1:checked ~ .mortgage-type .mortgage-cover label .one,
#dot-2:checked ~ .mortgage-type .mortgage-cover label .two {
    border-color: hsl(61, 70%, 52%);
}

#dot-1:checked ~ .mortgage-type .mortgage-cover label .first,
#dot-2:checked ~ .mortgage-type .mortgage-cover label .second {
    background-color: hsl(62, 58%, 88%);
}

.mortgages input {
    display: none;
}

.button {
    padding-top: 30px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.button button {
    background-color: hsl(61, 70%, 52%);
    color: hsl(202, 55%, 16%);
    display: flex;
    gap: 7px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    font-size: 17px;
    padding: 0px 4px 0px 4px;
    height: 45px;
    width: 250px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button button:hover {
    background-color: hsl(61, 95%, 72%);
}

.error {
    color: hsl(4, 69%, 50%);
    font-size: 14px;
}

.result-interface {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.pre-result-interface {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
}

.pre-result-interface.close {
    display: none;
}

.pre-result-interface svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.pre-result-interface .title {
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
}

.pre-result-interface .sub-text {
    color: hsl(200, 24%, 40%);
    font-size: 16px;
    text-align: center;
}

.post-result-interface {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    width: 80%;
    height: 100%;
}

.post-result-interface.close {
    display: none;
}

.post-result-interface .title {
    color: white;
    font-size: 22px;
    display: flex;
    font-weight: 700;
    text-align: left;
}

.post-result-interface .subtext,
.upper-result .title,
.lower-result .title {
    font-size: 14px;
    color: white;
    opacity: 0.7;
    line-height: 1.5;
}

.post-result-interface .result-modal {
    background-color: hsl(200, 57%, 9%);
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    border-top: 3px solid hsl(61, 70%, 52%);
}

.upper-result,
.lower-result {
    color: hsl(61, 70%, 52%);
    font-size: 50px;
    font-weight: 700;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    padding: 15px;
}

.upper-result {
    height: 60%;
    border-bottom: 1px solid rgb(162, 162, 162);
}

.upper-result .title,
.lower-result .title {
    font-weight: 500;
}

.lower-result {
    height: 40%;
    font-size: 23px;
    color: white;
}

@media screen and (max-width: 655px) {
    body {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100%;
        overflow-y: auto;
    }

    .main-interface,
    .result-interface {
        padding: 20px;
    }

    .result-interface {
        border-bottom-left-radius: 0px;
    }

    .user-details {
        gap: 10px;
    }
}
```

### JavaScript

The JavaScript file contains the functionality for handling form submission, input validation, and mortgage calculation.

```javascript
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

form.addEventListener("submit", e => {
    e.preventDefault();

    if (validateInputs()) {
        submitSuccess();
    }
});

function setError(element) {
    const inputControl = element.closest('.input-container, .mortgages, .checkbox');
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = "This field is required";
    inputControl.classList.add('error');
}

function setSuccess(element) {
    const inputControl = element.closest('.input-container, .mortgages');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}

function validateInputs() {
    const amountValue = amount.value.trim();
    const yearsValue = years.value.trim();
    const intrestValue = years.value.trim();
    const isDot1Checked = dot1.checked;
    const isDot2Checked = dot2.checked;

    let isValidate = true;

    if (amountValue === "") {
        setError(amount);
        isValidate = false;
    } else {
        setSuccess(amount);
    }

    if (yearsValue === "") {
        setError(years);
        isValidate = false;
    } else {
        setSuccess(years);
    }

    if (intrestValue === "") {
        setError(intrest);
        isValidate = false;
    } else {
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

function submitSuccess() {
    let monthlyPayment = 0;
    let totalRepayment = 0;
    console.log("All fields complete");
    const amountValue = parseFloat(amount.value.trim());
    const yearsValue = parseInt(years.value.trim());
    const intrestValue = parseFloat(intrest.value.trim());
    const isDot1Checked = dot1.checked;
    if (isDot1Checked) {
        ({ monthlyPayment, totalRepayment } = repayment(amountValue, intrestValue, yearsValue));
    } else {
        ({ monthlyPayment, totalRepayment } = intrestOnly(amountValue, intrestValue, yearsValue));
    }

    repay.innerHTML = monthlyPayment;
    totalRepay.innerHTML = totalRepayment;
    postResult.classList.remove("close");
    preResult.classList.add("close");
}

function repayment(principal, annualRate, termYears) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    let monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    let totalRepayment = monthlyPayment * numberOfPayments;

    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2)
    };
}

function intrestOnly(pr

incipal, annualRate, termYears) {
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = principal * monthlyRate;
    const totalRepayment = (monthlyPayment * termYears * 12) + principal;

    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2)
    };
}
```

## License

This project is licensed under the MIT License.

---


"use strict";
class Calculator{
    constructor(firstValueText, secondValueText){
        this.firstValueText = firstValueText;
	this.secondValueText = secondValueText;
	this.hystoryText = hystoryText;
	this.arr = arr;
	this.clear();
    }

    clear (){
        this.secondValue = '';
        this.firstValue = '';
        this.operator = undefined;
    }  

    bakspace(){
        this.secondValue = this.secondValue.toString().slice(0,-1); 
    }

    updateDisplay(){
        this.secondValueText.innerText = this.secondValue;
        if (this.operator !== undefined){
	    this.hystoryText.innerText = `${this.firstValue}` + `${this.operator}` + `${this.secondValue}`;
	    }else {
            this.firstValueText.innerText = '';
        }
	if (this.firstValue === ''){
	    this.hystoryText.innerHTML = '';
            }
	
    }
 

    appendNumber(number) {
        if (number === '.' && this.secondValue.includes('.')) return
        this.secondValue = this.secondValue.toString() + number.toString();
    }

    choiseOperator (operator){
        if (this.secondValue === '') return;
        if (this.firstValue !== ''){
            this.calk();
            this.hystory();
        }
        this.operator = operator;
        this.firstValue = this.secondValue;
        this.secondValue = '';
    }
	
    calk(){
        let result;
        let a = parseFloat(this.firstValue);
        let b = parseFloat(this.secondValue);
            if ( a == isNaN || b == isNaN) return;
	    if (this.operator === '+'){
		result = a+b;	
		this.arr.push(`${this.firstValue} ${this.operator} ${this.secondValue} = ${result} `);
	    } else
                if (this.operator === '-'){
	            result = a-b;
		    this.arr.push(`${this.firstValue} ${this.operator} ${this.secondValue} = ${result} `);
	    } else 
                if (this.operator === '*'){
	            result = a*b;
		    this.arr.push(`${this.firstValue} ${this.operator} ${this.secondValue} = ${result} `);
	    } else 
                if(this.operator ==='/'){
	            result = a/b;
		    this.arr.push(`${this.firstValue} ${this.operator} ${this.secondValue} = ${result} `);
	    }else return;
        this.secondValue = result;
        this.operator  = undefined;
        this.firstValue = '';
    }

    hystory() {
                  if (arr.length ===1){
                      for (let i = 0; i<this.arr.length; i++){
                          hystoryOperat.innerHTML += `<div hystoryOperat> ${arr[i]} </div>`;
                      } 
                  }else{
                  if (arr.length ===2 ){
                      for (let i = 1; i<this.arr.length; i++){
                          hystoryOperat.innerHTML += `<div hystoryOperat> ${arr[i]} </div>`;
                      }  
                  }else{ 
                  if (arr.length ===3){
                      for (let i = 2; i<this.arr.length; i++){
                         hystoryOperat.innerHTML += `<div hystoryOperat> ${arr[i]} </div>`;
                     }
 
                 }else{
                      for (let i = 0; i<this.arr.length; i++){
		          if (arr.length >=4){
                          hystoryOperat.innerHTML = '';
			  arr.shift(arr[i]);
			  }
                         hystoryOperat.innerHTML += `<div hystoryOperat> ${arr[i]} </div>`;
                     }
                   
                 }
                 }
                 }
   }

}
let numberbtn = document.querySelectorAll('[data-number]');
let operatorbtn = document.querySelectorAll ('[data-operator]');
let equalsbtn = document.querySelector ('[data-equals]');
let allClear = document.querySelector ('[data-allclear]');
let bakspace = document.querySelector ('[data-bakspace]');
let firstValueText = document.querySelector ('[data-firstValue]');
let secondValueText = document.querySelector ('[data-secondValue]');
let hystoryText = document.querySelector ('[hystory]');
let arr = [];
let hystoryOperat = document.querySelector ('[hystoryOperat]');



let calculator = new Calculator(firstValueText, secondValueText);
       
numberbtn.forEach(button =>{
    button.addEventListener('click' , () => {
        calculator.appendNumber (button.innerText);
	calculator.updateDisplay();
	});
});

operatorbtn.forEach(button =>{
    button.addEventListener('click' , () =>{
	calculator.choiseOperator(button.innerText);
	calculator.updateDisplay();
	});
});

equalsbtn.addEventListener('click' , button => {
    calculator.calk();
    calculator.updateDisplay();
calculator.hystory();
});

allClear.addEventListener('click' , button => {
    calculator.clear();
    calculator.updateDisplay();
});

bakspace.addEventListener ('click' , button =>{
    calculator.bakspace();
    calculator.updateDisplay();
});

document.addEventListener('keydown', function (event){
    if (event.key === 'Enter' || event.key === '='){
        event.preventDefault();
	calculator.calk();
	calculator.updateDisplay();
	}
    if (event.key === "Backspace" || event.key === 'Escape'){
	event.preventDefault();
	calculator.bakspace();
	calculator.updateDisplay();
	}
    if (event.key === '.'){
	 event.preventDefault();
	calculator.appendNumber(event.key);
	calculator.updateDisplay();
	}
    if (
        event.key === '1'|| event.key === '2'||
        event.key === '3'|| event.key === '4'||
        event.key === '5'|| event.key === '6'||
        event.key === '7'|| event.key === '8'||
        event.key === '9'|| event.key === '0'){
	    event.preventDefault();
	    calculator.appendNumber(event.key);
	    calculator.updateDisplay();
	    }

    if (event.key === '+'|| event.key === '-'||
        event.key === '*'|| event.key === '/'){
	    event.preventDefault();
	    calculator.choiseOperator(event.key);
	    calculator.updateDisplay();
	    }
});

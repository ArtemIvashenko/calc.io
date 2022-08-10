class Calculator{
	constructor(firstValueText, secondValueText){
		this.firstValueText = firstValueText;
		this.secondValueText = secondValueText;
		this.clear();
}

clear (){
    	this.secondValue = '';
	this.firstValue = "";
	this.operator = undefined;
}

bakspace(){
	this.secondValue = this.secondValue.toString().slice(0,-1); 
}

updateDisplay(){

this.secondValueText.innerText = this.secondValue;
if (this.operator != null){
		this.firstValueText.innerText  = this.firstValue +  this.operator;
	}else {
      this.firstValueText.innerText = '';
}
}


appendNumber(number) {
    if (number === '.' && this.secondValue.includes('.')) return
    this.secondValue = this.secondValue.toString() + number.toString();
  }

choiseOperator (operator){
	if (this.secondValue ==='') return;
	if (this.firstValue !=='')	{
		this.calk();
}
		this.operator = operator;
		this.firstValue = this.secondValue;
		this.secondValue = '';
}
	
calk() {
	let result;
	const a = parseFloat(this.firstValue);
	const b = parseFloat(this.secondValue);
		if ( a=== isNaN || b === isNaN) return;
	if (this.operator ==='+'){
		result = a+b;
	}else if (this.operator ==='-'){
		result = a-b;
	} else if (this.operator ==='*'){
		result = a*b;
	}else if(this.operator ==='/'){
		result = a/b;
	
	}else return;
this.secondValue = result;

this.operator  =undefined;
this.firstVale = '';

}


}
const numberbtn = document.querySelectorAll('[data-number]');
const operatorbtn = document.querySelectorAll ('[data-operator]');
const equalsbtn = document.querySelector ('[data-equals]');
const allClear = document.querySelector ('[data-allclear]');
const bakspace = document.querySelector ('[data-bakspace]');
const firstValueText = document.querySelector ('[data-firstValue]');
const secondValueText = document.querySelector ('[data-secondValue]');


const calculator = new Calculator(firstValueText, secondValueText);
       
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
	if ( event.key === "Backspace" || event.key === 'Escape'){
		 event.preventDefault();
		calculator.bakspace();
		calculator.updateDisplay();
		}
	if (event.key === '.'){
		 event.preventDefault();
		calculator.appendNumber(event.key);
		calculator.updateDisplay();
		}
	if (event.key === '1'|| event.key === '2'|| event.key === '3'|| event.key === '4'|| event.key === '5'|| event.key === '6'|| event.key === '7'|| event.key === '8'|| event.key === '9'|| event.key === '0'){
		 event.preventDefault();
		calculator.appendNumber(event.key);
		calculator.updateDisplay();
		}

	if (event.key === '+'|| event.key === '-'|| event.key === '*'|| event.key === '/'){
		 event.preventDefault();
		calculator.choiseOperator(event.key);
		calculator.updateDisplay();
		}
});

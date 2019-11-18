import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  stack = [];

  constructor() { }

  ngOnInit() {
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }


  public getNumber(v: string){
    console.log('getNumber',v);
    this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
  }

  getDecimal(){
    console.log('getDecimal');

    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }


  public getOperation(op: string){
    console.log('getOperation',op);
    
    if (this.currentNumber!=='')
    {
      this.addPile(this.currentNumber);
    }


    if (this.stack.length>=2)
    {
      var o1 = this.stack.shift();
      var o2 = this.stack.shift();

      console.log('stack', Object.assign(this.stack));
      console.log('o1,o2',o1,o2);

      switch (op){
        case '+':
          this.stack.unshift(o2+o1); 
          break;
        case '-': 
          this.stack.unshift(o2-o1); 
          break;
        case '*': 
          this.stack.unshift(o2*o1); 
          break;
        case '/': 
          this.stack.unshift(o2/o1); 
          break;
//        case '=':
//        return secondOp;
      }

    }
     
  }

  public clear(){
    this.currentNumber = '';
  }

  public clearStack(){
    this.currentNumber = '';
    this.stack = [];
  }

  public addPile( number ){
    if(number!=''){
      this.stack.unshift( parseFloat(number) );
      this.currentNumber='';
    }
    else {
      var o = this.stack.shift();
      if (o) {
        this.stack.unshift( o );
        this.stack.unshift( o );
      }
    }
  }
}

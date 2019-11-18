import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  displayStackLength = 4;

  currentNumber = '';
  stack = [];
  dstack = [];

  constructor() { }

  ngOnInit() {
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
     
    console.log('stack',this.stack);
  }

  public clear(){
    this.currentNumber = '';
  }


  public stack_length(){
    this.stack.unshift( this.stack.length );
  }

  public negate(){
    var o = this.stack.shift();
    console.log(o);
    if (o != undefined && o !== '') { 
      this.stack.unshift( -o );
    }
  }

  public clearStack(){
    this.currentNumber = '';
    this.stack = this.dstack = [];
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

    console.log('stack',this.stack);
  }

  public getstack(){
    var s=[...this.stack].slice(0,this.displayStackLength);
    for (let i=s.length;i<this.displayStackLength;i++) s.push('');
    console.log('getstack>',s);
    return s;
  }

}

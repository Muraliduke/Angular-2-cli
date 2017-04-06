import { Component, OnInit } from '@angular/core';
// import {ElementRef,Renderer} from '@angular/core';
// @ViewChild('someVar') el:ElementRef;
import {AccordionModule} from "ng2-accordion";

import {OrderBy} from '../home/order';
import {MyService} from '../service';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css']
})

export class AccordionMenuComponent implements OnInit {

 constructor( private jsonService : MyService ) { }
Arraylength:any;
accordionContents:any;
public b:any;
copied:any;
  ngOnInit() {

/***************  accordion contents ****/
    this.jsonService.getaccordion()
        .subscribe(
            data => {this.accordionContents = data;
                
              console.log(data);}

        )
/***************  accordion contents ****/


        this.jsonService.getaccordions()
        .subscribe(
            data => {this.copied = data;
                
              console.log(data);}

        )
        
      
}



 

divmovemnt=[];
/******** accordion logic */
                            func(a,i,frm){

                                        this.Arraylength=this.accordionContents.length;
     
                                        // console.log(a);
                                         a.hideme=!a.hideme;
                                        for(this.b=0 ;this.b< this.Arraylength ;this.b++)
                                            {
                                                if(this.b!=i){
                                                    this.accordionContents[this.b].hideme=true;
                                            // console.log(this.accordionContents[this.b].hideme);

                                                }
     
                                            }     
                                        }
/******** accordion logic */
/**** Sorting array of object logic */
dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
/**** Sorting array of object logic */
j:any;


getI(a){
        return a;
    }
 ivalue;
/*********** hover inside accordion  */
headerclick(a,i){
                                                // console.log(a);
                                                // console.log(i);
                                                // console.log(this.accordionContents[i]);

//this.accordionContents.sort(this.dynamicSort('section'));
console.log(this.accordionContents);
//this.divmovemnt.push(this.accordionContents[i]);

/***new logic *** */

for( this.j=0;this.j<this.accordionContents[i].menu.length;this.j++){

    this.divmovemnt.push(this.accordionContents[i].menu[this.j])
}

console.log(this.divmovemnt)
/***new logic *** */

this.accordionContents[i].menu.splice(0,this.accordionContents[i].menu.length);
}

listTeamOne:Array<string> = [];


contentclick(totalobj,currentobj,i,j){
            console.log(totalobj);
            console.log(currentobj);
            console.log(this);
this.divmovemnt.push(this.accordionContents[i].menu[j]);
this.accordionContents[i].menu.splice(j,1);
console.log(this.divmovemnt)
this.ivalue=this.getI(i);
}

secondcontentvalue="";val;
contentRemove(b,newI,i){
this.secondcontentvalue=b;
this.val=this.findWithAttr(this.copied, 'menu', this.secondcontentvalue);
//alert(this.val)
console.log(b);
console.log(this);
this.divmovemnt.splice(i,1);
this.accordionContents[this.val].menu.push(b);
console.log("i"+' '+ newI);
}

headerRemove(a,i){
                                                        // console.log(a);
                                                        // console.log(this.divmovemnt[i]);
                                                        // console.log(i);
this.accordionContents.push(this.divmovemnt[i]);
this.divmovemnt.splice(i,1);
}



/*********** hover inside accordion  */


/***** Div movement logic */




/***** Div movement logic */


/***********Sort logic */
sort: any = {
    column: 'section', //to match the variable of one of the columns
    descending: false
  };

sortng: any = {
    column: 'menu', //to match the variable of one of the columns
    descending: false
  };
 convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
  nameSorting(): string{
     return this.sortng.descending ? '-' + this.sortng.column : this.sortng.column;
  }

/***********Sort logic */


/****** copy contents */



/********copy */
  

findWithAttr(array, attr, value):any {
    for(var i = 0; i < array.length; i += 1) {
        for(var k=0;k< array[i][attr].length;k++){

            if(array[i][attr][k] === value) {
            return i;
        }
        }
        
    }
    return -1;
}
ind:any;indx:any;
toggle(i){
    this.ind=i;

}
out(i){
    this.ind=100000;
}
togglemain(i){
    this.indx=i;

}
outmain(i){
    this.indx=100000;
}
// var Data = [
//     {id_list: 2, name: 'John', token: '123123'},
//     {id_list: 1, name: 'Nick', token: '312312'}
// ];



}

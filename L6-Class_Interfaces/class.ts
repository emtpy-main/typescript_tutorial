//! Basic: class
// class Department {
//     name : string;
//     constructor(n:string){
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
        
//     } 
// }

// let accountingdept = new Department("accounting");
// accountingdept.describe()

// const accountingcopy = {
//     name : "dummpy",
//     describe : accountingdept.describe
// }
// accountingcopy.describe()




//! access Modifiy
// class Department {
//     // name : string;
//     // private employee : string[];
//     // constructor(n:string){
//     //     this.name = n;
//     //     this.employee = [];
//     // }
//     //============== shortHand to declare attribute
//     constructor(public name : string, private employee:string[]){

//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
//     } 
//     addemployee(s:string):void{
//         this.employee.push(s);
//     }
//     displayemployee():void{
//         console.log("No of emplyee: "+this.employee.length);
//         console.log(this.employee);
//     }
// }

// let accountingdept = new Department("accounting",[]);
// // let accountingdept = new Department("accounting");
// accountingdept.describe()
// accountingdept.addemployee("Pratik");
// accountingdept.addemployee("rahul");
// accountingdept.addemployee("ram");
// // accountingdept.employee = ["re"] // this is wrong accessible outside anyonw can directly edit it
// accountingdept.displayemployee();


//! Readonly -> only once we can instilize or assign value in  that varaible
// class Department {
//     name : string;
//     private readonly id : number;
//     constructor(n:string,ID:number){
//         this.name = n;
//         this.id = ID;
//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
//     } 
//     // modifyID(n:number){ // can not modify one written
//     //     this.id = n;
//     // }
// }

// let accountingdept = new Department("accounting",920101919);
// accountingdept.describe()



//! Inheritance
//! overriding, protected variable
//! getter and setter
class Department {
    private name : string;
    private readonly id : number;
    protected employee : string[];
    constructor(n:string,ID:number){
        this.name = n;
        this.id = ID;
        this.employee = [];
    }
    describe(this:Department){
        console.log("Deparment ",this.name);
    } 
    addemployee(s:string){
        this.employee.push(s);
    }
    // modifyID(n:number){ // can not modify one written
    //     this.id = n;
    // }
}

class AccountingDeptartment extends Department{
    constructor(id:number,private report : string[]){
        super("Accouting",id);
    }
    addreport(text:string){
        this.report.push(text);
    }
    display(){
        console.log("report: ",this.report);
    }
    addemployee(s: string): void {
        if(s=="patel"){
            return;
        }
        this.employee.push(s);
    }
    get getreports(){
        if(this.report.length>0){
            return this.report;
        }
        throw new Error("Reports are empty");
    }
    set setreports(value : string){
        if(!value){
            this.report.push(value);
        }
        return;
    }

}
const account = new AccountingDeptartment(8390293,[]);
account.addreport("you are fine and beautiful")
account.display();
console.log(account.getreports);



//! Abstract class
abstract class Deparment2{
    name:string;
    employee:string[] = [];
    constructor(s:string){
        this.name=s;
    }
    set addemployee(s : string){
        this.employee.push(s);
    }
    printemployee(){
        console.log("List of employee",this.employee);
    }
    abstract describe():void;
}
class Subclass extends Deparment2{
    constructor(name : string){
        super(name);
    }
    describe(): void {
        console.log("Deptment name : "+this.name);
    } 
}
let obj = new Subclass("account");
obj.addemployee = "pratik";
obj.printemployee();



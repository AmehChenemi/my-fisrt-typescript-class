// string
let variable = "Loveth";
// number
let age = 15
// boolean
let attended = true;
// object

// interface defines a strict contract for the shape of an objectincluding the data types of its properties 
interface Student {
    name: string;
    age: number;
    punctuality: boolean;
}

// const student : Student = {
//     name:"Loveth",
//     age: 15,
//     punctuality: true

// }
// partial makes it optional and not required
const student : Partial<Student> = {
    // name:"Loveth",
    age: 15,
    punctuality: true

}

// function
// function studentInfo (arg: string){
//     return arg;
// }
// const result = studentInfo("Loveth");
// console.log(result)

interface StudentRespond {
    arg : Student,
    message: string
}
const studentInfo = (arg: Student) : StudentRespond | null =>{
  return {
    message:"success",
    arg
  }
}

const details : Student ={
    name: "Loveth",
    age: 12,
    punctuality: false
}
const info = studentInfo(details)
console.log(info)

// stringArray
const humanArray: string[] = ["female", "male"];
// numberArray
type HumanInterface = [
    number,
    number,
    number,
    boolean,

    {
        name: string;
        id: number
    }
]

const humanNumberArray : HumanInterface = [1, 2,3, true, {
    name:"Loveth",
    id:1
},]

enum DomainError {
    not_found = 404
};

DomainError.not_found;

interface StudentInfoInterface {
    UserName :string;
    id:number;
}

class Students implements StudentInfoInterface {
    UserName : string;
    id: number;
    constructor (_userName: string, _id: number){
        this.UserName = _userName,
        this.id = _id
    }
};
const Info = new Students("", 1);
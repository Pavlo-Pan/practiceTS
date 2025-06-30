const division = (a: number, b: number): number => {
  return a / b;
};

console.log(division(6, 2));

//test 3

interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}
const displayCarInfo = (car: Car): void => {
  console.log("Car Information:");
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Is Electric: ${car.isElectric ? "Yes" : "No"}`);
};

const myCar: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};
displayCarInfo(myCar);
// test 4

const arr = [1, 5, 6, 3, 8];

function calculateSum(numbers: number[]): number {
  return numbers.reduce((sum: number, num: number): number => sum + num) ;
}
console.log('test 4')
console.log(calculateSum(arr))

//test 5

const isAdult = (age: number): boolean =>{
   return age >= 18;
}
console.log('test 5')
console.log(isAdult(18))
console.log(isAdult(12))

//test 6
interface Task {
    title: string,
    description: string,
    isCompleted: boolean
}
const tasks: Task[]=[
    {title:'feed a cat', description:'take in waredrobcats food', isCompleted: false},
    {title:'give a cat water', description: 'take a water from filter', isCompleted: true}
]


const showUncompletedTasks = (tasks: Task[]): void =>{
console.log(tasks.filter((task: Task): boolean => !task.isCompleted))
}
showUncompletedTasks(tasks)

//test 7 

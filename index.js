
// 01 - Map Double

const array =[1,2,3,4,5]

const double = array.map((num)=>{
    return num*2
})

console.log(double);

// 02 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map((arrayN) => {
    const i = longNames.indexOf(arrayN)
    return {
        name: `${longNames[i].firstName} ${longNames[i].lastName}`
    }
})

console.log(shortNames);

// 03 - Filter Numbers

const array2 = [1,"toto",34,"javascript",8,7,"number"]

const numbers = array2.filter((num) =>{
    if (typeof(num) === "number"){
        return num
    }
})

console.log(numbers);

// 04 - Filter Even

const numbers2 = [ 1,2,3,4,5,6,7,8]

const even = numbers2.filter((num)=>{
    if (num%2===0){
        return num
    }
})

console.log(even);
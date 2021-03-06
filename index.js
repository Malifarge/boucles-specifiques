
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
    return {
        name: `${arrayN.firstName} ${arrayN.lastName}`
    }
})

console.log(shortNames);

// 03 - Filter Numbers

const array2 = [1,"toto",34,"javascript",8,7,"number"]

const numbers = array2.filter((num) =>{

    return typeof num === "number"
})

console.log(numbers);

// 04 - Filter Even

const numbers2 = [ 1,2,3,4,5,6,7,8]

const even = numbers2.filter((num)=>{
    return num%2 === 0
})

console.log(even);

// 05 - Cakes

const Cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const chocolates = Cakes.filter((cake)=>{
   
		return cake.flavor === "chocolate"

})

const soldOut = chocolates.map((chocolate)=>{
    chocolate.status = "sold out!"
	return chocolate
})

console.log(soldOut);

// 06 - Cake v2

const pie = Cakes.find((cake)=>{
    return cake.name === "pie"
})

console.log(pie);

// 07 - Factorielle forEach

const factorielle = [1,2,3,4,5,6,7,8,9]
let total = 1

factorielle.forEach((i)=>{
	total = total*(i)
})

console.log(total)

// 08 - Chess board


// taille colonne et ligne

const size = [0,1,2,3,4,5,6,7]  

// je fait 8 fois

size.forEach((line,i) =>{

	// création d'un ligne

	let row = ""

	// complétion de la ligne

	size.forEach((square,j)=>{
		// une case sur 2 et une ligne sur 2
		if ((j+i)%2===0){
			row += "[ ]"
		}else{
			row += "[X]"
		}
	})

	// affiche de la ligne

	console.log(row);
}) 

// 09 - Exercice 3 bis

const numFilter = (array3) =>{
	const numbers = array3.filter((num) =>{

		return typeof (num) === "number"
	})

	console.log(numbers);
}

numFilter([1,6,"number",8,"java",90])
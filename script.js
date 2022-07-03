// Crie um array que receba 5 itens e exiba no console.

let cadastro = [ "Felipe", "Rutowitsch", 16, " RJ", "basquete"]
console.log(cadastro)

// Utilize um método para adicionar um nome ao inicio do array.

cadastro.unshift("Joao") //ou cadastro.splice( 0, 0,"Joao")
console.log(cadastro)

// Utilize um método para remover o último nome do array.

cadastro.pop() //ou cadastro.splice(5, 1)
console.log(cadastro)

// Utilize um método para adicionar dois nomes ao fim do array.

cadastro.push("futebol" , "academia") //ou cadastro.splice(4, 0, "futebol" , "academia")
console.log(cadastro)

// Utilize um método para remover o primeiro nome do array.

cadastro.shift() //ou cadastro.splice(0, 1)
console.log(cadastro)

// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return(a-b)
})
console.log(numbers)

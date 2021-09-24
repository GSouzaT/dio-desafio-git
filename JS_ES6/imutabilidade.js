const user = {
    name: 'Gabriel',
    lastName: 'Teixeira'
};

//para evitar alteração e perda de dados cria uma função que gera 
//concatena os dados necessarios 
function getUserFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserFullName(user);

// Extra: "..." se chama spread operator, ele "copia" o conteúdo
// nesse caso ele é utilizado para criar uma copia do objeto 'user'
// além de auxiliar na criação da nova propriedade
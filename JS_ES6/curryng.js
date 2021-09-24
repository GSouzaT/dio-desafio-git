//temos a seguinte função:
function soma (a, b){
    return (a + b);
}

//o objetivo é realizar as seguintes operações
soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

// para simplificar criaremos a função:
function soma(a) {
    return function(b) {
        return (a + b);
    }
}

//e então a constante
const soma2 = soma(2);

//resultado simplificado
soma2(2);
soma2(3);
soma2(4);
soma2(5);
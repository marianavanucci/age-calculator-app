export const obterDataAtual = () => {
        const dataAtual = new Date();
        const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
        const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses são indexados de 0 a 11
        const anoAtual = dataAtual.getFullYear();
    
        const dataFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;
    
        return dataFormatada;
    };
    
    // Exemplo de uso:
    const dataAtual1 = obterDataAtual();
    console.log(dataAtual1);

    // Data atual
var dataAtual = new Date(); // Isso pega a data e hora atual do sistema.
console.log(dataAtual)

// Data de aniversário
var dataAniversario = new Date('1990-01-29'); // A data é fornecida no formato 'AAAA-MM-DD'.

// Calcula a diferença
var diferenca = dataAtual - dataAniversario;

// Converte a diferença para anos, meses e dias
var anos = Math.floor(diferenca / (365.25 * 24 * 60 * 60 * 1000));
var meses = Math.floor((diferenca % (365.25)) / (30.44)); // 30.44 é a média de dias em um mês
var dias = Math.floor((diferenca % 30.44));

// Exibe o resultado
console.log("Idade: " + anos + " anos, " + meses + " meses e " + dias + " dias.");

    
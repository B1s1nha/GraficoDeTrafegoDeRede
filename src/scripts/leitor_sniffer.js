const fs = require('fs');

const arquivo = 'registro_sniffer.json';

fs.readFile(arquivo, 'utf-8', (erro, dados) => {
    if (erro) {
        console.error(`Erro ao ler o arquivo ${erro}`);
        return;
    }

    try {
        const arrayDeObjetos = JSON.parse(dados);

        // Itera sobre cada objeto no array
        arrayDeObjetos.forEach((objetoJSON, indice) => {
            const data = objetoJSON.data;
            const ipOrigem = objetoJSON.ip_origem;
            const ipDestino = objetoJSON.ip_destino;
            const protocolo = objetoJSON.protocol;

            /*
                    plotar(data,ipOrigem,ipDestino,protocolo)
            */
            console.log(`Registro ${indice + 1}:`);
            console.log(`Data: ${data}`);
            console.log(`IP de Origem: ${ipOrigem}`);
            console.log(`IP de Destino: ${ipDestino}`);
            console.log(`Protocolo: ${protocolo}`);
            console.log("\n");
        });

    } catch (erroParse) {
        console.error(`Erro ao analisar o JSON: ${erroParse}`);
    }
});
const {exec} = require('child_process')
const fs = require("fs");

//const processo = exec('tshark',['-i', 'enp0s3', '-Y', 'http', '-f', 'dst host 192.168.0.4'])
//const processo = exec('tshark',['-i', 'enp0s3', '-Y', 'http', '-f', 'dst host 192.168.0.4','-n'])
//const processo = exec('tcpdump', ['-i', 'enp0s3', '-f','dst host 192.168.0.4 and port 443'])

const processo = exec('tshark', ['-i', 'enp0s3', '-Y','ip.dst == 192.168.0.1 and tcp.port == 443', '-n'])

const regex = /(\d+)\s(\S+)\s(\S+)\s→\s(\S+)\s(\S+)\s(\S+)\s(\S+)/;
const lista = []
try{
    processo.stdout.on('data', (data) => {
        data.split('\n').forEach((linha) => {
            const match = regex.exec(linha)
            if(match){
                const dado = {
                    timestamp: parseFloat(match[1]),
                    ip_origem: match[3],
                    ip_destino: match[4],
                    protocolo: match[5]
                }
                lista.push(dado)
            }
        })
        console.log(lista)
    })

    processo.stderr.on('data', (data) => {
        console.log(`Erro ${data}`)
    })

    processo.on('close', (code) => {
        console.log(`Finalizado ${code}`)
        const data = new Date()
        // Salvar a lista em um arquivo JSON
        const jsonData = JSON.stringify(lista, null, 2);
        fs.writeFileSync(`output_${data.getDate()}_${data.getMonth()}_${data.getYear()}leo.json`, jsonData);
        console.log('Lista salva em output.json');
    })
} catch (error) {
    console.log(error)
}finally {

}
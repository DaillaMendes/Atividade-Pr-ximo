// class Fila {
//     constructor(head = null, tail = null, count = 0)
// }


class Fila {
    constructor(primeiro = null, ultimo = null, qtd = 0) {
        this.primeiro = primeiro;
        this.ultimo = ultimo;
        this.qtd = qtd;
    }
    GetContador() {
        return this.qtd;
    }
    Chegada(...data) {
        for (let i = 0; i < data.length; i++) {
            let no = {
                data: data[i],
                proximo: this.primeiro
            };
            if (this.primeiro === null) {
                this.ultimo = no;
            }
            this.primeiro = no;
            this.qtd++;
        }
    }
    Partida() {
        if (this.qtd === 0) {
            return;
        } else {
            let atual = this.primeiro;
            let anterior = null;
            while (atual.proximo) {
                anterior = atual;
                atual = atual.proximo;
            }
            if (this.qtd > 1) {
                anterior.proximo = null;
                this.ultimo = anterior;
            } else {
                this.primeiro = null;
                this.ultimo = null;
            }
            this.qtd--;
        }
    }
    MostraFila() {
        try {
            if (this.primeiro === null) {
                throw 'Fila vazia'
                return null;
            } else {
                let arr = [];
                let atual = this.primeiro;
                for (let i = 0; i < this.qtd; i++) {
                    arr[i] = atual.data;
                    atual = atual.proximo;
                }
                return arr;
            }
        } catch (erro) {
            return erro
        }
    }
}

let fila = new Fila()
// fila.Chegada(1, 2, 3, 4, 5);
// fila.Partida();
// fila.Partida();
console.log(fila.MostraFila())
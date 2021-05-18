// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. 
// Bonus: aggiungere alla pagina un’immagine, presa anch’essa da un data.

// Stampiamo i numeri da 1 a 100 tramite la direttiva v-for

var app = new Vue(
    {
        el: "#root",
        data: {
            message: "Hello World!",
            img: {
                url: "https://www.labsus.org/wp-content/uploads/2018/05/architecture-3095716_1920-1140x760.jpg",
                alt: "Paesaggio"
            },
            names: [
                "Gianluca",
                "Andrea",
                "Beatrice",
                "Mattia"
            ],
            docente: {
                nome: "Gianluca",
                cognome: "Pesce",
                eta: 38
            },
            studenti: [
                {
                    nome: "Stefano",
                    cognome: "Zina"
                },
                {
                    nome: "Nicolas",
                    cognome: "Morelli"
                },
                {
                    nome: "Andrea",
                    cognome: "Casentini"
                },
            ],
            condition: true,
            condition2: false
            // imgUrl: "https://www.labsus.org/wp-content/uploads/2018/05/architecture-3095716_1920-1140x760.jpg",
            // imgAlt: "Paesaggio" 
        },
        methods: {
            getRandom: function () {
                var number = Math.random();
                console.log(number);

                return (number >= 0.5);
            }
        }
    }
);

// if(condizione) {
//     // blocco di istruzioni 1
// } else if (condizione2) {
//     // blocco di istruzioni 2
// } else {
//     // blocco di istruzioni 3
// }
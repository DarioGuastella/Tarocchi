const { createApp } = Vue

createApp({
    data() {
        return {
            deck: [
                {
                    id: 1,
                    name: "Il Bagatto",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Visconti-sforza-01-magician.jpg",
                    selected: false
                },
                {
                    id: 2,
                    name: "La Papessa",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Visconti-sforza-02-popess.jpg",
                    selected: false,
                },
                {
                    id: 3,
                    name: "L'Imperatrice",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Visconti-sforza-03-empress.jpg",
                    selected: false,
                },
                {
                    id: 4,
                    name: "L'Imperatore",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Visconti-sforza-04-emperor.jpg",
                    selected: false,
                },
                {
                    id: 5,
                    name: "Il Papa",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Visconti-sforza-05-pope.jpg",
                    selected: false,
                },
                {
                    id: 6,
                    name: "Gli Amanti",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Visconti-sforza-06-love.jpg",
                    selected: false,
                },
                {
                    id: 7,
                    name: "Il Carro",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Visconti-sforza-07-chariot.jpg",
                    selected: false,
                },
                {
                    id: 8,
                    name: "La Giustizia",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Visconti-sforza-08-justice.jpg",
                    selected: false,
                },
                {
                    id: 9,
                    name: "L'Eremita",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Visconti-sforza-09-time.jpg",
                    selected: false,
                },
                {
                    id: 10,
                    name: "La Ruota della Fortuna",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Visconti-sforza-10-fortune.jpg",
                    selected: false,
                },
                {
                    id: 11,
                    name: "La Forza",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Visconti-sforza-11-fortitude.jpg",
                    selected: false,
                },
                {
                    id: 12,
                    name: "L'Appeso",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Visconti-sforza-12-traitor.jpg",
                    selected: false,
                },
                {
                    id: 13,
                    name: "La Morte",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Visconti-sforza-13-death.jpg",
                    selected: false,
                },
                {
                    id: 14,
                    name: "La Temperanza",
                    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Visconti-sforza-14-temperance.jpg",
                    selected: false,
                },
                {
                    id: 15,
                    name: "Il Diavolo",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/800px-RWS_Tarot_15_Devil.jpg",
                    selected: false,
                },
                {
                    id: 16,
                    name: "La Torre",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/800px-RWS_Tarot_16_Tower.jpg",
                    selected: false,
                },
                {
                    id: 17,
                    name: "La Stella",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Visconti-sforza-17-star.jpg",
                    selected: false,
                },
                {
                    id: 18,
                    name: "La Luna",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Visconti-sforza-18-moon.jpg",
                    selected: false,
                },
                {
                    id: 19,
                    name: "Il Sole",
                    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Visconti-sforza-19-sun.jpg",
                    selected: false,
                },
                {
                    id: 20,
                    name: "Il Giudizio",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Visconti-sforza-20-judgment.jpg",
                    selected: false,
                },
                {
                    id: 21,
                    name: "Il Mondo",
                    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Visconti-sforza-21-world.jpg",
                    selected: false,
                },
                {
                    id: 22,
                    name: "Il Matto",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Visconti-sforza-00-fool.jpg",
                    selected: false,
                },
            ],
            playerCards: [],

            gameStarted: false,

        }
    },
    methods: {

        //fa iniziare la partita, nascondendo il mazzo di carte e mostrando solo le carte selezionate.

        startGame() {
            this.playerCards.forEach(element => {
                element.selected = true;
                this.gameStarted = true;
            });
        },

        //verifica se la carta è presente nell'array delle carte selezionate

        isCardSelected(card) {
            return this.playerCards.includes(card);
        },


        selectCard(card) {
            const index = this.playerCards.indexOf(card);

            //se nell'array delle carte selezionate sono presenti meno di 5 carte, pusho la carta selezionata

            if (this.playerCards.length < 5 && !this.isCardSelected(card)) {
                this.playerCards.push(card);
            } else if (this.isCardSelected(card)) {     //se la carta è già stata selezionata e viene cliccata, la rimuovo dall'array.
                this.playerCards.splice(index, 1);
            }

        },
        resetPartita() {
            window.location.reload()
        },
        mischiaMazzo() {

            //Ho utilizzato l'algoritmo di Fisher-Yates (Knuth Shuffle) per mischiare le carte del mazzo

            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
        },

    },
    mounted() {
        this.mischiaMazzo();
    }
}).mount('#app')
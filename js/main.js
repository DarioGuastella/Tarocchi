const { createApp } = Vue

createApp({
    data() {
        return {
            deck: [
                {
                    name: "Il Bagatto",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Visconti-sforza-01-magician.jpg",
                    selected: false
                },
                {
                    name: "La Papessa",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Visconti-sforza-02-popess.jpg",
                    selected: false,
                },
                {
                    name: "L'Imperatrice",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Visconti-sforza-03-empress.jpg",
                    selected: false,
                },
                {
                    name: "L'Imperatore",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Visconti-sforza-04-emperor.jpg",
                    selected: false,
                },
                {
                    name: "Il Papa",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Visconti-sforza-05-pope.jpg",
                    selected: false,
                },
                {
                    name: "Gli Amanti",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Visconti-sforza-06-love.jpg",
                    selected: false,
                },
                {
                    name: "Il Carro",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Visconti-sforza-07-chariot.jpg",
                    selected: false,
                },
                {
                    name: "La Giustizia",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Visconti-sforza-08-justice.jpg",
                    selected: false,
                },
                {
                    name: "L'Eremita",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Visconti-sforza-09-time.jpg",
                    selected: false,
                },
                {
                    name: "La Ruota della Fortuna",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Visconti-sforza-10-fortune.jpg",
                    selected: false,
                },
                {
                    name: "La Forza",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Visconti-sforza-11-fortitude.jpg",
                    selected: false,
                },
                {
                    name: "L'Appeso",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Visconti-sforza-12-traitor.jpg",
                    selected: false,
                },
                {
                    name: "La Morte",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Visconti-sforza-13-death.jpg",
                    selected: false,
                },
                {
                    name: "La Temperanza",
                    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Visconti-sforza-14-temperance.jpg",
                    selected: false,
                },
                {
                    name: "Il Diavolo",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/800px-RWS_Tarot_15_Devil.jpg",
                    selected: false,
                },
                {
                    name: "La Torre",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/800px-RWS_Tarot_16_Tower.jpg",
                    selected: false,
                },
                {
                    name: "La Stella",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Visconti-sforza-17-star.jpg",
                    selected: false,
                },
                {
                    name: "La Luna",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Visconti-sforza-18-moon.jpg",
                    selected: false,
                },
                {
                    name: "Il Sole",
                    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Visconti-sforza-19-sun.jpg",
                    selected: false,
                },
                {
                    name: "Il Giudizio",
                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Visconti-sforza-20-judgment.jpg",
                    selected: false,
                },
                {
                    name: "Il Mondo",
                    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Visconti-sforza-21-world.jpg",
                    selected: false,
                },
                {
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

        startGame() {
            this.playerCards.forEach(element => {
                element.selected = true;
                this.gameStarted = true;
            });
        },

        selectCard(index) {
            const card = this.deck[index];
            if (this.playerCards.length < 5 && this.playerCards.includes(card) === false) {
                this.playerCards.push(card);
            } else if (this.playerCards.includes(card) === true) {
                const index = this.playerCards.indexOf(card);
                this.playerCards.splice(index, 1);
            }

        },
        resetPartita() {
            window.location.reload()
        },
        mischiaMazzo(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },
        clickAndSelect() {
            let cards = Array.from(document.querySelectorAll('.col-3')),
                elements = []

            // Add child nodes to clickable elements
            cards.forEach(card => {
                elements = elements.concat(Array.from(card.children))
            })

            // Attach to mouse events
            elements.forEach(element => {

                // click: Disable
                element.addEventListener('click', e => e.preventDefault())

                // mousedown: Log the timestamp
                element.addEventListener('mousedown', e => {
                    let card = e.target.closest(".col-3")
                    card.setAttribute('data-md', Date.now())
                })

                // mouseup: Determine whether to click
                element.addEventListener('mouseup', e => {

                    // Only one please
                    e.stopPropagation();

                    let card = (e.target.classList.contains("card")) ? e.target : e.target.closest('.col-3'),
                        then = card.getAttribute('data-md'),
                        now = Date.now()

                    // Allow 200ms to distinguish click from non-click
                    if (now - then < 200) {

                        // Remove for production
                        const selectedCards = Array.from(document.querySelectorAll(".visited"));
                        if (selectedCards.length < 5) {
                            card.classList.toggle('visited');
                        } else if (selectedCards.length == 5) {
                            card.classList.remove('visited');
                        }
                    }

                    // Clean up
                    card.removeAttribute('data-md')

                }
                )
            })
        }
    },
    mounted() {
        this.clickAndSelect();
        this.mischiaMazzo(this.deck);
        /*22 carte
        0 21
        mischiare carte
        pescare 1 sola o 3
        numero, immagine, nome
        reset*/

    }
}).mount('#app')
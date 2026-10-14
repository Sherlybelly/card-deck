document.addEventListener("DOMContentLoaded", () => {

    const tarotContainerElement = document.getElementById('deck_container');

    async function getTarotData() {
        const response = await fetch('tarots.json');
        const data = await response.json();

        const tarotData = data.tarots;

        for (let i = 0; i < tarotData.length; i++) {
            const newTarot = new Card(tarotContainerElement, tarotData[i].name, tarotData[i].number, tarotData[i].image, tarotData[i].link);
            newTarot.displaycard();
        }
    }
    getTarotData();



    class Card {
        constructor(tarotContainerElement, name, number, image, link) {
            this.tarotContainerElement = tarotContainerElement;
            this.name = name;
            this.number = number;
            this.image = image;
            this.link = link;


            // create a .book element to insert these new elements
            this.tarotElement = document.createElement('a');
            this.tarotElement.classList.add('deck');

            this.tarotElement.addEventListener("mouseover", function () {
                gsap.to(this, {
                    scale: 1.2,
                    duration: 0.5,
                })
            });

             this.tarotElement.addEventListener("mouseout", function () {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.5,
                })
            });

            // create the elements for the book data
            this.nameElement = document.createElement('p');
            this.numberElement = document.createElement('p');
            this.imageElement = document.createElement('img');
            this.linkElement = document.createElement('a')


            // append .book element into container element
            this.tarotContainerElement.appendChild(this.tarotElement);


        }

        displaycard() {
            // put the book data into the elements
            this.nameElement.innerText = this.name;
            this.numberElement.innerText = this.number;
             this.linkElement.innerText = "View details";
            this.imageElement.src = this.image;
            this.tarotElement.href = this.link;
            this.tarotElement.target = "_blank" ;

            // appending the new elements into the .book element
            this.tarotElement.appendChild(this.nameElement);
            this.tarotElement.appendChild(this.numberElement);
            this.tarotElement.appendChild(this.imageElement);
            this.tarotElement.appendChild(this.linkElement);


        }


    }
})



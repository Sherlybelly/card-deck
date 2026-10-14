const tarotContainerElement = document.getElementById('deck_container');

async function getTarotData() {
    const response = await fetch('tarots.json');
    const data = await response.json();

    const tarotData = data.tarots;

    for (let i = 0; i < tarotData.length; i++) {
        const newTarot = new Card(tarotContainerElement, tarotData[i].name, tarotData[i].number, tarotData[i].image);
        newTarot.displaycard();
    }
}
getTarotData();



class Card {
    constructor(tarotContainerElement, name, number, image) {
        this.tarotContainerElement = tarotContainerElement;
        this.name = name;
        this.number = number;
        this.image = image;

        // create a .book element to insert these new elements
        this.tarotElement = document.createElement('div');
        this.tarotElement.classList.add('deck');

        // create the elements for the book data
        this.nameElement = document.createElement('p');
        this.numberElement = document.createElement('p');
        this.imageElement = document.createElement('p');

      
        // append .book element into container element
        this.tarotContainerElement.appendChild(this.tarotElement);
    }

    displaycard() {
        // put the book data into the elements
        this.nameElement.innerText = this.name;
        this.numberElement.innerText = this.number;
        this.imageElement.innerText = this.image;

        // appending the new elements into the .book element
        this.tarotElement.appendChild(this.nameElement);
        this.tarotElement.appendChild(this.numberElement);
        this.tarotElement.appendChild(this.imageElement);
    }

   
}




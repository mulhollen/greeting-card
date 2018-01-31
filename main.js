
card = document.getElementById("card");

const CardMaker = {
    makeCard: function (front, message) {
         return `<h2>${front}</h2>
                <br><p>${message}</p>`
    }
}


const BirthdayCard = Object.create(CardMaker);

const Condolence = Object.create(CardMaker);

const ThankYou = Object.create(CardMaker);

let grownUpBirthday = Object.create(BirthdayCard);

card.innerHTML += BirthdayCard.makeCard("Happy Birthday!", "I was obligated to get you this card.");
card.innerHTML += Condolence.makeCard(":(", "I'm sorry you have no more personal time since becoming an adult student");
card.innerHTML += ThankYou.makeCard("THANKS!", "for falling asleep on my right arm, Pablo.")
card.innerHTML += grownUpBirthday.makeCard("You're old", "some additional joke about being old");
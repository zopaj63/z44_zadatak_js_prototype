function Dog(name, owner) {
    if (name === undefined) {
        this.name = "Unknown";
    } else {
        this.name = name;
    }

    if (owner === undefined) {
        this.owner = "Unknown owner";
    } else {
        this.owner = owner;
    }
}

Dog.prototype.bark = function (barkCount) {
    var barkCount = barkCount;
    if (barkCount === undefined) {
        barkCount = 1;
    }

    for (var i = 0; i < barkCount; i++) {
        console.log("Bark!");
    }
};

Dog.prototype.print = function () {
    if (this.name !== undefined) {
        console.log("Psić iz našeg zadatka zove se " + this.name + ", a njegov vlasnik je " + this.owner + "!");
    } else {
        console.log("Ime psića je nepoznato!")
    }

};

var dog = new Dog("Petrica", "Božica"); 
console.log(dog);
dog.bark(5);
dog.print();


/*
Vježba: OOP JS (prototype, constructor function)
Trajanje: cca 25min ()
Doradite zadatak s ekrana sa sljedećim stvarima:
1. Definirajte funkciju Dog koja će poslužiti kao konstruktor za kreiranje objekata vrste Dog.
2. Funkcija Dog mora primati jedan parametar - name. Ako se parametar name ne upiše kada se kreira Dog, koristiti "Unknown".
3. Parametar name dodijeliti objektu Dog (this).
4. Definirati prototype metodu bark() koja prima jedan parametar - barkCount. Ako se parametar barkCount ne upiše pri pozivu, koristiti 1.
5. Prototype metoda bark() mora u konzolu ispisati "Bark!" onoliko puta koliko je dano u parametru barkCount.
Bonus:
6. Dodati na funkciju Dog i parametar owner. Ako se parametar owner ne upiše kada se kreira Dog, koristiti "Unknown owner".
7. Definirati prototype metodu print() koja ne prima parametre.
8. Prototype metoda print() mora u konzolu na lijep način (po izboru) ispisati tko je vlasnik psa i kako se pas zove.
*/
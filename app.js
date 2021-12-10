// part 1
/*
 * Véhicule
 */
class Vehicule {

    constructor(couleur, roues, marque) {
        this.color = couleur;
        this.wheels = roues;
        this.brand = marque;
    }

    demarrer() {
        console.log('le véhicule démarre');
    }

    arreter() {
        console.log("Le véhicule s'arrête");
    }
}

let myNewVehicule = new Vehicule('laCouleur', 'leNbDeRoues', 'laMarque');
myNewVehicule.demarrer();
myNewVehicule.arreter();


// part 2
/*
 * Vélo
 */
class Velo extends Vehicule {

    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.wheelRadius = rayonRoues;
        this.peintType = typePeinture;
    }

    monter() {
        console.log('Je monte sur mon vélo');
    }
}

let myNewVelo = new Velo('laCouleur', 'leNbDeRoues', 'laMarque', 'leRayonDesRoues', 'leTypeDePeinture');
myNewVelo.monter();
myNewVelo.demarrer();

// part 3
/*
 * Voiture
 */
class Voiture extends Vehicule {

    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque)
        this.insurance = assurance;
        this.owner = proprietaire;
    }

    passerAuCarWash() {
        console.log('La voiture passe au car wash');
    }
}

Voiture.prototype.passerAuCarWash = () => console.log('La voiture passe au car wash')

let myNewVoiture = new Voiture('laCouleur', 'leNbDeRoues', 'laMarque', "l'assurance", 'lePropriétaire');
myNewVoiture.arreter();
myNewVoiture.passerAuCarWash();
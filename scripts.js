const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages
        this.militaryImages = militaryImages
    }
    
    getRandomCivil() {
        const civiles = []
        this.civilImages.forEach((item)=>civiles.push(item))
        return civiles[getRndInteger(0,civiles.length)]
    }
    
    getRandomMilitary() {
        const militares = []
        this.militaryImages.forEach((item)=>militares.push(item))
        return militares[getRndInteger(0,militares.length)]
    }
    
    getAll() {
        let todos = []
        this.civilImages.forEach((item)=>todos.push(item))
        this.militaryImages.forEach((item)=>todos.push(item))
        return todos
    }
}

class Painter {
    constructor() {
        this.createGallery()
    }

    createGallery() {
        const gallery = document.createElement('section')
        gallery.classList.add('gallery')
        document.body.appendChild(gallery)
        this.gallery = gallery
    }

    createImageTag(imageUrl) {
        const img = document.createElement('img')
        img.src = imageUrl
        return img
    }

    paintSingleImage(imageUrl) {
        return this.gallery.appendChild(this.createImageTag(imageUrl))
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach((imageUrl)=>{
        let img = this.createImageTag(imageUrl)
        this.gallery.appendChild(img)
        })
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();


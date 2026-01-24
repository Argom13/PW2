document.addEventListener("DOMContentLoaded", ()=>{
    let slides = new slideShow(document.querySelector(".slideshow"));
    slides.init();
    slides.tick();
});

class slideShow{
    container = null;
    track = null;
    items = [];
    direction = 1;
    timeInSeconds = 3;
    timerId = null;
    currentItem = 0;
    rightButton = null;
    leftButton = null;

    constructor(container){
        this.container = container;
        this.track = this.container.querySelector(".slideshow-track");
        this.items = [...this.track.querySelectorAll(".slideshow-item")];
    }

    init(){
        console.log("Carrusel Iniciado");
        this.generateUX();
    }

    generateUX(){
        this.rightButton = document.createElement("button");
        this.leftButton = document.createElement("button");
        this.rightButton.classList.add("slideshow-right");
        this.leftButton.classList.add("slideshow-left");
        this.rightButton.innerHTML = ">";
        this.leftButton.innerHTML = "<";

        this.rightButton.addEventListener("click", (e)=>{
            this.moveToDirection(1);
        });

        this.leftButton.addEventListener("click", (e)=>{
            this.moveToDirection(-1);
        });

        this.container.appendChild(this.rightButton);
        this.container.appendChild(this.leftButton);
    }

    moveToDirection(nextDirection){
        clearTimeout(this.timerId);
        this.direction = nextDirection;
        this.moveToNext();
        this.tick();
    }

    tick(){
        this.timerId = setTimeout( () =>{
            this.moveToNext();
            this.tick();
        }, this.timeInSeconds * 1000);
    }

    moveToNext(){
        let nextIndex = this.currentItem + this.direction;
        if(nextIndex < 0){
            nextIndex = 1;
            this.direction = 1;
        }

        if(nextIndex === this.items.length){
            nextIndex = this.items.length - 1;
            this.direction = -1;
        }
        this.currentItem = nextIndex;
        this.moveTo(nextIndex);
    }

    moveTo(index = 0){
        this.track.style.transform = `translate(-${index * 600}px)`;
    }
}
export class Star {
    x = 50;
    y = 50;
pencil;

constructor(pencil) {
    this.pencil = pencil
}
    draw() {

        this.pencil.beginPath();
        this.pencil.arc(50, 40, 0, 2, Math.PI * 2);
        this.pencil.fillStyle = "green";
        this.pencil.fill();
        this.pencil.closePath();
    }
}
/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }

    this.moveLeft = function () {
        this.left -= this.speed;
    }

    this.moveUp = function () {
        this.top -= this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed;
    }

}

var hero = new Hero('pngegg.png', 20, 30, 200, 5);

function start() {
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case "ArrowUp":
                hero.moveUp();
                break;
            case "ArrowDown":
                hero.moveDown();
                break;
            case "ArrowLeft":
                hero.moveLeft();
                break;
            case "ArrowRight":
                hero.moveRight();
                break;
        }
    })

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
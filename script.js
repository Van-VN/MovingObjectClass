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
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= speed;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += speed;
        console.log('ok: ' + this.left);
    }

}

let hero = new Hero('pngegg.png', 20, 30, 200, 200);

function start() {
    console.log(hero.top, hero.left);
    if (hero.left < window.innerWidth - hero.size && hero.top === 20) {
        hero.moveRight();
    } else if (hero.left >= window.innerWidth - hero.size && hero.top <= window.innerHeight - (hero.size + 132)) {
        hero.moveDown();
    } else if (hero.top >= window.innerHeight - (hero.size + 132) && hero.left > 20 + hero.size) {
        hero.moveLeft();
    } else {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
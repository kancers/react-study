function Bird(name) {
    this.name = name;
    this.chirp = function () {
        console.log(`${this.name}が鳴きました`);
    };

    return this;
}

Bird.explain = function(name) {
    console.log(`${name}は翼があって卵を生みます`);
}

function FlaybleBird(name) {
    Bird.call(this, name);
    this.fly = function () {
        console.log(`${this.name}が飛びました`);
    };

    return this;
}

FlaybleBird.prototype.__proto__ = Bird.prototype;
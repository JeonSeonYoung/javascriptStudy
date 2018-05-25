var Animal = function(name) {
    this.name = name;
}
Animal.prototype.eatting = function(food) {
    console.log(this.name + "은/는 " + food + "를 먹고 있습니다.");
}

var Bird = function(name) {
    Animal.call(this, name);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.flying = function() {
    console.log(this.name + "은/는 날고있습니다.")
};

var bird = new Bird("참새");

bird.flying();
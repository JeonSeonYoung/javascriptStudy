var Animal = {
    init: function(name) {
        this.name = name;
    },
    eatting: function(food) {
        console.log(this.name + "은/는 " + food + "를 먹고 있습니다.");
    }
};

var Bird = Object.create(Animal);
Bird.flying = function() {
    console.log(this.name + "은/는 날고있습니다.")
};

var bird = Object.create(Bird);
bird.init("파랑새");

bird.eatting("열매");
bird.flying();
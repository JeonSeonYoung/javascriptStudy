var cooking = {
  cook: function(food){
    this.order = food;
  },
  roast: function(kind){
    return kind + this.order;
  },
  fry: function(sauce){
    return sauce + this.order;
  },
  noodle: function(country){
    return country + this.order;
  }
}

var steak = Object.create( cooking );

  steak.pork = function(){
    return this.roast("포크 ");
  };
  steak.beef = function(){
    return this.roast("소고기 ");
  };
  steak.lamb = function(){
    return this.roast("양고기 ");
  };

var chicken = Object.create( cooking );

chicken.seasoning = function(){
  return this.fry("양념 ");
};
chicken.garlic = function(){
  return this.fry("마늘 ");
};
chicken.soy = function(){
  return this.fry("간장 ");
};


 var japan = Object.create( cooking );

 japan.miso = function(){
   return this.noodle("미소");
};
japan.sio = function(){
  return this.noodle("시오");
};
japan.tonkotsu = function(){
  return this.noodle("돈코츠");
};

steak.cook("스테이크");
// chicken.cook("치킨");
chicken.cook("통닭");
japan.cook("라멘");

alert(chicken.fry("후라이드 "));

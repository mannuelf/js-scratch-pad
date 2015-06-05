var sportsCast = ['Football', 'Moto racing', 'Rugby'];

var excitedSportCaster = function(str){
  return str + '!!!';
};

_.map(sportsCast, excitedSportCaster);

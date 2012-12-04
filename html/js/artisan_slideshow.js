(function($){
  var _globals = this;

  var template = '<div class="artisan_top"><div class="artisan-header"></div><div class="artisan-image"><img src="{{image}}"</div><div class="artisan-content"><div class="artisan-content-title">{{title}}</div><div class="artisan-content-text">{{content}}</div></div></div>';


  var artisan_element = function(artisan){
    var html = Mustache.render(template, artisan);
    return $(html);
  };

  var artisan_index;
  var artisans = [];
  var container;
  var current_artisan;
  var start = function(_container, _artisans){
    artisan_index = -1;
    artisans = _artisans;
    container = _container;
    next();
  };
  var stop = function(){
  };

  var next = function(){
    if(artisan_index == (artisans.length-1){
      return;
    }
    artisan_index = artisan_index + 1;
    $(current_artisan).remove();
    current_artisan = artisan_element(artisans[artisan_index]);
    $(container).append(current_artisan);
  };
  
  var artisan_slideshow = {};
  artisan_slideshow.start = start;
  artisan_slideshow.stop = stop;

  _global.artisan_slideshow = artisan_slideshow;
})(jQuery);

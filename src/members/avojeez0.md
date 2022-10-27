---
title:  "Fred Garbutt"
date:   2015-10-02 08:50:00
category: member
layout: layouts/member.njk
---
<style>
.post header {
  display:none;
}

.main-nav {
  position: relative;
  background: transparent !important;
}

nav.main-nav a {
  color:#F4AEFF;
}

nav.main-nav a.cta {
  background:#B729B5;
}

#post-body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #722a4f;
  background: -moz-linear-gradient(-45deg,  #722a4f 0%, #b601bc 100%);
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#722a4f), color-stop(100%,#b601bc));
  background: -webkit-linear-gradient(-45deg,  #722a4f 0%,#b601bc 100%);
  background: -o-linear-gradient(-45deg,  #722a4f 0%,#b601bc 100%);
  background: -ms-linear-gradient(-45deg,  #722a4f 0%,#b601bc 100%);
  background: linear-gradient(135deg,  #722a4f 0%,#b601bc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#722a4f', endColorstr='#b601bc',GradientType=1 );
}

#post-body[theme='dark'] {
  background: #440E2A;
  background: -moz-linear-gradient(-45deg,  #440E2A 0%, #220C23 100%);
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#440E2A), color-stop(100%,#220C23));
  background: -webkit-linear-gradient(-45deg,  #440E2A 0%,#220C23 100%);
  background: -o-linear-gradient(-45deg,  #440E2A 0%,#220C23 100%);
  background: -ms-linear-gradient(-45deg,  #440E2A 0%,#220C23 100%);
  background: linear-gradient(135deg,  #440E2A 0%,#220C23 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#440E2A', endColorstr='#220C23',GradientType=1 );
}

.typed {
  font-size:24px;
  line-height: 1em;
  position: absolute;
  width: 0;
  overflow: hidden;
  height: 1em;
  word-wrap: break-word;
  opacity: 0
}

.typed {
  -webkit-animation: tick 12s linear;
  -moz-animation: tick 12s linear;
}

#poem-container {
  margin-top: 100px;
  width: 80%;
  margin-left: 10%;
}

.poem {
  color: #FFCFCF;
  /*background: #9A2C94;*/
  padding: 4px;
  position:relative;
  min-height:30px;
}

.poem .content {
  opacity:1;
}

@-webkit-keyframes tick {
  0% {
    width: 0;
  }
  5% {
      opacity: 1;
  }
  90% {
    width: 100%;
    opacity: 1;
  }
  100% {
     opacity:1;
     width: 100%;
  }
}

@-moz-keyframes tick {
  0% {
    width: 0;
  }
  5% {
      opacity: 1;
  }
  90% {
    width: 100%;
    opacity: 1;
  }
  100% {
     opacity:1;
     width: 100%;
  }
}

.untyped {
  display:none;
}

#poem-container2 {
  font-size: 36px;
  color: #9C349E;
  margin-top: 100px;
  width: 80%;
  margin-left: 10%;
  overflow-y: scroll;
  height: calc(100% - 100px);
}
</style>

<script src='/assets/js/jquery.js' type='text/javascript'></script>

<script>
$(function(){

  // begin the animation
  function type($el, callback) {
    $el.removeClass('untyped');
    // put an empty space between each letter so we can
    // use break word
      var text = $el.text();
      $el.html(text.split('').join('&#8203;'));

      $el.addClass('typed')
        .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {

          $el.removeClass('typed');
          if (typeof callback == 'function') callback();
      });
  }

  type($('#poem1-line1'), function() {
    type($('#poem1-line2'), function() {
      type($('#poem1-line3'), function() {
        type($('#poem1-line4'), function() {
          type($('#poem1-line5'), function() {
            type($('#poem1-line6'), function() {
              type($('#poem1-line7'), function() {
                type($('#poem1-line8'), function() {
                  type($('#poem1-line9'), function() {
                    type($('#poem1-line10'), function() {
                      $('#post-body').attr('theme', 'dark');
                      $('#poem-container').addClass('untyped');
                      $('#poem-container2').removeClass('untyped');
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});
</script>
<div id='poem-container'>
  <div class='poem' id='poem1'>
    <div class='untyped content' id='poem1-line1'>Hey, Marcella. Nice to see you again, I hear you'll be in town a few days this time</div>
    <div class='untyped content' id='poem1-line2'>(A train rolls by, I count the cars: 157)</div>
    <div class='untyped content' id='poem1-line3'>I forget if we met on internet</div>
    <div class='untyped content' id='poem1-line4'>I am on internet, study @Astros, a baseball team that rlly knows how to ply</div>
    <div class='untyped content' id='poem1-line5'>Did we meet through Harry? err... Dipset..?</div>
    <div class='untyped content' id='poem1-line6'>Maybe Conway, errrr..... Harold? What highschool did u go to again?</div>
    <div class='untyped content' id='poem1-line7'>The @Astros are in town next week</div>
    <div class='untyped content' id='poem1-line8'>Baseball is the best, @Astros tm is best.</div>
    <div class='untyped content' id='poem1-line9'>@Astros @Astros @Astros @Astros @Astros @Astros @Astros @Astros @Astros @Astros</div>
    <div class='untyped content' id='poem1-line10'>sudo rm -rf /* sudo rm -rf /* sudo rm -rf /* sudo rm -rf /* sudo rm -rf /* sudo rm -rf /*</div>
  </div>
</div>
<div id='poem-container2' class='untyped'>
  ## God said brontosaurus' feet hurt when He stepped.
  * I asked if stegasaurus was lame like a turtle. "not pet rocks"
  * Biggest thing to fly? "Couch"
  * What did Neanderthals think about? "Warmth"
  * Hardest part in evolution? Getting monkey mothers to hold babies for nursing. Smother is a problem.
  ## Happiest day in evolution? "Fruit"
  * Other interesting point in evolution? "Fish shoulders."
  * What makes horse happy? "Call of open range"
  * Which is better orangutang or chimp? "Species exhibit similar glory"
  * What makes otters happy? "Eternal skies"
  * What makes my birds happy? "Gnawing"
  ## What are my birds saying? "chanting"
  * God's favorite animals are bears, then elephants.
  * What makes elephants happy? "baths"
  * What do elephants think about? "skin hunger"
  * What makes bears happy? "reaping depends"
  * What's your favorite color? "Jude" Jade blue like ice bergs
  * Hawking should use his nose if his muscle fails. Blow on candle. Said gets burned though.
  * Bent wormholes have echoes.
</div>

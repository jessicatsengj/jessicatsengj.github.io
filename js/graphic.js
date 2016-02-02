$(function(){
    function inkPainting($p) {
                // this code was autogenerated from PJS

    var Ink = (function() {
        function Ink() {
            var $this_1 = this;

            function $superCstr() {
                $p.extendClassChain($this_1)
            }
            $this_1.xpos = null;
            $this_1.ypos = null;
            $this_1.x = 0;
            $this_1.y = 0;
            $this_1.xspeed = 0;
            $this_1.yspeed = 0;

            function display$4(r1, r2, div1, div2) {
                for (var i = 0; i < $this_1.xpos.length - 1; i++) {
                    $this_1.xpos[i] = $this_1.xpos[i + 1];
                    $this_1.ypos[i] = $this_1.ypos[i + 1];
                }
                $this_1.xpos[$this_1.xpos.length - 1] = $this_1.x - $this_1.xspeed * 10;
                $this_1.ypos[$this_1.ypos.length - 1] = $this_1.y - $this_1.yspeed * 10;

                for (var i = 0; i < $this_1.xpos.length; i++) {
                    $p.noStroke();
                    $p.fill(255 - i * div1, 80);
                    $p.ellipse($this_1.xpos[i], $this_1.ypos[i], i / div2, i / div2);
                }
                $p.fill(0);
                $p.ellipse($this_1.xpos[$this_1.xpos.length - 1], $this_1.ypos[$this_1.ypos.length - 1], r1, r2);
            }
            $p.addMethod($this_1, 'display', display$4, false);

            function run$1(sp) {
                $this_1.x = $this_1.x + $p.parseInt($p.random(-3, 3));
                $this_1.y += $this_1.yspeed * sp;
            }
            $p.addMethod($this_1, 'run', run$1, false);

            function checkEdge$1(repos) {
                if ($this_1.x < 50 || $this_1.x > $p.width - 50) {
                    $this_1.x = repos;
                }
                if ($this_1.y < -300 || $this_1.y > $p.height + 300) {
                    $this_1.yspeed *= -1;
                }
            }
            $p.addMethod($this_1, 'checkEdge', checkEdge$1, false);

            function $constr_2(len, pos) {
                $superCstr();

                $this_1.xpos = $p.createJavaArray('int', [len]);
                $this_1.ypos = $p.createJavaArray('int', [len]);
                $this_1.x = $p.parseInt($p.random(pos, pos + $p.width / 7));
                $this_1.y = $p.parseInt($p.random($p.height));
                $this_1.xspeed = $p.parseInt($p.random(2, 3));
                $this_1.yspeed = $p.parseInt($p.random(2, 3));
            }

            function $constr() {
                if (arguments.length === 2) {
                    $constr_2.apply($this_1, arguments);
                } else $superCstr();
            }
            $constr.apply(null, arguments);
        }
        return Ink;
    })();
    $p.Ink = Ink;

    var ink1 = null;
    var ink2 = null;
    var ink3 = null;

    var bg = null;
    var ring1 = null;

    var w = 300;
    var h = 300;

    function setup() {
        $p.size(w, h);
        bg = $p.loadImage("./imghome/graphic.png");
        ring1 = $p.loadImage("./imghome/ring1.png");
        $p.__frameRate = 30;
        ink1 = new Ink(70, w / 3);
        ink2 = new Ink(40, w / 3 * 2);
        ink3 = new Ink(30, w * 7 / 12);
    }
    $p.setup = setup;
    setup = setup.bind($p);

    function draw() {
        $p.background(0);
        $p.image(bg, 0, 0, w, h);
        $p.image(ring1, w / 3, -h / 6, w, h);

        ink1.display(37, 52, 7 / 2, 4);
        ink1.run(1);
        ink1.checkEdge(w / 3);

        ink2.display(30, 40, 7, 3);
        ink2.run(2);
        ink2.checkEdge(w / 3 * 2);

        ink3.display(10, 17, 7, 5);
        ink3.run(5 / 3);
        ink3.checkEdge(w * 7 / 12);
    }
    $p.draw = draw;
    draw = draw.bind($p);
    //end class;

      
    }

        var canvas = document.getElementById("canvas1");
        var p = new Processing(canvas, inkPainting);
        
});            

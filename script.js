
particlesJS("particles-js",


    {
        "particles": {
            "number": {
                "value": 326,
                "density": {
                    "enable": true,
                    "value_area": 944.1236172522849
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5507387767304995,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

);

// $(function () {

//     $(window).scroll(function () {

//         var mass = Math.min(50, 1 + 0.005 * $(this).scrollTop());


//         $('.greeting').css('transform', 'translateX(-' + mass * 80 + 'px)');
//         $('.name').css('transform', 'translateX(' + mass * 110 + 'px) translateY(-' + mass * 60 + 'px)');
//         $('.name').css('font-size', '-' + mass * 30 + 'px');
        
//         $('.scale-down').css('transform', 'scale(' + mass * 0.5 +')');

//         $('.name').css('background', 'linear-gradient(45deg, #d000f5, #d2ec0b)');
//         $('.name').css('-webkit-text-fill-color', 'transparent');
//         $('.name').css('-webkit-background-clip', 'text');

//     });
// });



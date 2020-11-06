import 'uikit/dist/css/uikit.min.css';
import '../styles/style.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick';

import $ from 'jquery';

$('.my-first-slick').slick({
    autoplay: true,
    autoplaySpeed: 500,
    appendArrows: $('.custom-arrows')
})
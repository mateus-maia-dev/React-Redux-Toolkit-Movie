export const Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                dots: true
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                initialSlide: 2
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 3,
                initialSlide: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};


import React, { useEffect } from 'react';
import "../../css/style.css";

const ParallaxComponent = () => {
    useEffect(() => {

        (async () => {
            const { create } = await import('basicscroll');

            document.querySelectorAll('.slide').forEach((elem) => {
                const modifier = elem.getAttribute('data-modifier');

                const instance = create({
                    elem: elem,
                    from: 0,
                    to: 519,
                    direct: true,
                    props: {
                        '--translateY': {
                            from: '0',
                            to: `${10 * modifier}px`,
                        },
                    },
                });

                instance.start();
            });
        })();
    }, []);



    return (

        <div id="intro2" className="slide" data-speed="2">
            <div  className="title">
                <h2>怪談博物館</h2>
                <h3>精選靈異故事、都市傳說，帶你進入未知世界，享受身歷其境的驚悚與神秘氛圍。</h3>
            </div>

            <div className='paper'>
                <img className="paper1" data-speed="10" src="/images/paper_1.png " />
                <img className="paper2"  data-speed="100"src="/images/paper_2.png " />
            </div>
    
            <div id="intro3" className="slide">

            </div>

        </div>
    );
};

export default ParallaxComponent;


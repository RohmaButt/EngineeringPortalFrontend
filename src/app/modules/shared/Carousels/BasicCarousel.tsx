import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { defaultImageSvg } from '../../../../setup/appConstants';


const BasicCarousel = () => {

    const onChange = (e: any) => {
        console.log('onChange', e)

    }

    const onClickItem = (e: any) => {
        console.log('onClickItem', e)
    }

    const onClickThumb = (e: any) => {
        console.log('onClickThumb', e)
    }

    return
    (
        <div>
            <Carousel width={850} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>&gt;
                <div>
                    <img src={defaultImageSvg} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={defaultImageSvg} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={defaultImageSvg} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>
    )
}

export default BasicCarousel
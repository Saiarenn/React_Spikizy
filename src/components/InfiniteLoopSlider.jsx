import React from "react";

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
    return (
        <div className='loop-slider' style={{
            '--duration': duration + 'ms',
            '--direction': reverse ? 'reverse' : 'normal'
        }}>
            <div className={'loop__item'}>
                {children}
                {children}
            </div>
        </div>
    );
};

export default InfiniteLoopSlider;
import React from 'react';
import Transition from 'react-transition-group/Transition';
import "./stylesheets/Contents.css"

const duration = 200;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

function Contents(props) {
    return (
        <Transition in={props.in} timeout={duration} onExited={props.onExit}>
            {(state) => (
                <div className="contents" style={
                    {
                        backgroundImage: `url(${props.backgroundImage})`,
                        ...defaultStyle,
                        ...transitionStyles[state],

                    }
                }>
                    <div className="contentsChildren">
                        {props.children}
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default Contents

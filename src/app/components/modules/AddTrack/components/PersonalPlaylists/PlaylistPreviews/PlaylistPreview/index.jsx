import React from 'react';
import PT from 'prop-types';

import { Li, Img, ImgContainer, P, Span, ScLink } from './styled';

class PlaylistPreview extends React.Component {
    constructor() {
        super();

        // declare refs
        this.liRef = React.createRef();
        this.imgRef = React.createRef();
        this.spanRef = React.createRef();
    }

    state = {
        marginLeft: 0,
        animationDuration: 2,
        imgWidth: null,
    }

    // set imgWidth tot width of Img when component is mounted

    componentDidMount() {
        // need to get width of an element after it is rendered and store it in state
        // eslint-disable-next-line
        this.setState({
            imgWidth: this.imgRef.current.offsetWidth,
        });
    }

    // calculate difference in length between span and li and set state with a marginLeft
    slideTitleHandler = () => {
        let marginLeft = 0;
        let animationDuration = 2;
        const spanWidth = this.spanRef.current.offsetWidth;
        const liWidth = this.liRef.current.offsetWidth;
        const widthOffset = liWidth - spanWidth;

        // if span is shorter than li no margin should be given
        if (widthOffset >= 0) {
            marginLeft = 0;
        } else if (widthOffset < 0) {
            marginLeft = `${widthOffset - 15}px`;
            animationDuration = widthOffset * -0.02;
        }
        this.setState({
            marginLeft,
            animationDuration,
        });
    }

    render() {
        const { imgSrc, title } = this.props;
        return (
            <ScLink to="/">
                <Li
                    onMouseOver={this.slideTitleHandler}
                    onFocus={this.slideTitleHandler}
                    innerRef={this.liRef}
                >
                    <ImgContainer imgWidth={this.state.imgWidth}>
                        <Img innerRef={this.imgRef} alt="Playlist cover" src={imgSrc} />
                    </ImgContainer>
                    <P>
                        <Span
                            innerRef={this.spanRef}
                            marginLeft={this.state.marginLeft}
                            animationDuration={this.state.animationDuration}
                        >{title}
                        </Span>
                    </P>
                </Li>
            </ScLink>
        );
    }
}

PlaylistPreview.propTypes = {
    imgSrc: PT.string,
    title: PT.string,
};

export default PlaylistPreview;

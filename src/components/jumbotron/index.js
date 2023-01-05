import React from 'react';
import { Container, Inner, Pane, Item, Title, SubTitle, Image,Wrapper, Video  } from './styles/jumbotron';

export default function Jumbotron({children, direction = 'row', ...restProps }) {
    return(
        <Item {...restProps}>
            <Inner  direction={direction}>
            {children}
            </Inner>
        </Item>
        )
}

Jumbotron.Container = function JumboTronContainer({children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>;
}
Jumbotron.Pane = function JumboTronPane({children, ...restProps}) {
    return <Pane { ...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumboTronTitle({children, ...restProps}) {
    return <Title { ...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumboTronSubTitle({children, ...restProps}) {
    return <SubTitle { ...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumboTronImage({ ...restProps}) {
    return <Image { ...restProps} />;
}
Jumbotron.Wrapper = function JumboTronWrapper({children, ...restProps}) {
    return <Wrapper { ...restProps} >{children}</Wrapper>;
}
Jumbotron.Video = function JumboTronVideo({children, ...restProps}) {
    return <Video { ...restProps} >{children}</Video>;
}
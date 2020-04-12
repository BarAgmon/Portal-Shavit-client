import React from 'react';
import styled from  'styled-components';
import PropTypes from 'prop-types';

export default function AppCard({image, title, href}) {
  return (
    <Root>
        <Base href={href}>
          <ImageSource image={image}/>
          <ImageBackdrop/>
            <ImageTitle>
                {title}
            </ImageTitle>
        </Base>
    </Root>
  );
}

const ImageBackdrop = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.75;
    border: 0em solid currentColor;
    transition: opacity border-width 300ms;

    &:hover {
      opacity: 0.15;
      border-width: 0.25em;
    }
`;

const Root = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 0.5em;
    width:8.5em;
    height:5.5em;
`;
const ImageTitle = styled.div`
  position: relative;
  position: relative;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 1em;
  color : white;
`;

const ImageSource = styled.span `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-image:url(${props => props.image});
`;
const Base = styled.a`
  display: flex ;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100% !important;
  height: 100%;
  text-decoration : none;
`;

AppCard.propTypes = {
  image:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  href:PropTypes.string.isRequired
};
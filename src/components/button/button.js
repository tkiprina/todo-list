import React from 'react';
import styled from 'styled-components';
import {GREY, BLUE, FONT_FAMILY} from '../../consts';

const ModeBtn = styled.button`
    display: block;
    width: 86px;
    height: 27px;
    background: ${GREY};
    border-radius: 4px;
    border: none;
    font-family: ${FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.01em;
    color: #000000;
`;

const PlusBtn = styled.button`
    position: fixed;
    width: 60px;
    height: 60px;
    right: 40px;
    bottom: 40px;
    border: none;
    border-radius: 30px;
    padding: 0;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);

    &:before {
        content: '';
        position: absolute;
        left: 20px;
        width: 20px;
        height: 2px;
        background: ${BLUE};
    }

    &:after {
        content: '';
        position: absolute;
        left: 29px;
        top: 21px;
        width: 2px;
        height: 20px;
        background: ${BLUE};
    }
`;

const btnStyles = `
    display:block;
    width: 137px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-family: ${FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.01em;
`;

const CloseBtn = styled.button`
    ${btnStyles}
    background: ${GREY};
    color: #4D4D4D;
`;

const SaveBtn = styled.button`
    ${btnStyles}
    color: #FFFFFF;
    background: ${BLUE};

`;

const Button = (props) => {

    if (props.type === "mode") {
        return (
            <ModeBtn type="button" onClick={props.click}>
                {props.children}
            </ModeBtn>    
        );
    }

    if (props.type === "plus") {
        return (
            <PlusBtn type="button" onClick={props.click}>
                {props.children}
            </PlusBtn>    
        );
    }

    if (props.type === "close") {
        return (
            <CloseBtn type="button" onClick={props.click}>
                {props.children}
            </CloseBtn>    
        );
    }

    if (props.type === "save") {
        return (
            <SaveBtn type="button" onClick={props.click}>
                {props.children}
            </SaveBtn>    
        );
    }
    
}

export default Button;
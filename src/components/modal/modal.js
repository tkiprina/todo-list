import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0,0,0,0.025);
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 132px;
    width: 100%;
    height: calc(100vh - 132px);
    box-sizing: border-box;
    padding: 42px 40px;
    background: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    border-radius: 40px 40px 0px 0px;
`;

const Modal = (props) => {
    return (
        <Backdrop>
            <ModalContainer>
                Some text here;
            </ModalContainer>
        </Backdrop>
        
    );
}

export default Modal;
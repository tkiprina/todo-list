import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Button from '../button/button';
import List from '../list/list';
import Modal from '../modal/modal';

const Container = styled.div`
    position: relative;
    padding: 60px 40px 40px 40px;
`;

const App = (props) => {
    return (
        <Container>
            <Header/>
            <List/>
            <Button type="plus"/>
            <Modal></Modal>
        </Container>
    );
}

export default App;
import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {openModalCreate} from '../../actions';
import Header from '../header/header';
import Button from '../button/button';
import List from '../list/list';
import Modal from '../modal/modal';
import {FONT_FAMILY} from '../../consts';

const Container = styled.div`
    position: relative;
    padding: 60px 40px 40px 40px;
    font-family: ${FONT_FAMILY};

    @media (min-width: 992px) {
        max-width: 960px;
        margin: 0 auto;
    }
`;

const App = (props) => {
    
    const {openModalCreate, isEdit, modalCreateIsOpen, modalEditIsOpen} = props;

    const btnClickHandler = () => { 
        openModalCreate();
    }

    return (
        <>
        <Container>
            <Header/>
            <List/>
            {isEdit ? null : <Button type="plus" click={btnClickHandler}/> } 
        </Container>
        {modalCreateIsOpen ? <Modal type="create"/> : null}
        {modalEditIsOpen ? <Modal type="create"/> : null}
        </>
    );
}

const mapStateToProps = (state) => ({
    isEdit: state.editItemMode,
    modalCreateIsOpen: state.modalCreateIsOpen,
    modalEditIsOpen: state.modalEditIsOpen
});

const mapDispatchToProps = {
    openModalCreate
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
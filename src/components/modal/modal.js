import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {closeModal, addItem, editItem} from '../../actions';

import Button from '../button/button';

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

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`;

const Area = styled.textarea`
    width: 100%;
    min-height: 160px;
    padding: 20px;
    border: 2px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 10px;
`;

const Input = styled.textarea`
    width: 100%;
    min-height: 50px;
    padding: 14px 20px;
    border: 2px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 10px;
`;

const NotValidLabel = styled.span`
    display:block;
    font-size: 12px;
    color: #E85C5C;
`;

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: props.item ? props.item.text : null,
            isNotValid: false
        }

        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.closeBtnClickHandler = this.closeBtnClickHandler.bind(this);
        this.saveBtnClickHandler = this.saveBtnClickHandler.bind(this);
    }

    textChangeHandler(e){
        this.setState({
            inputVal: e.target.value
        });
    }

    closeBtnClickHandler(){
        const {closeModal} = this.props;
        closeModal();
    }

    saveBtnClickHandler(){
        const {addItem, editItem, closeModal, isEdit, item} = this.props;
        const value = this.state.inputVal;
        
        if (!value || !value.trim()) {
            this.setState({
                isNotValid: true
            });

            return;
        }
        
        if (!isEdit) {
            addItem(value);
        } else {
            editItem({
                text: value,
                id: item.id,
                selected: item.selected
            });
        }
        
        closeModal();
    }


    render() {
        let modalInput = <Area placeholder="Введите текст задачи" onChange={this.textChangeHandler} value={this.state.inputVal||''}/>;
        let primaryBtnText = 'Добавить';

        if (this.props.isEdit) {
            modalInput = <Input onChange={this.textChangeHandler} value={this.state.inputVal||''}/>;
            primaryBtnText = 'Сохранить';
        }

        return (
            <Backdrop>
                <ModalContainer>
                    <form>
                        {modalInput}
                        {this.state.isNotValid ? <NotValidLabel>Пожалуйста, введите текст задачи</NotValidLabel> : null}
                    </form>
                    <BtnContainer>
                        <Button type="close" click={this.closeBtnClickHandler}>Закрыть</Button>
                        <Button type="save" click={this.saveBtnClickHandler}>{primaryBtnText}</Button>
                    </BtnContainer>
                </ModalContainer>
            </Backdrop>
            
        );
    }
}

const mapStateToProps = (state) => ({
    isEdit: state.editItemMode,
    item: state.editItem
});

const mapDispatchToProps = {
    closeModal,
    addItem,
    editItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

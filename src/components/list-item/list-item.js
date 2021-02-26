import React from 'react';
import styled from 'styled-components';
import ListIcon from '../list-item-icon/list-item-icon';
import {connect} from 'react-redux';
import {openModalEdit, selectItem, removeItem} from '../../actions';

const Item = styled.li`
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.selected {
        color: rgba(0, 0, 0, 0.6);
    }
`;

const ListItem = (props) => {

    const {item, selected, isEdit, openModalEdit, selectItem, removeItem} = props;

    const itemClickHandler = () => {
        if (isEdit) {
            openModalEdit(item);
        } else {
            selectItem(item);
        }
    }

    const iconClickHandler = () => {
        if (isEdit) {
            removeItem(item.id);
        } else {
            selectItem(item);
        }
    }

    return (
        <Item>
            <ListIcon isEdit={isEdit} selected={selected} click={iconClickHandler}/>
            <span onClick={itemClickHandler}>{props.children}</span>
        </Item>
    );
}

const mapStateToProps = (state) => ({
    isEdit: state.editItemMode
});

const mapDispatchToProps = {
    openModalEdit,
    selectItem,
    removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ListItem from '../list-item/list-item';

const Ul = styled.ul`
    margin: 47px 0 0 0;
    padding: 0;
    list-style: none;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
`;

const Placeholder = styled.div`
    margin: 49px 0 0 0;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
`;

const getItems = (items) => {
    
    if (Array.isArray(items)) {
        return items.map( item => (
            <ListItem key={item.id} item={item}/>
        ));
    }

    return null;
};

const List = (props) => {

    const {items} = props;

    if (!items || items.length<1) {
        return (
            <Placeholder>Список задач пуст</Placeholder>
        )
    }

    return (
        <Ul>
            {getItems(items)}
        </Ul>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    editItem: state.editItem
});


export default connect(mapStateToProps)(List);
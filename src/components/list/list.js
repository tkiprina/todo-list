import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ListItem from '../list-item/list-item';
import {FONT_FAMILY} from '../../consts';

const fontStyle = `
    font-family: ${FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
`;

const Ul = styled.ul`
    margin: 47px 0 0 0;
    padding: 0;
    list-style: none;
    ${fontStyle}
`;

const Placeholder = styled.div`
    margin: 49px 0 0 0;
    ${fontStyle}
`;

const List = (props) => {

    const {items} = props;

    if (!items || items.length<1) {
        return (
            <Placeholder>Список задач пуст</Placeholder>
        )
    }

    return (
        <Ul>
            {
                items.map((item) => (
                    <ListItem key={item.id} selected={item.selected} item={item}>{item.text}</ListItem>
                ))
            }
        </Ul>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    editItem: state.editItem
});


export default connect(mapStateToProps)(List);
import React from 'react';
import styled from 'styled-components';

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

};

const List = (props) => {

    if (!props.items || props.items.length<1) {
        return (
            <Placeholder>Список задач пуст</Placeholder>
        )
    }
    
    return (
        <Ul>
            {getItems()}
        </Ul>
    )
}

export default List;
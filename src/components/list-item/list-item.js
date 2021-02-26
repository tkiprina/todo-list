import React from 'react';
import styled from 'styled-components';

import ListIcon from '../list-item-icon/list-item-icon';

const Item = styled.li`
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;

    &.selected {
        color: rgba(0, 0, 0, 0.6);
    }
`;

const ListItem = (props) => {
    return (
        <Item onClick={props.click}>
            <ListIcon/>
            {props.children}
        </Item>
    );
}

export default ListItem;
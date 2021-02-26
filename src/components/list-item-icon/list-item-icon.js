import React from 'react';
import styled from 'styled-components';

const RemoveIcon = styled.button`
    display:block;
    width: 22px;
    height: 22px;
    margin-right: 14px;
    border-radius: 11px;
    border: none;
    background: #E85C5C;

    &:before {
        content: '';
        width: 10px;
        height: 2px;
        background: #fff;
    }
`;

const CheckedIcon = styled.div`
    width: 22px;
    height: 22px;
    margin-right: 14px;
    padding: 5px;
    border-radius: 11px;
    border: 2px solid #D9D9D9;
    box-sizing: border-box;
`;

const Selected = styled.div`
    width: 12px;
    height: 12px;
    background: #23A3FF;
`;



const ListIcon = (props) => {
    
    if (props.isEdit) {
        return (
        <RemoveIcon type="button" onClick={props.click}/>);
    }

    return (
        <CheckedIcon>
            {props.selected ? <Selected/> : ''}
        </CheckedIcon>
    );
}

export default ListIcon;
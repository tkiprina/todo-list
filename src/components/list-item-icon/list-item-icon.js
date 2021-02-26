import React from 'react';
import styled from 'styled-components';
import { RED, BLUE} from '../../consts';

const iconStyle = `
    display:block;
    position: relative;
    width: 22px;
    height: 22px;
    margin-right: 14px;
    border-radius: 11px;
`;

const RemoveIcon = styled.button`
    ${iconStyle}
    border: none;
    background: ${RED};

    &:before {
        content: '';
        position: absolute;
        left: 6px;
        top: 10px;
        width: 10px;
        height: 2px;
        background: #fff;
    }
`;

const CheckedIcon = styled.div`
    ${iconStyle}
    padding: 3px;
    border: 2px solid #D9D9D9;
    box-sizing: border-box;
`;

const Selected = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: ${BLUE};
`;



const ListIcon = (props) => {
    
    if (props.isEdit) {
        return (
        <RemoveIcon type="button" onClick={props.click}/>);
    }

    return (
        <CheckedIcon onClick={props.click}>
            {props.selected ? <Selected/> : ''}
        </CheckedIcon>
    );
}

export default ListIcon;
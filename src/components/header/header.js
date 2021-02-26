import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';

const View = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1{
        margin: 0;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 41px;
        letter-spacing: 0.01em;
        color: #1C1C1C;
    }
`;

const Header = (props) => {
    return (
        <View>
            <h1>Сегодня</h1>
            <Button type="mode">Править</Button>
        </View>    
    );
}

export default Header;
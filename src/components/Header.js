import React from 'react';
import styled from 'styled-components';

/* const HeaderContainer = styled.div`


    background: #fff url("/images/header.png") no-repeat;
    background-size: cover;
    height: 200px;
    position: relative;
    margin: 0 auto;
    display: block;
    text-align: center;
`;
 */

const HeaderContainer = styled.div`


background-color:#000;
height: 200px;
`;
export default function Header() {
    return <HeaderContainer></HeaderContainer>;
}

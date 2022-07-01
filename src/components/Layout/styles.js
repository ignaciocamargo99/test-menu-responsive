import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    display: flex;
    padding: calc(${v.smSpacing} * 6);
    top: 0;
    position: absolute;
    /* z-index:5; */
    left: ${({isOpen}) => (isOpen ? '16rem': '10rem')};
    h1 {
        font-size: 14px;
    }
`;

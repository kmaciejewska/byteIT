import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#fff' : "#000")};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 20px')};
    color: ${({ primary }) => (primary ? '#000' : "#fff")};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        /*background: ${({ primary }) => (primary ? "#e5e5e5" : '#323232')};*/
    }
`
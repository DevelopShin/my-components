import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) =>(big ? '10px 40px' : '10px 25px')};
    color: ${({dark})=> (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    display:flex;
    align-items:center;
    &:hover {
        transition: all 0.5s ease-in-out;
        background: ${({primary})=>(primary ? '#010f71':'#fff')};
        color: ${({dark})=> (dark ? '#fff':'#010606')};

    }
`
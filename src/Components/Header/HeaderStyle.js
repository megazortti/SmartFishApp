import styled from 'styled-components'

export const Button = styled.button`
    color: red;
`
export const HeaderDiv = styled.div`
    display: flex;
    // flex: 0.1
    flex-direction: row;
    justify-content: space-between;
    background: #0C0032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`
export const Main = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: column;
    z-index: 10;
`

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderTitle = styled.h1`
    padding-left: 20px;
    color: white;
`
export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

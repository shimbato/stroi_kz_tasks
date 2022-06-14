import styled from "@emotion/styled";


export const OverFlow = styled.div `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
 &:hover {
    overflow: auto;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
 }
`
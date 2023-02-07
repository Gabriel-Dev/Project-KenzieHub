import styled from "styled-components";

export const Card = styled.li`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
height: 3rem;

padding: 0 .5rem;

background-color: var(--grey-4);
border-radius: .25rem;

cursor: pointer;

:hover{
    background-color: var(--grey-2) ;
}
`
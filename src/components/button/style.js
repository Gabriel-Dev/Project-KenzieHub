import styled from "styled-components";

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;

padding: 0rem 1.375rem;

min-height: 2.4063rem;

border: .0625rem solid transparent;
border-radius: .25rem;

background-color: var(--grey-1);
color: var(--grey-0);

:hover{
    filter: saturate(1.7);
}
`
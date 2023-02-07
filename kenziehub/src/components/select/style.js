import styled from "styled-components";


export const Label = styled.label`
display: flex;
flex-direction: column;   

gap: 0.5rem;

font-size: .625rem;

select{
    display: flex;
    align-items: center;

    padding: 0rem .875rem;
    
    width: 100%;
    height: 2.4063rem;

    background: var(--grey-2);
    color: var(--grey-0);

    border: .0625rem solid var(--grey-2);
    border-radius: .25rem;

    cursor: pointer;
}

`
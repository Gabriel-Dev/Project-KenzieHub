import styled from "styled-components";

export const Label = styled.label`
position: relative;
display: flex;
flex-direction: column;   

gap: 0.5rem;



input{
    display: flex;
    align-items: center;

    padding: 0rem .875rem;
    
    width: 100%;
    height: 2.4063rem;

    background: var(--grey-2);
    color: var(--grey-0);

    border: .0625rem solid var(--grey-2);
    border-radius: .25rem;
}

input::placeholder{
    font-size: .75rem;
    color: var(--grey-1);
}
svg{
    position: absolute;
    top: 2rem;
    right: 1rem;

    width: .875rem;
    height: .875rem;

    cursor: pointer;
}

@media (min-width: 48rem) {
    input::placeholder{
        font-size: .875rem;
    }
    svg{
        top: 2.25rem;
    }
}
`
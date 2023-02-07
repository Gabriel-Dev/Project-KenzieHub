import styled from "styled-components";

export const Header = styled.header`
width: 100%;
height: 4.5rem;
border-bottom: .125rem solid var(--grey-2);

div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    width: 100%;
    height: 100%;
    max-width: 23.125rem;

    margin: 0 auto;
}

@media (min-width: 48rem) {
    div{
       max-width: 56.25rem; 
    }
        
}

`
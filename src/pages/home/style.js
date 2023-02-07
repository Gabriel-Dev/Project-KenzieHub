import styled from "styled-components";

export const Container = styled.main`
width: 100%;
margin: 0 auto;

.nameAndModule{
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 7.5rem;

    border-bottom: .125rem solid var(--grey-2);
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 23.125rem;
        width: 100%;
        margin: 0 auto;

        gap: 1rem;
        padding: 0 1rem;
    }
    @media (min-width: 48rem) {
        div{
            max-width: 56.25rem; 

            flex-direction: row;
            justify-content: space-between;
        }
    }
}

section{
    max-width: 23.125rem;
    width: 100%;
    margin: 0 auto;

    padding: 0 1rem;

    @media (min-width: 48rem) {
        max-width: 56.25rem; 
    }   
}

.titleAndButton{
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    button{
        min-width: 2rem;
        min-height: 2rem;

        padding: 0 0 .125rem 0;
        font-size: 1.25rem;
        background-color: var(--grey-3);
    }
}
.techList{
    display: flex; 
    flex-direction: column;

    gap: 1rem;
    padding: 1rem .5rem;

    border-radius: .25rem;
    background-color: var(--grey-3);

    p{
        text-align: center;
    }
}

p{
    color: var(--grey-1);
    }

`

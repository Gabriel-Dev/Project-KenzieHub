import styled from "styled-components";

export const Container = styled.main`
width: 100%;
height: 100vh;
max-width: 23.125rem;
margin: 0 auto;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

overflow: hidden;

form{
    width: 90%;
    height: max-content;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--grey-3);
    border: .0625rem solid transparent;
    border-radius: .25rem;

    padding: 2rem 1rem; 
    

h3,small{
    text-align: center;
    margin: .625rem 0;
}

label{
    margin-top: 1rem;
}

.buttonPrimary-2{
    margin-top: 1rem;
    background: var(--color-secondary);
    color: var(--grey-0);
}

.error{
    position: relative;
    top: .25rem;
    left: .25rem;

    font-size: .625rem;
    color: var(--color-negative);
}
}

`
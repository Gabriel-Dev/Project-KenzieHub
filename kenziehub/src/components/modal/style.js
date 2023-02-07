import styled from "styled-components";

export const Background = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
height: 100vh;

position: fixed;
top: 0;
left: 0;

background-color: var(--grey-4-50) ;

.modal{
    width: 100%;
    max-width: 21.125rem;
    height: max-content;

    border-radius: .25rem;
    background-color: var(--grey-3);

    overflow: hidden;
    margin: 1rem;

    @media (min-width: 48rem) {
        max-width: 23.125rem; 

    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 2.5rem ;

        padding: 0 1rem;

        background-color: var(--grey-2);

        .closeButton{
            background-color: transparent;
            color: var(--grey-1);

            padding: 0;
        }
       
    }

    form{
        display: flex;
        flex-direction: column;

        padding: 1rem;

        label{
            margin-bottom: 1rem;
        }

        .buttonPrimary{
            background: var(--color-primary);
            color: var(--grey-0);
        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;

            background-color: transparent;
            padding: 0;
        
            .buttonPrimary-2{
                background: var(--color-secondary);
                color: var(--grey-0);
            }
        }
        .error{
            position: relative;
            top: -1.25rem;
            left: .25rem;

            
            font-size: .625rem;
            color: var(--color-negative);
        }
        
        @media (min-width: 48rem) {
            label{
                margin-bottom: 1.5rem;
            }
        }
    }

    p{
        color: var(--grey-0);
    }
}

`
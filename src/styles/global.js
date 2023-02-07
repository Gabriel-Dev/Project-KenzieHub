import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

:root {
    --white: #FFFFFF;
    --color-primary: #FF577F;
    --color-primary-2: #FF427F;
    --color-secondary: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --grey-4-50: #12121450;
    --color-negative: #E83F5B;
    --color-warning: #FFCD07;
    --color-sucess: #3FE864;
    --color-information: #155BCB;
}

body{
    font-family: 'Inter', sans-serif;
    background-color: var(--grey-4);
    color: var(--grey-0);
}

ul{
    list-style: none;
}

button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
}

h1{
    font-size: 1.125rem;
    font-weight: 700;
}

h2{
    font-size: 1rem;
    font-weight: 600;
}
h3{
    font-size: .875rem;
    font-weight: 600;
}

p{
    font-size: .75rem;
}

small{
    font-size: .625rem;
    color: var(--grey-1);
}

label{
    font-size: .625rem;
}
@media (min-width: 48rem) {
    h1{
        font-size: 1.375rem;
    }

    h2{
        font-size: 1.25rem;
    }

    h3{
        font-size: 1.125rem;
    }

    p{
        font-size: .875rem;
    }
    small{
        font-size: .75rem;
    }
    label{
        font-size: .75rem;
    }
}
`
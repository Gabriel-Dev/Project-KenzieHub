import { Link as LinkRounter } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(LinkRounter)`
display: flex;
justify-content: center;
align-items: center;

height: 2rem;
padding: 0rem .75rem;

background-color: var(--grey-3);
border-radius: .25rem;

text-decoration: none;
font-size: .75rem;
color: var(--grey-0);

:hover{
    filter: saturate(1.7);
}
`
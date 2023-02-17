import { createGlobalStyle } from "styled-components";
//you can also use theme here, example : background-color:${({theme})=>theme.colors.primaryBg}
export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    body{
        height:100%;
       position:relative;
    }
`;

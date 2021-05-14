import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        background-color: #5352ED;
        @import url("https://emoji-css.afeld.me/emoji.css" );

    }
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    body{
        font-family: 'Roboto';
        background-color: #5352ED;
        color: #E9E9EB;
    }
    
`;

export default globalStyles;

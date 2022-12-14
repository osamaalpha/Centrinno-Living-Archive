import styled from "styled-components";
import { textColor } from "../../styles";

export const FilterSection = styled.section`
position: sticky;
top: 0;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items-center;
border: 1px solid ${textColor};
padding: 0;

    .intro-text, .graph-container {
        width: 50%;
        padding: 32px 0;
        aspect-ratio: 4/3;
    }
    .intro-text {
        position: relative;
        width: 50%;
        border-right: 1px solid ${textColor};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 32px;
        .default-page {
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            border-top: 1px solid ${textColor};
            border-right: 0;
            margin: 0 -1px 0px -1px;
        }
    }
    .graph-container {
        padding: 0;
        div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            overflow: hidden;
            svg {
                width: 100% !important;
                height: 100% !important;
                padding-top: 18%;
                overflow: visible;
            }
        }
    }

 h1 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1;
    text-align: left;
 }

 p {
    margin-top: 1em;
 }
`;

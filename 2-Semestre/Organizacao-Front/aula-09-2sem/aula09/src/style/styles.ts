import styled from "styled-components";

export const MinhaTabela = styled.table`
border-collapse:collapse;
width: 70%;
margin: 0 auto;

& thead{
    background-color: #f0f0f0;
    color: #333;
    font-weight: bold;
    font-size:24px;
    padding: 10px;
    text-align: left;
    & th{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tbody{
        font-size: 18px;
        text-align:center;
        & td{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tfoot{
        font-size: 18px;
        text-align:center;
        & td{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tr:nth-child(odd){
        background-color:#e2e2e2;
    }

    & tr:nth-child(even){
        background-color:#e2c2e2;
    }

`
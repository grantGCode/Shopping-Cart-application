import styled from "styled-components";


const size = {
    desktop: '1024px',
}

export const device = {
    desktop: `(min-width: ${size.desktop})`,
};

export const Form = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: "Poppins", sans-serif;

    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 2px solid gray;
        margin-bottom: 6px;
        padding: 5px    
    }

    .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-left: 10px;
        padding-right: 40px;
    }

    .title {
        font-weight: 700;
        font-style: normal;
    }

    .quantity {
        font-weight: 700;
        font-style: normal;
    }

    .remove-button {
        width: 210px;
        height: 40px;
        border-radius: 8px;
        font-family: "Prompt", sans-serif;
        font-weight: 700;
        font-style: normal;    
        color: rgba(247, 247, 247, 1);
        background-color: rgb(180, 180, 180);
        border-color: rgba(63, 63, 63, 1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;
import styled from "styled-components";

const size = {
    desktop: '1024px',
    desktop_xl: '1285px',
}

export const device = {
    desktop: `(min-width: ${size.desktop})`,
    desktop_xl: `(min-width: ${size.mobile})`,
};

export const ListedProductCard = styled.div`
    //default mobile
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .image-container {
        padding-top: 15px;
        width: 100%;
        height: 500px;
    }

    .product-image {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .product-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 25px;
        padding-top: 10px;
    }    

    .forum {
        display: flex;
        flex-direction: column;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    .add, .remove {
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    

    @media ${device.desktop} {
        border: 1px solid grey;
        border-radius: 10px;
        width: 500px;
        margin: 10px;
        padding: 10px;

        .image-container {
            padding-top: 15px;
            width: 100%;
            height: 500px;
        }
        .product-image {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
        
        .forum {
            display: flex;
            flex-direction: column;
        }

        .info-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .button-container {
            display: flex;
            justify-content: center;
        }

        .add, .remove {
            margin: 10px;
            padding: 20px;
            border-radius: 10px;
            border: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }


`;
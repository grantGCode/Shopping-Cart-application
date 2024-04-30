import styled from "styled-components";

const size = {
    desktop: '1024px'
}
  
export const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const ModalContainer = styled.div`
    top: 0;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    .modal-content {
        background: white;
        padding: 25px; 
        border-radius: 14px;        
        width: 50%;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 10px;
        padding-bottom: 15px;
        border-bottom: solid 1px gray;    
    }

    .modal-title {
        font-weight: 500;
        font-style: normal;
        font-size: 1.75em;
    }

    .close-modal{
        background-color: transparent;
        border-color: transparent;
        font-style: bold;
        font-weight: 400;
        font-size: 1.75em;
    }

    .modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding-top: 20px;
        border-top: solid 1px gray;
    
    }

    .no-items {
        padding: 25px;
    }

    .total-cost {
        display: flex;
        flex-direction: row;  
    }

    .button-purchase {
        width: 54%;
        height: 30%;
        color: white;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        font-size: 1.25em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        border: 2px solid ${props => 
            props.borderColor || 'gray'
        };

        &:hover {
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right, #797979, #0CB0D1); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(0, 0, 0)'
            };
        }
    }

    @media ${device.desktop} {
        
        .modal-content {
            width: 50%;
        }

        .no-items {
            padding: 75px;
        }
        
        .close-modal {
            font-weight: 700;
            font-size: 2em;
        }

        .button-purchase {
            width: 14%;
            height: 30%;
            color: white;
            background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
            font-size: 1.25em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            border: 2px solid ${props => 
                props.borderColor || 'gray'
            };
    
            &:hover {
                color: rgba(50, 50, 50); 
                background: linear-gradient(to bottom right, #797979, #0CB0D1); 
                border: 2px solid ${props => 
                    props.borderColor || 'rgb(0, 0, 0)'
                };
            }
        }
    
    }
`;
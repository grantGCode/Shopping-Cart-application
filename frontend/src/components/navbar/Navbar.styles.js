import styled from 'styled-components'

const size = {
    desktop: '1024px',
    desktop_xl: '1285px',

};

export const device = {
    desktop: `(min-width: ${size.desktop})`,
    desktop_xl: `(min-width: ${size.desktop_xl})`,    
};

export const NavbarContainer = styled.nav`
    position: fixed;
    align-items: end;
    font-family: "Poppins", sans-serif;
    bottom: 10%;
    left: 35%;
    
    .cart-icon{ 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }

    
    .title-Container{
        display: none;
    }

    .open-cart-button{        
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;       
        margin: 10px 10px 10px 10px;
        padding: 15px 35px 15px 35px ;
        height: 10%;
        color: white;
        background: linear-gradient(to bottom right,  #00BFFF, #00E0FF, #fdca55, #fe810b);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border: 2px solid ${props => 
            props.borderColor || '#3498db'
        };
            
        &:hover {
            padding: 0px 39px 0px 39px;
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right,  #fe810b, #fdca55, #00E0FF, #00BFFF); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(128, 128, 128)'
            };
        }
    }
        
    .your-cart{ 
        display: none;
    }
        
        
    .item-count {
        height: 7px;
        /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25); */
    }
        
    @media ${device.desktop} { 
        display: flex;
        align-items: start;
        justify-content: end;
        top: 0;
        left: 0;
        position: fixed;
        color: black;
        background: white;
        height: 85px;
        width: 100%;        
            
        .summer {
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            font-size: 30px;
        }

        .title-Container {
            display: block;
            position: fixed;
            left: 0;
            justify-content: start;
            height: 10px;   
        }
        
        .acronym {
            margin-bottom: 0px;
            padding-left: 35px;
            font-size: 40px;
        }
        
        .full-name {
            display: flex;
            margin-bottom: 0px;
            padding-left: 35px;
            color: black;
            font-size: 20px;
            font-style: italic;
        }

        .open-cart-button {
            display: flex;
            justify-content: end;
            margin: 20px 10px 10px 10px;
            padding: 15px 30px 15px 30px ;
            height: 40px;
            background: rgba(255, 255, 255, .975);
            bottom: 0;
            border: none;
            color: black;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
                
            &:hover {
                color: white; 
                background: rgba(83, 83, 83, .5);
                border: none;                
            }    
        }
        
        .your-cart{
            display: block;
            align-items: center;
            margin-bottom: 0;
            padding: 0px 5px 0px 0px;
            font-size: 20px;
            color: black;        
        }

        .cart-icon {
            align-items: center;
            height: 20px;
        }
  
        .item-count {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 8px;
            color: black;
            height: 37px;
            font-size: 23px;
        }

    }

    @media ${device.desktop_xl} {
        display: flex;
        align-items: start;
        justify-content: end;
        top: 0;
        left: 0;
        position: fixed;
        color: black;
        background: rgba(255, 255, 255, .975);
        height: 85px;
        width: 100%;
    }
`;
import React from 'react';
import PText from './PText';
import styled from 'styled-components';


const ContactBannerStyles = styled.div`
    padding: 10 rem 0;
    .contactBanner__wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center; 
    }
    .contactBanner__heading{
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (min-width: 768px) {
        .contactBanner__heading{
            font-size: 2.8rem;
        }
    }
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
           <div className="container">
               <div className="contactBanner__wrapper">
                   <PText>Have a project in mind</PText>
                   <h3 className="contactBanner__heading">Let me help you</h3>
               </div>
           </div>
        </ContactBannerStyles>
    )
}

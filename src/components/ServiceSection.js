import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem'

const ServicesItemStyles = styled.div`
    padding: 10 rem 0;
    .service__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px){
        .service__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ServiceSection() {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle heading="Services" subheading="what i will do for you" />

                <div className="service__allItems">
                    <ServiceSectionItem 
                    icon={<MdDesktopMac/>}
                    title="Website Design"
                    desc="I do ui/ux design for the website that website to get a unique look."
                    />
                    <ServiceSectionItem 
                     icon={<MdCode/>}
                     title="Web Dev"
                     desc="I also develop the websites.I create high performance website with blazing fast speed."
                     />
                    <ServiceSectionItem
                     icon={<MdPhonelinkSetup/>}
                     title="App Dev"
                     desc="I develop mobile application.I create mobile app with eye catching ui."
                      />
                </div>
            </div>
        </ServicesItemStyles>


    )
}
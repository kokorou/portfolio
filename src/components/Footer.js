import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }
    .footer__col1{
        flex: 2;
    }
    .footer__col2, .footer__col3, .footer__col4{
        flex: 1;
    }
    .footer__col1_title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para{
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
        .copyright {
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Ayan Khan</h1>
                    <PText>
                        A freelance web designer and developer from Chittagong, Bangladesh.I always make websites that have unique designs and also has a good performance rate.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol heading="Important Links"
                    links={[
                        {
                            title:'Home',
                            path:'./',
                            type:'Link'
                        },
                        {
                            title:'About',
                            path:'./about',
                            type:'Link'
                        },
                        {
                            title:'Projects',
                            path:'./projects',
                            type:'Link'
                        },
                        {
                            title:'Contact',
                            path:'./contact',
                            type:'Link'
                        },
                    ]}/>
                </div>
                <div className="footer__col3">
                    <FooterCol 
                    heading = "Contact Info"
                    links = {[
                        {
                            title: '080-9871-9867',
                            path: 'tel:080-9871-9867',
                        },
                        {
                            title: 'liwo8owil@gmail.com',
                            path: 'email: liwo8owil@gmail.com',
                        },
                        {
                            title:'GEC Circle, Chittagong, Bangladesh',
                            path:'./http://google.com/map',
                        },
                    ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                    heading="Social Links"
                    links={[
                        {
                            title: 'Facebook',
                            path:'http://facebook.com',
                        },
                        {
                            title: 'Instagram',
                            path:'http://instagram.com',
                        },
                        {
                            title: 'Twitter',
                            path:'http://twitter.com',
                        },
                    ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>@2021 Weeelb | Design by Weeelb</PText>
                </div>
            </div>
        </FooterStyles>
    )
}

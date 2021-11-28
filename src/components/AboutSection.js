import React from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left, .aboutSection__right{
        flex: 1;
    }
    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        juastify-content:flex-start;
        gap:2rem;
        margin-top:2rem;
    }
    @media only screen and (max-width: 950px) {
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left, .aboutSection__right{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0;
            .button-wrapper{
                a{
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }

`;

export default function AboutSection() {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle 
                        subheading="Let me introduce myself"
                        heading="About me"
                    />
                    <PText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </PText>

                    <div className="AboutSection__buttons">
                        <Button btnLinks="/projects" btnText="Works" />
                        <Button btnLinks="/about" btnText="Read More" />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    );
}

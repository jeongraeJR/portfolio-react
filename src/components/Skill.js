import React from 'react';
import { Container } from 'reactstrap';
import { TitleContainer, SubTitleContainer, ContentContainer, IconContainer } from './customStyle';
import { Element } from 'react-scroll';

export default function Skill() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <Element name="Skills" className="element">
                        <h3>SKILL</h3>
                        <hr></hr>
                    </Element>
                </TitleContainer>

                <SubTitleContainer>
                    <h4>Language</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <ul>
                        <li>
                            NodeJS + JavaScript
                            <ul>
                                <li>선호 언어</li>
                                <li>CRUD</li>
                                <li>Error Handling</li>
                                <li>Logging</li>
                            </ul>
                        </li>
                        <li>
                            JAVA
                            <ul>
                                <li>CRUD</li>
                            </ul>
                        </li>
                        <li>
                            MySQL
                            <ul>
                                <li>CRUD</li>
                                <li>Transaction, Trigger, Stored Function 작성 경험</li>
                            </ul>
                        </li>
                        <li>
                            CSS + HTML
                            <ul>
                                <li>기본 문법 숙지</li>
                                <li>Single Page 작성 수준</li>
                            </ul>
                        </li>
                    </ul>
                </ContentContainer>


                <SubTitleContainer>
                    <h4>Etc</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <ul>
                        <li>
                            Jenkins
                            <ul>
                                <li>기본 환경설정</li>
                                <li>기본적인 파이프라인문법 작성</li>
                                <li>Github Hooking</li>
                            </ul>
                        </li>
                        <li>
                            AWS
                            <ul>
                                <li>기본환경 구성 및 설정 수준</li>
                                <li>EC2 + Elastic Beanstalk</li>
                                <li>S3</li>
                                <li>RDS</li>
                                <li>Route53</li>
                                <li>CloudFront</li>
                                <li>AWS CLI</li>
                            </ul>
                        </li>
                        <li>
                            Firebase
                            <ul>
                                <li>인증 API 연동</li>
                            </ul>
                        </li>
                        <li>
                            Github
                        </li>
                        <li>
                            Ubuntu
                        </li>

                        <li>
                            Bootstrap
                            <ul>
                                <li>Single page 작성수준</li>
                            </ul>
                        </li>
                    </ul>
                </ContentContainer>
            </Container>
        </div>
    );
}

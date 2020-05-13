import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TitleContainer, SubTitleContainer, ContentContainer,SkillContainer } from './customStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faJava, faHtml5, faJenkins, faAws, faGithub, faUbuntu, faBootstrap, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
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

                <Row>
                    <Col sm="6">
                        <SubTitleContainer>
                            <h4>Language</h4>
                        </SubTitleContainer>

                        <SkillContainer>
                            <ul>
                                <li>
                                    {/* NodeJS + JavaScript */}
                                    <FontAwesomeIcon icon={faNodeJs} color="#10c24b" size="1x"></FontAwesomeIcon> NodeJS + JavaScript
                                    <ul>
                                        <li>선호 언어</li>
                                        <li>CRUD</li>
                                        <li>Error Handling</li>
                                        <li>Logging</li>
                                    </ul>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faJava} color="#10c24b" size="1x"></FontAwesomeIcon> JAVA
                                    <ul>
                                        <li>CRUD</li>
                                    </ul>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faDatabase} color="#10c24b" size="1x"></FontAwesomeIcon> MySQL
                                    <ul>
                                        <li>CRUD</li>
                                        <li>Transaction, Trigger, Stored Function 작성 경험</li>
                                    </ul>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHtml5} color="#10c24b" size="1x"></FontAwesomeIcon> HTML5 + CSS
                                    <ul>
                                        <li>기본 문법 숙지</li>
                                        <li>Single Page 작성 수준</li>
                                    </ul>
                                </li>
                            </ul>
                        </SkillContainer>
                    </Col>
                    <Col sm="6">
                        <SubTitleContainer>
                            <h4>Etc</h4>
                        </SubTitleContainer>
                        <SkillContainer>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faJenkins} color="#10c24b" size="1x"></FontAwesomeIcon> Jenkins
                                    <ul>
                                        <li>기본 환경설정</li>
                                        <li>기본적인 파이프라인문법 작성</li>
                                        <li>Github Hooking</li>
                                    </ul>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faAws} color="#10c24b" size="1x"></FontAwesomeIcon> AWS
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
                                    <FontAwesomeIcon icon={faGoogle} color="#10c24b" size="1x"></FontAwesomeIcon> Firebase
                                    <ul>
                                        <li>인증 API 연동</li>
                                    </ul>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faGithub} color="#10c24b" size="1x"></FontAwesomeIcon> Github
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faUbuntu} color="#10c24b" size="1x"></FontAwesomeIcon> Ubuntu
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faBootstrap} color="#10c24b" size="1x"></FontAwesomeIcon> Bootstrap
                                    <ul>
                                        <li>Single page 작성수준</li>
                                    </ul>
                                </li>
                            </ul>
                        </SkillContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

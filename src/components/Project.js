import React from 'react';
import { Container, Progress, Row, Col } from 'reactstrap';
import { Element } from 'react-scroll';
import { TitleContainer, ContentContainer, SubTitleContainer, IconContainer, TableContentContainer } from './customStyle';
import { faKeyboard, faDatabase, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faJenkins, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                 <Element name="Projects" className="element">
                    <h3>Projects</h3>
                    <hr></hr>
                    </Element>
                </TitleContainer>
                <SubTitleContainer>
                    <h4>1. BUDY REST API (2019.12 ~ 2020.03)</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row>
                        <Col sm="2">설명</Col>
                        <Col sm="auto">
                            <TableContentContainer>해외 합법 대마초 사용자를 위한 커뮤니티 서비스</TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <TableContentContainer>
                                <span>
                                    <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> 
                                    &nbsp;게시글, 댓글, 인박스 API 구현
                                </span>
                                <br></br>
                                <span>
                                    <FontAwesomeIcon icon={faDatabase} color="#474747"></FontAwesomeIcon> 
                                    &nbsp;Workbench를 활용한 ERD 작성
                                </span>
                                <br></br>
                                <span>
                                    <FontAwesomeIcon icon={faJenkins} color="#474747"></FontAwesomeIcon> 
                                    &nbsp;Jenkins 파이프라인을 활용한 배포서버 구성
                                </span>
                                <br></br>
                                <span>
                                    <FontAwesomeIcon icon={faAws} color="#474747"></FontAwesomeIcon> 
                                    &nbsp;AWS활용한 서비스 환경구성 (Elastic Beanstalk + EC2 + CDN + Route53)
                                </span>
                            </TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여인원</Col>
                        <Col sm="10">
                            Backend : 2명 , Frontend : 2명
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여도</Col>
                        <Col sm="10">
                            <div className="text-center">50%</div>
                            <Progress value={50} />
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">개발 환경</Col>
                        <Col sm="auto">
                            <IconContainer>
                                <img src="images/nodejs.png" />
                                <img src="images/aws.png" />
                                <img src="images/mysql.png" />
                                <img src="images/jenkins.png" />
                                <img src="images/firebase.png" />
                                <img src="images/github.png" />
                                <img src="images/swagger.png" />
                            </IconContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">링크</Col>
                        <Col sm="auto">
                            <a href="https://api.gananetworks.com/docs" target="_blank">
                                BUDY REST API <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                            </a>
                            <br/>
                            <a href="https://thebudy.com" target="_blank">
                                BUDY <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                            </a>
                        </Col>
                    </Row>
                </ContentContainer>

                <SubTitleContainer>
                    <h4>2. WEB CMS (2018.04 ~ 2019.05)</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row className="mt-2">
                        <Col sm="2">설명</Col>
                        <Col sm="auto">
                            <TableContentContainer>고객 자동이체 기능이 있는 고객출금관리 서비스</TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <TableContentContainer>
                                <span>
                                    <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> 고객관리, 출금관리 및 출금내역 화면 개발
                                </span>
                                <br></br>
                                <span>
                                    <FontAwesomeIcon icon={faDatabase} color="#474747"></FontAwesomeIcon> DB 설계참여 및 문서작성
                                </span>
                            </TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여인원</Col>
                        <Col sm="10">
                            Server : 1명 , Web : 1명
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여도</Col>
                        <Col sm="10">
                            <div className="text-center">50%</div>
                            <Progress value={50} />
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">개발 환경</Col>
                        <Col sm="auto">
                            <IconContainer>
                                <img src="images/java.png" />
                                <img src="images/navercloud.png" />
                                <img src="images/mysql.png" />
                                <img src="images/jquery.png" />
                                <img src="images/css.png" />
                                <img src="images/html.png" />
                            </IconContainer>
                        </Col>
                    </Row>
                </ContentContainer>

                <SubTitleContainer>
                    <h4>3. 자사 고객관리 서비스 (2018.01 ~ 2018.04)</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row className="mt-2">
                        <Col sm="2">설명</Col>
                        <Col sm="auto">
                            <TableContentContainer>고객통화내역, 전화걸기등의 기능이 있는 자사 고객관리를 위한 CRM 프로그램</TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <TableContentContainer>
                                <span>
                                    <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> LG 유플러스 전화기 REST API 연동
                                </span>
                                <br></br>
                                <span>
                                    <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> JAVA Servlet을 활용한 화면 개발
                                </span>
                            </TableContentContainer>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여인원</Col>
                        <Col sm="10">
                            1명
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">참여도</Col>
                        <Col sm="10">
                            <div className="text-center">100%</div>
                            <Progress color="info" value={100} />
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">개발 환경</Col>
                        <Col sm="auto">
                            <IconContainer>
                                <img src="images/java.png" />
                                <img src="images/mysql.png" />
                                <img src="images/jquery.png" />
                                <img src="images/css.png" />
                                <img src="images/html.png" />
                            </IconContainer>
                        </Col>
                    </Row>
                </ContentContainer>
            </Container>
        </div>
    );
}

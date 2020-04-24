import React from 'react';
import { Container, Progress, Row, Col } from 'reactstrap';
import { TitleContainer, ContentContainer, SubTitleContainer } from './customStyle';
import { faKeyboard, faDatabase, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faJenkins, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h3>Projects</h3>
                    <hr></hr>
                </TitleContainer>
                <SubTitleContainer>
                    <h4>1. BUDY REST API (2019.12 ~ 2020.03)</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row>
                        <Col sm="2">설명</Col>
                        <Col sm="auto">해외 합법 대마초 사용자를 위한 커뮤니티 서비스</Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <span>
                                <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> 게시글, 댓글, 인박스 API 구현
                            </span>
                            <br></br>
                            <span>
                                <FontAwesomeIcon icon={faDatabase} color="#474747"></FontAwesomeIcon> DB 설계
                            </span>
                            <br></br>
                            <span>
                                <FontAwesomeIcon icon={faJenkins} color="#474747"></FontAwesomeIcon> Jenkins 파이프라인 배포자동화
                            </span>
                            <br></br>
                            <span>
                                <FontAwesomeIcon icon={faAws} color="#474747"></FontAwesomeIcon> AWS활용한 서비스 아키텍쳐 구성
                            </span>
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
                            <img src="images/budy-stack.png" />
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">링크</Col>
                        <Col sm="auto">
                            <a href="https://api.gananetworks.com/docs" target="_blank">
                                BUDY REST API <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
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
                        <Col sm="auto">고객 자동이체 기능이 있는 고객출금관리 서비스</Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <span>
                                <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> 고객관리, 출금관리 및 출금내역 화면 개발
                            </span>
                            <br></br>
                            <span>
                                <FontAwesomeIcon icon={faDatabase} color="#474747"></FontAwesomeIcon> DB 설계
                            </span>
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
                            <img src="images/cms-stack.png" />
                        </Col>
                    </Row>
                </ContentContainer>

                <SubTitleContainer>
                    <h4>3. 자사 고객관리 서비스 (2018.01 ~ 2018.04)</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row className="mt-2">
                        <Col sm="2">설명</Col>
                        <Col sm="auto">고객통화내역, 전화걸기등의 기능이 있는 자사 고객관리를 위한 CRM 프로그램</Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2">주요업무</Col>
                        <Col sm="auto">
                            <span>
                                <FontAwesomeIcon icon={faKeyboard} color="#474747"></FontAwesomeIcon> LG 유플러스 전화기 REST API 연동
                            </span>
                            <br></br>
                            <span>
                                <FontAwesomeIcon icon={faDatabase} color="#474747"></FontAwesomeIcon> JAVA를 활용한 화면 개발
                            </span>
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
                            <img src="images/crm-stack.png" />
                        </Col>
                    </Row>
                </ContentContainer>
            </Container>
        </div>
    );
}

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { faEnvelopeSquare, faUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bio = styled.div`
    font-size: 14pt;
    color: #474747;
`;

const ProfileContainer = styled.div`
    padding-top: 20px;
    div {
        display: inline;
    }
`;

const AboutContainer = styled.div`
    padding-top: 20px;
    div {
        display: inline;
    }
`;

const margin_top = {
    'margin-top': '80px',
};

export default function About() {
    return (
        <div>
            <Container className="themed-container" fluid="sm">
                <Element name="About" className="element">
                    <Row>
                        <Col sm="12" style={margin_top}>
                            <h2>자기소개</h2>

                            <Bio>
                                <p></p>
                                저는 남들이 같이 일하고싶어하는 개발자를 꿈꿉니다. 배려심이 깊다는 저의 강점을 살려서 팀과 조화를 이루는 실력있는 개발자가 되는 것이
                                목표입니다. <br /> 이러한 목표를 이루고자 꾸준히 자기계발을 하며 2년 반동안 개발 업무를 해왔습니다. 첫 직장에서는 신입
                                웹개발자로 입사하여 자동이체 프로그램을 개발하는 업무를 맡았습니다. 당시 웹개발자는 혼자였기에 늘 새로운 문제에
                                직면하였지만, 책이나 인터넷 자료를 찾아 능동적으로 일을 처리하려 노력하였습니다. 이렇게 1년 반 동안 첫 직장에서
                                일하면서 개발자로서 필요한 기초역량을 쌓았습니다.
                                <br />
                                <p></p>
                                개발자가 혼자인 점에서 한계점을 느꼈기에, 좀 더 개발자가 많은 환경으로 가고자 한 차례 이직을 하였습니다. 덕분에 두번째
                                직장에서 협업 능력과 다양한 개발 스택을 쌓을 수 있었습니다. 두번째 직장도 비교적 업무환경이 자유로웠기때문에 서비스에
                                필요한 환경설정과 서버 개발을 주도적으로 수행하였습니다. 처음에는 부족한 점이 많았지만, 코드를 여러번 고치며 품질을
                                향상시키려고 노력하였습니다. 이처럼 앞으로도 현실에 안주하지 않으며 꾸준히 발전하는 개발자가 되겠습니다.
                                <p></p>
                            </Bio>
                        </Col>
                    </Row>
                    <h3>ABOUT</h3>
                                <hr></hr>

                    <Row>
                        <Col sm="2">
                          <img src="images/profilepic.png"/>
                        </Col>

                        <Col sm="10">
                            <AboutContainer>
                                <h5>
                                    <FontAwesomeIcon icon={faUser} color="#474747"></FontAwesomeIcon> 김정래
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faUniversity} color="#474747"></FontAwesomeIcon> 인하대학교 컴퓨터공학부 졸업
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faEnvelopeSquare} color="#474747"></FontAwesomeIcon> jeongrae1192@naver.com
                                </h5>
                                <a href="https://github.com/jeongraeJR" target="_blank">
                                    <h5>
                                        <FontAwesomeIcon icon={faGithubSquare} color="#474747" /> https://github.com/jeongraeJR
                                    </h5>
                                </a>
                            </AboutContainer>
                        </Col>
                    </Row>
                </Element>
            </Container>
        </div>
    );
}

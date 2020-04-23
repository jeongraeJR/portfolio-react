import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const aboutRow = {
    'padding-top': '20px',
};

const Bio = styled.div`
    font-size: 14pt;
    color: #474747;
`;

const AboutContainer = styled.div`
    padding-top: 20px;
    div {
        display: inline;
    }
`;

export default function About() {
    return (
        <div>
            <Container className="themed-container" fluid="sm">
                <Row>
                    <Col sm="3" style={aboutRow}>
                        프로필 사진 영역
                    </Col>
                    <Col sm="9" style={aboutRow}>
                        <h3>팀과 조화를 이루는 개발자</h3>
                        <Bio>
                            <p></p>
                            저의 별명은 '평화의 비둘기' 입니다. 평소에도 배려심이 깊다는 평가를 많이 받습니다. <br></br>물론 개발을 잘 하는것도 중요하지만,
                            동료와의 관계도 그에 못지않게 중요하다고 생각합니다. <br></br>앞으로도 실력은 기본이고 남을 배려할줄 아는 개발자가 되는 것이 저의
                            목표입니다.
                            <p></p>
                        </Bio>

                        <AboutContainer>
                            <h3>CONTACT</h3>
                            <hr></hr>
                            <h5><FontAwesomeIcon icon={faEnvelopeSquare} color="#474747"></FontAwesomeIcon> jeongrae1192@naver.com</h5>
                            <a href="https://github.com/jeongraeJR" target="_blank">
                                <h5><FontAwesomeIcon icon={faGithubSquare} color="#474747" /> https://github.com/jeongraeJR</h5>
                            </a>
                        </AboutContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

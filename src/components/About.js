import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const aboutRow = {
    'padding-top': '20px'
};

const Bio = styled.div`
    font-size: 17pt;
    color: #474747;
`;

const AboutContainer = styled.div`
    margin-top:20px;
`


export default function About() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <Row>
                    <Col xs="3" style={aboutRow}>
                        프로필 사진 영역
                    </Col>
                    <Col xs="9" style={aboutRow}>
                        <Row>
                            <h2>팀과 조화를 이루는 개발자</h2>
                            <Bio>
                                <p></p>
                                저의 별명은 '평화의 비둘기' 입니다. 평소에도 배려심이 깊다는 평가를 많이 받습니다. 물론 개발을 잘 하는것도 중요하지만,
                                동료와의 관계도 그에 못지않게 중요하다고 생각합니다. 앞으로도 실력은 기본이고 남을 배려할줄 아는 개발자가 되는 것이 저의 목표입니다.
                                <p></p>
                            </Bio>
                        </Row>
                        <Row>
                            <AboutContainer>
                            <h3>CONTACT</h3>
                            email : <p></p>
                            github :
                            </AboutContainer>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const Colrow = {
    'padding-top': '20px',
    'height':'200px'
};

const Bio = styled.span`
    font-size:14pt;
    color:#474747;
`;

export default function About() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <Row>
                    <Col xs="3" style={Colrow}>프로필 사진 영역</Col>
                    <Col xs="9" style={Colrow}>
                        <h3>팀과 화합할 줄 아는 개발자</h3>
                        <Bio>
                            저의 별명은 '평화의 비둘기' 입니다. 평소에도 배려심이 깊다는 평가를
                            많이 받습니다. 물론 개발을 잘 하는것도 중요하지만, 팀의 화합도 그만큼
                            중요하다고 생각합니다. 앞으로의 목표도 겸손하고 남을 배려할줄 아는 
                            개발자가 되는 것입니다.
                        </Bio>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

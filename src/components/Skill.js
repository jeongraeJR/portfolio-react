import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const SkillsContainer = styled.div`
    padding-top: 30px;
`;

export default function Skill() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <h1>SKILL</h1>
                <hr></hr>
                <SkillsContainer>
                    <h2>주력 언어</h2>
                    <img src="/images/skill1.png" />
                </SkillsContainer>

                <SkillsContainer>
                    <h2>기타</h2>
                    <img src="/images/skill2.png" />
                </SkillsContainer>
            </Container>
        </div>
    );
}

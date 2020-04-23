import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {TitleContainer, ContentContainer} from './customStyle'


export default function Skill() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h1>SKILL</h1>
                    <hr></hr>
                </TitleContainer>
               
                <ContentContainer>
                    <h2>주력 언어</h2>
                    <img src="/images/skill1.png" />
                </ContentContainer>

                <ContentContainer>
                    <h2>기타</h2>
                    <img src="/images/skill2.png" />
                </ContentContainer>
            </Container>
        </div>
    );
}
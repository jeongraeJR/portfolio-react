import React from 'react';
import { Container} from 'reactstrap';
import {TitleContainer, ContentContainer} from './customStyle'


export default function Skill() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h3>SKILL</h3>
                    <hr></hr>
                </TitleContainer>
               
                <ContentContainer>
                    <h4>주력 언어</h4>
                    <img src="images/skill1.png" />
                </ContentContainer>

                <ContentContainer>
                    <h4>기타</h4>
                    <img src="images/skill2.png" />
                </ContentContainer>
            </Container>
        </div>
    );
}

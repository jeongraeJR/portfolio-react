import React from 'react';
import { Container} from 'reactstrap';
import {TitleContainer, ContentContainer, IconContainer} from './customStyle'


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
                    <IconContainer>
                        <img src="images/nodejs.png" />
                        <img src="images/javascript.png" />
                        <img src="images/mysql.png" />
                        <img src="images/css.png" />
                        <img src="images/html.png" />
                    </IconContainer>
                </ContentContainer>

                <ContentContainer>
                    <h4>기타</h4>
                    <IconContainer>
                        <img src="images/jenkins.png" />
                        <img src="images/aws.png" />
                        <img src="images/firebase.png" />
                        <img src="images/github.png" />
                        <img src="images/ubuntu.png" />
                        <img src="images/bootstrap.png" />
                    </IconContainer>
                </ContentContainer>
            </Container>
        </div>
    );
}

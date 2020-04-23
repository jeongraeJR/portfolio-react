import React from 'react';
import { Container} from 'reactstrap';
import {TitleContainer, ContentContainer} from './customStyle'


export default function Certification() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h1>Certification</h1>
                    <hr></hr>
                </TitleContainer>
               
                <ContentContainer>
                    <h3>정보처리기사</h3>
                    <h5>취득일 : 2018.08</h5>
                </ContentContainer>

                <ContentContainer>
                    <h3>국가공인 SQL개발자 (SQLD)</h3>
                    <h5>취득일 : 2019.12</h5>
                </ContentContainer>
            </Container>
        </div>
    );
}

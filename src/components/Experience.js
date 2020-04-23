import React from 'react';
import { Container, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import {TitleContainer, ContentContainer} from './customStyle'

const cardTab = {
    'margin-top':'30px'
}
export default function Experience() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h3>Experience</h3>
                    <hr></hr>
                </TitleContainer>

                <ContentContainer>
                    <Card>
                        <CardHeader tag="h5">가나네트웍스 (2019.06 ~ 2020.03) </CardHeader>
                        <CardBody>
                            <CardTitle>스타트업 백엔드 개발자로 입사</CardTitle>
                            <CardText> 주요 업무 : 자사 서비스 개발 </CardText>
                        </CardBody>
                    </Card>

                    <Card style={cardTab}>
                        <CardHeader tag="h5">지에스소프트 (2018.02 ~ 2019.05)</CardHeader>
                        <CardBody>
                            <CardTitle>신입 웹개발자로 입사</CardTitle>
                            <CardText> 주요 업무 : 자사 서비스 개발 및 고객 응대 </CardText>
                        </CardBody>
                    </Card>
                </ContentContainer>

            </Container>
        </div>
    );
}

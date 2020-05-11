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
                        <CardHeader tag="h4"> <b>가나네트웍스 (2019.06 ~ 2020.03)</b> - 10개월</CardHeader>
                        <CardBody>
                            <CardTitle>백엔드 개발자</CardTitle>
                            <CardText>
                                <ul>
                                    <li>자사 서비스 REST API 개발</li>
                                    <li>AWS인프라를 활용한 환경 구성</li>
                                    <li>DB설계 참여</li>
                                    <li>퇴사 사유 : 경영 악화</li>
                                </ul>
                            </CardText>

                        </CardBody>
                    </Card>

                    <Card style={cardTab}>
                        <CardHeader tag="h4">지에스소프트 (2018.01 ~ 2019.05) - 1년 4개월</CardHeader>
                        <CardBody>
                            <CardTitle>웹개발자</CardTitle>
                            <CardText> 
                                <ul>
                                    <li>자사 CRM및 자동이체관리 프로그램 개발</li>
                                    <li>프로그램 이용관련 고객응대</li>
                                    <li>DB설계 참여</li>
                                    <li>퇴사 사유 : 근무 조건</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </ContentContainer>

            </Container>
        </div>
    );
}

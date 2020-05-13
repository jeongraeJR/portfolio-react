import React from 'react';
import { Container } from 'reactstrap';
import { TitleContainer, ContentContainer, SubTitleContainer } from './customStyle';
import { Element } from 'react-scroll';

export default function Experience() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <Element name="Experience" className="element">
                        <h3>Experience</h3>
                        <hr></hr>
                    </Element>
                </TitleContainer>

                <SubTitleContainer>
                    <h4> 가나네트웍스 (2019.06 ~ 2020.03) - 10개월</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <ul>
                        <li>포지션 : 백엔드 개발자</li>
                        <li>자사 서비스 REST API 개발</li>
                        <li>AWS인프라를 활용한 서버 환경 구성</li>
                        <li>관계형 DB설계 참여</li>
                        <li>배포 자동화 설정</li>
                        <li>퇴사 사유 : 경영 악화</li>
                    </ul>
                </ContentContainer>

                <SubTitleContainer>
                    <h4> 지에스소프트 (2018.01 ~ 2019.05) - 1년 4개월</h4>
                </SubTitleContainer>
                <ContentContainer>
                    <ul>
                        <li>포지션 : 웹개발자</li>
                        <li>자사 CRM및 자동이체관리 프로그램 개발</li>
                        <li>프로그램 이용관련 고객응대</li>
                        <li>관계형 DB설계 참여</li>
                        <li>퇴사 사유 : 근무 조건</li>
                    </ul>
                </ContentContainer>
            </Container>
        </div>
    );
}

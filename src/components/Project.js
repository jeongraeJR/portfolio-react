import React from 'react';
import { Container, Table, Progress } from 'reactstrap';
import { TitleContainer, ContentContainer, SubTitleContainer } from './customStyle';
export default function Project() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                    <h1>프로젝트</h1>
                    <hr></hr>
                </TitleContainer>
                <SubTitleContainer>
                    <h3>1. BUDY REST API (2019.12 ~ 2020.03)</h3>
                </SubTitleContainer>
                <ContentContainer>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th scope="row">설명</th>
                                <td>해외 합법 대마초 사용자를 위한 커뮤니티 서비스</td>
                            </tr>
                            <tr>
                                <th scope="row">주요업무</th>
                                <td>Nodejs REST API 개발 (게시글, 댓글, 인박스), ERD설계, 배포자동화, AWS활용한 서비스 아키텍쳐 구성</td>
                            </tr>

                            <tr>
                                <th scope="row">참여도</th>
                                <td>
                                    <div className="text-center">50%</div>
                                    <Progress value={50} />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">개발 환경</th>
                                <td>NodeJS(Express), AWS, MySQL, Swagger, Jenkins, Github, Firebase</td>
                            </tr>
                            <tr>
                                <th scope="row">링크</th>
                                <td>
                                    <a href="https://api.gananetworks.com/docs" target="_blank">
                                        {' '}
                                        BUDY REST API{' '}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </ContentContainer>

                <hr/>
                
                <SubTitleContainer>
                    <h3>2. WEB CMS (2018.4 ~ 2020.05)</h3>
                </SubTitleContainer>
                <ContentContainer>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th scope="row">설명</th>
                                <td>고객 자동이체 기능이 있는 고객출금관리 서비스</td>
                            </tr>
                            <tr>
                                <th scope="row">주요업무</th>
                                <td>Spring framework를 활용한 화면 개발, ERD설계</td>
                            </tr>

                            <tr>
                                <th scope="row">참여도</th>
                                <td>
                                    <div className="text-center">50%</div>
                                    <Progress value={50} />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">개발 환경</th>
                                <td>JAVA(Spring), Naver Cloud Platform, MySQL, Bitbucket, HTML/CSS + JQuery</td>
                            </tr>
                            <tr>
                                <th scope="row">스크린샷</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </ContentContainer>

                <SubTitleContainer>
                    <h3>3. 자사 고객관리 서비스 (2018.1 ~ 2018.04)</h3>
                </SubTitleContainer>
                <ContentContainer>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th scope="row">설명</th>
                                <td>고객통화내역, 전화걸기등의 기능이 있는 자사 고객관리를 위한 CRM 프로그램</td>
                            </tr>
                            <tr>
                                <th scope="row">주요업무</th>
                                <td>LG 유플러스 전화기 REST API 연동, JAVA를 활용한 화면 개발</td>
                            </tr>

                            <tr>
                                <th scope="row">참여도</th>
                                <td>
                                    <div className="text-center">100%</div>
                                    <Progress color="info" value={100} />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">개발 환경</th>
                                <td>Java /Servlet, MySQL, Bootstrap / JQuery</td>
                            </tr>
                            <tr>
                                <th scope="row">스크린샷</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </ContentContainer>
            </Container>
        </div>
    );
}

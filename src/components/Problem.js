import React from 'react';
import { Container, Progress, Row, Col } from 'reactstrap';
import { Element } from 'react-scroll';
import { TitleContainer, ContentContainer, SubTitleContainer, IconContainer, TableContentContainer } from './customStyle';
import { faKeyboard, faDatabase, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faJenkins, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Problem() {
    return (
        <div>
            <Container className="themed-container" fluid="md">
                <TitleContainer>
                 <Element name="Problem" className="element">
                    <h3>문제해결 기술서</h3>
                    <hr></hr>
                    </Element>
                </TitleContainer>
                <SubTitleContainer>
                    <h4>1. BUDY REST API </h4>
                </SubTitleContainer>
                <ContentContainer>
                    <Row>
                        <Col sm="2"><b>어려웠던점</b></Col>
                        <Col sm="10">
                            클라이언트에서 어떤 예외적인 요청이 올 지 예측하기 어려웠다. 
                            일례로 Path Parameter가 undefined로 오는 바람에 Internal Server Error 가 발생한 적이 있었다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>해결방법</b></Col>
                        <Col sm="10">
                        예외처리가 잘 되지 않았음을 인지하고 잘 만들어진 validator 라이브러리를 사용하여 예외처리를 하였다. 후에 test case를 작성하여 여러번 테스트 작업을 하였다.
                        단순히 로직이 잘되는것 뿐만 아니라 예외처리가 중요하다는 깨달음을 얻었다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>개선점</b></Col>
                        <Col sm="10">
                           시간이 더 주어졌다면 TDD를 도입했을 것이다.
                           표준적인 REST API 설계를 따르지 않은 기능이 몇 개 있었는데, 차마 이를 바꾸지못해 아쉬웠다. 다음에도 REST API를 설계해야 한다면 표준 REST API 를 준수하도록 설계할것이며 
                           응답 형식은 Hateoas를 도입했을 것 같다.
                        </Col>
                    </Row>

                </ContentContainer>

                <SubTitleContainer>
                    <h4>2. WEB CMS</h4>
                </SubTitleContainer>
                <ContentContainer>
                <Row>
                        <Col sm="2"><b>어려웠던점</b></Col>
                        <Col sm="10">
                            사용자가 여러개의 그룹에 속해 있을때, 고객과 그룹을 모두 조회하는 연산시 중복이 발생하여 한 줄로 조회를 하는것이 어려워 며칠을 헤맸다.
                            사용자와그룹 관의 관계가 1:N 이었기때문에 이를 어떻게 표현해야할지 요령이 없었다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>해결방법</b></Col>
                        <Col sm="10">
                            Group By로 처리를 해야할 것 같아 Group by와 관련된 키워드를 검색하여 그룹에 관련된 함수를 찾아보았다. 
                            그러다가 GROUP_CONCAT이라는 함수를 발견하여 사용자별 그룹목록을 배열스트링 형식으로 표현하여 문제를 해결하였다.
                            검색시 키워드가 얼마나 중요한지에 대해서 깨달았다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>개선점</b></Col>
                        <Col sm="10">
                           처음부터 프로젝트 폴더구조를 잘못 설계하여 폴더 구조가 복잡하였다. 
                           그 당시 기능별로 폴더를 묶은것이 아니라 Controller는 Controller 끼리, Dao는 Dao 끼리 묵었는데 이것때문에 오히려 소스폴더를 찾기가 어려웠다.
                           이것을 바꾸지못해 많이 아쉬웠고, 다음 프로젝트에서는 폴더구조에 신경써야겠다고 느꼈다.
                        </Col>
                    </Row>
                </ContentContainer>

                <SubTitleContainer>
                    <h4>3. 자사 고객관리 서비스 (2018.01 ~ 2018.04)</h4>
                </SubTitleContainer>
                <ContentContainer>
                <Row>
                        <Col sm="2"><b>어려웠던점</b></Col>
                        <Col sm="10">
                            고객을 조회할때 Jqgrid라는 외부 라이브러리를 사용했는데 이를 자사서비스와 맞도록 커스터마이징하는것이 어려웠다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>해결방법</b></Col>
                        <Col sm="10">
                            검색을 하여 다른 사람의 튜토리얼을 따라하는 방법도 있지만, 기본적인 것들은 공식 Document를 숙지하는것이 훨씬 도움이 되었다.
                            공식 Document를 꼼꼼히 읽는 것이 얼마나 중요한지 깨닫게 되었다.
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col sm="2"><b>개선점</b></Col>
                        <Col sm="10">
                          비동기 프로그래밍의 개념을 모르고 시작하여 초창기 소스코드가 깔끔하지 못하였다. 소스를 리팩토링하지못해 아쉬웠다.
                        </Col>
                    </Row>
                </ContentContainer>
            </Container>
        </div>
    );
}

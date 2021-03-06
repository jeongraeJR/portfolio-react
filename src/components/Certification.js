import React from 'react';
import { Container} from 'reactstrap';
import {TitleContainer, ContentContainer} from './customStyle';
import { faDatabase, faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default function Certification() {
    return (
        <div>
            <Container className="themed-container" fluid="sm">
                <TitleContainer>
                    <h3>자격증</h3>
                    <hr></hr>
                </TitleContainer>
               
                <ContentContainer>
                    <h5><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>&nbsp;&nbsp;정보처리기사 - 2018.08</h5>
                    <ul>
                        <li>취득일 : 2018.08.17</li>
                        <li>저격번호 : 18202050850W</li>
                        <li>기관 : 한국산업인력공단</li>
                    </ul>
                </ContentContainer>

                <ContentContainer>
                    <h5><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>&nbsp;&nbsp;국가공인 SQL개발자 (SQLD) - 2019.12</h5>
                    <ul>
                        <li>취득일 : 2019.12.31</li>
                        <li>저격번호 : SQLD-0352180</li>
                        <li>기관 : 한국데이터산업진흥원</li>
                    </ul>
                </ContentContainer>
            </Container>
        </div>
    );
}

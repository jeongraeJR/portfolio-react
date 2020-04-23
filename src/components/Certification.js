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
                    <h3>Certification</h3>
                    <hr></hr>
                </TitleContainer>
               
                <ContentContainer>
                    <h5><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>&nbsp;&nbsp;정보처리기사 - 2018.08</h5>
                </ContentContainer>

                <ContentContainer>
                    <h5><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>&nbsp;&nbsp;국가공인 SQL개발자 (SQLD) - 2019.12</h5>
                </ContentContainer>
            </Container>
        </div>
    );
}

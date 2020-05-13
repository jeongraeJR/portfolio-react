import styled from 'styled-components';

const TitleContainer = styled.div`
    margin-top: 60px;
    h1 {
        color: #575757;
    }
`;

const SubTitleContainer = styled.div`
    margin-top: 30px;

    h4 {
        color : #666666;
    }
`;

const SkillContainer = styled.div`
    margin-top: 30px;
    font-size: 16pt;

    h3 {
        color: #575757;
    }

    ul{
        list-style-type: none;
        margin-left:-15px;
        padding-bottom: 20px;
    }

    ul li {
      
    }

    ul li ul{
        list-style-type: disc;
        margin-left:10px;
    }
`;

const ContentContainer = styled.div`
    margin-top: 30px;
    font-size: 16pt;

    h3 {
        color: #575757;
    }
`;

const LeftTitleOfTable = styled.th`
    width: 140px;
`;

const IconContainer = styled.div`
    img {
        padding-right: 10px;
    }
`;

const TableContentContainer = styled.div`
    color: #666666;
`;
export {
    TitleContainer,
    ContentContainer,
    SubTitleContainer,
    LeftTitleOfTable,
    IconContainer,
    TableContentContainer,
    SkillContainer
};

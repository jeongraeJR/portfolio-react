import styled from 'styled-components';

const TitleContainer = styled.div`
    margin-top: 60px;
    h1{
        color:#575757;
    }
`;

const SubTitleContainer = styled.div`
    margin-top: 30px;
`;

const ContentContainer = styled.div`
    margin-top: 30px;
    font-size: 16pt;
    
    h3 {
        color:#575757;
    }

    tbody > tr > td {
        color: #575757;
    }

    tbody > tr > th {
        color: #474747;
        vertical-align: middle;
    }
    
`;

const LeftTitleOfTable = styled.th`
    width:140px;
`

export { TitleContainer, ContentContainer, SubTitleContainer, LeftTitleOfTable };

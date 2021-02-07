import { Link } from 'react-router-dom';
import styled from 'styled-components';
import generalStyles from '../../shared/styles/general';

export const SetDescriptionElement = styled.span`
    color: ${generalStyles.grayPrimaryColor};
`;

export const SetsContainerElement = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SetCardContainerElement = styled.div`
    margin: 5px;
`

export const LinkElement = styled(Link)`
    text-decoration: none;
`


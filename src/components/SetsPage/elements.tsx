import { Link } from 'react-router-dom';
import styled from 'styled-components';
import generalStyles from '../../shared/styles/general';
import { ReactComponent as EditIcon } from '../../shared/assets/icons/edit.svg'
import { ReactComponent as TransferIcon } from '../../shared/assets/icons/transfer.svg'

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

export const EditIconElement = styled(EditIcon)`
  fill: ${generalStyles.primaryBlueColor};
`

export const TransferIconElement = styled(TransferIcon)`
  fill: ${generalStyles.primaryBlueColor};
`

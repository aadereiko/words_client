import styled from 'styled-components';
import generalStyles from '../../styles/general';
import { appearingKeyframe } from '../../styles/keyframes';

export const UnderMenuContainerElement = styled.div`
  position: absolute;
  width: 200px;
  min-height: 50px;
  background-color: white;
  border-radius: 10px;
  z-index: 30;
  /* top: 60px; */
  transform: translateY(5px);
  padding: 10px 0px;
  animation: ${appearingKeyframe()} 0.3s;
`;

export const UnderMenuItemTextElement = styled.span`
`;

export const UnderMenuItemElement = styled.div`
  cursor: pointer;
  padding: 7px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    ${UnderMenuItemTextElement}  {
      color: ${generalStyles.lighterPrimaryBlueColor};
    }

    svg {
      fill: ${generalStyles.lighterPrimaryBlueColor};
    }
  }
`;



export const FullUnderMenuContainerElement = styled.div`
  position: relative;
`;

export const MainContainerElement = styled.div`
  &.opened-menu {
    z-index: 30;
    position: relative;
  }
`;

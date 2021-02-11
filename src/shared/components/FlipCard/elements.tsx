import styled from 'styled-components';
import generalStyles from '../../styles/general';
import { ReactComponent as DotIcon } from '../../assets/icons/dots.svg';

export const SceneElement = styled.div`
  position: relative;
  width: 300px;
  height: 50px;

  &.opened-menu {
    z-index: 20;
  }
`;

interface ICardElementProps {
  isFlipped: boolean;
}

export const CardElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.75s ease;
  transform-style: preserve-3d;


  ${(props: ICardElementProps) => props.isFlipped ? 'transform: rotateX(180deg)' : ''};
`;

const CardFace = `
  backface-visibility: hidden;

  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${generalStyles.primaryBlueColor};
  cursor: pointer;
`;

export const CardFaceFrontElement = styled.div`
  background: ${generalStyles.lighterBlueBackgroundColor};
  ${CardFace}
`

export const CardFaceBackElement = styled.div`
  background: ${generalStyles.primaryBlueColor};
  color: ${generalStyles.lighterBlueBackgroundColor};
  transform: rotateX(180deg);
  ${CardFace}
`

export const IconContainerElement = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
`

export const DotIconElement = styled(DotIcon)`
  &.front {
    fill: ${generalStyles.primaryBlueColor};
  }

  &.back {
    fill: ${generalStyles.lighterBlueBackgroundColor};
  }

  &:hover {
    opacity: 0.7;
  }
`

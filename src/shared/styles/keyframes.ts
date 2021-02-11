import { keyframes } from 'styled-components';

export const appearingKeyframe = (finalOpacity: number = 1) => keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: ${finalOpacity};
    }
`;
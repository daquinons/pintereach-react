import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainerFlex = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledContainerFlex;
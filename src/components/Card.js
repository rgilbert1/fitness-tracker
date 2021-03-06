import styled from 'styled-components';

export const Card = styled.div`
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 1.25rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.darkerRobinhoodBlack};
  border: 2px solid ${props => props.theme.darkRobinhoodBorderBlack};
  color: white;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const CardTitle = styled.span`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`;

export const CardBody = styled.div`
  margin: 1.25rem 0;
  width: 75%;
`;

export const CardContent = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLabel = styled.label`
  margin-right: 0.5rem;
`;

export default Card;

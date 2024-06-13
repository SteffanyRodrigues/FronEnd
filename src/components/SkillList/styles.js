
import styled from 'styled-components';



export const SkillListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 80%;
`;

export const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const SkillDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SkillName = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

export const SkillLevel = styled.p`
  margin: 5px 0;
`;

export const SkillDescription = styled.p`
  margin: 0;
`;

export const SkillSelect = styled.select`
  margin-top: 5px;
`;


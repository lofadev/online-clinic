import styled from 'styled-components';

export const ChildrenStyle = styled.div`
  margin-top: 16px;
  border: 1px solid #e1e2eb;
  border-radius: 4px;
  width: 100%;
  height: 54px;

  & > div {
    padding: 10px;

    & > div {
      font-size: 12px;
      font-weight: 400;
      color: #686975;
    }
  }
`;

export const ChildrenAppointment = styled.div`
  margin-top: 16px;
`;

export const ContentChildren = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #3f4f5f;
  line-height: 24px;
`;

export const LinkStyle = styled.a`
  font-weight: 700;
  color: #03afb9;
  text-decoration: underline;
`;

export const LinkChildren = styled.div`
  margin-top: 24px;
`;

export const SubContent = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #3f4f5f;
  margin-top: 24px;
`;

export const FlowItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ecfaff;
  width: 50vw;
  margin-inline: auto;
  margin-bottom: 100px;
`;

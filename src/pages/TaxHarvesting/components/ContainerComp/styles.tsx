/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageShell = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.bgApp};
`;

export const TopBar = styled.header`
  height: 48px;
  background: ${(props) => props.theme.colors.bgContainer};
  display: flex;
  align-items: center;
  padding: 0 52px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Brand = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.2px;

  span:first-child {
    color: ${(props) => props.theme.colors.linkText};
  }

  span:last-child {
    color: ${(props) => props.theme.colors.iconColor};
  }
`;

export const Content = styled(Container)`
  padding: 20px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PageSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PageTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
`;

export const PageLink = styled.a`
  color: ${(props) => props.theme.colors.accentPrimary};
  font-size: 12px;
  text-decoration: underline;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StateContainer = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
`;

export const ErrorCard = styled.div`
  background: ${(props) => props.theme.colors.bgSection};
  border: 1px solid rgba(255, 106, 135, 0.45);
  border-radius: 12px;
  padding: 24px;
  max-width: 480px;
`;

export const RetryButton = styled.button`
  margin-top: 14px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.linkText};
  color: #ffffff;
  padding: 10px 16px;
  font-weight: 600;
`;

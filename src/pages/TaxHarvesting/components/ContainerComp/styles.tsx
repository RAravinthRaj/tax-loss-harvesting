import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageShell = styled.div`
  min-height: 100vh;
  background: #0b0d14;
`;

export const TopBar = styled.header`
  height: 48px;
  background: #181b27;
  display: flex;
  align-items: center;
  padding: 0 52px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Brand = styled.div`
  color: #ffffff;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.2px;

  span:first-child {
    color: #2878ff;
  }

  span:last-child {
    color: #f4a51c;
  }
`;

export const Content = styled(Container)`
  padding: 32px 40px 40px;

  @media (max-width: 768px) {
    padding: 24px 18px 28px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const PageLink = styled.a`
  color: #4f89ff;
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
  color: #ffffff;
  text-align: center;
`;

export const ErrorCard = styled.div`
  background: #1a1d2a;
  border: 1px solid rgba(255, 106, 135, 0.45);
  border-radius: 12px;
  padding: 24px;
  max-width: 480px;
`;

export const RetryButton = styled.button`
  margin-top: 14px;
  border: none;
  border-radius: 8px;
  background: #2878ff;
  color: #ffffff;
  padding: 10px 16px;
  font-weight: 600;
`;

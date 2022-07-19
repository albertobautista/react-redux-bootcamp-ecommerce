import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  background: #f7f7f7;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 3.8rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Text = styled.span`
  padding: 5px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  font-size: 25px;
  transition: all 0.3s ease-out;
`;

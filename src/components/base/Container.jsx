import styled from "styled-components";

const Container = ({ children, ...props }) => {
  return <ContentContainer {...props}>{children}</ContentContainer>;
};

export default Container;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 7rem;
  padding: ${(p) => (p.checkout ? "2.5rem 1.8rem" : "5rem 1rem")};
  @media (max-width: 770px) {
    margin: 2rem 1rem;
  }

  background-color: ${(p) => (p.product ? "#fff" : "")};
  box-shadow: ${(p) =>
    p.product ? "rgba(99, 99, 99, 0.2) 0px 1px 81px 0px;" : ""};
`;

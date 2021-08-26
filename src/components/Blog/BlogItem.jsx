import styled from "styled-components";

const BlogItem = ({ image, title, text, ...props }) => {
  const handleWidgetClick = () => {
    alert("More Options Coming Soon :) ");
  };
  return (
    <Container>
      <img src={image} alt="" />
      <span>{title}</span>
      <p>{text}</p>
      <ReadMoreButton onClick={() => handleWidgetClick()}>
        Read more
      </ReadMoreButton>
    </Container>
  );
};

export default BlogItem;

const Container = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    margin: 20px 0;
  }
  span,
  p {
    padding: 0 1rem;
  }

  span {
    font-size: 2rem;
  }
  p {
    font-size: 1.7rem;
    font-family: ${(p) => p.theme.tertiaryfontFamily};
  }
`;

const ReadMoreButton = styled.p`
  margin-top: auto;
  cursor: pointer;
  border-bottom: 2px solid ${(p) => p.theme.secondaryBackgroundColor};
  &:hover {
    background-color: ${(p) => p.theme.secondaryBackgroundColor};
  }
`;

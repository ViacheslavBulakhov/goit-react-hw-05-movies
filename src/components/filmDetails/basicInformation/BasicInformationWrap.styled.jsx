import styled from 'styled-components';

export const BasicInforamtionWrap = styled.div`
  display: flex;
  max-height: 400px;
  padding: 30px;
  gap: 20px;

  & > img {
    max-width: 350px;
    max-height: 400px;
  }

  & > ul {
    overflow: auto;
    max-width: 500px;
  }

  & > a {
    width: 70px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    border-radius: 26px;
    color: black;
    box-shadow: inset 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
  }
  & > a:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.43);
  }
`;

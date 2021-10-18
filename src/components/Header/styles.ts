import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 0px 0px 1px 0px solid rgba(0, 0, 0, 0.4);
  padding: 10px;
  box-shadow: -1px 10px 5px -6px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  background-color: var(--color-base-default);
  z-index: 1;

  img {
    width: 61px;
    height: 61px;
    color: var(--color-primary);
  }

  .imgContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      padding: 10px;
      font-weight: bolder;
      font-size: 16px;
    }
  }

  .menu {
    margin-left: auto;
  }
`;

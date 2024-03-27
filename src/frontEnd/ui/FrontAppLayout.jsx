import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

import Footer from './Footer';

const StyleAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main``;

function FrontAppLayout() {
  return (
    <StyleAppLayout>
      <HeaderMenu />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyleAppLayout>
  );
}

export default FrontAppLayout;

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

import Footer from './Footer';

const StyleAppLayout = styled.div`
  /* display: grid; */
  /* grid-template-columns: 26rem 1fr; */
  /* grid-template-rows: auto 1fr; */
  height: 100vh;
`;

const Main = styled.main`
  /* background-color: var(--color-grey-100); */
  /* padding: 4rem 4.8rem 6.4rem; */
  /* overflow-y: scroll; */
`;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

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

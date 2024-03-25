import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from 'react-hot-toast';
import GlobalStyles from './styles/GlobalStyles';

// import Dashboard from './admin/pages/Dashboard';
// import Bookings from './admin/pages/Bookings';
// import Cabins from './admin/pages/Cabins';
// import Account from './admin/pages/Account';
// import Login from './admin/pages/Login';
import PageNotFound from './admin/pages/PageNotFound';
// import Settings from './admin/pages/Settings';
// import Users from './admin/pages/Users';
import AppLayout from './admin/ui/AppLayout';
// import Booking from './admin/pages/Booking';
// import Checkin from './admin/pages/Checkin';
import ProtectedRoute from './admin/ui/ProtectedRoute';
import { DarkModeProvider } from './context/DarkModeContext';

import Home from './frontEnd/pages/Home';
import FrontAppLayout from './frontEnd/ui/FrontAppLayout';
// import About from './frontEnd/pages/About';

// import Explore from './frontEnd/pages/Explore';
// import Houses from './frontEnd/pages/Houses';
// import House from './frontEnd/pages/House';

import ScrollToTop from './frontEnd/ui/ScrollToTop';
// import Leadership from './frontEnd/pages/Leadership';
// import Privacy from './frontEnd/pages/Privacy';

import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('./frontEnd/pages/Home'));
const About = lazy(() => import('./frontEnd/pages/About'));
const Leadership = lazy(() => import('./frontEnd/pages/Leadership'));
const Privacy = lazy(() => import('./frontEnd/pages/Privacy'));
const Explore = lazy(() => import('./frontEnd/pages/Explore'));
const Houses = lazy(() => import('./frontEnd/pages/Houses'));
const House = lazy(() => import('./frontEnd/pages/House'));

const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const Bookings = lazy(() => import('./admin/pages/Bookings'));
const Cabins = lazy(() => import('./admin/pages/Cabins'));
const Settings = lazy(() => import('./admin/pages/Settings'));
const Users = lazy(() => import('./admin/pages/Users'));
const Account = lazy(() => import('./admin/pages/Account'));
const Booking = lazy(() => import('./admin/pages/Booking'));
const Checkin = lazy(() => import('./admin/pages/Checkin'));
const Login = lazy(() => import('./admin/pages/Login'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />

        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />}></Route>
            <Route
              element={
                <Suspense>
                  <ProtectedRoute>
                    <FrontAppLayout />
                  </ProtectedRoute>
                </Suspense>
              }
            >
              <Route path='about' element={<About />}></Route>
              <Route path='leadership' element={<Leadership />}></Route>
              <Route path='/policies' element={<Privacy />}></Route>

              <Route path='explore/:id' element={<Explore />}></Route>
              <Route path='/:location' element={<Houses />}></Route>
              <Route
                path='/:location/:name/:arrival?/:departure?/:guests?/:pets?'
                element={<House />}
              ></Route>
            </Route>
            <Route
              element={
                <Suspense>
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                </Suspense>
              }
            >
              <Route path='dashboard' element={<Dashboard />} />

              <Route path='bookings' element={<Bookings />} />
              <Route path='bookings/:bookingId' element={<Booking />} />
              <Route path='checkin/:bookingId' element={<Checkin />} />

              <Route path='cabins' element={<Cabins />} />
              <Route path='account' element={<Account />} />
              <Route path='settings' element={<Settings />} />
              <Route path='users' element={<Users />} />
              <Route path='login' element={<Login />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position='top-right'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '14px',
              maxWidth: '500px',
              padding: '16px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

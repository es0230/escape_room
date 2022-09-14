import { ThemeProvider } from 'styled-components';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from '../../components/common/common';

import DetailedQuest from '../../components/detailed-quest/detailed-quest';

import Contacts from '../../components/contacts/contacts';

import Home from '../../components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import InWork from '../in-work/in-work';
import { AppRoute } from '../../const';

const App = (): JSX.Element => (

  <ThemeProvider theme={appTheme}>

    <S.GlobalStyle />

    <Router>

      <Routes>

        <Route path={`${AppRoute.DetailedQuest}/:id`} element={<DetailedQuest />} />

        <Route path={AppRoute.Contacts} element={<Contacts />} />

        <Route path={AppRoute.Home} element={<Home />} />

        <Route path={AppRoute.FirstTime} element={<InWork />} />

        <Route path={AppRoute.Reviews} element={<InWork />} />

        <Route path={AppRoute.Promos} element={<InWork />} />

        <Route path={AppRoute.Unknown} element={<NotFoundScreen />} />

      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;

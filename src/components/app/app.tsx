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

const App = (): JSX.Element => (

  <ThemeProvider theme={appTheme}>

    <S.GlobalStyle />

    <Router>

      <Routes>

        <Route path="/detailed-quest/:id" element={<DetailedQuest />} />

        <Route path="/contacts" element={<Contacts />} />

        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFoundScreen />} />

      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;

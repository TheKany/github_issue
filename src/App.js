// import styles from './styles/css/App.module.css';

import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Header from './Header';
import Issue from './pages/Issue';
import CreateIssue from './pages/CreateIssue';
import Projects from './pages/Projects';
import PullRequest from './pages/PullRequest';
import Code from './pages/Code';
import Security from './pages/Security';
import Actions from './pages/Actions';
import Wiki from './pages/Wiki';
import Insight from './pages/Insight';
import Setting from './pages/Setting';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/code" element={<Code />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/security" element={<Security />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;

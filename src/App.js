import HomePage from './Containers/HomePage/HomePage';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Containers/LandingPage/LandingPage';
import RegisterPage from './Containers/RegisterPage/RegisterPage';
import ResultsPage from './Containers/ResultsPage/ResultsPage';
import LoginPage from './Containers/LoginPage/LoginPage';
import UploadPage from './Containers/UploadPage/UploadPage';
import ViewPage from './Containers/ViewPage/ViewPage';
import VerifyPage from './Containers/VerifyPage/VerifyPage';



function App() {
  return (
    <Provider store={store}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/landing" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/view" component={ViewPage} />
          <Route path="/verify" component={VerifyPage} />
          <Route component={Error} />
        </Switch>
    </Provider>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { GlobalProvider } from './Components/GlobalContex';
import List from './Components/List';
import Create from './Components/Create';
import EditModal from './Components/EditModal';
import Auth from './Components/Auth';
import Nav from './Components/Nav';

function App() {
  return (
    <GlobalProvider>
      <Nav />
      <Auth>
        <>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <Create />
              </div>
              <div className="col-7">
                <List />
              </div>
            </div>
          </div>
          <EditModal />
        </>
      </Auth>
    </GlobalProvider>
  );
}

export default App;
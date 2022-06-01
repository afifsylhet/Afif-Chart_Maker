import './App.css';
import CreateVarticleLineChart from './components/CreateChart/CreateVarticleLineChart';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateDashedLineChart from './components/CreateChart/CreateDashedLineChart';
import CreateLineChart from './components/CreateChart/CreateLineChart';
import CreateMixBarChart from './components/CreateChart/CreateMixBarChart';
import CreateParcentAreaChart from './components/CreateChart/CreateParcentAreaChart';
import CreateSampleAreaChart from './components/CreateChart/CreateSampleAreaChart';
import CreateSimpleBarChart from './components/CreateChart/CreateSimpleBarChart';
import CreateStackBarChart from './components/CreateChart/CreateStackBarChart';
import CreateStackedAreaChart from './components/CreateChart/CreateStackedAreaChart';
import CreateTinyAreaChart from './components/CreateChart/CreateTinyAreaChart';
import CreateTinyBarChart from './components/CreateChart/CreateTinyBarChart';
import CreateTinyLineChart from './components/CreateChart/CreateTinyLineChart';
import AllAreaChart from './components/AllAreaChart/AllAreaChart';
import AllBarChart from './components/AllBarChart/AllBarChart';
import AllLineChart from './components/AllLineChart/AllLineChart';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="lineChart" element={<AllLineChart />} />
          <Route path="areaChart" element={<AllAreaChart />} />
          <Route path="barChart" element={<AllBarChart />} />
          <Route path="CreateSampleAreaChart" element={<CreateSampleAreaChart />} />
          <Route path="CreateDashedLineChart" element={<CreateDashedLineChart />} />
          <Route path="CreateSimpleLineChart" element={<CreateLineChart />} />
          <Route path="CreateMixBarChart" element={<CreateMixBarChart />} />
          <Route path="CreateParcentAreaChart" element={<CreateParcentAreaChart />} />
          <Route path="CreateSimpleBarChart" element={<CreateSimpleBarChart />} />
          <Route path="CreateStackBarChart" element={<CreateStackBarChart />} />
          <Route path="CreateStackedAreaChart" element={<CreateStackedAreaChart />} />
          <Route path="CreateTinyAreaChart" element={<CreateTinyAreaChart />} />
          <Route path="CreateTinyBarChart" element={<CreateTinyBarChart />} />
          <Route path="CreateTinyLineChart" element={<CreateTinyLineChart />} />
          <Route path="CreateVarticleLineChart" element={<CreateVarticleLineChart />} />
          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter >


  );
}

export default App;

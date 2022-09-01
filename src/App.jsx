import Asset_displayer from './components/Asset-displayer.jsx';
import Navigation from './components/nav.jsx';
import Content from './components/content.jsx';
import reset from './styles/reset.css';
import frame_setting from './styles/frame-setting.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Assets } from './hooks/asset-status';

export default function App() {

  const assets =
    Assets({ init_cash: 100, init_saving: 100, init_invest: 100, init_debt: 100 });
  const goals =
    Assets({ init_cash: '', init_saving: '', init_invest: '', init_debt: '' });

  const achieveRate =
    Assets({
      init_cash:
        (isNaN(goals.cash / assets.cash) ? '0' : (goals.cash / assets.cash) * 100),
      init_saving:
        (isNaN(goals.saving / assets.saving) ? '0' : (goals.saving / assets.saving) * 100),
      init_invest:
        (isNaN(goals.investment / assets.investment) ? '0' : (goals.investment / assets.investment) * 100),
      init_debt:
        (isNaN(goals.debt / assets.debt) ? '0' : (goals.debt / assets.debt) * 100)
    });


  return (
    <BrowserRouter>
      <div id="container">
        <Asset_displayer goals={goals} assets={assets} achieveRate={achieveRate} />
        <div id="sec_column">
          <Navigation />
          <Content goals={goals} />
        </div>
      </div>
    </BrowserRouter>
  )
}

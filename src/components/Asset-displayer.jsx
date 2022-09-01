import { Small_text, Small_icon, Medium_title, Small_input, Chart_bar } from './atoms';
import { Asset_status, Status_collection } from './molcules';
import styles from '../styles/aside.module.css';
import main_category from '../json/main-category.js';


const Asset_displayer = ({ assets, goals, achieveRate }) => {

  const setGoalCash = (evt) => {
    goals.handleCash(evt.target.value);
    achieveRate.handleCash(!isFinite(assets.cash / evt.target.value) ? 0 : Math.floor((assets.cash / evt.target.value) * 100));
  }
  const setGoalDebt = (evt) => {
    goals.handleDebt(evt.target.value);
    achieveRate.handleDebt(!isFinite(assets.debt / evt.target.value) ? 0 : Math.floor((assets.debt / evt.target.value) * 100));
  }
  const setGoalInvestment = (evt) => {
    goals.handleInvestment(evt.target.value);
    achieveRate.handleInvestment(!isFinite(assets.investment / evt.target.value) ? 0 : Math.floor((assets.investment / evt.target.value) * 100));
  }
  const setGoalSaving = (evt) => {
    goals.handleSaving(evt.target.value);
    achieveRate.handleSaving(!isFinite(assets.saving / evt.target.value) ? 0 : Math.floor((assets.saving / evt.target.value) * 100));
  }
  const setGoals = [setGoalCash, setGoalSaving, setGoalInvestment, setGoalDebt];

  const labels = ['현금', '저축', '투자', '부채'];
  const chartStyles = {
    position: "relative",
    height: '200px',
    flexShrink: 1,
    flexGrow: 1,
  }

  const data = {
    labels,
    datasets: [
      {
        label: '자산 현황',
        data: [assets.cash, assets.saving, assets.investment, assets.debt],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '목표 자산',
        data: [goals.cash, goals.saving, goals.investment, goals.debt],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return (
    <aside id="aside" className={styles.container}>
      <Medium_title content="현재 자산" />
      <Status_collection>
        {main_category.title.map((item, index) => {
          return (
            <Asset_status key={item}>
              <Small_icon color={main_category.color[index]} />
              <Small_text content={`${main_category.title[index]} : `} />
              <Small_text content={assets[Object.keys(assets)[index * 2]]} />
            </Asset_status>
          )
        })}
      </Status_collection>

      <hr style={{
        opacity: "0.2",
        width: "90%",
      }} />

      <Medium_title content="목표 자산" />
      <Status_collection>
        {main_category.title.map((item, index) => {
          return (
            <Asset_status key={item}>
              <label htmlFor={main_category.title[index]}>
                <Small_icon color={main_category.color[index]} />
                <Small_text content={`${main_category.title[index]} : `} />
              </label>
              <Small_input id={main_category.title[index]}
                type="number"
                content={goals[Object.keys(goals)[index * 2]]}
                onChange={setGoals[index]}
                placeholder={0} />
            </Asset_status>
          )
        })}
      </Status_collection>

      <hr style={{
        opacity: "0.2",
        width: "90%",
      }} />
      <Medium_title content="도달률" />
      <Status_collection>
        {main_category.title.map((item, index) => {
          return (
            <Asset_status key={item}>
              <Small_icon color={main_category.color[index]} />
              <Small_text content={`${main_category.title[index]} : `} />
              <Small_text
                content={`${achieveRate[Object.keys(achieveRate)[index * 2]]} %`} />
            </Asset_status>
          )
        })}
      </Status_collection>

      <hr style={{
        opacity: "0.2",
        width: "90%",
      }} />

      <Chart_bar
        data={data}
        chartStyles={chartStyles}
      />

    </aside>
  );
};


export default Asset_displayer;
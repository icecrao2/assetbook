import { Asset_category_card, Account_book, Status_collection, Asset_status } from '../molcules';
import {
  Medium_title,
  Small_icon,
  Small_text,
  Chart_doughnut
} from '../atoms';


import styles from '../../styles/view_account_book.module.css';
import main_category from '../../json/main-category.js';
import asset_category from '../../json/asset-category.js';
import colors from '../../json/colors.js';
import getDoughnutPlugin from '../../utils/doughnut-center-text.js';
import {getDoughnutChartData} from '../../utils/chart-data.js';

const View_AccountBook = ({ }) => {

  const labels = main_category.title;
  const centerText = asset_category.title;
  const chartStyles = {
    position: "relative",
    flexShrink: '1',
    marginRight: '100px',
    marginLeft: '100px',
    width: '500px',
  }
  const datas = [
    getDoughnutChartData(
        labels,
        [40, 100, 300, 400], 
        Object.keys(colors.cash.import).map((item) => {
          return colors[item];
        }), 
        '70%'
    ),
    getDoughnutChartData(
        labels,
        [100, 200, 80, 350], 
        Object.keys(colors.cash.import).map((item) => {
          return colors[item];
        }), 
        '70%'
    )
  ]
  const plugins =    [getDoughnutPlugin(centerText[0]),
    getDoughnutPlugin(centerText[1])];



  return (
    <main id="main" >
      <div className={styles.chartContainer}>
        <Chart_doughnut chartStyles={chartStyles} data={datas[0]} plugins={plugins[0]} />
        <Chart_doughnut chartStyles={chartStyles} data={datas[1]} plugins={plugins[1]} />
      </div>

      <div className={styles.cardContainer}>
        {
          main_category.title.map((item, index) => {
            return (
              <Asset_category_card key={item}>
                <Medium_title content={item} />
                <hr />
                <Status_collection>
                  <Asset_status>
                    <Small_icon color={main_category.color[index]} />
                    <Small_text content="내용 : " />
                    <Small_text content="금액" />
                  </Asset_status>
                </Status_collection>
              </Asset_category_card>
            )
          })
        }

      </div>

    </main >
  );
}

export { View_AccountBook };
import { Asset_category_card, Account_book, Status_collection, Asset_status } from '../molcules';
import {
  Medium_title,
  Small_icon,
  Small_text,
  Chart_doughnut
} from '../atoms';


import styles from '../../styles/view_account_book.module.css';
import main_category from '../../json/main-category.js';

const View_AccountBook = ({ }) => {

  const labels = ['현금', '저축', '투자', '부채'];
  const chartStyles = {
    position: "relative",
    flexShrink: '1',
    marginRight: '100px',
    marginLeft: '100px',
    width: '500px',
  }
  const data = {
    labels,
    datasets: [
      {
        label: '자산 현황',
        data: [40, 100, 300, 400],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(20, 66, 10, 1)',
          'rgba(20, 255, 10, 1)',
          'rgba(20, 66, 255, 1)'
        ],
        cutout: "70%",
      },
    ],
  }

  const centerText = ["자산", "목표"];
  const plugins = [[
    {
      beforeDraw: function(chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = centerText[0],
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ],
  [
    {
      beforeDraw: function(chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = centerText[1],
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ]
  ];


  return (
    <main id="main" >
      <div className={styles.chartContainer}>
        <Chart_doughnut chartStyles={chartStyles} data={data} plugins={plugins[0]} />
        <Chart_doughnut chartStyles={chartStyles} data={data} plugins={plugins[1]} />
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
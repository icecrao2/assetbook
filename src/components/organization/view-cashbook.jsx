import { Asset_category_card, Account_book, Status_collection, Asset_status } from '../molcules';
import {
  Medium_title,
  Small_icon,
  Small_text,
  Chart_doughnut,
  Small_input,
  Medium_input,
  Small_btn
} from '../atoms';

import styles from '../../styles/view_account_book.module.css';
import main_category from '../../json/main-category.js';

const View_Cashbook = ({ }) => {


  const labels = {
    import: ['월급', '배당', '블로그 수익', '적금 이자', '투자수익'],
    export: ['식비', '교통비', '교육비', '여가생활비용'],
  };
  const chartStyles = {
    position: "relative",
    flexShrink: '1',
    marginRight: '100px',
    marginLeft: '100px',
    width: '400px',
  }


  const data = [
    {
      labels: [...labels.import],
      datasets: [
        {
          label: '자산 현황',
          data: [40, 100, 300, 400, 500],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(20, 66, 10, 1)',
            'rgba(20, 255, 10, 1)',
            'rgba(255, 255, 10, 1)',
            'rgba(20, 66, 255, 1)'
          ],
          cutout: "70%",
        }
      ]
    },
    {
      labels: [...labels.export],
      datasets: [
        {
          label: '자산 현황',
          data: [40, 100, 300, 400],
          backgroundColor: [
            'black',
            'gray',
            'rgba(20, 255, 10, 1)',
            'rgba(255, 255, 10, 1)'
          ],
          cutout: "70%",
        }
      ]
    }
  ]

  const centerText = ["수입", "지출"];
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

  const onChange = (evt) => {

  }

  return (
    <main id="main" >
      <div className={styles.chartContainer}>
        <Chart_doughnut chartStyles={chartStyles} data={data[0]} plugins={plugins[0]} />
        <Chart_doughnut chartStyles={chartStyles} data={data[1]} plugins={plugins[1]} />
      </div>
      <div className={styles.cardContainer}>
        <Asset_category_card>
          <Medium_title content={`입금`} />
          <hr />
          <Status_collection>
            <Asset_status>
              <Small_icon color={main_category.color[0]} />
              { /*이 부분은 카테고리가 들어가야 한다.*/}
              <Medium_input type='text'
                content=''
                onChange={onChange}
                id={'text'}
                placeholder='내용' />
              <Small_input type='number'
                content={''}
                onChange={onChange}
                id={'amount'}
                placeholder='금액' />
              <Small_btn content={'작성'} />
            </Asset_status>
            <Asset_status>
              <Small_icon color={main_category.color[0]} />
              <Small_text content="내용 : " />
              <Small_text content="금액" />
            </Asset_status>
          </Status_collection>
        </Asset_category_card>

        <Asset_category_card>
          <Medium_title content={`출금`} />
          <hr />
          <Status_collection>
            <Asset_status>
              <Small_icon color={main_category.color[3]} />
              { /*이 부분은 카테고리가 들어가야 한다.*/}
              <Medium_input type='text'
                content=''
                onChange={onChange}
                id={'text'}
                placeholder='내용' />
              <Small_input type='number'
                content={''}
                onChange={onChange}
                id={'amount'}
                placeholder='금액' />
              <Small_btn content={'작성'} />
            </Asset_status>
            <Asset_status>
              <Small_icon color={main_category.color[3]} />
              <Small_text content="내용 : " />
              <Small_text content="금액" />
            </Asset_status>
          </Status_collection>
        </Asset_category_card>
      </div>

    </main>
  );
}

export { View_Cashbook };
import { Asset_category_card, Account_book, Status_collection, Asset_status } from '../molcules';
import {
  Medium_title,
  Small_icon,
  Small_text,
  Chart_doughnut,
  Small_input,
  Medium_input,
  Small_btn,
  Small_category,
} from '../atoms';

import styles from '../../styles/view_account_book.module.css';
import main_category from '../../json/main-category.js';
import { inputs } from '../../hooks';

const View_Cashbook = ({ }) => {

  const [importAmount, setImportAmount] = inputs();
  const [importText, setImportText] = inputs('');


  const [exportAmount, setexportAmount] = inputs();
  const [exportText, setexportText] = inputs('');

  const detailCategory = {
    import: ['월급', '배당', '블로그 수익', '적금 이자', '투자수익'],
    export: ['식비', '교통비', '교육비', '여가생활비용'],
  };

  const cashCategory = ["수입", "지출"];

  const chartStyles = {
    position: "relative",
    flexShrink: '1',
    marginRight: '100px',
    marginLeft: '100px',
    width: '400px',
  }


  const data = [
    {
      labels: [...detailCategory.import],
      datasets: [
        {
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
      labels: [...detailCategory.export],
      datasets: [
        {
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
        var text = cashCategory[0],
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
        var text = cashCategory[1],
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ]
  ];

  const onChange = [
    (evt) => setImportText(() => evt.target.value),
    (evt) => setImportAmount(() => evt.target.value),
    (evt) => setexportText(() => evt.target.value),
    (evt) => setexportAmount(() => evt.target.value),
  ];
  const onImportBtnClick = () => {
  }
  const onExportBtnClick = () => {

  }

  return (
    <main id="main" >
      <div className={styles.chartContainer}>
        <Chart_doughnut chartStyles={chartStyles} data={data[0]} plugins={plugins[0]} />
        <Chart_doughnut chartStyles={chartStyles} data={data[1]} plugins={plugins[1]} />
      </div>
      <div className={styles.cardContainer}>
        <Asset_category_card>
          <Medium_title content={cashCategory[0]} />
          <hr />
          <Status_collection>
            <Asset_status>
              <Small_icon color={main_category.color[0]} />

              <Small_category
                options={detailCategory.import}
                selectStyle={{
                  'backgroundColor': 'DarkTurquoise',
                  'color': 'black',
                }}
                optionStyle={{
                  'backgroundColor': 'DarkTurquoise',
                  'color': 'black',
                }}
              />

              <Medium_input type='text'
                content={importText}
                onChange={onChange[0]}
                id={'text'}
                placeholder='내용' />
              <Small_input type='number'
                content={importAmount}
                onChange={onChange[1]}
                id={'amount'}
                placeholder='금액' />
              <Small_btn content={'작성'} onClick={onImportBtnClick} />
            </Asset_status>
            <Asset_status>
              <Small_icon color={main_category.color[0]} />
              <Small_text content="내용 : " />
              <Small_text content="금액" />
            </Asset_status>
          </Status_collection>
        </Asset_category_card>

        <Asset_category_card>
          <Medium_title content={cashCategory[1]} />
          <hr />
          <Status_collection>
            <Asset_status>
              <Small_icon color={main_category.color[3]} />

              <Small_category
                options={detailCategory.export}
                selectStyle={{
                  'backgroundColor': 'IndianRed',
                  'color': 'black',
                }}
                optionStyle={{
                  'backgroundColor': 'IndianRed',
                  'color': 'black',
                }}
              />

              <Medium_input type='text'
                content={exportText}
                onChange={onChange[2]}
                id={'text'}
                placeholder='내용' />
              <Small_input type='number'
                content={exportAmount}
                onChange={onChange[3]}
                id={'amount'}
                placeholder='금액' />
              <Small_btn content={'작성'} onClick={onExportBtnClick} />
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
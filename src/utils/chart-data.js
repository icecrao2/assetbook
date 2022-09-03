

const getDoughnutChartData = (labels='', datas=[], colors=[], cutOut) => {
  
  return {
    labels,
    datasets: [
      {
        data: datas,
        backgroundColor: colors,
        cutout: cutOut,
      },
    ],
  };
  
};

export {getDoughnutChartData};
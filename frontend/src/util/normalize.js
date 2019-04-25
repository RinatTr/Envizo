export const normalizeData = (info) => {

  let slicedInfo = info.filter(el => {return el.month.includes("2018") || el.month.includes("2019")})
  //normalize
  let data = {
      bronx: [],
      queens: [],
      manhattan: [],
      brooklyn: [],
      staten_island: []
    };
    //divide objects per boroughs
    slicedInfo.forEach(entry => {
      switch (entry.borough) {
        case "Bronx":
          data.bronx.push(entry);
          break;
        case "Manhattan":
          data.manhattan.push(entry);
          break;
        case "Queens":
          data.queens.push(entry);
          break;
        case "Brooklyn":
          data.brooklyn.push(entry);
          break;
        case "Staten Island":
          data.staten_island.push(entry);
          break;
          default:
           return null
      }
    });
    console.log("data==>",data)
    //sum all districts and organize in obj
    let summaries = {
      bronx: {},
      queens: {},
      manhattan: {},
      brooklyn: {},
      staten_island: {}
    };

    for (let borough in data) {
      data[borough].forEach(el => {
        !summaries[borough][el.month]
          ? (summaries[borough][el.month] = [el])
          : summaries[borough][el.month].push(el);
      });

      for (let month in summaries[borough]) {
        summaries[borough][month] =
          summaries[borough][month].length > 1
            ? summaries[borough][month].reduce((acc, el) => {
                return acc + parseInt(el.refusetonscollected);
              }, 0)
            : parseInt(summaries[borough][month][0].refusetonscollected);
      }
    }
  return [summaries];
}

import d3 from "d3";
//3.5.17

var nodeDiv = document.createElement('div');

var tes2 = [{ bronx:
   { '2018 / 01': 33301.9,
     '2018 / 02': 29698.800000000007,
     '2018 / 03': 33086.7,
     '2018 / 04': 32646.299999999996,
     '2018 / 05': 36572.1,
     '2018 / 07': 35706.1,
     '2018 / 08': 36289.4,
     '2018 / 09': 33309.9,
     '2018 / 11': 34978.8,
     '2018 / 12': 33934.3,
     '2019 / 01': 33062.5,
     '2019 / 02': 29342.600000000002,
     '2019 / 03': 32757.199999999997,
     '2019 / 04': 7616,
     '2018 / 06': 35471.100000000006,
     '2018 / 10': 35325.1 },
  queens:
   { '2018 / 01': 121938.4,
     '2018 / 02': 108140.3,
     '2018 / 03': 120854.7,
     '2018 / 04': 120522.90000000002,
     '2018 / 05': 138987.2,
     '2018 / 06': 134389.59999999998,
     '2018 / 07': 132622.5,
     '2018 / 08': 135062.6,
     '2018 / 09': 126406.50000000001,
     '2018 / 10': 135201.40000000002,
     '2018 / 11': 131282.1,
     '2018 / 12': 125124.2,
     '2019 / 01': 122727.4,
     '2019 / 02': 107180.19999999998,
     '2019 / 03': 117589.20000000001,
     '2019 / 04': 29234.8 },
  manhattan:
   { '2018 / 01': 68719.20000000001,
     '2018 / 02': 60838.899999999994,
     '2018 / 03': 67865.5,
     '2018 / 04': 66009.8,
     '2018 / 05': 74561.2,
     '2018 / 07': 70206.50000000001,
     '2018 / 08': 71625.9,
     '2018 / 09': 68226.40000000001,
     '2018 / 11': 71203.90000000001,
     '2018 / 12': 68888.20000000001,
     '2019 / 01': 68275.1,
     '2019 / 02': 60367.19999999999,
     '2019 / 03': 65910.2,
     '2019 / 04': 15856.599999999999,
     '2018 / 06': 71807.3,
     '2018 / 10': 73111.40000000001 },
  brooklyn:
   { '2018 / 01': 187189.59999999995,
     '2018 / 02': 166565.4,
     '2018 / 03': 187417.4,
     '2018 / 04': 184820.2,
     '2018 / 05': 212646.10000000003,
     '2018 / 06': 205681.49999999997,
     '2018 / 07': 201031.59999999998,
     '2018 / 08': 205342.1,
     '2018 / 09': 194693.80000000002,
     '2018 / 10': 207528.6000000001,
     '2018 / 11': 200968.10000000003,
     '2018 / 12': 192290.40000000005,
     '2019 / 01': 188841.90000000002,
     '2019 / 02': 164667.19999999998,
     '2019 / 03': 181248.1,
     '2019 / 04': 46058.2 },
  staten_island:
   { '2018 / 01': 200804.3999999999,
     '2018 / 02': 178611.3,
     '2018 / 03': 201047.39999999997,
     '2018 / 04': 199614.69999999998,
     '2018 / 05': 230734.50000000006,
     '2018 / 06': 222602.4,
     '2018 / 07': 217256.89999999994,
     '2018 / 08': 221621.2,
     '2018 / 09': 209559.6,
     '2018 / 10': 223376.70000000007,
     '2018 / 11': 216037.80000000002,
     '2018 / 12': 206890.30000000008,
     '2019 / 01': 202523.00000000003,
     '2019 / 02': 176374.40000000002,
     '2019 / 03': 194404.90000000002,
     '2019 / 04': 49861.49999999999 } }
]

const magicfunction = (obj) => {
  let testNodes = []
  //gives boroughs
  let keys = Object.keys(obj[0])
    for(let i = 0; i< keys.length;i++){
      let objKeys = Object.values(obj[0][keys[i]])
      // console.log(objK)
      //find smarter way to make the bubbles show instead of just dividing it into 10k
      objKeys.forEach(el => {
        testNodes.push({radius:el/8000,
                        borough:keys[i]})
      })
    }
    //maybe return testNodes??
  return testNodes;
}


var width = 960,
    height = 500;

var nodes = magicfunction(tes2)

var root = nodes[0];

root.radius = 0;
root.fixed = true;

//in here the gravity on how close the mouse gets to the bubbles is created. Higher numbers the further away they are
var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d,i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

//here the svg tags attributes are added to the <body> tag
var svg = d3.select(nodeDiv).append("svg")
    //the width and height attributes are added
    .attr("width", width)
    .attr("height", height);

//here not quite sure, but i think the shape of a circle is selected to be added to all the svg tags that were created
//or it could be that the name of circle is added to the svg tag so then it can be selected and appended to...???
// #DE2F32 , bronx: #00ABD8, queens: #FDD54A, brooklyn: #008E7F, staten: #F15D8A

var color = ['#DE2F32','#00ABD8','#FDD54A','#008E7F','#F15D8A']
svg.selectAll("circle")
    .data(nodes.slice(1))
    .enter().append("circle")
    .attr("r", function(d) { return d.radius; })
    .style("fill", function(d) {
    switch(d.borough){
      case 'bronx':
        return color[1]
        break;
      case 'queens':
        return color[2]
        break;
      case 'brooklyn':
        return color[3]
        break;
      case 'manhattan':
        return color[0]
        break;
      default:
        return color[4]}} )
    .style({stroke:'#969b01'})
    .style("stroke-width", 3)

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

svg.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});


function collide(node) {
//something that keeps them apart from each other if the + and - are reversed
  var r = node.radius + 1,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
//if the - are reversed to + then all the bubbles stack together after load
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          //again if the sign is reversed then all bubbles stack together
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    //pretty sure this keeps all the bubbles apart, this might push them away enough to keep them apart
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
export default nodeDiv;

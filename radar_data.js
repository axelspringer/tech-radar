var h = 1000;
var w = 1450;

var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//

var radar_data = [
  {
    "quadrant": "Techniques",
    "left" : w-300+30,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Metriken mit klaren Aussagen",
    "pc": {
      "r": 69,
      "t": 70
    },
    "movement": "t"
  },
  {
    "name": "Continuous Deployment",
    "pc": {
      "r": 136,
      "t": 32
    },
    "movement": "t"
  },
  {
    "name": "You build it, You run it.",
    "pc": {
      "r": 142,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "Qualität ist Teamverantwortung",
    "pc": {
      "r": 163,
      "t": 80
    },
    "movement": "t"
  },
  {
    "name": "Documented API Arcitecture",
    "pc": {
      "r": 163,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Resilient Engineering",
    "pc": {
      "r": 174,
      "t": 44
    },
    "movement": "t"
  },
  {
    "name": "All API's can be published",
    "pc": {
      "r": 184,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "Stabilität ist Teamverantwortung",
    "pc": {
      "r": 184,
      "t": 20
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Languages",
    "left": 45,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "JAVA",
    "pc": {
      "r": 65,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "Objective-C",
    "pc": {
      "r": 79,
      "t": 130
    },
    "movement": "c"
  },
  {
    "name": "ActionScript",
    "pc": {
      "r": 86,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "JS",
    "pc": {
      "r": 89,
      "t": 145
    },
    "movement": "c"
  },
  {
    "name": "HTML 5 / CSS",
    "pc": {
      "r": 35,
      "t": 160
    },
    "movement": "c"
  },
  {
    "name": "Bash",
    "pc": {
      "r": 83,
      "t": 137
    },
    "movement": "t"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 72,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 64,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 69,
      "t": 107
    },
    "movement": "t"
  },
  {
    "name": "CoffeeScript",
    "pc": {
      "r": 68,
      "t": 167
    },
    "movement": "c"
  },
  {
    "name": "Closure",
    "pc": {
      "r": 51,
      "t": 90
    },
    "movement": "t"
  },
  {
    "name": "Groove",
    "pc": {
      "r": 73,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "GO",
    "pc": {
      "r": 42,
      "t": 90
    },
    "movement": "t"
  },
  {
    "name": "TypeScript",
    "pc": {
      "r": 136,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 163,
      "t": 98
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Frameworks & Tools",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Chef",
    "pc": {
      "r": 51,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 45,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "MAVEN",
    "pc": {
      "r": 77,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "JSP",
    "pc": {
      "r": 78,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "CKEditor",
    "pc": {
      "r": 32,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 73,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "SASS",
    "pc": {
      "r": 63,
      "t": 227
    },
    "movement": "c"
  },
  {
    "name": "Oracle",
    "pc": {
      "r": 30,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 49,
      "t": 257
    },
    "movement": "c"
  },
  {
    "name": "AWS - SNS",
    "pc": {
      "r": 40,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 72,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Splunk",
    "pc": {
      "r": 54,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "JIRA / Confluence",
    "pc": {
      "r": 34,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "CoreMedia",
    "pc": {
      "r": 39,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Charles",
    "pc": {
      "r": 47,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Selenium",
    "pc": {
      "r": 47,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Metrics",
    "pc": {
      "r": 73,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 65,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Handlebars",
    "pc": {
      "r": 55,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Grunt",
    "pc": {
      "r": 83,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 43,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 78,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Webdriver (Chrome FireFox)",
    "pc": {
      "r": 30,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Robolectric",
    "pc": {
      "r": 43,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Jangaroo",
    "pc": {
      "r": 58,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Gitflow",
    "pc": {
      "r": 53,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "NodeJS",
    "pc": {
      "r": 63,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Nexpose",
    "pc": {
      "r": 50,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Cucumber",
    "pc": {
      "r": 54,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "ImageMagick",
    "pc": {
      "r": 53,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 136,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Swagger",
    "pc": {
      "r": 142,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "WebComponents",
    "pc": {
      "r": 147,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 163,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Immutable.js",
    "pc": {
      "r": 174,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Ansible",
    "pc": {
      "r": 174,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 179,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "SysDig",
    "pc": {
      "r": 190,
      "t": 194
    },
    "movement": "c"
  },
  {
    "name": "HashiCorp Vault",
    "pc": {
      "r": 190,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "ES6",
    "pc": {
      "r": 226,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 234,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "GraphQL",
    "pc": {
      "r": 290,
      "t": 226
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 342,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 350,
      "t": 240
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 2",
    "pc": {
      "r": 350,
      "t": 216
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Platforms & Infrastructure",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 73,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "ServerSpec",
    "pc": {
      "r": 64,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "TomCat",
    "pc": {
      "r": 64,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 89,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "macOS Build Server",
    "pc": {
      "r": 63,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "AWS - Lambda",
    "pc": {
      "r": 70,
      "t": 317
    },
    "movement": "c"
  },
  {
    "name": "AWS - EC2",
    "pc": {
      "r": 58,
      "t": 347
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 136,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "HSTS",
    "pc": {
      "r": 190,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 190,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "HTTP2",
    "pc": {
      "r": 190,
      "t": 278
    },
    "movement": "c"
  },
  {
    "name": "QA in Production",
    "pc": {
      "r": 290,
      "t": 286
    },
    "movement": "c"
  },
  {
    "name": "Event Storing ???",
    "pc": {
      "r": 350,
      "t": 314
    },
    "movement": "c"
  }
]
  }
];

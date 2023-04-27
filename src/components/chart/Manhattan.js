import { ResponsiveChoropleth } from "@nivo/geo";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "AFG",
    value: 675025,
  },
  {
    id: "AGO",
    value: 793440,
  },
  {
    id: "ALB",
    value: 73490,
  },
  {
    id: "ARE",
    value: 313864,
  },
  {
    id: "ARG",
    value: 471485,
  },
  {
    id: "ARM",
    value: 540473,
  },
  {
    id: "ATA",
    value: 109594,
  },
  {
    id: "ATF",
    value: 108530,
  },
  {
    id: "AUT",
    value: 756527,
  },
  {
    id: "AZE",
    value: 668271,
  },
  {
    id: "BDI",
    value: 721286,
  },
  {
    id: "BEL",
    value: 80676,
  },
  {
    id: "BEN",
    value: 157785,
  },
  {
    id: "BFA",
    value: 321112,
  },
  {
    id: "BGD",
    value: 193995,
  },
  {
    id: "BGR",
    value: 470720,
  },
  {
    id: "BHS",
    value: 168815,
  },
  {
    id: "BIH",
    value: 358866,
  },
  {
    id: "BLR",
    value: 851553,
  },
  {
    id: "BLZ",
    value: 897847,
  },
  {
    id: "BOL",
    value: 721574,
  },
  {
    id: "BRN",
    value: 63083,
  },
  {
    id: "BTN",
    value: 321037,
  },
  {
    id: "BWA",
    value: 376535,
  },
  {
    id: "CAF",
    value: 121804,
  },
  {
    id: "CAN",
    value: 414579,
  },
  {
    id: "CHE",
    value: 893380,
  },
  {
    id: "CHL",
    value: 176785,
  },
  {
    id: "CHN",
    value: 552084,
  },
  {
    id: "CIV",
    value: 688651,
  },
  {
    id: "CMR",
    value: 660539,
  },
  {
    id: "COG",
    value: 769199,
  },
  {
    id: "COL",
    value: 420620,
  },
  {
    id: "CRI",
    value: 510633,
  },
  {
    id: "CUB",
    value: 372938,
  },
  {
    id: "-99",
    value: 62596,
  },
  {
    id: "CYP",
    value: 328164,
  },
  {
    id: "CZE",
    value: 166913,
  },
  {
    id: "DEU",
    value: 879087,
  },
  {
    id: "DJI",
    value: 91042,
  },
  {
    id: "DNK",
    value: 602452,
  },
  {
    id: "DOM",
    value: 148581,
  },
  {
    id: "DZA",
    value: 284591,
  },
  {
    id: "ECU",
    value: 484657,
  },
  {
    id: "EGY",
    value: 405393,
  },
  {
    id: "ERI",
    value: 169862,
  },
  {
    id: "ESP",
    value: 64515,
  },
  {
    id: "EST",
    value: 644387,
  },
  {
    id: "ETH",
    value: 353055,
  },
  {
    id: "FIN",
    value: 564852,
  },
  {
    id: "FJI",
    value: 17496,
  },
  {
    id: "FLK",
    value: 535495,
  },
  {
    id: "FRA",
    value: 669643,
  },
  {
    id: "GAB",
    value: 203124,
  },
  {
    id: "GBR",
    value: 181099,
  },
  {
    id: "GEO",
    value: 834708,
  },
  {
    id: "GHA",
    value: 992366,
  },
  {
    id: "GIN",
    value: 558408,
  },
  {
    id: "GMB",
    value: 187737,
  },
  {
    id: "GNB",
    value: 76768,
  },
  {
    id: "GNQ",
    value: 698669,
  },
  {
    id: "GRC",
    value: 958825,
  },
  {
    id: "GTM",
    value: 721805,
  },
  {
    id: "GUY",
    value: 545379,
  },
  {
    id: "HND",
    value: 359720,
  },
  {
    id: "HRV",
    value: 958074,
  },
  {
    id: "HTI",
    value: 729992,
  },
  {
    id: "HUN",
    value: 90294,
  },
  {
    id: "IDN",
    value: 846975,
  },
  {
    id: "IND",
    value: 718796,
  },
  {
    id: "IRL",
    value: 253847,
  },
  {
    id: "IRN",
    value: 145414,
  },
  {
    id: "IRQ",
    value: 270339,
  },
  {
    id: "ISL",
    value: 72560,
  },
  {
    id: "ISR",
    value: 602982,
  },
  {
    id: "ITA",
    value: 960882,
  },
  {
    id: "JAM",
    value: 97363,
  },
  {
    id: "JOR",
    value: 531961,
  },
  {
    id: "JPN",
    value: 916344,
  },
  {
    id: "KAZ",
    value: 987348,
  },
  {
    id: "KEN",
    value: 533521,
  },
  {
    id: "KGZ",
    value: 532121,
  },
  {
    id: "KHM",
    value: 351477,
  },
  {
    id: "OSA",
    value: 925895,
  },
  {
    id: "KWT",
    value: 935250,
  },
  {
    id: "LAO",
    value: 402236,
  },
  {
    id: "LBN",
    value: 873261,
  },
  {
    id: "LBR",
    value: 92901,
  },
  {
    id: "LBY",
    value: 232582,
  },
  {
    id: "LKA",
    value: 332883,
  },
  {
    id: "LSO",
    value: 83460,
  },
  {
    id: "LTU",
    value: 99237,
  },
  {
    id: "LUX",
    value: 925027,
  },
  {
    id: "LVA",
    value: 642612,
  },
  {
    id: "MAR",
    value: 123882,
  },
  {
    id: "MDA",
    value: 261865,
  },
  {
    id: "MDG",
    value: 138299,
  },
  {
    id: "MEX",
    value: 940359,
  },
  {
    id: "MKD",
    value: 334448,
  },
  {
    id: "MLI",
    value: 341803,
  },
  {
    id: "MMR",
    value: 656130,
  },
  {
    id: "MNE",
    value: 181107,
  },
  {
    id: "MNG",
    value: 442695,
  },
  {
    id: "MOZ",
    value: 573680,
  },
  {
    id: "MRT",
    value: 886217,
  },
  {
    id: "MWI",
    value: 311987,
  },
  {
    id: "MYS",
    value: 231173,
  },
  {
    id: "NAM",
    value: 268996,
  },
  {
    id: "NCL",
    value: 209239,
  },
  {
    id: "NER",
    value: 994071,
  },
  {
    id: "NGA",
    value: 36479,
  },
  {
    id: "NIC",
    value: 199687,
  },
  {
    id: "NLD",
    value: 571987,
  },
  {
    id: "NOR",
    value: 44088,
  },
  {
    id: "NPL",
    value: 17771,
  },
  {
    id: "NZL",
    value: 353279,
  },
  {
    id: "OMN",
    value: 345488,
  },
  {
    id: "PAK",
    value: 533606,
  },
  {
    id: "PAN",
    value: 943170,
  },
  {
    id: "PER",
    value: 819060,
  },
  {
    id: "PHL",
    value: 49627,
  },
  {
    id: "PNG",
    value: 404414,
  },
  {
    id: "POL",
    value: 775319,
  },
  {
    id: "PRI",
    value: 39159,
  },
  {
    id: "PRT",
    value: 543332,
  },
  {
    id: "PRY",
    value: 710639,
  },
  {
    id: "QAT",
    value: 3514,
  },
  {
    id: "ROU",
    value: 167493,
  },
  {
    id: "RUS",
    value: 424173,
  },
  {
    id: "RWA",
    value: 686343,
  },
  {
    id: "ESH",
    value: 543826,
  },
  {
    id: "SAU",
    value: 544734,
  },
  {
    id: "SDN",
    value: 423837,
  },
  {
    id: "SDS",
    value: 692148,
  },
  {
    id: "SEN",
    value: 207383,
  },
  {
    id: "SLB",
    value: 169028,
  },
  {
    id: "SLE",
    value: 276557,
  },
  {
    id: "SLV",
    value: 687831,
  },
  {
    id: "ABV",
    value: 114122,
  },
  {
    id: "SOM",
    value: 473608,
  },
  {
    id: "SRB",
    value: 36162,
  },
  {
    id: "SUR",
    value: 921057,
  },
  {
    id: "SVK",
    value: 401037,
  },
  {
    id: "SVN",
    value: 937544,
  },
  {
    id: "SWZ",
    value: 450890,
  },
  {
    id: "SYR",
    value: 299036,
  },
  {
    id: "TCD",
    value: 474936,
  },
  {
    id: "TGO",
    value: 274613,
  },
  {
    id: "THA",
    value: 913066,
  },
  {
    id: "TJK",
    value: 250676,
  },
  {
    id: "TKM",
    value: 947218,
  },
  {
    id: "TLS",
    value: 945497,
  },
  {
    id: "TTO",
    value: 697198,
  },
  {
    id: "TUN",
    value: 276846,
  },
  {
    id: "TUR",
    value: 263528,
  },
  {
    id: "TWN",
    value: 24221,
  },
  {
    id: "TZA",
    value: 681432,
  },
  {
    id: "UGA",
    value: 420066,
  },
  {
    id: "UKR",
    value: 319923,
  },
  {
    id: "URY",
    value: 546737,
  },
  {
    id: "USA",
    value: 856942,
  },
  {
    id: "UZB",
    value: 486707,
  },
  {
    id: "VEN",
    value: 716742,
  },
  {
    id: "VNM",
    value: 257126,
  },
  {
    id: "VUT",
    value: 472566,
  },
  {
    id: "PSE",
    value: 782958,
  },
  {
    id: "YEM",
    value: 715421,
  },
  {
    id: "ZAF",
    value: 866157,
  },
  {
    id: "ZMB",
    value: 966570,
  },
  {
    id: "ZWE",
    value: 832064,
  },
  {
    id: "KOR",
    value: 508824,
  },
];

const ManhattanMap = ({ data /* see data tab */ }) => (
  <ResponsiveChoropleth
    data={data}
    features="/* please have a look at the description for usage */"
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
      {
        id: "gradient",
        type: "linearGradient",
        colors: [
          {
            offset: 0,
            color: "#000",
          },
          {
            offset: 100,
            color: "inherit",
          },
        ],
      },
    ]}
    fill={[
      {
        match: {
          id: "CAN",
        },
        id: "dots",
      },
      {
        match: {
          id: "CHN",
        },
        id: "lines",
      },
      {
        match: {
          id: "ATA",
        },
        id: "gradient",
      },
    ]}
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default ManhattanMap;

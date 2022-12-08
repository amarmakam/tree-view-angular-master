import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  assetsData;

  assetsResponseData = [
    {
      name: "TENET HEALTHCARE CORPORATION",
      id: 1,
      status: "Client",
      taBusSoldID: {
        "21623": [
          {
            fundName: "BR STRAT GLB BD INST",
            fundCode: "UYCR",
            amount: 2156228.4,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIXED INCOME FUND",
            fundCode: "UGT4",
            amount: 9272562.57,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2050",
            fundCode: "UDR8",
            amount: 887881.52,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2035",
            fundCode: "UG72",
            amount: 2285374.54,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "STOCK UNITS",
            fundCode: "UWFJ",
            amount: 2445290.56,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "AM CENT SMCAP VAL R6",
            fundCode: "USX7",
            amount: 2456264.62,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "U2N2",
            amount: 1247458.45,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID GR CO POOL CL 3",
            fundCode: "U2V5",
            amount: 21249554.5,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2030",
            fundCode: "UDR6",
            amount: 5142068.43,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "U3Z1",
            amount: 18094387.57,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "METWEST TOT RET BOND",
            fundCode: "UDS1",
            amount: 2259766.64,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2055",
            fundCode: "UG74",
            amount: 67219.16,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID WORLDWIDE",
            fundCode: "U318",
            amount: 4299953.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "C&S US REALTY C",
            fundCode: "U62K",
            amount: 2941208.22,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "COL DIV INC INST MS",
            fundCode: "U32Z",
            amount: 4816986.8,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "120% OF LT AFR",
            fundCode: "UN2C",
            amount: 6059075,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "U2V8",
            amount: 4652688.53,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2025",
            fundCode: "UG71",
            amount: 3690942.74,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "U2W3",
            amount: 3423955.87,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "RDGWTH MID CAP VALUE",
            fundCode: "UD8N",
            amount: 2732734.29,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2020",
            fundCode: "UG70",
            amount: 702268.59,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET TODAY",
            fundCode: "UDR4",
            amount: 741869.09,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2040",
            fundCode: "UDR7",
            amount: 1232130.65,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SCHRODER INTL ALPHA",
            fundCode: "U9LO",
            amount: 1536906.39,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "BAIRD MID CAP",
            fundCode: "UD8O",
            amount: 5076630.31,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "UE26",
            amount: 4352381.53,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2060",
            fundCode: "UDR9",
            amount: 42250.83,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "MN CURRIE EMG MKT R3",
            fundCode: "U3AC",
            amount: 1854770.85,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2045",
            fundCode: "UG73",
            amount: 870102.85,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "CONESTOGA SM CAP GR",
            fundCode: "UF2G",
            amount: 2208513.86,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "21624": [
          {
            fundName: "AM CENT SMCAP VAL R6",
            fundCode: "USX7",
            amount: 5711.31,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "BAIRD MID CAP",
            fundCode: "UD8O",
            amount: 143981.38,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "STOCK UNITS",
            fundCode: "UWFJ",
            amount: 151003.09,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIXED INCOME FUND",
            fundCode: "UGT4",
            amount: 115875.72,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "COL DIV INC INST MS",
            fundCode: "U32Z",
            amount: 10694.8,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "U2W3",
            amount: 4540.68,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID WORLDWIDE",
            fundCode: "U318",
            amount: 14371.59,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "C&S US REALTY C",
            fundCode: "U62K",
            amount: 9381.7,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SCHRODER INTL ALPHA",
            fundCode: "U9LO",
            amount: 11376.7,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "RDGWTH MID CAP VALUE",
            fundCode: "UD8N",
            amount: 5057.36,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "CONESTOGA SM CAP GR",
            fundCode: "UF2G",
            amount: 14619.11,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "120% OF LT AFR",
            fundCode: "UN2C",
            amount: 546259.05,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID GR CO POOL CL 3",
            fundCode: "U2V5",
            amount: 1527129.53,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "BR STRAT GLB BD INST",
            fundCode: "UYCR",
            amount: 2232.4,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "METWEST TOT RET BOND",
            fundCode: "UDS1",
            amount: 222236.33,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "UE26",
            amount: 35495.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "U3Z1",
            amount: 504815.86,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "25100": [
          {
            fundName: "PFG AMERICAN FUNDS GROWTH STRATEGY FUND",
            fundCode: "FHDI",
            amount: 698839.46,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BAIRD MID CAP",
            fundCode: "TD8O",
            amount: 188383966.68,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "BLACKROCK MDCAP VAL OPP A",
            fundCode: "FCNW",
            amount: 5017.66,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MATTHEWS ASIAN      TECHNOLOGY",
            fundCode: "FBS6",
            amount: 2276.09,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "WASATCH INTERNATIONLOPPORTUNITIES FD",
            fundCode: "FAB3",
            amount: 1720.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN BALANCED   CLASS F",
            fundCode: "FCCC",
            amount: 112695.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "Federated MDT Small Cap Core Fund Cl A",
            fundCode: "FEF3",
            amount: 4528.39,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 58723.89,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL ENERGY",
            fundCode: "0060",
            amount: 508402.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RED OAK TECHNOLOGY  SELECT",
            fundCode: "FBG2",
            amount: 764.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG BR EQUITY ESG STRATEGY MUTUAL FUND C",
            fundCode: "FHDH",
            amount: 355581.58,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GLB COMDTY STK",
            fundCode: "2120",
            amount: 49663.24,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL INDUSTRIALS",
            fundCode: "0515",
            amount: 4677.34,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "SPROTT GOLD FUND    INVESTOR",
            fundCode: "FHAG",
            amount: 1427.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 27395355.83,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "PIM LOW DURATION A",
            fundCode: "OKAO",
            amount: 20966.31,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2030",
            fundCode: "0373",
            amount: 7855.22,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID DISCIPLND EQTY",
            fundCode: "0315",
            amount: 4768.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL CONSTR/HOUSE",
            fundCode: "0511",
            amount: 23438.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIM RAE US SM A",
            fundCode: "OIIJ",
            amount: 4592.89,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MSIF GL OPPORTUNITY PORTFOLIO CLASS A",
            fundCode: "FFAG",
            amount: 2037,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "WASATCH MIDCAP",
            fundCode: "FBHH",
            amount: 5451.68,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2040",
            fundCode: "0718",
            amount: 6787.05,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GROWTH & INC",
            fundCode: "0027",
            amount: 7360.12,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET TODAY",
            fundCode: "TDR4",
            amount: 168894525.66,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US LOW VOL EQ",
            fundCode: "5029",
            amount: 86961.26,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIM TOTAL RETURN A",
            fundCode: "OSWK",
            amount: 18508.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TCW GALILEO CORE    FIXED INCOME CLASS N",
            fundCode: "FDDQ",
            amount: 32647.74,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GLENMEDE TOTAL Mkt LONG/SHORT PORTFOLIO",
            fundCode: "FFAR",
            amount: 1826.32,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL FINANCIAL",
            fundCode: "0066",
            amount: 28900.58,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID EMERGING ASIA",
            fundCode: "0351",
            amount: 9723.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TOTAL EMERG MKTS",
            fundCode: "2369",
            amount: 44206.56,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP SPTM MOD INV",
            fundCode: "OSHF",
            amount: 60784.15,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BLACKROCK MULTI ASSET INCOME PORT CL A",
            fundCode: "FCM7",
            amount: 27794.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VICTORY MARKET      NEUTRAL INCOME FD I",
            fundCode: "FHAP",
            amount: 27922.83,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID NEW MILLEN",
            fundCode: "0300",
            amount: 115574.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HCM INCOME PLUS INVESTOR",
            fundCode: "FFZ8",
            amount: 179151.23,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VIRTUS SMALL CAP    SUSTAINABLE GROWTH A",
            fundCode: "FATH",
            amount: 1390.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RISKPRO DYNAMIC     20-30 FUND CL R",
            fundCode: "FGYT",
            amount: 280733.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2020",
            fundCode: "0372",
            amount: 399325.62,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ABSOLUTE CAP ASSET ALLOCATOR FUND CL INV",
            fundCode: "FFQJ",
            amount: 27262.45,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GRIFFIN INST ACCESS REAL EST FD CL A SHS",
            fundCode: "FFLO",
            amount: 2931.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LEUTHOLD CORE INV",
            fundCode: "OFW9",
            amount: 188.6,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED MANAGED INCOME INVESTOR",
            fundCode: "FHDY",
            amount: 844880.72,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN BEACON ARK TRANSFMT INNOV INV",
            fundCode: "FH49",
            amount: 279.67,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED MARKET LEADERS INVESTOR",
            fundCode: "FHDZ",
            amount: 120925.91,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ADVISORS CAPITAL SMALL/MID CAP",
            fundCode: "FHO6",
            amount: 91202.97,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID OTC PORTFOLIO",
            fundCode: "0093",
            amount: 246511.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PUTNAM GLOBAL       TECHNOLOGY FUND CL A",
            fundCode: "FCIQ",
            amount: 8337.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FUND*X UPGRADER     FUND",
            fundCode: "FEOR",
            amount: 1346.94,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TOTAL INTL IDX",
            fundCode: "2834",
            amount: 16641.73,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "THE PRIVATE SHARES  FUND CLASS A",
            fundCode: "FHOQ",
            amount: 4495.89,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN BOND FUND  OF AMERICA CLASS F",
            fundCode: "FDKU",
            amount: 80150.7,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID PURITAN",
            fundCode: "0004",
            amount: 2108740.29,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL IT SERVICES",
            fundCode: "0353",
            amount: 29868.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MONEY MARKET",
            fundCode: "0454",
            amount: 60146.9,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIM ALL ASSET A",
            fundCode: "OSRV",
            amount: 3977.23,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SM CAP IDX",
            fundCode: "2358",
            amount: 134441.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID OVERSEAS",
            fundCode: "0094",
            amount: 1032.62,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MID CAP VAL IDX",
            fundCode: "3404",
            amount: 1184.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "CAMBIAR OPPORTUNITY INSTL",
            fundCode: "FDCR",
            amount: 101069.69,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MATTHEWS DRAGON     CENTURY CHINA",
            fundCode: "FBJM",
            amount: 21806.6,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NEEDHAM SMALL CAP   GROWTH",
            fundCode: "FDKR",
            amount: 3008.97,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BARON REAL ESTATE FD RETAIL SHS",
            fundCode: "FC2V",
            amount: 11263.93,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID REAL ESTATE INVS",
            fundCode: "0303",
            amount: 9658.88,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTERMED BOND",
            fundCode: "0032",
            amount: 14582.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "WASATCH GROWTH",
            fundCode: "FBAK",
            amount: 52278.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID HIGH INCOME",
            fundCode: "0455",
            amount: 15307.74,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "J H OVERSEAS T",
            fundCode: "OF3F",
            amount: 3400.58,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COLUMBIA COLUMBIA THERMOSTAT FD CL A",
            fundCode: "FCGY",
            amount: 12873.05,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2030",
            fundCode: "TDR6",
            amount: 560886681.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TRP COMM & TECHN",
            fundCode: "OMCD",
            amount: 32128.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DESTINATIONS MULTI STRATEGY ALTS I",
            fundCode: "FHP9",
            amount: 2003.91,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG FIDELITY INST AMBOND ESG STRATEGY R",
            fundCode: "FHRX",
            amount: 19624.03,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BARON I OPPORTUNITY",
            fundCode: "FBQ1",
            amount: 5805.15,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "M&N OVERSEAS S",
            fundCode: "OE5H",
            amount: 11174.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP DIV GROWTH",
            fundCode: "OFMD",
            amount: 58477.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN FUNDS MULTI-SECTOR INCOME F-1",
            fundCode: "FHGF",
            amount: 82931.62,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "EVENTIDE MULTI-ASSET INCOME FUND CLASS N",
            fundCode: "FFO0",
            amount: 476.4,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2060",
            fundCode: "TDR9",
            amount: 66659057.32,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "DESTINATIONS LARGE  CAP EQUITY INSTL",
            fundCode: "FHSL",
            amount: 125079.8,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JENSEN PORTFOLIO,   INC.",
            fundCode: "FC71",
            amount: 313022.09,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID AGRICULTURAL",
            fundCode: "6041",
            amount: 2948.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "T ROWE PRICE GLOBAL TECHNOLOGY",
            fundCode: "FGMK",
            amount: 88089.2,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED ALTERNATIVE INVESTMENT INV",
            fundCode: "FHEC",
            amount: 398439.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID DIVIDEND GR",
            fundCode: "0330",
            amount: 4965.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JANUS HENDERSON STRATEGIC INCOME T",
            fundCode: "FGQG",
            amount: 15325.47,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "Western Asset Core Plus Bond Fund Cl A",
            fundCode: "FEKR",
            amount: 30166.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CANADA",
            fundCode: "0309",
            amount: 3721.28,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN WASHINGTON MUTUAL INVESTORS F",
            fundCode: "FDIO",
            amount: 49153.97,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID BLUE CHIP GR",
            fundCode: "0312",
            amount: 153680.24,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RYDEX VELOCITY 100",
            fundCode: "FBRZ",
            amount: 26380.47,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FKLN MTL GLB DISC A",
            fundCode: "OF04",
            amount: 104871.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COHEN AND STEERS    INTL REALTY INC CL I",
            fundCode: "FGDD",
            amount: 2707.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 24360.06,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PERMANENT PORTFOLIO FD INC",
            fundCode: "FD70",
            amount: 15639.7,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CENTURY MIDCAP VALUE INV SHS",
            fundCode: "FDOD",
            amount: 104772.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LC CORE ENH INDX",
            fundCode: "1827",
            amount: 22103.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "T ROWE PRICE REAL   ASSET FUND INVESTOR",
            fundCode: "FGN4",
            amount: 1364.34,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BROKERAGELINK",
            fundCode: "BLNC",
            amount: 170087407.67,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "MATTHEWS ASIAN      GROWTH & INCOME",
            fundCode: "FBEB",
            amount: 2920.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL PHARMACEUTCL",
            fundCode: "0580",
            amount: 23965.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID WORLDWIDE",
            fundCode: "0318",
            amount: 63007042.97,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "AKRE FOCUS FUND     RETAIL",
            fundCode: "FAHH",
            amount: 67374.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG INVESCO THEMATIC ESG STRATEGY CL R",
            fundCode: "FHRV",
            amount: 162362.42,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ALGER HEALTH SCIENCEFUND CLASS A",
            fundCode: "FDO2",
            amount: 3555.48,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GR CO POOL CL 3",
            fundCode: "4005",
            amount: 1014289243.32,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "OAKMARK INTL INV",
            fundCode: "OFOI",
            amount: 52432.2,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BLACKROCK MID CAP   GROWTH CLASS A",
            fundCode: "FDBO",
            amount: 18218.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FBSI NFMF FUND PLACEHOLDER",
            fundCode: "NFMF",
            amount: 3817694.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIDELITY ZERO       TOTAL MARKET INDEX",
            fundCode: "3227",
            amount: 513133.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INFL PR BD IDX",
            fundCode: "2418",
            amount: 22094.34,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "J H ENTERPRISE T",
            fundCode: "OFJ3",
            amount: 358.31,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BR STRAT GLB BD INST",
            fundCode: "OYCR",
            amount: 8329808.56,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "RISKPRO PFG 0-15 FD CLASS R",
            fundCode: "FGVF",
            amount: 377474,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL CHEMICALS",
            fundCode: "0069",
            amount: 1437.87,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID VALUE",
            fundCode: "0039",
            amount: 1459.61,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP MID CAP VALUE",
            fundCode: "OQLV",
            amount: 46903.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CORPORATE BOND",
            fundCode: "2208",
            amount: 29002.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN MUTUAL FUNDCLASS F",
            fundCode: "FDKC",
            amount: 48418.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL BROKERAGE",
            fundCode: "0068",
            amount: 46893.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ASSET MGR 40%",
            fundCode: "1958",
            amount: 23.54,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "CALMOS MKT NEU/INC I",
            fundCode: "FGHZ",
            amount: 64760.65,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "KENSINGTON MANAGED  INCOME CLASS I",
            fundCode: "FHVQ",
            amount: 69898.56,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "OAKMARK GLOBAL FUND I",
            fundCode: "FBKW",
            amount: 1254.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RISKPRO DYNAMIC 0-10FUND CL R",
            fundCode: "FGVG",
            amount: 189854.18,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PARNASSUS EQUITY    INCOME PORTFOLIO",
            fundCode: "FC11",
            amount: 221087.35,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MSIF INCEPTION A",
            fundCode: "OF63",
            amount: 6746.54,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HENNESSY FOCUS FUND INVESTOR CLASS",
            fundCode: "FCPU",
            amount: 25781.77,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL INSURANCE",
            fundCode: "0045",
            amount: 8270.56,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN AADVANTAGE LARGE CAP VALUE PLAN",
            fundCode: "FD7X",
            amount: 52283.74,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "Parametric Commodity Strategy Fd Inv Cl",
            fundCode: "FCYQ",
            amount: 42459.92,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LEUTHOLD GLOBAL FUNDRETAIL CLASS SHARES",
            fundCode: "FAG2",
            amount: 13.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LORD ABBETT BOND    DEBENTURE CLASS A",
            fundCode: "FB1G",
            amount: 7177.77,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CEN LEGACY FOCUSED LG CAP INVT",
            fundCode: "FA7E",
            amount: 42618.19,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRANSAMERICA MORGAN STANLEY CPTL GWTH A",
            fundCode: "FC4B",
            amount: 9344.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ABSOLUTE CAPITAL DEFENDER FUND - CL INV",
            fundCode: "FFQI",
            amount: 75952.39,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIDELITY GOVT INCOME",
            fundCode: "0054",
            amount: 166586.67,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MS INSIGHT A",
            fundCode: "OQBZ",
            amount: 4941.06,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TOUCHSTONE SANDS    CAP SEL GRWTH Z",
            fundCode: "FDZH",
            amount: 32266.97,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "YCG Enhanced Fund",
            fundCode: "FEDX",
            amount: 1226.33,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL MATERIALS",
            fundCode: "0509",
            amount: 50140.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AVE MARIA GROWTH",
            fundCode: "FD3H",
            amount: 64043.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP BLUE CHIP GRTH",
            fundCode: "OFMB",
            amount: 178287.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NEXPOINT MERGER ARBITRAGE Z",
            fundCode: "FHQK",
            amount: 45414.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "INVS GOLD SPL MIN A",
            fundCode: "OSUN",
            amount: 64538.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2040",
            fundCode: "TDR7",
            amount: 402838712.48,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "BERKSHIRE FOCUS FUND",
            fundCode: "FBMQ",
            amount: 31327.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CENTURY    SMALL CAP VALUE",
            fundCode: "FBUL",
            amount: 5287.74,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BOSTON PARTNERS ALL CAP VAL FD-INVEST SH",
            fundCode: "FB9Z",
            amount: 19376.16,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIMM MMKT INST",
            fundCode: "2013",
            amount: 6187.08,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MAGELLAN",
            fundCode: "0021",
            amount: 2686555.17,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JANUS ORION FUND",
            fundCode: "FBSE",
            amount: 41179.66,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID EXTD MKT IDX",
            fundCode: "2365",
            amount: 6796.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FIDELITY FUND",
            fundCode: "0003",
            amount: 521.51,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID DIVERSIFD INTL",
            fundCode: "0325",
            amount: 128215.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AZZAD ETHICHAL MID  CAP FUND CL A",
            fundCode: "FDVQ",
            amount: 353921.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL DEFENSE",
            fundCode: "0067",
            amount: 5998.05,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RYDEX TITAN 500",
            fundCode: "FBUG",
            amount: 13188.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MEGA CAP STOCK",
            fundCode: "0361",
            amount: 1363.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CENTURY SHORT DUR STRT INC INV",
            fundCode: "FFYH",
            amount: 30780.31,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID NORDIC",
            fundCode: "0342",
            amount: 4148.4,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NEEDHAM AGGRESSIVE  GROWTH CLASS A",
            fundCode: "FDAI",
            amount: 4606.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMANA PARTICIPATION FUND INVESTOR SHARES",
            fundCode: "FFOK",
            amount: 4971.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ASSET MGR 50%",
            fundCode: "0314",
            amount: 99829.54,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIM INTL BD US$H A",
            fundCode: "OYDY",
            amount: 9423.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED TACTICAL FIXED INC INVESTOR",
            fundCode: "FHEB",
            amount: 188214.47,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED EVOLUTION PLUS INVESTOR",
            fundCode: "FHEG",
            amount: 309565.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID EMERGING MKTS",
            fundCode: "0322",
            amount: 120766.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "SCHRODER INTL ALPHA",
            fundCode: "O9LO",
            amount: 101497926.93,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "ADVISORS CAPITAL TACTICAL FIXED INC",
            fundCode: "FHO5",
            amount: 42103.36,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID STRAT DIV & INC",
            fundCode: "1329",
            amount: 440475.09,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP GLOBAL STOCK",
            fundCode: "OMCE",
            amount: 54613.9,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LEUTHOLD GRIZZLY    SHORT FUND",
            fundCode: "FH12",
            amount: 4037.53,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SHORT TERM BOND",
            fundCode: "0450",
            amount: 768.51,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DOUBLELINE LOW      DURATION CL N",
            fundCode: "FCE0",
            amount: 282188.65,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ASSET MGR 20%",
            fundCode: "0328",
            amount: 82.28,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL TRANSPORT",
            fundCode: "0512",
            amount: 5975.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RISKPRO<SUP>&REG;</SUP> PFG 30+ R",
            fundCode: "FGVE",
            amount: 182720.18,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "THRIVENT MID CAP STOCK S",
            fundCode: "FGU6",
            amount: 22195.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RiverPark Strategic Inc Fd Retail Class",
            fundCode: "FEBY",
            amount: 1271.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP HEALTH SCIENCES",
            fundCode: "OFN1",
            amount: 14287.25,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL CONS STAPLES",
            fundCode: "0009",
            amount: 10549.01,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG JANUS HENDERSON BALANCED STRATEGY R",
            fundCode: "FHRW",
            amount: 539483.28,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN FUNDS STRATEGIC BOND F-1",
            fundCode: "FFY0",
            amount: 3.28,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID REAL ESTATE INC",
            fundCode: "0833",
            amount: 34320.01,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COHEN & STEERS PREF SECURITIES INCOME I",
            fundCode: "FGJB",
            amount: 31068.49,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PRINCIPAL REAL      ESTATE SEC INSTL CL",
            fundCode: "FGMQ",
            amount: 4013.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FINANCIAL INVESTORS TR, LISTED PRIVATE E",
            fundCode: "FAKO",
            amount: 4495.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TOTAL BOND",
            fundCode: "0820",
            amount: 111539.54,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FDM IDX 2060 INV",
            fundCode: "2714",
            amount: 109783.65,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GATEWAY FUND CLASS Y",
            fundCode: "FGL7",
            amount: 4076.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN HIGH-INCOMECLASS F",
            fundCode: "FDEJ",
            amount: 44328,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BUFFALO             INTERNATIONAL FUND",
            fundCode: "FA68",
            amount: 59387.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BLUEROCK TOTAL INCOME & REAL ESTATE FUND",
            fundCode: "FH63",
            amount: 5136.52,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL BIOTECH",
            fundCode: "0042",
            amount: 430269.46,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FBSI BOND FUND PLACEHOLDER",
            fundCode: "BOND",
            amount: 717036.87,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL HEALTHCARE",
            fundCode: "0063",
            amount: 421387.36,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "C&S US REALTY C",
            fundCode: "O62K",
            amount: 49750880.76,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "DESTINATIONS EQUITY INCOME FD INSTL",
            fundCode: "FHSX",
            amount: 4332.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ARTISAN OPP'ISTIC   GROWTH INVESTOR SHRS",
            fundCode: "FAL8",
            amount: 40593.83,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2020",
            fundCode: "TG70",
            amount: 323848572.26,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "METROPOLITAN WEST   TOTAL RETURN BOND",
            fundCode: "FBXH",
            amount: 21671.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LARGE CAP STOCK",
            fundCode: "0338",
            amount: 76002.62,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HARDING LOEVNER     INTERNATL EQ INV CL",
            fundCode: "FASJ",
            amount: 16239.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMANA DEVELOPING    WORLD FUND",
            fundCode: "FAKC",
            amount: 1358.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AM CENT EQUITY INC",
            fundCode: "OF8L",
            amount: 95700.03,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LOW PRICED STK",
            fundCode: "0316",
            amount: 145978.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ST TR BD IDX",
            fundCode: "3049",
            amount: 33763.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP FINANCIAL SRVS",
            fundCode: "OMAU",
            amount: 8468.3,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED TACTICAL SECTORS INVESTOR",
            fundCode: "FHOJ",
            amount: 75906.36,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "USA MUTUALS VITIUM  GLOBAL FUND INVESTOR",
            fundCode: "FHKU",
            amount: 3130.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FDM IDX 2055 INV",
            fundCode: "2338",
            amount: 2764.33,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "THRIVENT SMALL CAP STOCK S",
            fundCode: "FH2B",
            amount: 10650.73,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NICHOLAS II INC     CLASS N",
            fundCode: "FCFE",
            amount: 54198.34,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN FDS INT BD FD OF AM CL F-1 SHS",
            fundCode: "FFQ6",
            amount: 64.34,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "T ROWE PRICE INTL   EQUITY INDEX",
            fundCode: "FGNM",
            amount: 24281.55,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID STKSEL LGCAP VAL",
            fundCode: "0708",
            amount: 48.42,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "CONESTOGA SM CAP GR",
            fundCode: "TF2G",
            amount: 88420958.56,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "J H BALANCED T",
            fundCode: "OF42",
            amount: 69450.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "OAKMARK GLOBAL      SELECT FD CL I",
            fundCode: "FDY8",
            amount: 1173.69,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID NASDAQ COMP INDX",
            fundCode: "1282",
            amount: 37310.35,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FDM IDX 2030 IPR",
            fundCode: "2770",
            amount: 234881.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ENV ALT ENERGY",
            fundCode: "0516",
            amount: 5212.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG TACTICAL INCOME STRATEGY CL R",
            fundCode: "FHDL",
            amount: 282241.41,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AB LG CAP GRTH A",
            fundCode: "OFZR",
            amount: 31042.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP ALL-CAP OPPS",
            fundCode: "OF3G",
            amount: 4635.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GLENMEDE LARGE CAP  GROWTH",
            fundCode: "FCKB",
            amount: 60107.54,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MORGAN STAN INSTL TRMID CAP GRWTH ADV CL",
            fundCode: "FD4I",
            amount: 2005.36,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIRSTHAND E-COMMERCE",
            fundCode: "FBM8",
            amount: 1932.29,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TOTAL MKT IDX",
            fundCode: "2361",
            amount: 405727.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VILLERE BALANCED",
            fundCode: "FDW3",
            amount: 18012.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GRIFFIN INSTITUTIONAL ACCESS CREDIT FUND",
            fundCode: "FGPX",
            amount: 5816.48,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID NATURAL RES",
            fundCode: "0514",
            amount: 2821.05,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FMI INTERNATIONAL",
            fundCode: "FCGT",
            amount: 26493.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG FIDELITY INSTITUTIONAL AM EQUITY SEC",
            fundCode: "FHDG",
            amount: 477630.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PRINCIPAL BLUE CHIP FUND CL A",
            fundCode: "FEC3",
            amount: 2704.98,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIDELITY ZERO EXTND MARKET INDEX FUND",
            fundCode: "3230",
            amount: 7225.45,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID BLUE CHIP VALUE",
            fundCode: "1271",
            amount: 15526.76,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COL DIV INC INST MS",
            fundCode: "O32Z",
            amount: 167596867.42,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "AMERICAN FUNDS 2040 TRGT DATE RETIRE F1",
            fundCode: "FFXH",
            amount: 103532.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2025",
            fundCode: "1314",
            amount: 237312.23,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AM CENT SMCAP VAL R6",
            fundCode: "OSX7",
            amount: 83828529.76,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SUMMITRY EQUITY FUND",
            fundCode: "FHHE",
            amount: 23963.21,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "T ROWE PRICE        CAP OPPORTUNITY",
            fundCode: "FGMR",
            amount: 11350.06,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ARTISAN SMALL CAP GROWTH",
            fundCode: "FB01",
            amount: 1985.81,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MID CAP IDX",
            fundCode: "2352",
            amount: 118234.89,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2035",
            fundCode: "1315",
            amount: 114228.08,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GUINNESS ATKINSON   WIRED INDEX",
            fundCode: "FDKX",
            amount: 15664.98,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BANKS ULTRA SECTOR  PRO FUND INVESTOR",
            fundCode: "FCDW",
            amount: 222952.91,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BLACKROCK SYSTEMATIC MULTI-STRAT INSTL",
            fundCode: "FHJ0",
            amount: 14011.36,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PRINCIPAL DIVERSIFIED REAL ASSET FD C",
            fundCode: "FAXM",
            amount: 9473.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MSIF INTERNATIONAL OPPORTUNITY FUND CL A",
            fundCode: "FFCH",
            amount: 7851.42,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SM CAP GR IDX",
            fundCode: "3405",
            amount: 582.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BOSTON PARTNERS     LONG SHORT EQUITY FD",
            fundCode: "FBZN",
            amount: 5866.26,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JPMORGAN US LG CAP  CORE PLUS SELECT SHS",
            fundCode: "FAIG",
            amount: 46000.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ARTISAN DEVELOPING WRLD FD INVESTOR SHS",
            fundCode: "FFIY",
            amount: 4521.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID 500 INDEX",
            fundCode: "2328",
            amount: 782911.03,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COHEN & STEERS REALTY SHARES A",
            fundCode: "FHF5",
            amount: 3177.16,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INVST GR BD",
            fundCode: "0026",
            amount: 91550.49,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PERFORMANCE TRUST TOTAL RETURN BOND FUND",
            fundCode: "FCUL",
            amount: 30635.09,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HCM TACTICAL GROWTH INVESTOR",
            fundCode: "FFYX",
            amount: 207013.63,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CAPITAL & INCOME",
            fundCode: "0038",
            amount: 2720296.4,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MFS INTERNATIONAL   DIVERSIFICATION FD A",
            fundCode: "FDWX",
            amount: 8594.92,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMG YACKTMAN        FOCUSED SERVICE CL",
            fundCode: "FEL7",
            amount: 14068.35,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL BANKING",
            fundCode: "0507",
            amount: 17740.17,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIDELITY ZERO       INTERNATIONAL INDEX",
            fundCode: "3228",
            amount: 325603.68,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JPM LG CAP GRTH A",
            fundCode: "OMKD",
            amount: 7710.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MID CAP GR IDX",
            fundCode: "3403",
            amount: 1435.8,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 551753248.57,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID SEL TECHNOLOGY",
            fundCode: "0064",
            amount: 170714.68,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LC VAL ENH INDX",
            fundCode: "1828",
            amount: 210144.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID REAL ESTATE IDX",
            fundCode: "2355",
            amount: 105477.56,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DESTINATIONS SMALL  MID CAP EQ INSTL",
            fundCode: "FHSM",
            amount: 29809.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "METWEST TOT RET BOND",
            fundCode: "TDS1",
            amount: 158804472.85,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LC GRO ENH INDX",
            fundCode: "1829",
            amount: 4714.67,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FMI COMMON STOCK    FUND",
            fundCode: "FEGB",
            amount: 23873.98,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SMALL CAP VALUE",
            fundCode: "1389",
            amount: 29833.53,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIDELITY ZERO       LARGE CAP INDEX FUND",
            fundCode: "3231",
            amount: 83931.6,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TOREADOR CORE FUND  INVESTOR CL",
            fundCode: "FGS1",
            amount: 9474.01,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIMCO INCOME A",
            fundCode: "OEKN",
            amount: 225207.35,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HARBOR CAPITAL      APPRECIATION INV CL",
            fundCode: "FDMH",
            amount: 1513.2,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID ST BOND IDX",
            fundCode: "3041",
            amount: 35791.76,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COHEN & STEERS REAL ESTATE SECURITIES I",
            fundCode: "FGDB",
            amount: 29314.52,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TREND",
            fundCode: "0005",
            amount: 8458.52,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RYDEX OTC INV",
            fundCode: "OFNO",
            amount: 25040.86,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HARTFORD CORE EQUITY FUND CLASS A",
            fundCode: "FFJH",
            amount: 125088.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED GOVT INC TACT INVISOR",
            fundCode: "FHQ9",
            amount: 188442.3,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID EMRG MKTS IDX",
            fundCode: "2344",
            amount: 37085.91,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DOUBLELINE TOTAL RT BOND FD CL N",
            fundCode: "FAPH",
            amount: 27223.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL CONS DISCR",
            fundCode: "0517",
            amount: 9477.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VIRTUS ZEVENBERGEN  INNOVATIVE GR STK A",
            fundCode: "FGOL",
            amount: 16127.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL HTH CARE SVC",
            fundCode: "0505",
            amount: 10064.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 94913533.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "JANUS STRATEGIC     VALUE FUND",
            fundCode: "FBQ3",
            amount: 9393.8,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GS SATELLITE STR IS",
            fundCode: "OEZY",
            amount: 6192.12,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RISKPRO TACTICAL    0-30 FD CL R",
            fundCode: "FGVM",
            amount: 220145.45,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DIREXION MONTHLY S&P 500 BEAR 2X INV",
            fundCode: "FEHV",
            amount: 3659.46,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FBSI EQTY FUND PLACEHOLDER",
            fundCode: "EQTY",
            amount: 98506047.77,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JPMORGAN VALUE      ADVANTAGE CL A",
            fundCode: "FDG4",
            amount: 89454.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ADVISORS CAPITAL US DIVIDEND",
            fundCode: "FHO7",
            amount: 94759.61,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TCW GALILEO TOTAL   RETURN BOND CLASS N",
            fundCode: "FDCX",
            amount: 21433.1,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PERMANENT PORTFOLIO VERSATILE BOND",
            fundCode: "FA7U",
            amount: 15987.31,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FMI LARGE CAP FUND",
            fundCode: "FDUS",
            amount: 21751.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID US SUSTN IDX",
            fundCode: "2941",
            amount: 36211.47,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BARON EMERGING MARKETS RETAIL CL",
            fundCode: "FC9R",
            amount: 46133.65,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FDM IDX 2035 INV",
            fundCode: "2238",
            amount: 29530.23,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INFRASTRUCTURE",
            fundCode: "3488",
            amount: 3147.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID VALUE DISCOV",
            fundCode: "0832",
            amount: 6520.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID PACIFIC BASIN",
            fundCode: "0302",
            amount: 6863.4,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COLUMBIA SELIGMAN   COM AND INFO CL A",
            fundCode: "FC0Z",
            amount: 5583.2,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL RETAILING",
            fundCode: "0046",
            amount: 124858.6,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MID CAP STOCK",
            fundCode: "0337",
            amount: 14480.8,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CONTRAFUND",
            fundCode: "0022",
            amount: 300856.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MANNING & NAPIER    EQUITY SERIES",
            fundCode: "FA30",
            amount: 9407.67,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BUFFALO USA GLOBAL",
            fundCode: "FBYK",
            amount: 11715.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CENTURY    GLOBAL GROWTH",
            fundCode: "FBNQ",
            amount: 6687.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "RDGWTH MID CAP VALUE",
            fundCode: "TD8N",
            amount: 94144765.46,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "VICTORY GLOBAL      NATURAL RESOURCES A",
            fundCode: "FFUB",
            amount: 16540.53,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GROWTH DISC",
            fundCode: "0339",
            amount: 4760.6,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MN CURRIE EMG MKT R3",
            fundCode: "O3AC",
            amount: 42934675.53,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "RISKPRO<SUP>&REG;</SUP> 30+ R",
            fundCode: "FGVA",
            amount: 302415.26,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BLACKROCK GLBL SCI  & TECH OPPORT CL A",
            fundCode: "FAR4",
            amount: 59062.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL GOLD",
            fundCode: "0041",
            amount: 52466.04,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN CAPITAL    INCOME BUILDER CL F",
            fundCode: "FDDZ",
            amount: 92589.99,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AIM GROWTH          ALLOCATION FD CL A",
            fundCode: "FDRQ",
            amount: 376.32,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2025",
            fundCode: "TG71",
            amount: 524015309.48,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "QUANTIFIED STF FUND - INVESTOR CLASS",
            fundCode: "FFQX",
            amount: 297316.43,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "POLEN CAPITAL GLOBAL GRTH FD- INV CLASS",
            fundCode: "FFPA",
            amount: 2467.85,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DESTINATIONS INTL    EQUITY FD INSTL",
            fundCode: "FHSN",
            amount: 58151.84,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "COLUMBIA DIVIDEND   INCOME CL A",
            fundCode: "FAUX",
            amount: 24083.14,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ADV PREFERRED GOLD  BULLION STRAT INV",
            fundCode: "FEEC",
            amount: 185349.02,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP VALUE",
            fundCode: "OF4M",
            amount: 4066.85,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTL REAL ESTATE",
            fundCode: "1368",
            amount: 12944.66,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MATTHEWS PACIFIC    TIGER",
            fundCode: "FBED",
            amount: 1957.44,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BARON RETIREMENT    INCOME FUND",
            fundCode: "FAG5",
            amount: 6783.87,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MONEY MARKET PRM",
            fundCode: "2738",
            amount: 1004.8,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SMALL CAP GROWTH",
            fundCode: "1388",
            amount: 4500.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID TELECOM & UTIL",
            fundCode: "0311",
            amount: 36524.26,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 87114771.07,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 61731816.72,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "NORTHERN SMALL CAP  VALUE",
            fundCode: "FD3G",
            amount: 39379.93,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIRST EAGLE GLOBAL A",
            fundCode: "OFSL",
            amount: 8276.68,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "BARON PARTNERS FUND",
            fundCode: "FDMA",
            amount: 49344.19,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "GQG PARTNERS EMERGING MARKETS EQUITY INV",
            fundCode: "FH2X",
            amount: 1365.23,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GROWTH STRAT",
            fundCode: "0324",
            amount: 2529.48,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP RETIRE 2020 A",
            fundCode: "OTHR",
            amount: 86159,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FEDERATED PRUDENT   BEAR FUND CLASS A",
            fundCode: "FFPM",
            amount: 2526.32,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG AMERICAN FUNDS CONSERVATIVE INCOME S",
            fundCode: "FHDJ",
            amount: 450824.58,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "HCM DIVIDEND SECTOR PLUS INVESTOR",
            fundCode: "FFUZ",
            amount: 276910.65,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN NEW        PERSPECTIVE CLASS F",
            fundCode: "FDKS",
            amount: 29760.01,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL MED TECH&DV",
            fundCode: "0354",
            amount: 74965.25,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FIRST EAGLE SOGEN   GOLD CLASS A",
            fundCode: "FCAA",
            amount: 1547.44,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LOOMIS SAYLES BOND  RETAIL SHARES",
            fundCode: "FD13",
            amount: 5275.07,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CHINA REGION",
            fundCode: "0352",
            amount: 10394.85,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "MSIF GROWTH A",
            fundCode: "OF61",
            amount: 92846.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PFG FIDELITY INSTITUTIONAL AM EQUITY IND",
            fundCode: "FHDK",
            amount: 311843.55,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID VALUE STRAT",
            fundCode: "0014",
            amount: 3817.57,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTL ENH INDEX",
            fundCode: "2010",
            amount: 4032.66,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "A-TENET 401(K) RETIREMENT SVGS",
            fundCode: "GCT4",
            amount: 583784347.94,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "TARGET RET 2035",
            fundCode: "TG72",
            amount: 504368055.37,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SMEAD VALUE FUND     INVESTOR CL SHARES",
            fundCode: "FFAQ",
            amount: 17512.18,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VALUE LINE ASSET    ALLOCATION",
            fundCode: "FBHD",
            amount: 30423.04,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID GOV CASH RESERVE",
            fundCode: "0055",
            amount: 31011473.59,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "VIRTUS ALLIANGI     INCOME & GROWTH A",
            fundCode: "FHM9",
            amount: 48905.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "CALAMOS GROWTH AND  INCOME CLASS A",
            fundCode: "FBXI",
            amount: 11490.01,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID CONSV INC BD",
            fundCode: "2267",
            amount: 4968.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL SEMICONDUCT",
            fundCode: "0008",
            amount: 288187.86,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN FUNDAMENTALINVESTORS CL F",
            fundCode: "FDLD",
            amount: 102049.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL TELECOMM",
            fundCode: "0096",
            amount: 4806.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTL INDEX",
            fundCode: "2363",
            amount: 144718.19,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NB REAL ESTATE INST",
            fundCode: "OELQ",
            amount: 42792.83,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL TEC HARDWARE",
            fundCode: "0007",
            amount: 4081.45,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JOHN HANCOCK DISCIPLINED VALUE MID CAP I",
            fundCode: "FGE5",
            amount: 930.98,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LG CAP GR IDX",
            fundCode: "2826",
            amount: 230775.67,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PARADIGM SELECT FUND",
            fundCode: "FC5B",
            amount: 44272.71,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID NEW MARKETS INC",
            fundCode: "0331",
            amount: 289.32,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID BALANCED",
            fundCode: "0304",
            amount: 842881.78,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LG CAP VAL IDX",
            fundCode: "2830",
            amount: 62280.41,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "PIM INFL RESP MA A",
            fundCode: "OSM6",
            amount: 989.27,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID LTD TERM BOND",
            fundCode: "2622",
            amount: 53777.38,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMANA MUTUAL FUND   TRUST GROWTH",
            fundCode: "FDGN",
            amount: 519154.24,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMANA MUTUAL FUND   TRUST INCOME",
            fundCode: "FDGM",
            amount: 327836.98,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID STRATEGIC INCOME",
            fundCode: "3082",
            amount: 70830.22,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TRP RETIREMENT 2040",
            fundCode: "OSEO",
            amount: 102199.06,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FLOAT RT HI INC",
            fundCode: "0814",
            amount: 18527.89,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTL SMALL CAP",
            fundCode: "0818",
            amount: 59600.52,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "QUANTIFIED COMMON GROUND INVESTOR",
            fundCode: "FHEA",
            amount: 123941.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2055",
            fundCode: "TG74",
            amount: 179785384.69,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID SM CAP VAL IDX",
            fundCode: "3406",
            amount: 16016.31,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NUVEEN PREFERRED    SECURITIES FUND CL A",
            fundCode: "FAO0",
            amount: 13590.92,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "LAZARD US GL LISTED INFRASTRUCTURE OPEN",
            fundCode: "FAY1",
            amount: 35422.73,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "CALAMOS GLOBAL      CONVERTIBLE CLASS A",
            fundCode: "FDFA",
            amount: 2570,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FA MULTI-ASSET INC",
            fundCode: "3083",
            amount: 129644.64,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL WIRELESS",
            fundCode: "0963",
            amount: 4173.11,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL UTILITIES",
            fundCode: "0065",
            amount: 3740.35,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID MID CAP VALUE",
            fundCode: "0762",
            amount: 14465.68,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "JPM EQUITY INCOME A",
            fundCode: "OMKH",
            amount: 10611.91,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "WISE CAPITAL FUND",
            fundCode: "FC9Q",
            amount: 4955.97,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "WASATCH HOISINGTON TREASURY",
            fundCode: "FBA9",
            amount: 74514.39,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FOCUSED STOCK",
            fundCode: "0333",
            amount: 15196.66,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID SEL SOFTWARE",
            fundCode: "0028",
            amount: 282602.58,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "AMERICAN INCOME FUNDOF AMERICA CLASS F",
            fundCode: "FDHP",
            amount: 95325.95,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "SBH PLUS BOND R",
            fundCode: "OKW6",
            amount: 7328.13,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "NUVEEN SYMPHONY FLOAT RATE INC FD CL A",
            fundCode: "FCV3",
            amount: 7425.37,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2050",
            fundCode: "TDR8",
            amount: 295464595.42,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "AMERICAN CENTURY    LIVESTRONG INC INV",
            fundCode: "FEA1",
            amount: 1441.46,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID FREEDOM 2045",
            fundCode: "1617",
            amount: 9812.61,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "FID INTL CAP APPREC",
            fundCode: "0335",
            amount: 66718.82,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "EVENTIDE GILEAD     FUND RETAIL CLASS",
            fundCode: "FC6S",
            amount: 20946.76,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "DOUBLELINE CORE     FIXED INCOME FD CL N",
            fundCode: "FAST",
            amount: 31297.87,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "METROPOLITAN WEST   HIGH YIELD BOND CL M",
            fundCode: "FDOR",
            amount: 955.49,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "ALGER GROWTH        OPPORTUNITIES CL A",
            fundCode: "FCNP",
            amount: 4574.24,
            ta: [
              {
                taCode: "B",
                taSystem: "FBSI",
              },
            ],
          },
          {
            fundName: "TARGET RET 2045",
            fundCode: "TG73",
            amount: 340748063.83,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521598": [
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 18076206.66,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 26458221.7,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 12092501.67,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 47143309.7,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 44803354.84,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 33413865.25,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 155704439.45,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521597": [
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 10991813.19,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 22352775.22,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 17959035.93,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 30583746.92,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 83520584.28,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 7459305.49,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 25283153.78,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521601": [
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 545064.15,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 3244652.57,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 93204020.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 20015564.08,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 512585.35,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 912773.86,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 28265359.89,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521600": [
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 1732007.33,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 175764484.35,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 37783387.22,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 1077708.23,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 53308133.59,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 1138335.2,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 7915674.37,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521369": [
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 2043200.9,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 197756966.58,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 42498140.76,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 5654716.81,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 9339791.66,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 59926777.97,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 5905155.65,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521599": [
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 2558354.62,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 68464904.39,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 18121080,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 11692965.1,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 12786032,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 48536999.16,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 225960856.57,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521368": [
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 36272799.63,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 45224773.63,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 210512539.67,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 12951531.24,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 9244019.33,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 63829494.68,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 20368610.04,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521370": [
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 842881.45,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 1500901.28,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 46477202.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 896314.41,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 5335272.46,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 32912302.88,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 153259173.07,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521372": [
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 9089132.62,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 6436526.25,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 30023490.74,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 19380900.54,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 3885976.74,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 17849854.03,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 5711670.86,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
        "90352903521371": [
          {
            fundName: "SP 500 INDEX PL CL F",
            fundCode: "6511",
            amount: 34557098.95,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP DEV INTL IDX CL E",
            fundCode: "3963",
            amount: 10493295.99,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID LT TR BD IDX",
            fundCode: "3047",
            amount: 201980.28,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FID US BOND IDX",
            fundCode: "2326",
            amount: 190003.83,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIAM ITM INF-PR BD D",
            fundCode: "4062",
            amount: 338466.82,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "SP EXT MKT IDX CL E",
            fundCode: "3988",
            amount: 7423678.92,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
          {
            fundName: "FIMM TREAS ONLY INST",
            fundCode: "2643",
            amount: 1202931.28,
            ta: [
              {
                taCode: "F",
                taSystem: "FPRS",
              },
            ],
          },
        ],
      },
    },
  ];


  constructor() {
    this.expandAndCheckedValues();
  }

  expandAndCheckedValues() {
    this.assetsResponseData.forEach((element, i) => {
      element.taBusSoldID = Object.assign(element.taBusSoldID, {
        expand: false,
      });
      for (const key in element.taBusSoldID) {
        if (key !== "expand") {
          element.taBusSoldID[key].forEach((childElement, i) => {
            childElement = Object.assign(childElement, {
              expand: false,
            });
          });
        }
      }
    });
  }

  ngOnInit() {
    this.assetsData = this.assetsResponseData;
    console.log(this.assetsData);
  }

  checkChild(parent_i, i) {
    parent_i[i].expand = !parent_i[i].expand;
    parent_i[i].checked = !parent_i[i].checked;
  }
}

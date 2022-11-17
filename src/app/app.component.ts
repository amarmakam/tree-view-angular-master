import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  
  showData: boolean;

  aseetsResponseData= [
  {
  "name": "TENET HEALTHCARE CORPORATION",
  "groupMap": {
    "NN": {
      "groupDisciplineName": "Outside Funds",
      "summaryMap": {
        "FI": {
          "summaryDisciplineName": "Fixed income",
          "fundClassificationMap": {
            "HI": {
              "fundClassificationName": "High income",
              "fundList": [
                {
                  "fundName": "JANUS HENDERSON STRATEGIC INCOME T",
                  "fundCode": "FGQG",
                  "amount": "15397.3400"
                },
                {
                  "fundName": "AMERICAN HIGH-INCOMECLASS F",
                  "fundCode": "FDEJ",
                  "amount": "44710.9700"
                },
                {
                  "fundName": "BR STRAT GLB BD INST",
                  "fundCode": "OYCR",
                  "amount": "8353347.3522"
                },
                {
                  "fundName": "NUVEEN PREFERRED    SECURITIES FUND CL A",
                  "fundCode": "FAO0",
                  "amount": "13678.6600"
                }
              ]
            },
            "FI": {
              "fundClassificationName": "Fixed income",
              "fundList": [
                {
                  "fundName": "WASATCH HOISINGTON TREASURY",
                  "fundCode": "FBA9",
                  "amount": "74568.1500"
                },
                {
                  "fundName": "PIM LOW DURATION A",
                  "fundCode": "OKAO",
                  "amount": "20988.9200"
                },
                {
                  "fundName": "AMERICAN BOND FUND  OF AMERICA CLASS F",
                  "fundCode": "FDKU",
                  "amount": "80490.9000"
                },
                {
                  "fundName": "METROPOLITAN WEST   HIGH YIELD BOND CL M",
                  "fundCode": "FDOR",
                  "amount": "962.7500"
                },
                {
                  "fundName": "PIM TOTAL RETURN A",
                  "fundCode": "OSWK",
                  "amount": "18591.3600"
                },
                {
                  "fundName": "LOOMIS SAYLES BOND  RETAIL SHARES",
                  "fundCode": "FD13",
                  "amount": "5304.3100"
                },
                {
                  "fundName": "LORD ABBETT BOND    DEBENTURE CLASS A",
                  "fundCode": "FB1G",
                  "amount": "7247.8500"
                },
                {
                  "fundName": "METROPOLITAN WEST   TOTAL RETURN BOND",
                  "fundCode": "FBXH",
                  "amount": "21763.2700"
                }
              ]
            },
            "TB": {
              "fundClassificationName": "Taxable Fixed Income",
              "fundList": [
                {
                  "fundName": "AMERICAN FUNDS MULTI-SECTOR INCOME F-1",
                  "fundCode": "FHGF",
                  "amount": "83566.0700"
                },
                {
                  "fundName": "PIM INFL RESP MA A",
                  "fundCode": "OSM6",
                  "amount": "1005.9600"
                },
                {
                  "fundName": "PERMANENT PORTFOLIO VERSATILE BOND",
                  "fundCode": "FA7U",
                  "amount": "16015.5300"
                },
                {
                  "fundName": "DOUBLELINE CORE     FIXED INCOME FD CL N",
                  "fundCode": "FAST",
                  "amount": "31558.4200"
                },
                {
                  "fundName": "WISE CAPITAL FUND",
                  "fundCode": "FC9Q",
                  "amount": "4970.1000"
                },
                {
                  "fundName": "RISKPRO PFG 0-15 FD CLASS R",
                  "fundCode": "FGVF",
                  "amount": "380164.7800"
                },
                {
                  "fundName": "DOUBLELINE TOTAL RT BOND FD CL N",
                  "fundCode": "FAPH",
                  "amount": "27370.3800"
                },
                {
                  "fundName": "ADVISORS CAPITAL TACTICAL FIXED INC",
                  "fundCode": "FHO5",
                  "amount": "42333.9300"
                },
                {
                  "fundName": "NUVEEN SYMPHONY FLOAT RATE INC FD CL A",
                  "fundCode": "FCV3",
                  "amount": "7441.7700"
                },
                {
                  "fundName": "QUANTIFIED MANAGED INCOME INVESTOR",
                  "fundCode": "FHDY",
                  "amount": "852813.8700"
                },
                {
                  "fundName": "QUANTIFIED TACTICAL FIXED INC INVESTOR",
                  "fundCode": "FHEB",
                  "amount": "189261.2700"
                },
                {
                  "fundName": "AMANA PARTICIPATION FUND INVESTOR SHARES",
                  "fundCode": "FFOK",
                  "amount": "4971.6400"
                },
                {
                  "fundName": "PFG FIDELITY INST AMBOND ESG STRATEGY R",
                  "fundCode": "FHRX",
                  "amount": "19690.8500"
                },
                {
                  "fundName": "TCW GALILEO TOTAL   RETURN BOND CLASS N",
                  "fundCode": "FDCX",
                  "amount": "21528.3600"
                },
                {
                  "fundName": "DOUBLELINE LOW      DURATION CL N",
                  "fundCode": "FCE0",
                  "amount": "282782.7300"
                },
                {
                  "fundName": "AMERICAN FUNDS STRATEGIC BOND F-1",
                  "fundCode": "FFY0",
                  "amount": "3.3000"
                },
                {
                  "fundName": "TCW GALILEO CORE    FIXED INCOME CLASS N",
                  "fundCode": "FDDQ",
                  "amount": "32874.9100"
                },
                {
                  "fundName": "SBH PLUS BOND R",
                  "fundCode": "OKW6",
                  "amount": "7347.3700"
                },
                {
                  "fundName": "KENSINGTON MANAGED  INCOME CLASS I",
                  "fundCode": "FHVQ",
                  "amount": "70671.3000"
                },
                {
                  "fundName": "PIMCO INCOME A",
                  "fundCode": "OEKN",
                  "amount": "226466.6700"
                },
                {
                  "fundName": "QUANTIFIED GOVT INC TACT INVISOR",
                  "fundCode": "FHQ9",
                  "amount": "189654.1500"
                },
                {
                  "fundName": "Western Asset Core Plus Bond Fund Cl A",
                  "fundCode": "FEKR",
                  "amount": "30381.5300"
                },
                {
                  "fundName": "CALMOS MKT NEU/INC I",
                  "fundCode": "FGHZ",
                  "amount": "64995.4600"
                },
                {
                  "fundName": "PIM INTL BD US$H A",
                  "fundCode": "OYDY",
                  "amount": "9433.6300"
                },
                {
                  "fundName": "GRIFFIN INSTITUTIONAL ACCESS CREDIT FUND",
                  "fundCode": "FGPX",
                  "amount": "5854.1600"
                },
                {
                  "fundName": "AMERICAN FDS INT BD FD OF AM CL F-1 SHS",
                  "fundCode": "FFQ6",
                  "amount": "64.5500"
                },
                {
                  "fundName": "PERFORMANCE TRUST TOTAL RETURN BOND FUND",
                  "fundCode": "FCUL",
                  "amount": "30742.9100"
                },
                {
                  "fundName": "RiverPark Strategic Inc Fd Retail Class",
                  "fundCode": "FEBY",
                  "amount": "1279.8600"
                },
                {
                  "fundName": "PFG TACTICAL INCOME STRATEGY CL R",
                  "fundCode": "FHDL",
                  "amount": "284148.4100"
                },
                {
                  "fundName": "AMERICAN CENTURY SHORT DUR STRT INC INV",
                  "fundCode": "FFYH",
                  "amount": "30816.9300"
                },
                {
                  "fundName": "COHEN & STEERS PREF SECURITIES INCOME I",
                  "fundCode": "FGJB",
                  "amount": "31424.4300"
                }
              ]
            }
          }
        },
        "IQ": {
          "summaryDisciplineName": "International equity",
          "fundClassificationMap": {
            "IE": {
              "fundClassificationName": "International",
              "fundList": [
                {
                  "fundName": "MSIF GL OPPORTUNITY PORTFOLIO CLASS A",
                  "fundCode": "FFAG",
                  "amount": "2047.3000"
                },
                {
                  "fundName": "T ROWE PRICE GLOBAL TECHNOLOGY",
                  "fundCode": "FGMK",
                  "amount": "89326.0200"
                },
                {
                  "fundName": "MATTHEWS ASIAN      TECHNOLOGY",
                  "fundCode": "FBS6",
                  "amount": "2280.7200"
                },
                {
                  "fundName": "OAKMARK GLOBAL FUND I",
                  "fundCode": "FBKW",
                  "amount": "1269.9900"
                },
                {
                  "fundName": "MSIF INTERNATIONAL OPPORTUNITY FUND CL A",
                  "fundCode": "FFCH",
                  "amount": "7906.5500"
                },
                {
                  "fundName": "ARTISAN DEVELOPING WRLD FD INVESTOR SHS",
                  "fundCode": "FFIY",
                  "amount": "4560.8000"
                },
                {
                  "fundName": "COHEN AND STEERS    INTL REALTY INC CL I",
                  "fundCode": "FGDD",
                  "amount": "1722.3600"
                },
                {
                  "fundName": "BUFFALO             INTERNATIONAL FUND",
                  "fundCode": "FA68",
                  "amount": "60109.1200"
                },
                {
                  "fundName": "PFG BR EQUITY ESG STRATEGY MUTUAL FUND C",
                  "fundCode": "FHDH",
                  "amount": "361546.6000"
                },
                {
                  "fundName": "M&N OVERSEAS S",
                  "fundCode": "OE5H",
                  "amount": "11293.7900"
                },
                {
                  "fundName": "FKLN MTL GLB DISC A",
                  "fundCode": "OF04",
                  "amount": "106116.5900"
                },
                {
                  "fundName": "DESTINATIONS INTL    EQUITY FD INSTL",
                  "fundCode": "FHSN",
                  "amount": "58616.6400"
                },
                {
                  "fundName": "PUTNAM GLOBAL       TECHNOLOGY FUND CL A",
                  "fundCode": "FCIQ",
                  "amount": "8461.8500"
                },
                {
                  "fundName": "AMANA DEVELOPING    WORLD FUND",
                  "fundCode": "FAKC",
                  "amount": "1373.6600"
                },
                {
                  "fundName": "MFS INTERNATIONAL   DIVERSIFICATION FD A",
                  "fundCode": "FDWX",
                  "amount": "8660.4300"
                },
                {
                  "fundName": "Parametric Commodity Strategy Fd Inv Cl",
                  "fundCode": "FCYQ",
                  "amount": "43991.0700"
                },
                {
                  "fundName": "BUFFALO USA GLOBAL",
                  "fundCode": "FBYK",
                  "amount": "11903.3900"
                },
                {
                  "fundName": "TRP GLOBAL STOCK",
                  "fundCode": "OMCE",
                  "amount": "55492.3500"
                },
                {
                  "fundName": "BARON EMERGING MARKETS RETAIL CL",
                  "fundCode": "FC9R",
                  "amount": "46307.0800"
                },
                {
                  "fundName": "GQG PARTNERS EMERGING MARKETS EQUITY INV",
                  "fundCode": "FH2X",
                  "amount": "1385.0500"
                },
                {
                  "fundName": "VICTORY GLOBAL      NATURAL RESOURCES A",
                  "fundCode": "FFUB",
                  "amount": "16914.8300"
                },
                {
                  "fundName": "POLEN CAPITAL GLOBAL GRTH FD- INV CLASS",
                  "fundCode": "FFPA",
                  "amount": "2491.9500"
                },
                {
                  "fundName": "MATTHEWS PACIFIC    TIGER",
                  "fundCode": "FBED",
                  "amount": "1942.7700"
                },
                {
                  "fundName": "WASATCH INTERNATIONLOPPORTUNITIES FD",
                  "fundCode": "FAB3",
                  "amount": "1714.0300"
                },
                {
                  "fundName": "HARDING LOEVNER     INTERNATL EQ INV CL",
                  "fundCode": "FASJ",
                  "amount": "16433.1300"
                },
                {
                  "fundName": "J H OVERSEAS T",
                  "fundCode": "OF3F",
                  "amount": "3446.2700"
                },
                {
                  "fundName": "FUND*X UPGRADER     FUND",
                  "fundCode": "FEOR",
                  "amount": "1374.4600"
                },
                {
                  "fundName": "OAKMARK GLOBAL      SELECT FD CL I",
                  "fundCode": "FDY8",
                  "amount": "1184.2500"
                },
                {
                  "fundName": "T ROWE PRICE INTL   EQUITY INDEX",
                  "fundCode": "FGNM",
                  "amount": "24616.2100"
                },
                {
                  "fundName": "FMI INTERNATIONAL",
                  "fundCode": "FCGT",
                  "amount": "26670.5700"
                },
                {
                  "fundName": "MATTHEWS ASIAN      GROWTH & INCOME",
                  "fundCode": "FBEB",
                  "amount": "2934.2500"
                },
                {
                  "fundName": "LEUTHOLD GLOBAL FUNDRETAIL CLASS SHARES",
                  "fundCode": "FAG2",
                  "amount": "13.2900"
                },
                {
                  "fundName": "MATTHEWS DRAGON     CENTURY CHINA",
                  "fundCode": "FBJM",
                  "amount": "21948.0100"
                },
                {
                  "fundName": "AMERICAN NEW        PERSPECTIVE CLASS F",
                  "fundCode": "FDKS",
                  "amount": "30229.5200"
                },
                {
                  "fundName": "OAKMARK INTL INV",
                  "fundCode": "OFOI",
                  "amount": "52456.3100"
                },
                {
                  "fundName": "AMERICAN CENTURY    GLOBAL GROWTH",
                  "fundCode": "FBNQ",
                  "amount": "6821.3700"
                }
              ]
            }
          }
        },
        "BL": {
          "summaryDisciplineName": "Blended",
          "fundClassificationMap": {
            "BL": {
              "fundClassificationName": "Blended",
              "fundList": [
                {
                  "fundName": "TRP SPTM MOD INV",
                  "fundCode": "OSHF",
                  "amount": "58376.6900"
                },
                {
                  "fundName": "VILLERE BALANCED",
                  "fundCode": "FDW3",
                  "amount": "18144.0500"
                },
                {
                  "fundName": "BLACKROCK SYSTEMATIC MULTI-STRAT INSTL",
                  "fundCode": "FHJ0",
                  "amount": "14081.0600"
                },
                {
                  "fundName": "HCM INCOME PLUS INVESTOR",
                  "fundCode": "FFZ8",
                  "amount": "181231.1500"
                },
                {
                  "fundName": "AMERICAN BALANCED   CLASS F",
                  "fundCode": "FCCC",
                  "amount": "114215.4100"
                },
                {
                  "fundName": "FIRST EAGLE GLOBAL A",
                  "fundCode": "OFSL",
                  "amount": "8395.8500"
                },
                {
                  "fundName": "QUANTIFIED EVOLUTION PLUS INVESTOR",
                  "fundCode": "FHEG",
                  "amount": "314724.5300"
                },
                {
                  "fundName": "ABSOLUTE CAP ASSET ALLOCATOR FUND CL INV",
                  "fundCode": "FFQJ",
                  "amount": "27590.9000"
                },
                {
                  "fundName": "DESTINATIONS LARGE  CAP EQUITY INSTL",
                  "fundCode": "FHSL",
                  "amount": "127316.8400"
                },
                {
                  "fundName": "PRINCIPAL DIVERSIFIED REAL ASSET FD C",
                  "fundCode": "FAXM",
                  "amount": "6669.9200"
                },
                {
                  "fundName": "QUANTIFIED ALTERNATIVE INVESTMENT INV",
                  "fundCode": "FHEC",
                  "amount": "404783.6800"
                },
                {
                  "fundName": "GS SATELLITE STR IS",
                  "fundCode": "OEZY",
                  "amount": "6273.3800"
                },
                {
                  "fundName": "VALUE LINE ASSET    ALLOCATION",
                  "fundCode": "FBHD",
                  "amount": "30762.1800"
                },
                {
                  "fundName": "J H BALANCED T",
                  "fundCode": "OF42",
                  "amount": "70148.3300"
                },
                {
                  "fundName": "ABSOLUTE CAPITAL DEFENDER FUND - CL INV",
                  "fundCode": "FFQI",
                  "amount": "76533.4500"
                },
                {
                  "fundName": "LEUTHOLD CORE INV",
                  "fundCode": "OFW9",
                  "amount": "190.9500"
                },
                {
                  "fundName": "DESTINATIONS SMALL  MID CAP EQ INSTL",
                  "fundCode": "FHSM",
                  "amount": "30311.3800"
                },
                {
                  "fundName": "VICTORY MARKET      NEUTRAL INCOME FD I",
                  "fundCode": "FHAP",
                  "amount": "28043.8500"
                },
                {
                  "fundName": "PERMANENT PORTFOLIO FD INC",
                  "fundCode": "FD70",
                  "amount": "15884.7100"
                },
                {
                  "fundName": "T ROWE PRICE REAL   ASSET FUND INVESTOR",
                  "fundCode": "FGN4",
                  "amount": "1405.0400"
                },
                {
                  "fundName": "VIRTUS ALLIANGI     INCOME & GROWTH A",
                  "fundCode": "FHM9",
                  "amount": "49508.9200"
                },
                {
                  "fundName": "QUANTIFIED COMMON GROUND INVESTOR",
                  "fundCode": "FHEA",
                  "amount": "126572.8700"
                },
                {
                  "fundName": "PFG JANUS HENDERSON BALANCED STRATEGY R",
                  "fundCode": "FHRW",
                  "amount": "545236.0600"
                },
                {
                  "fundName": "QUANTIFIED STF FUND - INVESTOR CLASS",
                  "fundCode": "FFQX",
                  "amount": "297316.4300"
                },
                {
                  "fundName": "DESTINATIONS MULTI STRATEGY ALTS I",
                  "fundCode": "FHP9",
                  "amount": "2016.0800"
                },
                {
                  "fundName": "PIM ALL ASSET A",
                  "fundCode": "OSRV",
                  "amount": "4023.6000"
                },
                {
                  "fundName": "BLACKROCK MULTI ASSET INCOME PORT CL A",
                  "fundCode": "FCM7",
                  "amount": "28049.8400"
                },
                {
                  "fundName": "CALAMOS GLOBAL      CONVERTIBLE CLASS A",
                  "fundCode": "FDFA",
                  "amount": "2608.1900"
                }
              ]
            }
          }
        },
        "DQ": {
          "summaryDisciplineName": "Domestic equity",
          "fundClassificationMap": {
            "FF": {
              "fundClassificationName": "Fund of funds",
              "fundList": [
                {
                  "fundName": "RISKPRO<SUP>&REG;</SUP> PFG 30+ R",
                  "fundCode": "FGVE",
                  "amount": "185709.4600"
                },
                {
                  "fundName": "PFG FIDELITY INSTITUTIONAL AM EQUITY SEC",
                  "fundCode": "FHDG",
                  "amount": "488459.8300"
                },
                {
                  "fundName": "RISKPRO TACTICAL    0-30 FD CL R",
                  "fundCode": "FGVM",
                  "amount": "222342.5300"
                },
                {
                  "fundName": "RISKPRO DYNAMIC 0-10FUND CL R",
                  "fundCode": "FGVG",
                  "amount": "190947.8000"
                },
                {
                  "fundName": "AMERICAN FUNDS 2040 TRGT DATE RETIRE F1",
                  "fundCode": "FFXH",
                  "amount": "105013.6200"
                },
                {
                  "fundName": "PFG AMERICAN FUNDS CONSERVATIVE INCOME S",
                  "fundCode": "FHDJ",
                  "amount": "454118.6800"
                },
                {
                  "fundName": "PFG AMERICAN FUNDS GROWTH STRATEGY FUND",
                  "fundCode": "FHDI",
                  "amount": "709799.1400"
                },
                {
                  "fundName": "TRP RETIREMENT 2040",
                  "fundCode": "OSEO",
                  "amount": "103687.4000"
                },
                {
                  "fundName": "RISKPRO<SUP>&REG;</SUP> 30+ R",
                  "fundCode": "FGVA",
                  "amount": "307055.1600"
                },
                {
                  "fundName": "QUANTIFIED MARKET LEADERS INVESTOR",
                  "fundCode": "FHDZ",
                  "amount": "122815.3700"
                },
                {
                  "fundName": "PFG FIDELITY INSTITUTIONAL AM EQUITY IND",
                  "fundCode": "FHDK",
                  "amount": "317067.0700"
                },
                {
                  "fundName": "RISKPRO DYNAMIC     20-30 FUND CL R",
                  "fundCode": "FGYT",
                  "amount": "283523.8700"
                }
              ]
            },
            "GI": {
              "fundClassificationName": "Growth & income",
              "fundList": [
                {
                  "fundName": "AMERICAN CENTURY MIDCAP VALUE INV SHS",
                  "fundCode": "FDOD",
                  "amount": "106424.5100"
                },
                {
                  "fundName": "COLUMBIA DIVIDEND   INCOME CL A",
                  "fundCode": "FAUX",
                  "amount": "24499.2400"
                },
                {
                  "fundName": "AMANA MUTUAL FUND   TRUST INCOME",
                  "fundCode": "FDGM",
                  "amount": "332000.7300"
                },
                {
                  "fundName": "AMERICAN INCOME FUNDOF AMERICA CLASS F",
                  "fundCode": "FDHP",
                  "amount": "96805.7800"
                },
                {
                  "fundName": "AMERICAN MUTUAL FUNDCLASS F",
                  "fundCode": "FDKC",
                  "amount": "49215.6700"
                },
                {
                  "fundName": "AMERICAN FUNDAMENTALINVESTORS CL F",
                  "fundCode": "FDLD",
                  "amount": "103872.7800"
                },
                {
                  "fundName": "CALAMOS GROWTH AND  INCOME CLASS A",
                  "fundCode": "FBXI",
                  "amount": "11657.3800"
                }
              ]
            },
            "AS": {
              "fundClassificationName": "Asset allocation",
              "fundList": [
                {
                  "fundName": "AMERICAN CENTURY    LIVESTRONG INC INV",
                  "fundCode": "FEA1",
                  "amount": "1456.0700"
                },
                {
                  "fundName": "COLUMBIA COLUMBIA THERMOSTAT FD CL A",
                  "fundCode": "FCGY",
                  "amount": "12941.9400"
                }
              ]
            },
            "SG": {
              "fundClassificationName": "Specialized growth",
              "fundList": [
                {
                  "fundName": "COLUMBIA SELIGMAN   COM AND INFO CL A",
                  "fundCode": "FC0Z",
                  "amount": "5680.8300"
                },
                {
                  "fundName": "NB REAL ESTATE INST",
                  "fundCode": "OELQ",
                  "amount": "43619.9900"
                },
                {
                  "fundName": "EVENTIDE GILEAD     FUND RETAIL CLASS",
                  "fundCode": "FC6S",
                  "amount": "21170.2500"
                },
                {
                  "fundName": "BLACKROCK GLBL SCI  & TECH OPPORT CL A",
                  "fundCode": "FAR4",
                  "amount": "60060.8500"
                },
                {
                  "fundName": "DIREXION MONTHLY S&P 500 BEAR 2X INV",
                  "fundCode": "FEHV",
                  "amount": "3550.8200"
                },
                {
                  "fundName": "LAZARD US GL LISTED INFRASTRUCTURE OPEN",
                  "fundCode": "FAY1",
                  "amount": "36190.4000"
                },
                {
                  "fundName": "BARON REAL ESTATE FD RETAIL SHS",
                  "fundCode": "FC2V",
                  "amount": "11456.5700"
                }
              ]
            },
            "SI": {
              "fundClassificationName": "Structured investments",
              "fundList": [
                {
                  "fundName": "AZZAD ETHICHAL MID  CAP FUND CL A",
                  "fundCode": "FDVQ",
                  "amount": "358430.1300"
                }
              ]
            },
            "VL": {
              "fundClassificationName": "Value",
              "fundList": [
                {
                  "fundName": "AM CENT SMCAP VAL R6",
                  "fundCode": "OSX7",
                  "amount": "85776011.4172"
                },
                {
                  "fundName": "JOHN HANCOCK DISCIPLINED VALUE MID CAP I",
                  "fundCode": "FGE5",
                  "amount": "948.2000"
                },
                {
                  "fundName": "BOSTON PARTNERS ALL CAP VAL FD-INVEST SH",
                  "fundCode": "FB9Z",
                  "amount": "19711.9800"
                },
                {
                  "fundName": "AKRE FOCUS FUND     RETAIL",
                  "fundCode": "FAHH",
                  "amount": "68641.1000"
                },
                {
                  "fundName": "ADVISORS CAPITAL US DIVIDEND",
                  "fundCode": "FHO7",
                  "amount": "96183.0300"
                },
                {
                  "fundName": "BLACKROCK MDCAP VAL OPP A",
                  "fundCode": "FCNW",
                  "amount": "5085.2200"
                },
                {
                  "fundName": "JPMORGAN US LG CAP  CORE PLUS SELECT SHS",
                  "fundCode": "FAIG",
                  "amount": "46840.7400"
                },
                {
                  "fundName": "ADVISORS CAPITAL SMALL/MID CAP",
                  "fundCode": "FHO6",
                  "amount": "92661.3100"
                },
                {
                  "fundName": "FMI COMMON STOCK    FUND",
                  "fundCode": "FEGB",
                  "amount": "24174.9200"
                },
                {
                  "fundName": "HCM DIVIDEND SECTOR PLUS INVESTOR",
                  "fundCode": "FFUZ",
                  "amount": "282721.1200"
                },
                {
                  "fundName": "TRANSAMERICA MORGAN STANLEY CPTL GWTH A",
                  "fundCode": "FC4B",
                  "amount": "9483.2200"
                },
                {
                  "fundName": "PARADIGM SELECT FUND",
                  "fundCode": "FC5B",
                  "amount": "45420.7400"
                },
                {
                  "fundName": "SMEAD VALUE FUND     INVESTOR CL SHARES",
                  "fundCode": "FFAQ",
                  "amount": "17894.1300"
                },
                {
                  "fundName": "AMERICAN CENTURY    SMALL CAP VALUE",
                  "fundCode": "FBUL",
                  "amount": "5404.6300"
                },
                {
                  "fundName": "YCG Enhanced Fund",
                  "fundCode": "FEDX",
                  "amount": "1242.3600"
                },
                {
                  "fundName": "JPMORGAN VALUE      ADVANTAGE CL A",
                  "fundCode": "FDG4",
                  "amount": "90969.9100"
                },
                {
                  "fundName": "DESTINATIONS EQUITY INCOME FD INSTL",
                  "fundCode": "FHSX",
                  "amount": "4418.0000"
                }
              ]
            },
            "SL": {
              "fundClassificationName": "Selects",
              "fundList": [
                {
                  "fundName": "RED OAK TECHNOLOGY  SELECT",
                  "fundCode": "FBG2",
                  "amount": "775.6300"
                },
                {
                  "fundName": "GRIFFIN INST ACCESS REAL EST FD CL A SHS",
                  "fundCode": "FFLO",
                  "amount": "2945.4300"
                },
                {
                  "fundName": "USA MUTUALS VITIUM  GLOBAL FUND INVESTOR",
                  "fundCode": "FHKU",
                  "amount": "3172.3800"
                },
                {
                  "fundName": "COHEN & STEERS REALTY SHARES A",
                  "fundCode": "FHF5",
                  "amount": "3238.0400"
                },
                {
                  "fundName": "QUANTIFIED TACTICAL SECTORS INVESTOR",
                  "fundCode": "FHOJ",
                  "amount": "77242.7400"
                },
                {
                  "fundName": "SPROTT GOLD FUND    INVESTOR",
                  "fundCode": "FHAG",
                  "amount": "1476.2900"
                },
                {
                  "fundName": "AMERICAN BEACON ARK TRANSFMT INNOV INV",
                  "fundCode": "FH49",
                  "amount": "281.2900"
                },
                {
                  "fundName": "PRINCIPAL REAL      ESTATE SEC INSTL CL",
                  "fundCode": "FGMQ",
                  "amount": "4091.0500"
                },
                {
                  "fundName": "COHEN & STEERS REAL ESTATE SECURITIES I",
                  "fundCode": "FGDB",
                  "amount": "29886.0200"
                },
                {
                  "fundName": "BLUEROCK TOTAL INCOME & REAL ESTATE FUND",
                  "fundCode": "FH63",
                  "amount": "5133.8300"
                },
                {
                  "fundName": "ADV PREFERRED GOLD  BULLION STRAT INV",
                  "fundCode": "FEEC",
                  "amount": "188492.1000"
                },
                {
                  "fundName": "PFG INVESCO THEMATIC ESG STRATEGY CL R",
                  "fundCode": "FHRV",
                  "amount": "164482.0300"
                }
              ]
            },
            "GR": {
              "fundClassificationName": "Growth",
              "fundList": [
                {
                  "fundName": "MS INSIGHT A",
                  "fundCode": "OQBZ",
                  "amount": "4989.9900"
                },
                {
                  "fundName": "THRIVENT SMALL CAP STOCK S",
                  "fundCode": "FH2B",
                  "amount": "10886.1100"
                },
                {
                  "fundName": "MORGAN STAN INSTL TRMID CAP GRWTH ADV CL",
                  "fundCode": "FD4I",
                  "amount": "2035.6800"
                },
                {
                  "fundName": "GUINNESS ATKINSON   WIRED INDEX",
                  "fundCode": "FDKX",
                  "amount": "15869.9100"
                },
                {
                  "fundName": "AMERICAN CEN LEGACY FOCUSED LG CAP INVT",
                  "fundCode": "FA7E",
                  "amount": "43393.8400"
                },
                {
                  "fundName": "FINANCIAL INVESTORS TR, LISTED PRIVATE E",
                  "fundCode": "FAKO",
                  "amount": "4537.4200"
                },
                {
                  "fundName": "VIRTUS ZEVENBERGEN  INNOVATIVE GR STK A",
                  "fundCode": "FGOL",
                  "amount": "16345.9400"
                },
                {
                  "fundName": "BLACKROCK MID CAP   GROWTH CLASS A",
                  "fundCode": "FDBO",
                  "amount": "18488.8700"
                },
                {
                  "fundName": "GLENMEDE TOTAL Mkt LONG/SHORT PORTFOLIO",
                  "fundCode": "FFAR",
                  "amount": "1865.2400"
                },
                {
                  "fundName": "BARON PARTNERS FUND",
                  "fundCode": "FDMA",
                  "amount": "50562.0500"
                },
                {
                  "fundName": "ARTISAN SMALL CAP GROWTH",
                  "fundCode": "FB01",
                  "amount": "2007.7800"
                },
                {
                  "fundName": "HARTFORD CORE EQUITY FUND CLASS A",
                  "fundCode": "FFJH",
                  "amount": "127220.1400"
                },
                {
                  "fundName": "SUMMITRY EQUITY FUND",
                  "fundCode": "FHHE",
                  "amount": "24235.3900"
                },
                {
                  "fundName": "LEUTHOLD GRIZZLY    SHORT FUND",
                  "fundCode": "FH12",
                  "amount": "3979.5800"
                },
                {
                  "fundName": "THRIVENT MID CAP STOCK S",
                  "fundCode": "FGU6",
                  "amount": "22652.0000"
                },
                {
                  "fundName": "ARTISAN OPP'ISTIC   GROWTH INVESTOR SHRS",
                  "fundCode": "FAL8",
                  "amount": "41189.9200"
                },
                {
                  "fundName": "NEXPOINT MERGER ARBITRAGE Z",
                  "fundCode": "FHQK",
                  "amount": "45414.2700"
                },
                {
                  "fundName": "T ROWE PRICE        CAP OPPORTUNITY",
                  "fundCode": "FGMR",
                  "amount": "11566.5400"
                },
                {
                  "fundName": "AMERICAN WASHINGTON MUTUAL INVESTORS F",
                  "fundCode": "FDIO",
                  "amount": "50052.5400"
                },
                {
                  "fundName": "MANNING & NAPIER    EQUITY SERIES",
                  "fundCode": "FA30",
                  "amount": "9545.5100"
                },
                {
                  "fundName": "GATEWAY FUND CLASS Y",
                  "fundCode": "FGL7",
                  "amount": "4124.9300"
                },
                {
                  "fundName": "TOUCHSTONE SANDS    CAP SEL GRWTH Z",
                  "fundCode": "FDZH",
                  "amount": "32613.5600"
                },
                {
                  "fundName": "PIM RAE US SM A",
                  "fundCode": "OIIJ",
                  "amount": "4749.0400"
                },
                {
                  "fundName": "GLENMEDE LARGE CAP  GROWTH",
                  "fundCode": "FCKB",
                  "amount": "61233.2400"
                },
                {
                  "fundName": "AVE MARIA GROWTH",
                  "fundCode": "FD3H",
                  "amount": "64995.3200"
                },
                {
                  "fundName": "NEEDHAM SMALL CAP   GROWTH",
                  "fundCode": "FDKR",
                  "amount": "3048.8900"
                },
                {
                  "fundName": "THE PRIVATE SHARES  FUND CLASS A",
                  "fundCode": "FHOQ",
                  "amount": "4504.2200"
                },
                {
                  "fundName": "VIRTUS SMALL CAP    SUSTAINABLE GROWTH A",
                  "fundCode": "FATH",
                  "amount": "1402.7800"
                },
                {
                  "fundName": "HARBOR CAPITAL      APPRECIATION INV CL",
                  "fundCode": "FDMH",
                  "amount": "1544.2100"
                },
                {
                  "fundName": "AMG YACKTMAN        FOCUSED SERVICE CL",
                  "fundCode": "FEL7",
                  "amount": "14226.0900"
                },
                {
                  "fundName": "NICHOLAS II INC     CLASS N",
                  "fundCode": "FCFE",
                  "amount": "54912.7400"
                },
                {
                  "fundName": "ALGER GROWTH        OPPORTUNITIES CL A",
                  "fundCode": "FCNP",
                  "amount": "4638.3200"
                },
                {
                  "fundName": "PRINCIPAL BLUE CHIP FUND CL A",
                  "fundCode": "FEC3",
                  "amount": "2751.0600"
                },
                {
                  "fundName": "AIM GROWTH          ALLOCATION FD CL A",
                  "fundCode": "FDRQ",
                  "amount": "380.9600"
                },
                {
                  "fundName": "AMANA MUTUAL FUND   TRUST GROWTH",
                  "fundCode": "FDGN",
                  "amount": "527647.5600"
                },
                {
                  "fundName": "Federated MDT Small Cap Core Fund Cl A",
                  "fundCode": "FEF3",
                  "amount": "4632.2400"
                },
                {
                  "fundName": "EVENTIDE MULTI-ASSET INCOME FUND CLASS N",
                  "fundCode": "FFO0",
                  "amount": "480.7500"
                },
                {
                  "fundName": "NEEDHAM AGGRESSIVE  GROWTH CLASS A",
                  "fundCode": "FDAI",
                  "amount": "4678.0100"
                },
                {
                  "fundName": "FEDERATED PRUDENT   BEAR FUND CLASS A",
                  "fundCode": "FFPM",
                  "amount": "2478.1700"
                },
                {
                  "fundName": "BOSTON PARTNERS     LONG SHORT EQUITY FD",
                  "fundCode": "FBZN",
                  "amount": "5927.0700"
                },
                {
                  "fundName": "HCM TACTICAL GROWTH INVESTOR",
                  "fundCode": "FFYX",
                  "amount": "210883.0200"
                },
                {
                  "fundName": "JENSEN PORTFOLIO,   INC.",
                  "fundCode": "FC71",
                  "amount": "317764.0000"
                }
              ]
            },
            "DQ": {
              "fundClassificationName": "Domestic equity",
              "fundList": [
                {
                  "fundName": "TRP MID CAP VALUE",
                  "fundCode": "OQLV",
                  "amount": "47714.2800"
                },
                {
                  "fundName": "J H ENTERPRISE T",
                  "fundCode": "OFJ3",
                  "amount": "363.4000"
                },
                {
                  "fundName": "BARON RETIREMENT    INCOME FUND",
                  "fundCode": "FAG5",
                  "amount": "6894.5900"
                },
                {
                  "fundName": "TRP HEALTH SCIENCES",
                  "fundCode": "OFN1",
                  "amount": "14489.2400"
                },
                {
                  "fundName": "TRP COMM & TECHN",
                  "fundCode": "OMCD",
                  "amount": "32067.1400"
                },
                {
                  "fundName": "RYDEX TITAN 500",
                  "fundCode": "FBUG",
                  "amount": "13696.9400"
                },
                {
                  "fundName": "AMERICAN CAPITAL    INCOME BUILDER CL F",
                  "fundCode": "FDDZ",
                  "amount": "93836.3900"
                },
                {
                  "fundName": "JANUS STRATEGIC     VALUE FUND",
                  "fundCode": "FBQ3",
                  "amount": "9571.8800"
                },
                {
                  "fundName": "JPM LG CAP GRTH A",
                  "fundCode": "OMKD",
                  "amount": "7844.6400"
                },
                {
                  "fundName": "PARNASSUS EQUITY    INCOME PORTFOLIO",
                  "fundCode": "FC11",
                  "amount": "224729.1000"
                },
                {
                  "fundName": "JPM EQUITY INCOME A",
                  "fundCode": "OMKH",
                  "amount": "10774.1100"
                },
                {
                  "fundName": "AB LG CAP GRTH A",
                  "fundCode": "OFZR",
                  "amount": "31448.3100"
                },
                {
                  "fundName": "BARON I OPPORTUNITY",
                  "fundCode": "FBQ1",
                  "amount": "5893.6200"
                },
                {
                  "fundName": "FIRSTHAND E-COMMERCE",
                  "fundCode": "FBM8",
                  "amount": "1958.9400"
                },
                {
                  "fundName": "TRP DIV GROWTH",
                  "fundCode": "OFMD",
                  "amount": "59478.7600"
                },
                {
                  "fundName": "MSIF INCEPTION A",
                  "fundCode": "OF63",
                  "amount": "6806.2300"
                },
                {
                  "fundName": "TRP BLUE CHIP GRTH",
                  "fundCode": "OFMB",
                  "amount": "181342.7000"
                },
                {
                  "fundName": "WASATCH GROWTH",
                  "fundCode": "FBAK",
                  "amount": "53058.7500"
                },
                {
                  "fundName": "AM CENT EQUITY INC",
                  "fundCode": "OF8L",
                  "amount": "97162.6800"
                },
                {
                  "fundName": "JANUS ORION FUND",
                  "fundCode": "FBSE",
                  "amount": "41865.5500"
                },
                {
                  "fundName": "RYDEX VELOCITY 100",
                  "fundCode": "FBRZ",
                  "amount": "27306.3200"
                },
                {
                  "fundName": "TRP FINANCIAL SRVS",
                  "fundCode": "OMAU",
                  "amount": "8558.4200"
                },
                {
                  "fundName": "TRP ALL-CAP OPPS",
                  "fundCode": "OF3G",
                  "amount": "4738.1900"
                },
                {
                  "fundName": "MSIF GROWTH A",
                  "fundCode": "OF61",
                  "amount": "94090.8600"
                },
                {
                  "fundName": "RYDEX OTC INV",
                  "fundCode": "OFNO",
                  "amount": "25471.3000"
                },
                {
                  "fundName": "FIRST EAGLE SOGEN   GOLD CLASS A",
                  "fundCode": "FCAA",
                  "amount": "1590.0400"
                },
                {
                  "fundName": "WASATCH MIDCAP",
                  "fundCode": "FBHH",
                  "amount": "5500.0400"
                },
                {
                  "fundName": "BANKS ULTRA SECTOR  PRO FUND INVESTOR",
                  "fundCode": "FCDW",
                  "amount": "225842.4800"
                },
                {
                  "fundName": "TRP VALUE",
                  "fundCode": "OF4M",
                  "amount": "4148.0700"
                },
                {
                  "fundName": "CAMBIAR OPPORTUNITY INSTL",
                  "fundCode": "FDCR",
                  "amount": "102613.0300"
                }
              ]
            },
            "CA": {
              "fundClassificationName": "Capital appreciation",
              "fundList": [
                {
                  "fundName": "INVS GOLD SPL MIN A",
                  "fundCode": "OSUN",
                  "amount": "66179.1500"
                },
                {
                  "fundName": "AMERICAN AADVANTAGE LARGE CAP VALUE PLAN",
                  "fundCode": "FD7X",
                  "amount": "53217.7900"
                },
                {
                  "fundName": "FMI LARGE CAP FUND",
                  "fundCode": "FDUS",
                  "amount": "22049.3700"
                },
                {
                  "fundName": "TOREADOR CORE FUND  INVESTOR CL",
                  "fundCode": "FGS1",
                  "amount": "6609.1800"
                },
                {
                  "fundName": "BERKSHIRE FOCUS FUND",
                  "fundCode": "FBMQ",
                  "amount": "31920.0800"
                },
                {
                  "fundName": "HENNESSY FOCUS FUND INVESTOR CLASS",
                  "fundCode": "FCPU",
                  "amount": "26127.0100"
                },
                {
                  "fundName": "ALGER HEALTH SCIENCEFUND CLASS A",
                  "fundCode": "FDO2",
                  "amount": "3592.1000"
                },
                {
                  "fundName": "NORTHERN SMALL CAP  VALUE",
                  "fundCode": "FD3G",
                  "amount": "40307.2400"
                }
              ]
            }
          }
        }
      }
    },
    "DY": {
      "groupDisciplineName": "Dummy",
      "summaryMap": {
        "DY": {
          "summaryDisciplineName": "Dummy",
          "fundClassificationMap": {
            "DY": {
              "fundClassificationName": "Dummy",
              "fundList": [
                {
                  "fundName": "TARGET RET TODAY",
                  "fundCode": "UDR4",
                  "amount": "748371.5295"
                },
                {
                  "fundName": "AM CENT SMCAP VAL R6",
                  "fundCode": "USX7",
                  "amount": "5841.9194"
                },
                {
                  "fundName": "CONESTOGA SM CAP GR",
                  "fundCode": "UF2G",
                  "amount": "2239414.8761"
                },
                {
                  "fundName": "120% OF LT AFR",
                  "fundCode": "UN2C",
                  "amount": "6038939.9500"
                },
                {
                  "fundName": "BR STRAT GLB BD INST",
                  "fundCode": "UYCR",
                  "amount": "2238.7200"
                },
                {
                  "fundName": "TARGET RET 2020",
                  "fundCode": "UG70",
                  "amount": "709244.7645"
                },
                {
                  "fundName": "METWEST TOT RET BOND",
                  "fundCode": "UDS1",
                  "amount": "2269226.8964"
                },
                {
                  "fundName": "BAIRD MID CAP",
                  "fundCode": "UD8O",
                  "amount": "5148920.4066"
                },
                {
                  "fundName": "FID WORLDWIDE",
                  "fundCode": "U318",
                  "amount": "14581.1668"
                },
                {
                  "fundName": "FID GR CO POOL CL 3",
                  "fundCode": "U2V5",
                  "amount": "21690625.1238"
                },
                {
                  "fundName": "SCHRODER INTL ALPHA",
                  "fundCode": "U9LO",
                  "amount": "11505.8858"
                },
                {
                  "fundName": "STOCK UNITS",
                  "fundCode": "UWFJ",
                  "amount": "159020.9495"
                },
                {
                  "fundName": "C&S US REALTY C",
                  "fundCode": "U62K",
                  "amount": "2998494.6932"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "UE26",
                  "amount": "4360133.4066"
                },
                {
                  "fundName": "SCHRODER INTL ALPHA",
                  "fundCode": "U9LO",
                  "amount": "1554358.0177"
                },
                {
                  "fundName": "BR STRAT GLB BD INST",
                  "fundCode": "UYCR",
                  "amount": "2162384.4498"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "U3Z1",
                  "amount": "514324.7114"
                },
                {
                  "fundName": "C&S US REALTY C",
                  "fundCode": "U62K",
                  "amount": "9564.4248"
                },
                {
                  "fundName": "TARGET RET 2060",
                  "fundCode": "UDR9",
                  "amount": "42890.1907"
                },
                {
                  "fundName": "RDGWTH MID CAP VALUE",
                  "fundCode": "UD8N",
                  "amount": "5146.5121"
                },
                {
                  "fundName": "120% OF LT AFR",
                  "fundCode": "UN2C",
                  "amount": "544436.4500"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "U2N2",
                  "amount": "1259710.5813"
                },
                {
                  "fundName": "MN CURRIE EMG MKT R3",
                  "fundCode": "U3AC",
                  "amount": "1845387.5214"
                },
                {
                  "fundName": "AM CENT SMCAP VAL R6",
                  "fundCode": "USX7",
                  "amount": "2512436.9959"
                },
                {
                  "fundName": "TARGET RET 2040",
                  "fundCode": "UDR7",
                  "amount": "1249506.8520"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "U2W3",
                  "amount": "4610.0722"
                },
                {
                  "fundName": "FID GR CO POOL CL 3",
                  "fundCode": "U2V5",
                  "amount": "1558827.6953"
                },
                {
                  "fundName": "COL DIV INC INST MS",
                  "fundCode": "U32Z",
                  "amount": "4902602.0929"
                },
                {
                  "fundName": "TARGET RET 2030",
                  "fundCode": "UDR6",
                  "amount": "5205813.0768"
                },
                {
                  "fundName": "FIXED INCOME FUND",
                  "fundCode": "UGT4",
                  "amount": "9259676.8800"
                },
                {
                  "fundName": "TARGET RET 2055",
                  "fundCode": "UG74",
                  "amount": "68205.4489"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "U3Z1",
                  "amount": "18435218.6381"
                },
                {
                  "fundName": "FID WORLDWIDE",
                  "fundCode": "U318",
                  "amount": "4362657.7951"
                },
                {
                  "fundName": "RDGWTH MID CAP VALUE",
                  "fundCode": "UD8N",
                  "amount": "2780910.1521"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "UE26",
                  "amount": "35558.0430"
                },
                {
                  "fundName": "FIXED INCOME FUND",
                  "fundCode": "UGT4",
                  "amount": "115713.2000"
                },
                {
                  "fundName": "COL DIV INC INST MS",
                  "fundCode": "U32Z",
                  "amount": "10884.8851"
                },
                {
                  "fundName": "STOCK UNITS",
                  "fundCode": "UWFJ",
                  "amount": "2575129.0005"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "U2V8",
                  "amount": "4739206.2413"
                },
                {
                  "fundName": "METWEST TOT RET BOND",
                  "fundCode": "UDS1",
                  "amount": "223166.6994"
                },
                {
                  "fundName": "TARGET RET 2045",
                  "fundCode": "UG73",
                  "amount": "883851.6510"
                },
                {
                  "fundName": "TARGET RET 2035",
                  "fundCode": "UG72",
                  "amount": "2318869.3230"
                },
                {
                  "fundName": "BAIRD MID CAP",
                  "fundCode": "UD8O",
                  "amount": "146031.6441"
                },
                {
                  "fundName": "TARGET RET 2050",
                  "fundCode": "UDR8",
                  "amount": "901199.7428"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "U2W3",
                  "amount": "3476283.1129"
                },
                {
                  "fundName": "CONESTOGA SM CAP GR",
                  "fundCode": "UF2G",
                  "amount": "14823.6581"
                },
                {
                  "fundName": "TARGET RET 2025",
                  "fundCode": "UG71",
                  "amount": "3731907.7012"
                }
              ]
            }
          }
        },
        "VA": {
          "summaryDisciplineName": "Valuation",
          "fundClassificationMap": {
            "FB": {
              "fundClassificationName": "FBSI valuation",
              "fundList": [
                {
                  "fundName": "BROKERAGELINK",
                  "fundCode": "BLNC",
                  "amount": "172195398.5300"
                }
              ]
            }
          }
        }
      }
    },
    "OT": {
      "groupDisciplineName": "Other",
      "summaryMap": {
        "OT": {
          "summaryDisciplineName": "Other",
          "fundClassificationMap": {
            "OT": {
              "fundClassificationName": "Other",
              "fundList": [
                {
                  "fundName": "FBSI BOND FUND PLACEHOLDER",
                  "fundCode": "BOND",
                  "amount": "728832.7700"
                },
                {
                  "fundName": "FBSI NFMF FUND PLACEHOLDER",
                  "fundCode": "NFMF",
                  "amount": "3869081.7800"
                },
                {
                  "fundName": "TRP RETIRE 2020 A",
                  "fundCode": "OTHR",
                  "amount": "87293.0000"
                },
                {
                  "fundName": "FBSI EQTY FUND PLACEHOLDER",
                  "fundCode": "EQTY",
                  "amount": "100881944.4300"
                }
              ]
            }
          }
        }
      }
    },
    "MF": {
      "groupDisciplineName": "Mutual fund",
      "summaryMap": {
        "MM": {
          "summaryDisciplineName": "Money market",
          "fundClassificationMap": {
            "TM": {
              "fundClassificationName": "Taxable Money Market",
              "fundList": [
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "1202604.0200"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "12089437.4700"
                },
                {
                  "fundName": "FID GOV CASH RESERVE",
                  "fundCode": "0055",
                  "amount": "30931375.5900"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "3244285.9100"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "11678441.2100"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "5325359.5600"
                },
                {
                  "fundName": "FID MONEY MARKET PRM",
                  "fundCode": "2738",
                  "amount": "2173.4600"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "7906785.3700"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "7458215.2800"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "3880038.7400"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "9333540.5900"
                },
                {
                  "fundName": "FIMM TREAS ONLY INST",
                  "fundCode": "2643",
                  "amount": "12937147.3300"
                },
                {
                  "fundName": "FIMM MMKT INST",
                  "fundCode": "2013",
                  "amount": "6174.7900"
                },
                {
                  "fundName": "FID MONEY MARKET",
                  "fundCode": "0454",
                  "amount": "60041.4800"
                }
              ]
            }
          }
        },
        "FI": {
          "summaryDisciplineName": "Fixed income",
          "fundClassificationMap": {
            "HI": {
              "fundClassificationName": "High income",
              "fundList": [
                {
                  "fundName": "FID FLOAT RT HI INC",
                  "fundCode": "0814",
                  "amount": "18442.4900"
                },
                {
                  "fundName": "FID NEW MARKETS INC",
                  "fundCode": "0331",
                  "amount": "290.7800"
                },
                {
                  "fundName": "FID CAPITAL & INCOME",
                  "fundCode": "0038",
                  "amount": "2739379.6800"
                },
                {
                  "fundName": "FID HIGH INCOME",
                  "fundCode": "0455",
                  "amount": "15388.2100"
                }
              ]
            },
            "TB": {
              "fundClassificationName": "Taxable Fixed Income",
              "fundList": [
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "58827.5100"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "5739894.8010"
                },
                {
                  "fundName": "FID INFL PR BD IDX",
                  "fundCode": "2418",
                  "amount": "27905.7500"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "20477946.6326"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "18189018.1909"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "5921475.8388"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "24477.2800"
                },
                {
                  "fundName": "FID TOTAL BOND",
                  "fundCode": "0820",
                  "amount": "111810.6000"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "87366062.8313"
                },
                {
                  "fundName": "FID ST TR BD IDX",
                  "fundCode": "3049",
                  "amount": "33767.3500"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "900444.0796"
                },
                {
                  "fundName": "FID LTD TERM BOND",
                  "fundCode": "2622",
                  "amount": "53761.7400"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "11061530.2229"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "1144432.5592"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "844197.4067"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "18160665.3285"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "548545.3830"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "203238.7183"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "19417602.2666"
                },
                {
                  "fundName": "FID INVST GR BD",
                  "fundCode": "0026",
                  "amount": "91708.8500"
                },
                {
                  "fundName": "FID CONSV INC BD",
                  "fundCode": "2267",
                  "amount": "4959.2400"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "36356839.9436"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "1080192.0514"
                },
                {
                  "fundName": "FID ST BOND IDX",
                  "fundCode": "3041",
                  "amount": "35790.2900"
                },
                {
                  "fundName": "FID SHORT TERM BOND",
                  "fundCode": "0450",
                  "amount": "767.8000"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "12852968.5843"
                },
                {
                  "fundName": "FID INTERMED BOND",
                  "fundCode": "0032",
                  "amount": "14600.6800"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "514291.2880"
                },
                {
                  "fundName": "FIDELITY GOVT INCOME",
                  "fundCode": "0054",
                  "amount": "166875.8800"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "190606.1589"
                },
                {
                  "fundName": "FID LT TR BD IDX",
                  "fundCode": "3047",
                  "amount": "5687619.9485"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "30684342.1319"
                },
                {
                  "fundName": "FID CORPORATE BOND",
                  "fundCode": "2208",
                  "amount": "29160.4400"
                },
                {
                  "fundName": "FID US BOND IDX",
                  "fundCode": "2326",
                  "amount": "44946015.6673"
                },
                {
                  "fundName": "FID STRATEGIC INCOME",
                  "fundCode": "3082",
                  "amount": "71065.1900"
                }
              ]
            }
          }
        },
        "IQ": {
          "summaryDisciplineName": "International equity",
          "fundClassificationMap": {
            "IE": {
              "fundClassificationName": "International",
              "fundList": [
                {
                  "fundName": "FID INTL SMALL CAP",
                  "fundCode": "0818",
                  "amount": "59808.6600"
                },
                {
                  "fundName": "FID CHINA REGION",
                  "fundCode": "0352",
                  "amount": "10397.9400"
                },
                {
                  "fundName": "FID OVERSEAS",
                  "fundCode": "0094",
                  "amount": "1044.5100"
                },
                {
                  "fundName": "FID GLB COMDTY STK",
                  "fundCode": "2120",
                  "amount": "52018.1900"
                },
                {
                  "fundName": "FID GLB EX US IDX",
                  "fundCode": "2348",
                  "amount": "424.8400"
                },
                {
                  "fundName": "FID WORLDWIDE",
                  "fundCode": "0318",
                  "amount": "63984703.1023"
                },
                {
                  "fundName": "FID INTL REAL ESTATE",
                  "fundCode": "1368",
                  "amount": "13002.6200"
                },
                {
                  "fundName": "FID CANADA",
                  "fundCode": "0309",
                  "amount": "3849.5600"
                },
                {
                  "fundName": "FID EMERGING MKTS",
                  "fundCode": "0322",
                  "amount": "120876.3700"
                },
                {
                  "fundName": "FID EMRG MKTS IDX",
                  "fundCode": "2344",
                  "amount": "37272.6500"
                },
                {
                  "fundName": "FID NORDIC",
                  "fundCode": "0342",
                  "amount": "4170.3100"
                },
                {
                  "fundName": "FID DIVERSIFD INTL",
                  "fundCode": "0325",
                  "amount": "129521.1200"
                },
                {
                  "fundName": "FID INTL INDEX",
                  "fundCode": "2363",
                  "amount": "146514.7900"
                },
                {
                  "fundName": "FIDELITY ZERO       INTERNATIONAL INDEX",
                  "fundCode": "3228",
                  "amount": "329288.5000"
                },
                {
                  "fundName": "FID INTL CAP APPREC",
                  "fundCode": "0335",
                  "amount": "67853.5000"
                },
                {
                  "fundName": "FID TOTAL INTL IDX",
                  "fundCode": "2834",
                  "amount": "16813.4500"
                },
                {
                  "fundName": "FID PACIFIC BASIN",
                  "fundCode": "0302",
                  "amount": "6861.0900"
                },
                {
                  "fundName": "FID INTL ENH INDEX",
                  "fundCode": "2010",
                  "amount": "4086.6700"
                },
                {
                  "fundName": "FID EMERGING ASIA",
                  "fundCode": "0351",
                  "amount": "9729.3100"
                },
                {
                  "fundName": "FID TOTAL EMERG MKTS",
                  "fundCode": "2369",
                  "amount": "44478.7200"
                }
              ]
            }
          }
        },
        "DQ": {
          "summaryDisciplineName": "Domestic equity",
          "fundClassificationMap": {
            "FF": {
              "fundClassificationName": "Fund of funds",
              "fundList": [
                {
                  "fundName": "FID FREEDOM 2045",
                  "fundCode": "1617",
                  "amount": "9960.5900"
                },
                {
                  "fundName": "FID FREEDOM 2035",
                  "fundCode": "1315",
                  "amount": "115792.8400"
                },
                {
                  "fundName": "FID FREEDOM 2020",
                  "fundCode": "0372",
                  "amount": "403479.0800"
                },
                {
                  "fundName": "FID FDM IDX 2055 INV",
                  "fundCode": "2338",
                  "amount": "2805.7900"
                },
                {
                  "fundName": "FID FDM IDX 2035 INV",
                  "fundCode": "2238",
                  "amount": "29928.2500"
                },
                {
                  "fundName": "FID FREEDOM 2025",
                  "fundCode": "1314",
                  "amount": "240006.7800"
                },
                {
                  "fundName": "FID FREEDOM 2030",
                  "fundCode": "0373",
                  "amount": "7947.2800"
                },
                {
                  "fundName": "FID FREEDOM 2040",
                  "fundCode": "0718",
                  "amount": "6882.3300"
                },
                {
                  "fundName": "FID FDM IDX 2060 INV",
                  "fundCode": "2714",
                  "amount": "111495.3700"
                },
                {
                  "fundName": "FID FDM IDX 2030 IPR",
                  "fundCode": "2770",
                  "amount": "237711.4700"
                }
              ]
            },
            "AS": {
              "fundClassificationName": "Asset allocation",
              "fundList": [
                {
                  "fundName": "FID ASSET MGR 50%",
                  "fundCode": "0314",
                  "amount": "100822.6100"
                },
                {
                  "fundName": "FID STRAT DIV & INC",
                  "fundCode": "1329",
                  "amount": "446891.1300"
                },
                {
                  "fundName": "FID ASSET MGR 40%",
                  "fundCode": "1958",
                  "amount": "23.7300"
                },
                {
                  "fundName": "FA MULTI-ASSET INC",
                  "fundCode": "3083",
                  "amount": "130656.9600"
                },
                {
                  "fundName": "FID ASSET MGR 20%",
                  "fundCode": "0328",
                  "amount": "82.7800"
                }
              ]
            },
            "GI": {
              "fundClassificationName": "Growth & income",
              "fundList": [
                {
                  "fundName": "FID GROWTH & INC",
                  "fundCode": "0027",
                  "amount": "7504.3200"
                },
                {
                  "fundName": "FID FIDELITY FUND",
                  "fundCode": "0003",
                  "amount": "531.4000"
                },
                {
                  "fundName": "FID REAL ESTATE IDX",
                  "fundCode": "2355",
                  "amount": "107473.7700"
                },
                {
                  "fundName": "FID REAL ESTATE INVS",
                  "fundCode": "0303",
                  "amount": "9833.8300"
                },
                {
                  "fundName": "FID BALANCED",
                  "fundCode": "0304",
                  "amount": "854124.6100"
                },
                {
                  "fundName": "FID VALUE",
                  "fundCode": "0039",
                  "amount": "1499.8600"
                },
                {
                  "fundName": "FID PURITAN",
                  "fundCode": "0004",
                  "amount": "2139315.1700"
                },
                {
                  "fundName": "FID REAL ESTATE INC",
                  "fundCode": "0833",
                  "amount": "34599.2700"
                },
                {
                  "fundName": "FID MEGA CAP STOCK",
                  "fundCode": "0361",
                  "amount": "1392.7000"
                }
              ]
            },
            "QT": {
              "fundClassificationName": "Quantitative",
              "fundList": [
                {
                  "fundName": "FID DISCIPLND EQTY",
                  "fundCode": "0315",
                  "amount": "4857.7500"
                },
                {
                  "fundName": "FID FOCUSED STOCK",
                  "fundCode": "0333",
                  "amount": "15490.1000"
                }
              ]
            },
            "SG": {
              "fundClassificationName": "Specialized growth",
              "fundList": [
                {
                  "fundName": "FID DIVIDEND GR",
                  "fundCode": "0330",
                  "amount": "5055.7200"
                },
                {
                  "fundName": "FID OTC PORTFOLIO",
                  "fundCode": "0093",
                  "amount": "250151.5900"
                },
                {
                  "fundName": "FID CONTRAFUND",
                  "fundCode": "0022",
                  "amount": "306256.0500"
                },
                {
                  "fundName": "FID LOW PRICED STK",
                  "fundCode": "0316",
                  "amount": "148151.9700"
                },
                {
                  "fundName": "FID GROWTH DISC",
                  "fundCode": "0339",
                  "amount": "4842.6500"
                },
                {
                  "fundName": "FID VALUE STRAT",
                  "fundCode": "0014",
                  "amount": "3901.9600"
                }
              ]
            },
            "SI": {
              "fundClassificationName": "Structured investments",
              "fundList": [
                {
                  "fundName": "FID NASDAQ COMP INDX",
                  "fundCode": "1282",
                  "amount": "37938.9800"
                },
                {
                  "fundName": "FID SM CAP GR IDX",
                  "fundCode": "3405",
                  "amount": "594.2100"
                },
                {
                  "fundName": "FIDELITY ZERO       LARGE CAP INDEX FUND",
                  "fundCode": "3231",
                  "amount": "84473.9400"
                },
                {
                  "fundName": "FIDELITY ZERO       TOTAL MARKET INDEX",
                  "fundCode": "3227",
                  "amount": "522710.6700"
                },
                {
                  "fundName": "FID 500 INDEX",
                  "fundCode": "2328",
                  "amount": "798093.8000"
                },
                {
                  "fundName": "FID LC CORE ENH INDX",
                  "fundCode": "1827",
                  "amount": "22522.3500"
                },
                {
                  "fundName": "FID MID CAP VAL IDX",
                  "fundCode": "3404",
                  "amount": "1207.4100"
                },
                {
                  "fundName": "FID EXTD MKT IDX",
                  "fundCode": "2365",
                  "amount": "6922.8100"
                },
                {
                  "fundName": "FID MID CAP IDX",
                  "fundCode": "2352",
                  "amount": "120421.9300"
                },
                {
                  "fundName": "FID SM CAP IDX",
                  "fundCode": "2358",
                  "amount": "137204.7500"
                },
                {
                  "fundName": "FID MID CAP GR IDX",
                  "fundCode": "3403",
                  "amount": "1459.6800"
                },
                {
                  "fundName": "FID SM CAP VAL IDX",
                  "fundCode": "3406",
                  "amount": "16368.2500"
                },
                {
                  "fundName": "FID LG CAP VAL IDX",
                  "fundCode": "2830",
                  "amount": "63428.2500"
                },
                {
                  "fundName": "FID LC GRO ENH INDX",
                  "fundCode": "1829",
                  "amount": "4807.7500"
                },
                {
                  "fundName": "FID TOTAL MKT IDX",
                  "fundCode": "2361",
                  "amount": "413355.5100"
                },
                {
                  "fundName": "FID LG CAP GR IDX",
                  "fundCode": "2826",
                  "amount": "235244.9300"
                },
                {
                  "fundName": "FID LC VAL ENH INDX",
                  "fundCode": "1828",
                  "amount": "214044.4200"
                },
                {
                  "fundName": "FIDELITY ZERO EXTND MARKET INDEX FUND",
                  "fundCode": "3230",
                  "amount": "7370.4800"
                },
                {
                  "fundName": "FID US SUSTN IDX",
                  "fundCode": "2941",
                  "amount": "36862.2200"
                }
              ]
            },
            "VL": {
              "fundClassificationName": "Value",
              "fundList": [
                {
                  "fundName": "FID STKSEL LGCAP VAL",
                  "fundCode": "0708",
                  "amount": "49.3100"
                },
                {
                  "fundName": "FID MID CAP VALUE",
                  "fundCode": "0762",
                  "amount": "14774.1800"
                }
              ]
            },
            "SL": {
              "fundClassificationName": "Selects",
              "fundList": [
                {
                  "fundName": "FID SEL IT SERVICES",
                  "fundCode": "0353",
                  "amount": "30280.6800"
                },
                {
                  "fundName": "FID SEL BANKING",
                  "fundCode": "0507",
                  "amount": "17903.9900"
                },
                {
                  "fundName": "FID NATURAL RES",
                  "fundCode": "0514",
                  "amount": "2965.6800"
                },
                {
                  "fundName": "FID SEL TELECOMM",
                  "fundCode": "0096",
                  "amount": "4906.0000"
                },
                {
                  "fundName": "FID SEL ENERGY",
                  "fundCode": "0060",
                  "amount": "532501.9200"
                },
                {
                  "fundName": "FID SEL CONS DISCR",
                  "fundCode": "0517",
                  "amount": "9692.6800"
                },
                {
                  "fundName": "FID SEL CONS STAPLES",
                  "fundCode": "0009",
                  "amount": "10734.2800"
                },
                {
                  "fundName": "FID SEL UTILITIES",
                  "fundCode": "0065",
                  "amount": "3809.1500"
                },
                {
                  "fundName": "FID SEL RETAILING",
                  "fundCode": "0046",
                  "amount": "127062.4300"
                },
                {
                  "fundName": "FID SEL HTH CARE SVC",
                  "fundCode": "0505",
                  "amount": "12118.8600"
                },
                {
                  "fundName": "FID SEL WIRELESS",
                  "fundCode": "0963",
                  "amount": "4222.1200"
                },
                {
                  "fundName": "FID SEL PHARMACEUTCL",
                  "fundCode": "0580",
                  "amount": "24280.9800"
                },
                {
                  "fundName": "FID SEL FINANCIAL",
                  "fundCode": "0066",
                  "amount": "29186.4700"
                },
                {
                  "fundName": "FID SEL MED TECH&DV",
                  "fundCode": "0354",
                  "amount": "75710.7400"
                },
                {
                  "fundName": "FID SEL BIOTECH",
                  "fundCode": "0042",
                  "amount": "430541.2700"
                },
                {
                  "fundName": "FID SEL CONSTR/HOUSE",
                  "fundCode": "0511",
                  "amount": "23971.7300"
                },
                {
                  "fundName": "FID SEL GOLD",
                  "fundCode": "0041",
                  "amount": "54172.9400"
                },
                {
                  "fundName": "FID SEL BROKERAGE",
                  "fundCode": "0068",
                  "amount": "47293.4000"
                },
                {
                  "fundName": "FID SEL CHEMICALS",
                  "fundCode": "0069",
                  "amount": "1474.4500"
                },
                {
                  "fundName": "FID SEL SEMICONDUCT",
                  "fundCode": "0008",
                  "amount": "295163.1000"
                },
                {
                  "fundName": "FID SEL MATERIALS",
                  "fundCode": "0509",
                  "amount": "52107.6800"
                },
                {
                  "fundName": "FID SEL SOFTWARE",
                  "fundCode": "0028",
                  "amount": "285962.2700"
                },
                {
                  "fundName": "FID SEL TEC HARDWARE",
                  "fundCode": "0007",
                  "amount": "4146.9000"
                },
                {
                  "fundName": "FID AGRICULTURAL",
                  "fundCode": "6041",
                  "amount": "3433.5900"
                },
                {
                  "fundName": "FID SEL INSURANCE",
                  "fundCode": "0045",
                  "amount": "8407.5200"
                },
                {
                  "fundName": "FID SEL TECHNOLOGY",
                  "fundCode": "0064",
                  "amount": "173812.3300"
                },
                {
                  "fundName": "FID SEL TRANSPORT",
                  "fundCode": "0512",
                  "amount": "6095.5600"
                },
                {
                  "fundName": "FID SEL INDUSTRIALS",
                  "fundCode": "0515",
                  "amount": "4775.0000"
                },
                {
                  "fundName": "FID SEL HEALTHCARE",
                  "fundCode": "0063",
                  "amount": "427079.6200"
                },
                {
                  "fundName": "FID ENV ALT ENERGY",
                  "fundCode": "0516",
                  "amount": "5315.8000"
                },
                {
                  "fundName": "FID SEL DEFENSE",
                  "fundCode": "0067",
                  "amount": "6138.9300"
                },
                {
                  "fundName": "FID TELECOM & UTIL",
                  "fundCode": "0311",
                  "amount": "37148.3900"
                }
              ]
            },
            "GR": {
              "fundClassificationName": "Growth",
              "fundList": [
                {
                  "fundName": "FID LARGE CAP STOCK",
                  "fundCode": "0338",
                  "amount": "77492.4700"
                },
                {
                  "fundName": "FID GROWTH STRAT",
                  "fundCode": "0324",
                  "amount": "2567.3800"
                },
                {
                  "fundName": "FID INFRASTRUCTURE",
                  "fundCode": "3488",
                  "amount": "3208.3500"
                },
                {
                  "fundName": "FID SMALL CAP GROWTH",
                  "fundCode": "1388",
                  "amount": "4564.8900"
                },
                {
                  "fundName": "FID MID CAP STOCK",
                  "fundCode": "0337",
                  "amount": "14839.2100"
                },
                {
                  "fundName": "FID BLUE CHIP GR",
                  "fundCode": "0312",
                  "amount": "156787.5600"
                },
                {
                  "fundName": "FID US LOW VOL EQ",
                  "fundCode": "5029",
                  "amount": "88338.8600"
                }
              ]
            },
            "CA": {
              "fundClassificationName": "Capital appreciation",
              "fundList": [
                {
                  "fundName": "FID TREND",
                  "fundCode": "0005",
                  "amount": "8606.7200"
                },
                {
                  "fundName": "FID NEW MILLEN",
                  "fundCode": "0300",
                  "amount": "118244.2700"
                },
                {
                  "fundName": "FID MAGELLAN",
                  "fundCode": "0021",
                  "amount": "2743015.1900"
                },
                {
                  "fundName": "FID BLUE CHIP VALUE",
                  "fundCode": "1271",
                  "amount": "15778.0400"
                },
                {
                  "fundName": "FID VALUE DISCOV",
                  "fundCode": "0832",
                  "amount": "6622.3600"
                },
                {
                  "fundName": "FID SMALL CAP VALUE",
                  "fundCode": "1389",
                  "amount": "30421.9300"
                }
              ]
            }
          }
        }
      }
    },
    "MI": {
      "groupDisciplineName": "GIC",
      "summaryMap": {
        "IC": {
          "summaryDisciplineName": "Investment  contracts",
          "fundClassificationMap": {
            "OM": {
              "fundClassificationName": "Outside managed",
              "fundList": [
                {
                  "fundName": "A-TENET 401(K) RETIREMENT SVGS",
                  "fundCode": "GCT4",
                  "amount": "584671521.1300"
                }
              ]
            }
          }
        }
      }
    },
    "SA": {
      "groupDisciplineName": "Separate accounts",
      "summaryMap": {
        "FI": {
          "summaryDisciplineName": "Fixed income",
          "fundClassificationMap": {
            "TB": {
              "fundClassificationName": "Taxable Fixed Income",
              "fundList": [
                {
                  "fundName": "METWEST TOT RET BOND",
                  "fundCode": "TDS1",
                  "amount": "159562395.6673"
                }
              ]
            }
          }
        },
        "IQ": {
          "summaryDisciplineName": "International equity",
          "fundClassificationMap": {
            "IE": {
              "fundClassificationName": "International",
              "fundList": [
                {
                  "fundName": "SCHRODER INTL ALPHA",
                  "fundCode": "O9LO",
                  "amount": "102687117.2794"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "62690844.4591"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "10669236.4667"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "28744588.6822"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "47935722.3677"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "47177459.5101"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "64843075.1274"
                },
                {
                  "fundName": "MN CURRIE EMG MKT R3",
                  "fundCode": "O3AC",
                  "amount": "42746947.8954"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "25711574.8340"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "54153719.4747"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "69542099.6595"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "9229369.0615"
                },
                {
                  "fundName": "SP DEV INTL IDX CL E",
                  "fundCode": "3963",
                  "amount": "60906893.6433"
                }
              ]
            }
          }
        },
        "BL": {
          "summaryDisciplineName": "Blended",
          "fundClassificationMap": {
            "BL": {
              "fundClassificationName": "Blended",
              "fundList": [
                {
                  "fundName": "TARGET RET 2035",
                  "fundCode": "TG72",
                  "amount": "512137136.7720"
                },
                {
                  "fundName": "TARGET RET 2020",
                  "fundCode": "TG70",
                  "amount": "327511359.1147"
                },
                {
                  "fundName": "TARGET RET TODAY",
                  "fundCode": "TDR4",
                  "amount": "170616971.2982"
                },
                {
                  "fundName": "TARGET RET 2030",
                  "fundCode": "TDR6",
                  "amount": "567482557.3641"
                },
                {
                  "fundName": "TARGET RET 2045",
                  "fundCode": "TG73",
                  "amount": "346593008.0790"
                },
                {
                  "fundName": "TARGET RET 2055",
                  "fundCode": "TG74",
                  "amount": "182646485.7652"
                },
                {
                  "fundName": "TARGET RET 2050",
                  "fundCode": "TDR8",
                  "amount": "300189714.8850"
                },
                {
                  "fundName": "TARGET RET 2025",
                  "fundCode": "TG71",
                  "amount": "530239360.4200"
                },
                {
                  "fundName": "TARGET RET 2060",
                  "fundCode": "TDR9",
                  "amount": "67706741.7929"
                },
                {
                  "fundName": "TARGET RET 2040",
                  "fundCode": "TDR7",
                  "amount": "408652818.8420"
                }
              ]
            }
          }
        },
        "DQ": {
          "summaryDisciplineName": "Domestic equity",
          "fundClassificationMap": {
            "GI": {
              "fundClassificationName": "Growth & income",
              "fundList": [
                {
                  "fundName": "COL DIV INC INST MS",
                  "fundCode": "O32Z",
                  "amount": "170645118.5131"
                }
              ]
            },
            "SI": {
              "fundClassificationName": "Structured investments",
              "fundList": [
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "201681594.4685"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "158860741.4285"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "85224493.7729"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "7572068.6899"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "30593136.4192"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "96678626.9569"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "230313178.8048"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "179171116.5334"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "156115063.9860"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "562235552.3560"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "34083000.8422"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "43331169.4592"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "20419197.5859"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "18321027.5584"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "214596247.8517"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "38506519.6365"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "6557093.5091"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "49460135.7466"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "33517706.9875"
                },
                {
                  "fundName": "SP EXT MKT IDX CL E",
                  "fundCode": "3988",
                  "amount": "46091112.5069"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "35256364.2816"
                },
                {
                  "fundName": "SP 500 INDEX PL CL F",
                  "fundCode": "6511",
                  "amount": "95106487.1702"
                }
              ]
            },
            "VL": {
              "fundClassificationName": "Value",
              "fundList": [
                {
                  "fundName": "RDGWTH MID CAP VALUE",
                  "fundCode": "TD8N",
                  "amount": "95946067.9036"
                }
              ]
            },
            "SL": {
              "fundClassificationName": "Selects",
              "fundList": [
                {
                  "fundName": "C&S US REALTY C",
                  "fundCode": "O62K",
                  "amount": "50768865.7670"
                }
              ]
            },
            "GR": {
              "fundClassificationName": "Growth",
              "fundList": [
                {
                  "fundName": "CONESTOGA SM CAP GR",
                  "fundCode": "TF2G",
                  "amount": "89670842.2948"
                },
                {
                  "fundName": "BAIRD MID CAP",
                  "fundCode": "TD8O",
                  "amount": "191096574.1918"
                }
              ]
            }
          }
        }
      }
    },
    "PO": {
      "groupDisciplineName": "Commingled pools",
      "summaryMap": {
        "FI": {
          "summaryDisciplineName": "Fixed income",
          "fundClassificationMap": {
            "TB": {
              "fundClassificationName": "Taxable Fixed Income",
              "fundList": [
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "26755979.2346"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "2584562.7072"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "923170.8446"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "2065325.1079"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "1749961.4291"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "18027630.2586"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "342263.7322"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "22607074.8313"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "1515335.6024"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "27666193.9656"
                },
                {
                  "fundName": "FIAM ITM INF-PR BD D",
                  "fundCode": "4062",
                  "amount": "9339976.9711"
                }
              ]
            }
          }
        },
        "DQ": {
          "summaryDisciplineName": "Domestic equity",
          "fundClassificationMap": {
            "GR": {
              "fundClassificationName": "Growth",
              "fundList": [
                {
                  "fundName": "FID GR CO POOL CL 3",
                  "fundCode": "4005",
                  "amount": "1036021608.0730"
                }
              ]
            }
          }
        }
      }
    }
  }
}]

  constructor() {
    this.expandAndCheckedValues();
  }

  expandAndCheckedValues() {
    this.aseetsResponseData.forEach((element, i) => {
      for (let key in element.taBusSoldID) {
        if (key != "expand") {
          Object.keys(
            element.taBusSoldID[key].map((childElement, childIndex) => {
              childElement = Object.assign(childElement, {
                expand: false,
                checked: false,
              });
            })
          );
        }
      }
    });
  }

  ngOnInit() {
    this.assetsData = this.aseetsResponseData;
    console.log(this.assetsData);
  }

  checkChild(parent_i, i) {
    parent_i[i].expand = !parent_i[i].expand;
    parent_i[i].checked = !parent_i[i].checked;
  }

  // checkSubChild(group_i, parent_i, child_i, i) {
  //   this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand =
  //     !this.arr[group_i].items[parent_i].childs[child_i].subChilds[i].expand;
  // }

  checklastChild() {
    this.showData = !this.showData;
  }
}

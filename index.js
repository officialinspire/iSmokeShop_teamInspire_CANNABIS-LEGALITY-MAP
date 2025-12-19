// State legality data with comprehensive information
const stateData = {
    "California": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with recommendation",
            possession: "Up to 1 oz in public, 8 grams of concentrate",
            cultivation: "Up to 6 plants per residence",
            notes: "First state to legalize medical marijuana (1996). Recreational sales began in 2018."
        },
        psilocybin: {
            status: "Illegal, but decriminalized in some cities",
            notes: "Oakland, Santa Cruz, and San Francisco have decriminalized. Statewide legislation pending."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance. Some religious exemptions may apply."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Legal for Native American Church members for religious ceremonies."
        }
    },
    "Colorado": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz in public, 2 oz at home",
            cultivation: "Up to 6 plants (3 flowering)",
            notes: "First state to legalize recreational marijuana (2012). Robust regulatory framework."
        },
        psilocybin: {
            status: "Decriminalized in Denver",
            notes: "Denver decriminalized in 2019. Natural Medicine Health Act passed in 2022."
        },
        dmt: {
            status: "Decriminalized in Denver",
            notes: "Included in Denver's decriminalization of natural psychedelics."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Legal for Native American Church members."
        }
    },
    "Washington": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with authorization",
            possession: "Up to 1 oz usable cannabis",
            cultivation: "Medical patients only (limited)",
            notes: "Legalized alongside Colorado in 2012. State-run retail system."
        },
        psilocybin: {
            status: "Illegal",
            notes: "Efforts for decriminalization ongoing in Seattle."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I controlled substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions for Native American Church."
        }
    },
    "Oregon": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz in public, 8 oz at home",
            cultivation: "Up to 4 plants per household",
            notes: "First state to decriminalize marijuana (1973). Recreational legal since 2014."
        },
        psilocybin: {
            status: "Legalized for therapeutic use",
            notes: "Measure 109 created legal psilocybin therapy program (2020). Services launched in 2023."
        },
        dmt: {
            status: "Illegal",
            notes: "Not included in psilocybin therapy program."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions for Native American Church."
        }
    },
    "Alaska": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with registry card",
            possession: "Up to 1 oz in public, 4 oz at home",
            cultivation: "Up to 6 plants (3 flowering)",
            notes: "Legalized recreational use in 2014. Remote communities may have local restrictions."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization efforts currently."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I controlled substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Nevada": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz of flower, 1/8 oz of concentrate",
            cultivation: "Up to 6 plants if 25+ miles from dispensary",
            notes: "Recreational sales began in 2017. Thriving market in Las Vegas and Reno."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No current decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions for Native American Church."
        }
    },
    "Massachusetts": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz in public, 10 oz at home",
            cultivation: "Up to 6 plants per person, 12 per household",
            notes: "Legalized in 2016, sales began in 2018. Strong regulatory oversight."
        },
        psilocybin: {
            status: "Illegal",
            notes: "Decriminalized in Cambridge, Somerville, Northampton, and Easthampton."
        },
        dmt: {
            status: "Illegal",
            notes: "Some cities have decriminalized entheogenic plants."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Maine": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 2.5 oz",
            cultivation: "Up to 3 flowering plants, 12 immature",
            notes: "Legalized in 2016, retail sales began in 2020."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions for Native American Church."
        }
    },
    "Michigan": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 2.5 oz in public, 10 oz at home",
            cultivation: "Up to 12 plants per household",
            notes: "Legalized in 2018, sales began in 2019. Rapidly growing market."
        },
        psilocybin: {
            status: "Decriminalized in several cities",
            notes: "Detroit, Ann Arbor, Hazel Park, and Grand Rapids have decriminalized."
        },
        dmt: {
            status: "Decriminalized in some cities",
            notes: "Included in entheogenic plant decriminalization in Detroit and Ann Arbor."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Vermont": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz in public, 2 oz at home",
            cultivation: "Up to 2 mature, 4 immature plants",
            notes: "First state to legalize through legislature (2018). Retail sales began in 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Illinois": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 30 grams of flower for residents",
            cultivation: "Medical patients only, up to 5 plants",
            notes: "Legalized in 2019, sales began in 2020. Equity-focused program."
        },
        psilocybin: {
            status: "Illegal",
            notes: "Chicago has decriminalized possession."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Arizona": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz of flower, 5 grams of concentrate",
            cultivation: "Up to 6 plants if 25+ miles from dispensary",
            notes: "Legalized in 2020. Strong medical program since 2010."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Strong Native American Church presence; religious exemptions apply."
        }
    },
    "Montana": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz",
            cultivation: "Up to 4 plants per household",
            notes: "Legalized in 2020, sales began in 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "New Jersey": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz",
            cultivation: "Not permitted for recreational users",
            notes: "Legalized in 2021, sales began in 2022. Medical program since 2010."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "New York": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 3 oz in public, 5 lbs at home",
            cultivation: "Up to 6 plants per person, 12 per household",
            notes: "Legalized in 2021, retail sales began in 2022. Large market potential."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No statewide decriminalization, but efforts ongoing."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Connecticut": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1.5 oz on person",
            cultivation: "Up to 6 plants per household (starting 2023)",
            notes: "Legalized in 2021, sales began in 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "New Mexico": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 2 oz",
            cultivation: "Up to 6 mature, 6 immature plants",
            notes: "Legalized in 2021, sales began in 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply; Native American Church has significant presence."
        }
    },
    "Virginia": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+ (limited)",
            medical: "Legal with medical card",
            possession: "Up to 1 oz",
            cultivation: "Up to 4 plants per household",
            notes: "Legalized possession in 2021, but no retail sales framework yet. Medical dispensaries operational."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Rhode Island": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz",
            cultivation: "Up to 6 plants per household",
            notes: "Legalized in 2022, sales began in late 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Maryland": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1.5 oz",
            cultivation: "Up to 2 plants per person",
            notes: "Legalized in 2023, sales began in 2023."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Missouri": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 3 oz",
            cultivation: "Up to 6 flowering plants",
            notes: "Legalized in 2022, sales began in 2023."
        },
        psilocybin: {
            status: "Illegal",
            notes: "Kansas City has decriminalized."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Delaware": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 1 oz",
            cultivation: "Not permitted",
            notes: "Legalized in 2023, retail framework being developed."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Minnesota": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 2 oz in public, 2 lbs at home",
            cultivation: "Up to 8 plants per household",
            notes: "Legalized in 2023, sales expected in 2025."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Ohio": {
        status: "fully-legal",
        cannabis: {
            recreational: "Legal for adults 21+",
            medical: "Legal with medical card",
            possession: "Up to 2.5 oz",
            cultivation: "Up to 6 plants per person, 12 per household",
            notes: "Legalized in 2023, sales framework being developed."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    // Medical Only States
    "Florida": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Up to 2.5 oz per 35 days (medical only)",
            cultivation: "Not permitted",
            notes: "Medical program since 2016. Recreational legalization on ballot multiple times."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Pennsylvania": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal (decriminalized in some cities)",
            medical: "Legal with medical card",
            possession: "Up to 30-day supply (medical only)",
            cultivation: "Not permitted",
            notes: "Medical program since 2016. Philadelphia has decriminalized small amounts."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Arkansas": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Up to 2.5 oz per 14 days (medical only)",
            cultivation: "Not permitted",
            notes: "Medical program approved in 2016."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Louisiana": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal (decriminalized)",
            medical: "Legal with recommendation",
            possession: "Small amounts decriminalized (14 grams or less)",
            cultivation: "Not permitted",
            notes: "Medical program operational. Simple possession decriminalized in some areas."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Utah": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card (limited)",
            possession: "Medical patients only",
            cultivation: "Not permitted",
            notes: "Conservative medical program approved in 2018."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Oklahoma": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Up to 3 oz on person, 8 oz at home (medical)",
            cultivation: "Up to 6 mature, 6 seedlings (medical)",
            notes: "One of the most liberal medical programs in the US (2018)."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "North Dakota": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Up to 3 oz per 30 days (medical)",
            cultivation: "Not permitted",
            notes: "Medical program approved in 2016."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "South Dakota": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Up to 3 oz (medical)",
            cultivation: "Not permitted",
            notes: "Medical program approved in 2020 after legal challenges."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "West Virginia": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "30-day supply (medical)",
            cultivation: "Not permitted",
            notes: "Medical program approved in 2017."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Mississippi": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal",
            medical: "Legal with medical card",
            possession: "Medical patients only",
            cultivation: "Not permitted",
            notes: "Medical program approved in 2022."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Hawaii": {
        status: "medical-only",
        cannabis: {
            recreational: "Illegal (decriminalized)",
            medical: "Legal with medical card",
            possession: "Small amounts decriminalized (3 grams or less)",
            cultivation: "Medical patients only, up to 10 plants",
            notes: "First state to legalize medical marijuana via legislature (2000)."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "New Hampshire": {
        status: "decriminalized",
        cannabis: {
            recreational: "Illegal (decriminalized)",
            medical: "Legal with medical card",
            possession: "Up to 0.75 oz decriminalized (civil fine)",
            cultivation: "Not permitted",
            notes: "Only New England state without recreational legalization. Medical since 2013."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "North Carolina": {
        status: "decriminalized",
        cannabis: {
            recreational: "Illegal (decriminalized)",
            medical: "CBD only",
            possession: "Up to 0.5 oz decriminalized (civil fine)",
            cultivation: "Illegal",
            notes: "Limited decriminalization. No comprehensive medical program."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    // Remaining Illegal States
    "Texas": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "Very limited (low-THC CBD only)",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "Harsh penalties remain. Some cities have reduced enforcement priorities."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply; peyote grows naturally in parts of Texas."
        }
    },
    "Georgia": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "Low-THC oil only (limited)",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "Very restrictive. Atlanta has reduced penalties for small amounts."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Tennessee": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "No medical marijuana program. Strict enforcement."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Alabama": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "Medical program approved but not operational",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "Medical program approved in 2021 but delayed implementation."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Kentucky": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "Low-THC CBD only",
            possession: "Criminal penalties (small amounts decriminalized in some cities)",
            cultivation: "Illegal",
            notes: "Medical program legislation passed in 2023, expected to launch 2025."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "South Carolina": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "No medical marijuana program. Conservative approach."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Indiana": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "No medical marijuana program. Strict enforcement continues."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Wisconsin": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only",
            possession: "Criminal penalties (first offense decriminalized in some cities)",
            cultivation: "Illegal",
            notes: "Madison and Milwaukee have local decriminalization."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Iowa": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "Very limited medical CBD program."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Kansas": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "No program",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "One of the few states with no medical or CBD program."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Nebraska": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "No program",
            possession: "Criminal penalties (first offense infraction)",
            cultivation: "Illegal",
            notes: "Medical marijuana on ballot multiple times. First offense treated as infraction."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Wyoming": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "CBD only (limited)",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "Very limited CBD program. Conservative approach."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    },
    "Idaho": {
        status: "illegal",
        cannabis: {
            recreational: "Illegal",
            medical: "No program",
            possession: "Criminal penalties apply",
            cultivation: "Illegal",
            notes: "One of the strictest states. No medical or CBD program."
        },
        psilocybin: {
            status: "Illegal",
            notes: "No decriminalization measures."
        },
        dmt: {
            status: "Illegal",
            notes: "Schedule I substance."
        },
        peyote: {
            status: "Illegal for general population",
            notes: "Religious exemptions apply."
        }
    }
};

// Simplified US map with more realistic state paths
const usMapPaths = {
    "California": "M 50,180 L 45,185 L 42,195 L 40,210 L 38,230 L 36,250 L 35,270 L 34,290 L 33,310 L 32,330 L 31,350 L 30,370 L 32,385 L 38,400 L 45,412 L 55,420 L 70,425 L 85,428 L 95,430 L 105,428 L 115,423 L 122,415 L 128,405 L 132,390 L 135,370 L 137,350 L 138,330 L 139,310 L 140,290 L 138,270 L 135,250 L 130,235 L 122,220 L 115,205 L 108,190 L 100,178 L 90,170 L 78,165 L 65,168 L 55,173 Z",
    "Oregon": "M 52,110 L 48,115 L 45,125 L 42,140 L 40,155 L 38,165 L 50,168 L 65,170 L 80,172 L 95,174 L 110,175 L 125,176 L 140,177 L 155,178 L 160,175 L 162,165 L 163,150 L 162,135 L 160,120 L 155,110 L 145,105 L 130,103 L 115,102 L 100,103 L 85,105 L 70,107 Z",
    "Washington": "M 48,60 L 45,68 L 43,78 L 42,90 L 43,100 L 48,108 L 60,110 L 75,112 L 90,113 L 105,114 L 120,115 L 135,116 L 150,117 L 165,118 L 175,115 L 178,105 L 179,92 L 178,80 L 175,70 L 170,62 L 160,58 L 145,56 L 130,55 L 115,55 L 100,56 L 85,58 L 70,60 Z",
    "Nevada": "M 140,180 L 142,195 L 143,210 L 144,230 L 145,250 L 146,270 L 147,290 L 148,305 L 158,307 L 168,308 L 178,309 L 188,310 L 195,305 L 200,295 L 202,280 L 203,260 L 204,240 L 203,220 L 200,205 L 195,192 L 188,183 L 178,178 L 165,177 L 152,178 Z",
    "Arizona": "M 148,312 L 150,330 L 152,350 L 154,370 L 156,390 L 158,405 L 168,408 L 182,410 L 200,412 L 218,414 L 232,415 L 245,413 L 255,408 L 260,398 L 262,383 L 263,365 L 262,345 L 260,325 L 255,315 L 245,312 L 230,311 L 212,311 L 195,311 L 178,311 L 162,311 Z",
    "Idaho": "M 165,65 L 168,75 L 170,88 L 172,102 L 174,118 L 176,135 L 178,152 L 180,168 L 190,170 L 202,171 L 215,172 L 228,173 L 238,170 L 242,160 L 244,145 L 245,128 L 244,112 L 242,97 L 238,84 L 232,73 L 224,66 L 213,63 L 200,62 L 186,63 L 173,64 Z",
    "Montana": "M 180,30 L 182,42 L 183,55 L 184,68 L 246,70 L 308,72 L 370,74 L 432,76 L 434,62 L 435,48 L 436,34 L 374,32 L 312,30 L 250,28 L 188,26 Z",
    "Wyoming": "M 246,78 L 248,92 L 250,106 L 252,120 L 254,134 L 256,148 L 370,150 L 372,136 L 374,122 L 376,108 L 378,94 L 380,80 L 318,78 L 256,76 Z",
    "Utah": "M 208,180 L 210,195 L 212,212 L 214,230 L 216,250 L 218,270 L 220,288 L 232,290 L 246,291 L 260,292 L 262,274 L 263,256 L 264,238 L 265,220 L 266,202 L 267,184 L 255,183 L 241,182 L 227,181 L 215,180 Z",
    "Colorado": "M 268,156 L 270,172 L 272,190 L 274,208 L 276,228 L 278,248 L 280,268 L 282,286 L 380,288 L 382,270 L 384,252 L 386,234 L 388,216 L 390,198 L 392,180 L 394,162 L 332,160 L 270,158 Z",
    "New Mexico": "M 268,295 L 270,315 L 272,336 L 274,358 L 276,380 L 278,402 L 280,424 L 282,444 L 370,446 L 372,426 L 374,406 L 376,386 L 378,366 L 380,346 L 382,326 L 384,306 L 386,294 L 328,294 L 270,294 Z",
    "North Dakota": "M 396,38 L 398,52 L 400,68 L 402,84 L 502,86 L 504,70 L 506,54 L 508,38 L 452,36 L 396,34 Z",
    "South Dakota": "M 402,92 L 404,108 L 406,126 L 408,144 L 508,146 L 510,128 L 512,110 L 514,92 L 458,90 L 402,88 Z",
    "Nebraska": "M 396,152 L 398,170 L 400,190 L 402,210 L 502,212 L 504,192 L 506,172 L 508,152 L 452,150 L 396,148 Z",
    "Kansas": "M 396,218 L 398,238 L 400,260 L 402,282 L 502,284 L 504,262 L 506,240 L 508,218 L 452,216 L 396,214 Z",
    "Oklahoma": "M 388,290 L 390,310 L 392,332 L 394,354 L 502,356 L 504,334 L 506,312 L 508,290 L 448,288 L 388,286 Z",
    "Texas": "M 282,362 L 285,385 L 288,410 L 291,438 L 294,468 L 297,498 L 315,510 L 335,520 L 358,528 L 382,534 L 408,538 L 434,540 L 458,538 L 480,532 L 495,520 L 505,502 L 508,478 L 510,450 L 510,420 L 508,390 L 505,365 L 495,360 L 475,358 L 450,357 L 420,356 L 388,356 L 355,358 L 325,360 L 298,361 Z",
    "Minnesota": "M 408,35 L 410,48 L 412,62 L 465,64 L 518,66 L 520,80 L 522,96 L 524,112 L 526,130 L 528,148 L 530,166 L 525,168 L 515,168 L 505,167 L 495,165 L 485,163 L 475,160 L 468,155 L 462,148 L 458,138 L 456,125 L 454,110 L 452,95 L 450,78 L 448,62 L 446,46 L 428,40 L 410,36 Z",
    "Iowa": "M 408,154 L 410,170 L 412,188 L 414,208 L 504,210 L 506,190 L 508,170 L 510,152 L 458,150 L 408,148 Z",
    "Missouri": "M 414,216 L 416,234 L 418,254 L 420,275 L 422,296 L 424,318 L 505,320 L 507,298 L 509,276 L 511,254 L 513,232 L 515,214 L 465,212 L 415,210 Z",
    "Arkansas": "M 388,326 L 390,346 L 392,368 L 394,390 L 482,392 L 484,370 L 486,348 L 488,326 L 438,324 L 388,322 Z",
    "Louisiana": "M 394,398 L 396,418 L 398,440 L 408,450 L 422,456 L 438,460 L 455,462 L 472,462 L 486,458 L 495,448 L 500,433 L 502,415 L 503,398 L 495,396 L 480,395 L 460,394 L 438,394 L 415,395 Z",
    "Wisconsin": "M 465,72 L 468,88 L 471,106 L 474,126 L 477,146 L 528,148 L 530,128 L 532,108 L 534,88 L 536,70 L 515,68 L 490,67 Z",
    "Illinois": "M 480,154 L 482,172 L 484,192 L 486,214 L 488,238 L 490,262 L 492,286 L 532,288 L 534,264 L 536,240 L 538,216 L 540,192 L 542,168 L 544,150 L 510,148 Z",
    "Michigan": "M 520,75 L 525,82 L 532,90 L 540,100 L 548,112 L 555,126 L 560,142 L 563,158 L 565,175 L 575,177 L 586,176 L 595,172 L 602,164 L 606,152 L 608,138 L 608,122 L 606,106 L 602,92 L 595,82 L 585,75 L 572,71 L 558,70 L 543,71 L 530,73 Z",
    "Indiana": "M 532,156 L 534,174 L 536,194 L 538,216 L 540,238 L 542,260 L 590,262 L 592,240 L 594,218 L 596,196 L 598,174 L 600,158 L 565,156 Z",
    "Ohio": "M 545,158 L 547,176 L 549,196 L 551,218 L 553,242 L 555,266 L 605,268 L 607,244 L 609,220 L 611,196 L 613,172 L 615,160 L 580,158 Z",
    "Kentucky": "M 543,270 L 545,288 L 547,308 L 615,310 L 617,290 L 619,272 L 581,270 Z",
    "Tennessee": "M 488,330 L 490,348 L 492,368 L 618,370 L 620,350 L 622,332 L 555,330 Z",
    "Mississippi": "M 482,398 L 484,418 L 486,440 L 488,464 L 528,466 L 530,442 L 532,418 L 534,398 L 508,396 Z",
    "Alabama": "M 536,400 L 538,420 L 540,442 L 542,466 L 582,468 L 584,444 L 586,420 L 588,400 L 562,398 Z",
    "West Virginia": "M 555,274 L 558,290 L 561,308 L 605,310 L 608,292 L 611,276 L 583,274 Z",
    "Virginia": "M 565,316 L 568,332 L 571,350 L 635,352 L 638,334 L 641,318 L 603,316 Z",
    "North Carolina": "M 575,358 L 578,376 L 581,396 L 645,398 L 648,378 L 651,360 L 613,358 Z",
    "South Carolina": "M 585,404 L 588,422 L 591,442 L 640,444 L 643,424 L 646,406 L 615,404 Z",
    "Georgia": "M 544,408 L 547,428 L 550,450 L 553,474 L 610,476 L 613,452 L 616,428 L 619,410 L 582,408 Z",
    "Florida": "M 555,482 L 558,504 L 561,528 L 565,554 L 570,575 L 580,588 L 595,595 L 612,598 L 628,596 L 640,588 L 648,572 L 652,550 L 654,525 L 655,498 L 653,480 L 640,478 L 622,477 L 602,478 L 580,479 Z",
    "Pennsylvania": "M 575,205 L 578,222 L 581,242 L 645,244 L 648,224 L 651,208 L 613,206 Z",
    "New York": "M 580,140 L 583,155 L 586,172 L 589,190 L 592,208 L 656,210 L 658,190 L 660,170 L 662,150 L 664,142 L 655,138 L 642,136 L 625,135 L 605,137 Z",
    "Vermont": "M 665,125 L 668,142 L 671,162 L 690,163 L 693,143 L 696,127 L 680,125 Z",
    "New Hampshire": "M 698,122 L 701,140 L 704,160 L 718,161 L 721,141 L 724,124 L 711,122 Z",
    "Maine": "M 705,85 L 708,98 L 711,114 L 714,132 L 717,152 L 735,154 L 738,134 L 741,114 L 744,94 L 747,88 L 740,84 L 728,82 L 715,83 Z",
    "Massachusetts": "M 673,168 L 676,182 L 679,198 L 725,200 L 728,184 L 731,170 L 702,168 Z",
    "Rhode Island": "M 728,203 L 730,213 L 732,225 L 742,226 L 744,214 L 746,204 L 737,203 Z",
    "Connecticut": "M 680,203 L 683,218 L 686,235 L 720,237 L 723,220 L 726,205 L 703,203 Z",
    "New Jersey": "M 652,215 L 655,232 L 658,252 L 685,254 L 688,234 L 691,218 L 672,216 Z",
    "Delaware": "M 660,258 L 662,272 L 664,288 L 678,289 L 680,273 L 682,260 L 671,258 Z",
    "Maryland": "M 615,250 L 618,266 L 621,284 L 670,286 L 673,268 L 676,252 L 645,250 Z",
    "Alaska": "M 20,480 L 25,492 L 32,506 L 42,518 L 55,528 L 72,535 L 92,540 L 115,542 L 138,540 L 158,534 L 175,524 L 188,510 L 195,492 L 198,470 L 195,448 L 185,435 L 168,428 L 145,425 L 118,426 L 90,430 L 65,438 L 42,450 L 28,465 Z",
    "Hawaii": "M 145,550 L 152,552 L 160,553 L 168,553 L 176,552 L 183,550 L 189,547 L 194,543 L 197,538 L 198,532 L 197,526 L 194,521 L 189,517 L 183,514 L 176,512 L 168,511 L 160,511 L 152,512 L 145,514 L 139,517 L 134,521 L 130,526 L 128,532 L 128,538 L 130,543 L 134,547 Z"
};

// Initialize the map
function initMap() {
    const svg = document.getElementById('usMap');
    
    // Create states
    Object.keys(stateData).forEach(stateName => {
        const state = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        state.setAttribute('d', usMapPaths[stateName] || 'M 0 0');
        state.setAttribute('class', `state ${stateData[stateName].status}`);
        state.setAttribute('data-state', stateName);
        
        // Add click event
        state.addEventListener('click', () => showStateInfo(stateName));
        
        svg.appendChild(state);
    });
}

// Show state information modal
function showStateInfo(stateName) {
    const modal = document.getElementById('stateModal');
    const stateNameElement = document.getElementById('stateName');
    const stateInfoElement = document.getElementById('stateInfo');
    
    const data = stateData[stateName];
    
    stateNameElement.textContent = stateName;
    
    // Build the info content
    let infoHTML = `
        <div class="info-section">
            <h3>🌿 Cannabis</h3>
            <div class="status-badge status-${data.status.replace('-', '')}">${formatStatus(data.status)}</div>
            <h4>Recreational Use</h4>
            <p>${data.cannabis.recreational}</p>
            <h4>Medical Use</h4>
            <p>${data.cannabis.medical}</p>
            <h4>Possession Limits</h4>
            <p>${data.cannabis.possession}</p>
            <h4>Home Cultivation</h4>
            <p>${data.cannabis.cultivation}</p>
            <p><em>${data.cannabis.notes}</em></p>
        </div>
        
        <div class="info-section">
            <h3>🍄 Psilocybin (Magic Mushrooms)</h3>
            <p><strong>Status:</strong> ${data.psilocybin.status}</p>
            <p>${data.psilocybin.notes}</p>
        </div>
        
        <div class="info-section">
            <h3>✨ DMT & Ayahuasca</h3>
            <p><strong>Status:</strong> ${data.dmt.status}</p>
            <p>${data.dmt.notes}</p>
        </div>
        
        <div class="info-section">
            <h3>🌵 Peyote (Mescaline)</h3>
            <p><strong>Status:</strong> ${data.peyote.status}</p>
            <p>${data.peyote.notes}</p>
        </div>
    `;
    
    stateInfoElement.innerHTML = infoHTML;
    modal.style.display = 'block';
}

// Format status for display
function formatStatus(status) {
    const statusMap = {
        'fully-legal': 'Fully Legal',
        'medical-only': 'Medical Only',
        'decriminalized': 'Decriminalized',
        'illegal': 'Illegal'
    };
    return statusMap[status] || status;
}

// Modal close functionality
function setupModal() {
    const modal = document.getElementById('stateModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    setupModal();
});

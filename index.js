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

// Simplified US map with state paths (basic representation)
const usMapPaths = {
    "California": "M 50 300 L 120 250 L 150 350 L 100 400 Z",
    "Oregon": "M 80 180 L 140 170 L 145 230 L 100 240 Z",
    "Washington": "M 85 120 L 145 115 L 150 165 L 95 170 Z",
    "Nevada": "M 155 250 L 200 240 L 210 310 L 165 315 Z",
    "Arizona": "M 165 320 L 220 315 L 225 380 L 175 385 Z",
    "Idaho": "M 160 140 L 215 135 L 220 200 L 170 210 Z",
    "Montana": "M 220 90 L 330 85 L 335 150 L 225 155 Z",
    "Wyoming": "M 235 160 L 330 155 L 335 220 L 240 225 Z",
    "Utah": "M 215 215 L 270 210 L 275 285 L 220 290 Z",
    "Colorado": "M 245 230 L 345 225 L 350 300 L 250 305 Z",
    "New Mexico": "M 250 310 L 345 305 L 350 400 L 255 405 Z",
    "North Dakota": "M 340 90 L 440 85 L 445 145 L 345 150 Z",
    "South Dakota": "M 345 155 L 445 150 L 450 215 L 350 220 Z",
    "Nebraska": "M 355 225 L 455 220 L 460 285 L 360 290 Z",
    "Kansas": "M 365 295 L 470 290 L 475 350 L 370 355 Z",
    "Oklahoma": "M 375 360 L 490 355 L 495 420 L 380 425 Z",
    "Texas": "M 380 430 L 520 420 L 530 550 L 390 560 Z",
    "Minnesota": "M 450 90 L 540 85 L 545 180 L 455 185 Z",
    "Iowa": "M 465 220 L 550 215 L 555 280 L 470 285 Z",
    "Missouri": "M 480 290 L 570 285 L 575 355 L 485 360 Z",
    "Arkansas": "M 490 365 L 575 360 L 580 425 L 495 430 Z",
    "Louisiana": "M 495 435 L 580 430 L 585 490 L 500 495 Z",
    "Wisconsin": "M 550 140 L 620 135 L 625 210 L 555 215 Z",
    "Illinois": "M 575 220 L 645 215 L 650 310 L 580 315 Z",
    "Michigan": "M 630 140 L 710 135 L 720 230 L 635 235 Z",
    "Indiana": "M 655 225 L 715 220 L 720 290 L 660 295 Z",
    "Ohio": "M 725 210 L 785 205 L 790 280 L 730 285 Z",
    "Kentucky": "M 660 300 L 780 295 L 785 345 L 665 350 Z",
    "Tennessee": "M 585 355 L 725 350 L 730 400 L 590 405 Z",
    "Mississippi": "M 580 410 L 640 405 L 645 485 L 585 490 Z",
    "Alabama": "M 645 410 L 705 405 L 710 490 L 650 495 Z",
    "West Virginia": "M 730 260 L 790 255 L 795 310 L 735 315 Z",
    "Virginia": "M 740 315 L 830 310 L 835 360 L 745 365 Z",
    "North Carolina": "M 735 370 L 840 365 L 845 420 L 740 425 Z",
    "South Carolina": "M 740 430 L 815 425 L 820 475 L 745 480 Z",
    "Georgia": "M 715 485 L 795 480 L 800 545 L 720 550 Z",
    "Florida": "M 750 550 L 820 545 L 850 630 L 780 640 Z",
    "Pennsylvania": "M 735 190 L 820 185 L 825 245 L 740 250 Z",
    "New York": "M 745 140 L 840 135 L 845 205 L 750 210 Z",
    "Vermont": "M 825 120 L 860 115 L 865 155 L 830 160 Z",
    "New Hampshire": "M 865 115 L 895 110 L 900 155 L 870 160 Z",
    "Maine": "M 875 80 L 920 75 L 925 135 L 880 140 Z",
    "Massachusetts": "M 835 165 L 910 160 L 915 185 L 840 190 Z",
    "Rhode Island": "M 880 185 L 905 183 L 907 195 L 882 197 Z",
    "Connecticut": "M 835 195 L 880 190 L 885 215 L 840 220 Z",
    "New Jersey": "M 785 215 L 825 210 L 830 255 L 790 260 Z",
    "Delaware": "M 800 255 L 825 253 L 828 275 L 803 277 Z",
    "Maryland": "M 760 255 L 810 250 L 815 285 L 765 290 Z",
    "Alaska": "M 20 500 L 120 490 L 150 550 L 50 560 Z",
    "Hawaii": "M 180 560 L 240 555 L 250 590 L 190 595 Z"
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

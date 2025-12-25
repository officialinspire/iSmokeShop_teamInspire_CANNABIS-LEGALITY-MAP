// COMPLETE STATE DATA - ALL 50 STATES + 2 TERRITORIES
const stateData = {
    "District of Columbia": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2 oz in public, 10 oz at home", cultivation: "Up to 6 plants (3 mature) per adult", notes: "Adult-use sales authorized; medical program longstanding with patient reciprocity." },
        psilocybin: { status: "Decriminalized for personal use", notes: "Initiative 81 (2020) made enforcement the lowest priority for entheogenic plants." },
        dmt: { status: "Decriminalized for personal use", notes: "Covered under the same lowest-enforcement-priority measure as other entheogens." },
        peyote: { status: "Decriminalized for personal use", notes: "Protected by local decriminalization; religious exemptions also apply." }
    },
    "Alabama": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "Medical program approved but not yet operational", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "Medical program approved in 2021. Licenses approved December 2024. Expected to launch spring 2026." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Alaska": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with registry card", possession: "Up to 1 oz in public, 4 oz at home", cultivation: "Up to 6 plants (3 flowering)", notes: "Legalized recreational use in 2014. Remote communities may have local restrictions." },
        psilocybin: { status: "Illegal", notes: "No decriminalization efforts currently." },
        dmt: { status: "Illegal", notes: "Schedule I controlled substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Arizona": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz of flower, 5 grams of concentrate", cultivation: "Up to 6 plants if 25+ miles from dispensary", notes: "Legalized in 2020. Strong medical program since 2010." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Strong Native American Church presence; religious exemptions apply." }
    },
    "Arkansas": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 2.5 oz per 14 days (medical only)", cultivation: "Not permitted", notes: "Medical program approved in 2016." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "California": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with recommendation", possession: "Up to 1 oz in public, 8 grams of concentrate", cultivation: "Up to 6 plants per residence", notes: "First state to legalize medical marijuana (1996). Recreational sales began in 2018." },
        psilocybin: { status: "Illegal, but decriminalized in some cities", notes: "Oakland, Santa Cruz, and San Francisco have decriminalized. Statewide legislation pending." },
        dmt: { status: "Illegal", notes: "Schedule I substance. Some religious exemptions may apply." },
        peyote: { status: "Illegal for general population", notes: "Legal for Native American Church members for religious ceremonies." }
    },
    "Colorado": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz in public, 2 oz at home", cultivation: "Up to 6 plants (3 flowering)", notes: "First state to legalize recreational marijuana (2012). Robust regulatory framework." },
        psilocybin: { status: "Decriminalized in Denver", notes: "Denver decriminalized in 2019. Natural Medicine Health Act passed in 2022." },
        dmt: { status: "Decriminalized in Denver", notes: "Included in Denver's decriminalization of natural psychedelics." },
        peyote: { status: "Illegal for general population", notes: "Legal for Native American Church members." }
    },
    "Connecticut": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1.5 oz on person", cultivation: "Up to 6 plants per household (starting 2023)", notes: "Legalized in 2021, sales began in 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Delaware": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz", cultivation: "Not permitted", notes: "Legalized in 2023, retail framework being developed." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Florida": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 2.5 oz per 35 days (medical only)", cultivation: "Not permitted", notes: "Medical program since 2016. Recreational legalization on ballot multiple times." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Georgia": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "Low-THC oil only (limited)", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "Very restrictive. Atlanta has reduced penalties for small amounts." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Guam": {
        status: "medical-only",
        cannabis: { recreational: "Illegal (decriminalized)", medical: "Legal with medical card", possession: "Small amounts decriminalized (up to 1 oz)", cultivation: "Medical patients only", notes: "Medical program established in 2014. Adult use decriminalized in 2019." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance under federal law." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Hawaii": {
        status: "medical-only",
        cannabis: { recreational: "Illegal (decriminalized)", medical: "Legal with medical card", possession: "Small amounts decriminalized (3 grams or less)", cultivation: "Medical patients only, up to 10 plants", notes: "First state to legalize medical marijuana via legislature (2000)." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Idaho": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "No program", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "One of the strictest states. No medical or CBD program." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Illinois": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 30 grams of flower for residents", cultivation: "Medical patients only, up to 5 plants", notes: "Legalized in 2019, sales began in 2020. Equity-focused program." },
        psilocybin: { status: "Illegal", notes: "Chicago has decriminalized possession." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Indiana": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "No medical marijuana program. Strict enforcement continues." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Iowa": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "Very limited medical CBD program." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Kansas": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "No program", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "One of the few states with no medical or CBD program." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Kentucky": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Medical patients only with registration card", cultivation: "Licensed cultivators only", notes: "Medical program officially launched January 1, 2025. Patient registration active, dispensaries opening in 2025." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Louisiana": {
        status: "medical-only",
        cannabis: { recreational: "Illegal (decriminalized)", medical: "Legal with recommendation", possession: "Small amounts decriminalized (14 grams or less)", cultivation: "Not permitted", notes: "Medical program operational. Simple possession decriminalized in some areas." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Maine": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2.5 oz", cultivation: "Up to 3 flowering plants, 12 immature", notes: "Legalized in 2016, retail sales began in 2020." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions for Native American Church." }
    },
    "Maryland": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1.5 oz", cultivation: "Up to 2 plants per person", notes: "Legalized in 2023, sales began in 2023." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Massachusetts": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz in public, 10 oz at home", cultivation: "Up to 6 plants per person, 12 per household", notes: "Legalized in 2016, sales began in 2018. Strong regulatory oversight." },
        psilocybin: { status: "Illegal", notes: "Decriminalized in Cambridge, Somerville, Northampton, and Easthampton." },
        dmt: { status: "Illegal", notes: "Some cities have decriminalized entheogenic plants." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Michigan": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2.5 oz in public, 10 oz at home", cultivation: "Up to 12 plants per household", notes: "Legalized in 2018, sales began in 2019. Rapidly growing market." },
        psilocybin: { status: "Decriminalized in several cities", notes: "Detroit, Ann Arbor, Hazel Park, and Grand Rapids have decriminalized." },
        dmt: { status: "Decriminalized in some cities", notes: "Included in entheogenic plant decriminalization in Detroit and Ann Arbor." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Minnesota": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2 oz in public, 2 lbs at home", cultivation: "Up to 8 plants per household", notes: "Legalized in 2023, sales expected in 2025." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Mississippi": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Medical patients only", cultivation: "Not permitted", notes: "Medical program approved in 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Missouri": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 3 oz", cultivation: "Up to 6 flowering plants", notes: "Legalized in 2022, sales began in 2023." },
        psilocybin: { status: "Illegal", notes: "Kansas City has decriminalized." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Montana": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz", cultivation: "Up to 4 plants per household", notes: "Legalized in 2020, sales began in 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Nebraska": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "No program", possession: "Criminal penalties (first offense infraction)", cultivation: "Illegal", notes: "Medical marijuana on ballot multiple times. First offense treated as infraction." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Nevada": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz of flower, 1/8 oz of concentrate", cultivation: "Up to 6 plants if 25+ miles from dispensary", notes: "Recreational sales began in 2017. Thriving market in Las Vegas and Reno." },
        psilocybin: { status: "Illegal", notes: "No current decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions for Native American Church." }
    },
    "New Hampshire": {
        status: "decriminalized",
        cannabis: { recreational: "Illegal (decriminalized)", medical: "Legal with medical card", possession: "Up to 0.75 oz decriminalized (civil fine)", cultivation: "Not permitted", notes: "Only New England state without recreational legalization. Medical since 2013." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "New Jersey": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz", cultivation: "Not permitted for recreational users", notes: "Legalized in 2021, sales began in 2022. Medical program since 2010." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "New Mexico": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2 oz", cultivation: "Up to 6 mature, 6 immature plants", notes: "Legalized in 2021, sales began in 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply; Native American Church has significant presence." }
    },
    "New York": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 3 oz in public, 5 lbs at home", cultivation: "Up to 6 plants per person, 12 per household", notes: "Legalized in 2021, retail sales began in 2022. Large market potential." },
        psilocybin: { status: "Illegal", notes: "No statewide decriminalization, but efforts ongoing." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "North Carolina": {
        status: "decriminalized",
        cannabis: { recreational: "Illegal (decriminalized)", medical: "CBD only", possession: "Up to 0.5 oz decriminalized (civil fine)", cultivation: "Illegal", notes: "Limited decriminalization. No comprehensive medical program." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "North Dakota": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 3 oz per 30 days (medical)", cultivation: "Not permitted", notes: "Medical program approved in 2016." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Ohio": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 2.5 oz", cultivation: "Up to 6 plants per person, 12 per household", notes: "Legalized in 2023, sales framework being developed." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Oklahoma": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 3 oz on person, 8 oz at home (medical)", cultivation: "Up to 6 mature, 6 seedlings (medical)", notes: "One of the most liberal medical programs in the US (2018)." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Oregon": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz in public, 8 oz at home", cultivation: "Up to 4 plants per household", notes: "First state to decriminalize marijuana (1973). Recreational legal since 2014." },
        psilocybin: { status: "Legalized for therapeutic use", notes: "Measure 109 created legal psilocybin therapy program (2020). Services launched in 2023." },
        dmt: { status: "Illegal", notes: "Not included in psilocybin therapy program." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions for Native American Church." }
    },
    "Pennsylvania": {
        status: "medical-only",
        cannabis: { recreational: "Illegal (decriminalized in some cities)", medical: "Legal with medical card", possession: "Up to 30-day supply (medical only)", cultivation: "Not permitted", notes: "Medical program since 2016. Philadelphia has decriminalized small amounts." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Puerto Rico": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 1 oz (medical patients only)", cultivation: "Not permitted", notes: "Medical cannabis program established in 2015. Robust medical program with many dispensaries." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance under federal law." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Rhode Island": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz", cultivation: "Up to 6 plants per household", notes: "Legalized in 2022, sales began in late 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "South Carolina": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "No medical marijuana program. Conservative approach." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "South Dakota": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "Up to 3 oz (medical)", cultivation: "Not permitted", notes: "Medical program approved in 2020 after legal challenges." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Tennessee": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "No medical marijuana program. Strict enforcement." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Texas": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "Very limited (low-THC CBD only)", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "Harsh penalties remain. Some cities have reduced enforcement priorities." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply; peyote grows naturally in parts of Texas." }
    },
    "Utah": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card (limited)", possession: "Medical patients only", cultivation: "Not permitted", notes: "Conservative medical program approved in 2018." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Vermont": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with medical card", possession: "Up to 1 oz in public, 2 oz at home", cultivation: "Up to 2 mature, 4 immature plants", notes: "First state to legalize through legislature (2018). Retail sales began in 2022." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Virginia": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+ (limited)", medical: "Legal with medical card", possession: "Up to 1 oz", cultivation: "Up to 4 plants per household", notes: "Legalized possession in 2021, but no retail sales framework yet. Medical dispensaries operational." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Washington": {
        status: "fully-legal",
        cannabis: { recreational: "Legal for adults 21+", medical: "Legal with authorization", possession: "Up to 1 oz usable cannabis", cultivation: "Medical patients only (limited)", notes: "Legalized alongside Colorado in 2012. State-run retail system." },
        psilocybin: { status: "Illegal", notes: "Efforts for decriminalization ongoing in Seattle." },
        dmt: { status: "Illegal", notes: "Schedule I controlled substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions for Native American Church." }
    },
    "West Virginia": {
        status: "medical-only",
        cannabis: { recreational: "Illegal", medical: "Legal with medical card", possession: "30-day supply (medical)", cultivation: "Not permitted", notes: "Medical program approved in 2017." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Wisconsin": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only", possession: "Criminal penalties (first offense decriminalized in some cities)", cultivation: "Illegal", notes: "Madison and Milwaukee have local decriminalization." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    },
    "Wyoming": {
        status: "illegal",
        cannabis: { recreational: "Illegal", medical: "CBD only (limited)", possession: "Criminal penalties apply", cultivation: "Illegal", notes: "Very limited CBD program. Conservative approach." },
        psilocybin: { status: "Illegal", notes: "No decriminalization measures." },
        dmt: { status: "Illegal", notes: "Schedule I substance." },
        peyote: { status: "Illegal for general population", notes: "Religious exemptions apply." }
    }
};

// Initialize map
function initMap() {
    const container = document.getElementById('mapContainer');
    const width = 960;
    const height = 600;

    const svg = d3.select('#mapContainer')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .style('width', '100%')
        .style('height', 'auto');

    const g = svg.append('g');
    const projection = d3.geoAlbersUsa().scale(1200).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);

    fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(us => {
            const states = topojson.feature(us, us.objects.states);
            
            const stateIdToName = {
                11: 'District of Columbia',
                1: 'Alabama', 2: 'Alaska', 4: 'Arizona', 5: 'Arkansas', 6: 'California', 8: 'Colorado',
                9: 'Connecticut', 10: 'Delaware', 12: 'Florida', 13: 'Georgia', 15: 'Hawaii', 16: 'Idaho',
                17: 'Illinois', 18: 'Indiana', 19: 'Iowa', 20: 'Kansas', 21: 'Kentucky', 22: 'Louisiana',
                23: 'Maine', 24: 'Maryland', 25: 'Massachusetts', 26: 'Michigan', 27: 'Minnesota', 28: 'Mississippi',
                29: 'Missouri', 30: 'Montana', 31: 'Nebraska', 32: 'Nevada', 33: 'New Hampshire', 34: 'New Jersey',
                35: 'New Mexico', 36: 'New York', 37: 'North Carolina', 38: 'North Dakota', 39: 'Ohio', 40: 'Oklahoma',
                41: 'Oregon', 42: 'Pennsylvania', 44: 'Rhode Island', 45: 'South Carolina', 46: 'South Dakota',
                47: 'Tennessee', 48: 'Texas', 49: 'Utah', 50: 'Vermont', 51: 'Virginia', 53: 'Washington',
                54: 'West Virginia', 55: 'Wisconsin', 56: 'Wyoming', 66: 'Guam', 72: 'Puerto Rico'
            };

            const missingStates = states.features
                .map(f => stateIdToName[f.id] || `Unknown-${f.id}`)
                .filter(name => !stateData[name]);

            if (missingStates.length) {
                console.warn('States without data:', missingStates.join(', '));
            }

            g.selectAll('path')
                .data(states.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('class', d => {
                    const name = stateIdToName[d.id];
                    const status = stateData[name] ? stateData[name].status : 'illegal';
                    console.log(`State: ${name}, ID: ${d.id}, Status: ${status}`);
                    return `state ${status}`;
                })
                .attr('data-state', d => stateIdToName[d.id])
                .attr('tabindex', '0')
                .attr('role', 'button')
                .attr('aria-label', d => {
                    const name = stateIdToName[d.id];
                    return name ? `View ${name} information` : 'State';
                })
                .on('click', (event, d) => {
                    event.preventDefault();
                    const name = stateIdToName[d.id];
                    if (name && stateData[name]) {
                        console.log(`Clicked: ${name}`);
                        showStateInfo(name);
                    }
                })
                .on('touchend', (event, d) => {
                    event.preventDefault();
                    const name = stateIdToName[d.id];
                    if (name && stateData[name]) {
                        console.log(`Touched: ${name}`);
                        showStateInfo(name);
                    }
                });

            console.log('✓ Map loaded with', states.features.length, 'features');

            // Verify problematic states
            const testStates = ['California', 'Colorado', 'Nevada', 'Alaska', 'Connecticut', 'Alabama', 'Puerto Rico', 'Guam', 'District of Columbia'];
            testStates.forEach(stateName => {
                const data = stateData[stateName];
                console.log(`✓ ${stateName}: ${data ? data.status : 'MISSING'}`);
            });
        })
        .catch(error => {
            console.error('✗ Map loading error:', error);
            container.innerHTML = '<p style="color:red;text-align:center;padding:40px;">Error loading map. Please refresh.</p>';
        });
}

function showStateInfo(stateName) {
    const modal = document.getElementById('stateModal');
    const data = stateData[stateName];
    
    if (!data) {
        console.error('No data for state:', stateName);
        return;
    }
    
    document.body.style.overflow = 'hidden';
    document.getElementById('stateName').textContent = stateName;
    
    const statusMap = { 
        'fully-legal': 'legal', 
        'medical-only': 'medical', 
        'decriminalized': 'decrim', 
        'illegal': 'illegal' 
    };
    
    const statusText = { 
        'fully-legal': 'Fully Legal', 
        'medical-only': 'Medical Only', 
        'decriminalized': 'Decriminalized', 
        'illegal': 'Illegal' 
    };
    
    document.getElementById('stateInfo').innerHTML = `
        <div class="info-section">
            <h3>🌿 Cannabis</h3>
            <div class="status-badge status-${statusMap[data.status]}">${statusText[data.status]}</div>
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
            <h3>🍄 Psilocybin</h3>
            <p><strong>Status:</strong> ${data.psilocybin.status}</p>
            <p>${data.psilocybin.notes}</p>
        </div>
        <div class="info-section">
            <h3>✨ DMT & Ayahuasca</h3>
            <p><strong>Status:</strong> ${data.dmt.status}</p>
            <p>${data.dmt.notes}</p>
        </div>
        <div class="info-section">
            <h3>🌵 Peyote</h3>
            <p><strong>Status:</strong> ${data.peyote.status}</p>
            <p>${data.peyote.notes}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

function setupModal() {
    const modal = document.getElementById('stateModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Cannabis Legality Map...');
    initMap();
    setupModal();
});

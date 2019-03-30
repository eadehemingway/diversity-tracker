





export const staffDemographicPastData = {
    jan18: {gender: {Men: 3}, race: {White:3}, title:"01/18", uuid:"jan18"},
    jun18: {gender: {Men: 5}, race: {White:5}, title:"06/18", uuid:"june18"},
    jan19: {gender: {Men:7, Women: 2}, race: {White: 9}, title: "01/19", uuid:"jan19"}
}

export const templateDonuts = {
    june19: {gender: {t: 1}, race: {t:1}, title:"06/19", uuid:"june19"},
    jan20: {gender: {t:1}, race: {t:1}, title:"01/20", uuid:"jan20"},
    june20: {gender: {t:1}, race: {t:1}, title: "06/20", uuid:"june20"},
    jan21: {gender: {t:1}, race: {t:1}, title:"01/21", uuid:"jan21"},
    june21: {gender: {t:1}, race: {t:1}, title:"06/21", uuid:"june21"},
    jan22: {gender: {t:1}, race: {t:1}, title: "01/22", uuid:"jan22"},
    june22: {gender: {t:1}, race: {t:1}, title:"06/22", uuid:"june22"},
    jan23: {gender: {t:1}, race: {t:1}, title:"01/23", uuid:"jan23"},
    june23: {gender: {t:1}, race: {t:1}, title: "06/23", uuid:"june23"}
}

export const staffDemographicOverTimeData = {staffDemographicPastData, templateDonuts}




export const hiringStatisticsData = {
    gender: {
        tech: {
            applications:{
                Men: 17, Women: 1
            },
            hired: {
                Men: 5, Women: 1
            }, 
            applicationTargets: {
                Men: 5, Women: 5
            }, 
        },
        nonTech: {
                applications:{
                    Men: 22, Women: 17
                },
                hired: {
                    Men: 1, Women: 1
                },
                applicationTargets: {
                    Men: 5, Women: 5
                }, 
            },

},
    race: {

        tech: {
            applications:{
                White:20, Asian: 1
            },
            hired: {
                White:5
            },
            applicationTargets: {
                White:20, NonWhite: 10
            },
        },
        nonTech: {
            applications:{
                White:27, Mixed:1, Asian: 2, Black: 2
            },
            hired: {
                White:2
            },
            applicationTargets: {
                    White:20, NonWhite: 10
                },
    }}
}




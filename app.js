$(document).ready(function() {

    const nameInfo = {
        january: {
            week : {
                1: "Selenescape",
                2: "Redwyine",
                3: "Cinnabar",
                4: "Europatide",
                5: "Yellowstar",
                6:  "Dionshine",
                7:  "Sunstorm"
            },
            day: {
                1: "Ellis",
                2: "Kaidan",
                3: "Ellery",
                4: "Galen",
                5: "Uriel",
                6: "West",
                7: "Davin",
                8: "Skylar",
                9: "Tatum",
                10: "Amber",
                11: "Ferther",
                12: "Kina",
                13: "Erin",
                14: "Thane",
                15: "Haven",
                16: "Holden",
                17: "Rory",
                18: "Daire",
                19: "Archer",
                20: "Fox",
                21: "Carmen",
                22: "Zack",
                23: "Ripley",
                24: "Ender",
                25: "Bay",
                26: "Echo",
                27: "Noel",
                28: "Angel",
                29: "Quinn",
                30: "Morganna",
                31: "Weley",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        february: {
            week : {
                1: "Umbrielstar",
                2: "Rustcore",
                3: "Mercurian",
                4: "Valetudo",
                5: "Nightstar",
                6:  "Hyperiontide",
                7:  "Starrise"
            },
            day: {
                1: "Kendall",
                2: "Holew",
                3: "Justice",
                4: "Sage",
                5: "Zhora",
                6: "Perry",
                7: "Poyel",
                8: "Sonya",
                9: "Cecil",
                10: "Samara",
                11: "Tory",
                12: "Jasper",
                13: "Liron",
                14: "Jude",
                15: "Autumn",
                16: "Thorin",
                17: "Devlin",
                18: "Cade",
                19: "Julian",
                20: "Rain",
                21: "Finley",
                22: "Blaze",
                23: "Griffolk",
                24: "Wynn",
                25: "Willow",
                26: "Winter",
                27: "Forest",
                28: "Corbin",
                29: "Eleleth",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        march: {
            week : {
                1: "Amalthea",
                2: "Bloodshore",
                3: "Hermeson",
                4: "Ioeshine",
                5: "Brightstar",
                6:  "Pandawn",
                7:  "Starsight"
            },
            day: {
                1: "Hayden",
                2: "Achos",
                3: "Luna",
                4: "Anes",
                5: "Noah",
                6: "Parker",
                7: "Lane",
                8: "Onoel",
                9: "Torian",
                10: "Rodderick",
                11: "Tavish",
                12: "Harley",
                13: "Oden",
                14: "Ren",
                15: "Ira",
                16: "Raven",
                17: "Nova",
                18: "Edmund",
                19: "Orion",
                20: "Marut",
                21: "Anabur",
                22: "Dylan",
                23: "Volt",
                24: "Reese",
                25: "Cullen",
                26: "Owan",
                27: "Jade",
                28: "Summer",
                29: "Talon",
                30: "Shea",
                31: "Emerson",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        }, 
        april: {
            week : {
                1: "Demiostone",
                2: "Sunfire",
                3: "Azothtide",
                4: "Adrastea",
                5: "Ambergold",
                6:  "Atlasrose",
                7:  "Goldenstar"
            },
            day: {
                1: "Axis",
                2: "Rowan",
                3: "Finian",
                4: "Lake",
                5: "Dutch",
                6: "Metatron",
                7: "River",
                8: "Clover",
                9: "Elora",
                10: "Morgan",
                11: "Azrael",
                12: "Hadriel",
                13: "Zion",
                14: "Cassio",
                15: "Aego",
                16: "Adriel",
                17: "Pearl",
                18: "Ocean",
                19: "Phelan",
                20: "Sawyer",
                21: "Taylor",
                22: "Opal",
                23: "Riley",
                24: "Adriel",
                25: "Onoel",
                26: "Robin",
                27: "Arthur",
                28: "Roy",
                29: "Amari",
                30: "Remus",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        may: {
            week : {
                1: "Moontide",
                2: "Ironlust",
                3: "Redspirit",
                4: "Carmeshine",
                5: "Goldenstar",
                6:  "Antheson",
                7:  "Sunstone"
            },
            day: {
                1: "Blake",
                2: "Raisa",
                3: "Trillian",
                4: "Atom",
                5: "Brette",
                6: "Tanner",
                7: "Avalon",
                8: "Theia",
                9: "Trinity",
                10: "Caden",
                11: "Nyeve",
                12: "Eve",
                13: "Idris",
                14: "Lystra",
                15: "Vane",
                16: "Kane",
                17: "Cleo",
                18: "Everard",
                19: "Lyra",
                20: "Helene",
                21: "Celeste",
                22: "Crystal",
                23: "Kiall",
                24: "Ish",
                25: "Ikaria",
                26: "Rein",
                27: "Ilyris",
                28: "Fynn",
                29: "Jane",
                30: "Vylan",
                31: "Roe",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        june: {            
            week : {
                1: "Tritonson",
                2: "Arestone",
                3: "Lyralife",
                4: "Pasiphae",
                5: "Starshine",
                6:  "Rhearisen",
                7:  "Sunbolt"
            },
            day: {
                1: "Prisma",
                2: "Panne",
                3: "Penny",
                4: "Ryan",
                5: "Irebel",
                6: "Robick",
                7: "Aria",
                8: "Gaia",
                9: "Zalie",
                10: "Elric",
                11: "Raya",
                12: "Vala",
                13: "Venrie",
                14: "Atlas",
                15: "Hastos",
                16: "Attis",
                17: "Crios",
                18: "Eros",
                19: "Ocenus",
                20: "Zelus",
                21: "Braug",
                22: "Vali",
                23: "Balin",
                24: "Floi",
                25: "Dain",
                26: "Frostar",
                27: "Gisli",
                28: "Gylvia",
                29: "Javari",
                30: "Killin",
                },
                calculate: function(dayOfBirth, dayOfWeek) {
                    let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                }
        },
        july: {
            week : {
                1: "Moonglow",
                2: "Tyrdai",
                3: "Asistide",
                4: "Metison",
                5: "Goldentide",
                6:  "Tethyshine",
                7:  "Sunglow"
            },
            day: {
                1: "Ella",
                2: "Narssi",
                3: "Beltram",
                4: "Jace",
                5: "Milo",
                6: "Henns",
                7: "Jacoby",
                8: "Ellery",
                9: "Benson",
                10: "Minerva",
                11: "Ryan",
                12: "Missy",
                13: "Harper",
                14: "Neive",
                15: "Yorick",
                16: "Elric",
                17: "Tress",
                18: "Vello",
                19: "Nelkam",
                20: "Huran",
                21: "Crane",
                22: "Felix",
                23: "Wes",
                24: "Helloc",
                25: "Mobine",
                26: "Iki",
                27: "Bellarose",
                28: "Estelle",
                29: "Mack",
                30: "Markus",
                31: "Oden",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        august: {            
            week : {
                1: "Orbonson",
                2: "Mynthellas",
                3: "Springsprite",
                4: "Callistoson",
                5: "Goldshine",
                6:  "Titontide",
                7:  "Sunray"
                },
            day: {
                1: "Verus",
                2: "Sernick",
                3: "Leo",
                4: "Pine",
                5: "Justi",
                6: "Noi",
                7: "Northwan",
                8: "Easten",
                9: "Weston",
                10: "Rio",
                11: "Brana",
                12: "Erla",
                13: "Gemma",
                14: "Misty",
                15: "Brock",
                16: "Ash",
                17: "Cyane",
                18: "Keeta",
                19: "Marsh",
                20: "Astor",
                21: "Vera",
                22: "Noble",
                23: "Cheena",
                24: "Benjin",
                25: "Thorn",
                26: "Ostero",
                27: "Billan",
                28: "Fredrick",
                29: "Pod",
                30: "Rivven",
                31: "Colax",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        september: {
            week : {
                1: "Himaliason",
                2: "Redterran",
                3: "Silversprite",
                4: "Thebeglow",
                5: "Morningshine",
                6:  "Ringshine",
                7:  "Sunsight"
            },
            day: {
                1: "Tova",
                2: "Visi",
                3: "Lance",
                4: "Gawain",
                5: "Percival",
                6: "Sir Kay",
                7: "Bran",
                8: "Merlin",
                9: "Vivine",
                10: "Tarlon",
                11: "Edvine",
                12: "Joshua",
                13: "Kimee",
                14: "Stalios",
                15: "Rippen",
                16: "Rip",
                17: "Redwin",
                18: "Klame",
                19: "Heron",
                20: "Hernon",
                21: "Michelle",
                22: "Romeo",
                23: "Juliet",
                24: "Portia",
                25: "Roaslind",
                26: "Puck",
                27: "Viola",
                28: "Laertes",
                29: "Tybalt",
                30: "Ariel",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        }, 
        october: {            
            week : {
                1: "Elarashine",
                2: "Redshore",
                3: "Luckshire",
                4: "Ganymede",
                5: "Springmelody",
                6:  "Moonrung",
                7:  "Brightstar"
            },
            day: {
                1: "Lysander",
                2: "Duncan",
                3: "Othello",
                4: "Desdamona",
                5: "Falstaff",
                6: "Antonio",
                7: "Aaron",
                8: "Boyet",
                9: "Anne",
                10: "Jack",
                11: "Curio",
                12: "Davy",
                13: "Dion",
                14: "Duke",
                15: "Emilia",
                16: 'Fang',
                17: "Fortinbras",
                18: "Ghost",
                19: "Owen",
                20: "Grey",
                21: "Iris",
                22: "Iras",
                23: "Night",
                24: "Ellenore",
                25: "Cohen",
                26: "Brady",
                27: "Adler",
                28: "Beckette",
                29: "Jennings",
                30: "Nash",
                31: "Penn",
            },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        },
        november: {            
            week : {
                1: "Rheaglow",
                2: "Lovelorn",
                3: "Peithotide",
                4: "Aoede",
                5: "Goldmyrtle",
                6:  "Moonlet",
                7:  "Brightmoon"
                },
            day: {
                1: "Stone",
                2: "Sullivan",
                3: "Addison",
                4: "Bellamy",
                5: "Blaine",
                6: "Cassidy",
                7: "Monroe",
                8: "Olly",
                9: "Leif",
                10: "Aelric",
                11: "Godwin",
                12: "Torkel",
                13: "Godric",
                14: "Wulf",
                15: "Wulfwin",
                16: "Robert",
                17: "Tori",
                18: "Leofric",
                19: "Edric",
                20: "Osgood",
                21: "Ailwin",
                22: "Herlewin",
                23: "Jordan",
                24: "Olivia",
                25: "Umfrey",
                26: "Gilbert",
                27: "Bennet",
                28: "Bela",
                29: "Baldric",
                30: "Terric",
                },
                calculate: function(dayOfBirth, dayOfWeek) {
                    let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                }
        },
        december: {
            week : {
                1: "Eirenetide",
                2: "Arislive",
                3: "Tanagran",
                4: "Isobeth",
                5: "Suntide",
                6:  "Cherion",
                7:  "Brightmorning"
                },
            day: {
                1: "Gladwin",
                2: "Colin",
                3: "Nicola",
                4: "Oswyn",
                5: "Marion",
                6: "Julian",
                7: "Bows",
                8: "Barley",
                9: "Blithe",
                10: "Clarell",
                11: "Collins",
                12: "Dew",
                13: "Dale",
                14: "Deme",
                15: "Gill",
                16: "Lacy",
                17: "Otter",
                18: "Rodes",
                19: "Ridley",
                20: "Shirley",
                21: "Spicer",
                22: "Wade",
                23: "Yorke",
                24: "Wyndell",
                25: "White",
                26: "Venell",
                27: "Rys",
                28: "Rowlyn",
                29: "Porter",
                30: "Price",
                31: "Nevet",
                },
            calculate: function(dayOfBirth, dayOfWeek) {
                let generatedName = this.day[dayOfBirth] + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
        }



    }


    $("#generate").on("click", function () {
        console.log("clicked")
    
    let username = $("#userName").val().trim()
    let birthday = $("#birthday").val()
    let birthDate = new Date(birthday)
    let month = birthDate.getMonth() + 1
    let dayOfWeek = birthDate.getDay() + 1
    let dayOfBirth = birthDate.getDate() + 1

    if (month === 1) {
        nameInfo.january.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 2) {
        nameInfo.february.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 3) {
        nameInfo.march.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 4) {
        nameInfo.april.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 5) {
        nameInfo.may.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 6) {
        nameInfo.june.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 7) {
        nameInfo.july.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 8) {
        nameInfo.august.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 9) {
        nameInfo.september.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 10) {
        nameInfo.october.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 11) {
        nameInfo.november.calculate(dayOfBirth, dayOfWeek)
    }

    if (month === 12) {
        nameInfo.december.calculate(dayOfBirth, dayOfWeek)
    }
})

})


$(document).ready(function() {

    const lastNameArray = []
    const firstNameArray = []

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
                1: {female: "Elias", male: "Ellis"},
                2:  {female:"Mary Anne", male: "Kaidan" },
                3:  {female:"Genevive", male: "Ellery" },
                4:  {female:"Gewn", male: "Galen" },
                5:  {female:"Uriel", male: "Uriel" },
                6:  {female:"Rose", male: "West" },
                7:  {female:"Loreleigh", male: "Davin" },
                8:  {female:"Autmun", male: "Skylar" },
                9:  {female:"Annabell", male: "Tatum" },
                10: {female: "Amber", male: "Avery" },
                11: {female: "Bonnie",  male: "Ferther" },
                12: {female: "Grace", male: "Ryan" },
                13: {female: "Fiona", male: "Erin" },
                14: {female: "Jewel", male: "Thane" },
                15: {female: "Bellatrix", male: "Haven" },
                16: {female: "Hazel", male: "Holden" },
                17: {female: "Rory", male: "Rory" },
                18: {female: "Cassandra", male: "Daire" },
                19: {female: "Archer", male: "Archer" },
                20: {female: "Fox", male: "Fox" },
                21: {female: "Carmen", male: "Mason" },
                22: {female: "Sylvia", male: "Zack" },
                23: {female: "Ripley", male: "Ripley" },
                24: {female: "Ender", male: "Ender" },
                25: {female: "Bay", male: "Bay" },
                26: {female: "Echo", male: "Adrian" },
                27: {female: "Noel", male: "Ian" },
                28: {female: "Belle", male: "Darren" },
                29: {female: "Quinn", male: "Quinn" },
                30: {female: "Morganna", male: "Morgan" },
                31: {female: "Fleur", male: "Neil" },
            }, 
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Kendall",  male: "Kendall"},
                2:  {female: "Evelin", male: "Caleb"},
                3:  {female: "Lilly", male: "Brice"},
                4:  {female: "Sage", male: "Colin"},
                5:  {female: "Zhora", male: "Troy"},
                6:  {female: "Perry", male: "Perry"},
                7:  {female: "Jelene", male: "Cole"},
                8:  {female: "Sonya", male: "Noah"},
                9:  {female: "Cecilla", male: "Cecil"},
                10: {female:  "Samara", male: "Lee"},
                11: {female:  "Evian", male: "Brandon"},
                12: {female:  "Daria", male: "Jasper"},
                13: {female:  "Iris", male: "Leron"},
                14: {female:  "Jade", male: "Jude"},
                15: {female:  "Nicole", male: "Riley"},
                16: {female:  "Scarlette", male: "Thorin"},
                17: {female:  "Clover", male: "Devlin"},
                18: {female:  "Ivy", male: "Cade"},
                19: {female:  "Julise", male: "Julian"},
                20: {female:  "Rain", male: "Grant"},
                21: {female:  "Lacy", male: "Finley"},
                22: {female:  "Delilah", male: "Jace"},
                23: {female:  "Annquinette", male: "Heath"},
                24: {female:  "Winny", male: "Wynn"},
                25: {female:  "Willow",  male: "Bailey" },
                26: {female:  "Winter", male: "Brent" },
                27: {female:  "Ebony", male: "Forest" },
                28: {female:  "Brooke", male: "Corbin" },
                29: {female:  "Aurora", male: "Eleleth" },
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female:"Hayden", male: "Hayden" }, 
                2:  {female:"Andrea", male: "Ethan" },
                3:  {female:"Luna", male: "Jacob" },
                4:  {female:"Anes", male: "Gabriel" },
                5:  {female:"Natalia", male: "Gareth" },
                6:  {female: "Natasha", male: "Parker" },
                7:  {female:"Lane", male: "Lane" },
                8:  {female:"Onoel", male: "Aiden" },
                9:  {female: "Rudy", male: "Torian" },
                10: {female: "Annette",  male: "Rodderick"},
                11: {female: "Ava", male: "Tavish"},
                12: {female: "Eve", male: "Harley"},
                13: {female: "Daisy", male: "Oden"},
                14: {female: "Ren", male: "Ren"},
                15: {female: "Fiona", male: "Ira"},
                16: {female: "Raven", male: "Seth"},
                17: {female: "Gwendolyn", male: "Benjamen"},
                18: {female: "Jillian", male: "Edmund"},
                19: {female: "Orion", male: "Orion"},
                20: {female: "Violet", male: "Matthew"},
                21: {female: "Valerie", male: "Anabur"},
                22: {female: "Dylan", male: "Wesley"},
                23: {female: "Jasmine", male: "Damom"},
                24: {female: "Clio", male: "Reese"},
                25: {female: "Collins", male: "Collins"},
                26: {female: "Tristessa", male: "Owen"},
                27: {female: "Jade", male: "Lyndon"},
                28: {female: "Summer", male: "Leland"},
                29: {female: "Amberly", male: "Talon"},
                30: {female: "Shea", male: "Nash"},
                31: {female: "Cordelia", male: "Emerson"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Dawm",  male: "Ace" },
                2:  {female: "Rowan", male: "Rowan" },
                3:  {female: "Lynette", male: "Finian" },
                4:  {female: "Alexa", male: "Alexander"},
                5:  {female: "Vanessa",male: "Dutch"},
                6:  {female: "Audrey", male: "Paris"},
                7:  {female: "Norah",male: "River"},
                8:  {female: "Clover", male: "Nathaniel"},
                9:  {female: "Elora", male: "Ethan"},
                10: {female:  "Morgan", male: "Morgan"},
                11: {female:  "Azrael", male: "Darrem"},
                12: {female:  "Haley", male: "Hadriel"},
                13: {female:  "Juliette", male: "Bradley"},
                14: {female:  "Ava", male: "Cassio"},
                15: {female:  "Holly", male: "Connor"},
                16: {female:  "Adriel", male: "Tyler"},
                17: {female:  "Pearl", male: "Mason"},
                18: {female:  "Abigail", male: "Donte"},
                19: {female:  "Wendy", male: "Hunter"},
                20: {female:  "Marilyn", male: "Sawyer"},
                21: {female:  "Taylor", male: "Taylor"},
                22: {female:  "Opal", male: "Colby"},
                23: {female:  "Lenorah", male: "Riley"},
                24: {female:  "Giselle", male: "Trevor"},
                25: {female:  "Onoel", male: "Coby"},
                26: {female:  "Robin",  male: "Robin"},
                27: {female:  "Contessa", male: "Arthur"},
                28: {female:  "Amalia", male: "Roy"},
                29: {female:  "Amara", male: "Amari"},
                30: {female:  "Lucy", male: "Remus"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female:"Blake",  male: "Blake"},
                2:  {female:"Raisa", male: "Bryan"},
                3:  {female: "Veronica",  male: "Trillian"},
                4:  {female: "Roslyn", male: "Cole"},
                5:  {female: "Brette", male: "Brette"},
                6:  {female: "Adrianna", male: "Tanner"},
                7:  {female: "Esme", male: "Avalon"},
                8:  {female: "Theia", male: "Randel"},
                9:  {female: "Trinity", male: "Tate"},
                10: {female: "Camilla", male: "Caden"},
                11: {female: "Nyeve", male: "Hadrian"},
                12: {female: "Eve", male: "Amarand"},
                13: {female: "Regina", male: "Idris"},
                14: {female: "Emeline", male: "Grigori"},
                15: {female: "Florence", male: "Ullric"},
                16: {female: "Cleonetta", male: "Kane"},
                17: {female: "Jocelyn", male: "Bennett"},
                18: {female: "Lyanne", male: "Everard"},
                19: {female: "Lyra", male: "Brogan"},
                20: {female: "Helene", male: "Neilson"},
                21: {female: "Celeste", male: "Audric"},
                22: {female: "Crystal", male: "Alywin"},
                23: {female: "Josephina", male: "Kiall"},
                24: {female: "Taliah", male: "Ish"},
                25: {female: "Viviane", male: "Paige"},
                26: {female: "Isolde", male: "Rein"},
                27: {female: "Amiria", male: "Ilyris"},
                28: {female: "Sabrina", male: "Fynn"},
                29: {female: "Millicent", male: "Jane"},
                30: {female: "Vylan", male: "Lawrence"},
                31: {female: "Roe", male: "Harding"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Prisma",  male: "Luke"},
                2:  {female: "Penny", male: "Edwin"},
                3:  {female: "Liecia", male: "Nicholas"},
                4:  {female: "Joanna", male: "Jonas"},
                5:  {female: "Irebel", male: "Warren"},
                6:  {female: "Beatrice", male: "Robick"},
                7:  {female: "Aria", male: "Aria"},
                8:  {female: "Alina", male: "Ralph"},
                9:  {female: "Zalie", male: "William"},
                10: {female: "Susanna", male: "Elric"},
                11: {female: "Raya", male: "Jordan"},
                12: {female: "Valya", male: "Tristian"},
                13: {female: "Valerie", male: "Valentine"},
                14: {female: "Lora", male: "Atlas"},
                15: {female: "Clarice", male: "Robert"},
                16: {female: "Allison", male: "Attis"},
                17: {female: "Melusina", male: "Rylan"},
                18: {female: "Relia", male: "Eros"},
                19: {female: "Feyette", male: "Radley"},
                20: {female: "Hadley", male: "Wallace"},
                21: {female: "Luella", male: "Wayne"},
                22: {female: "Vali", male: "Winston"},
                23: {female: "Baylin", male: "Baylin"},
                24: {female: "Farah", male: "Ashton"},
                25: {female: "Marigold", male: "Dain"},
                26: {female: "Hollis", male: "Hollis"},
                27: {female: "Dae", male: "Barric"},
                28: {female: "Olive", male: "Bentley"},
                29: {female: "Donelle", male: "Booker"},
                30: {female: "Ellette", male: "Killin"},
                },
                calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                    if (radioBtn === "female") {
                    let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                } else {
                    let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                }
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
                1:  {female: "Ella", male: "Bolton"},
                2:  {female: "Narssi",  male: "Beval"},
                3:  {female: "Diana", male: "Beltram"},
                4:  {female: "Blossom", male: "Jace"},
                5:  {female: "Avellana", male: "Milo"},
                6:  {female: "Bliss", male: "Henns"},
                7:  {female: "Arietta", male: "Jacoby"},
                8:  {female: "Channel", male: "Ellery"},
                9:  {female: "Posy", male: "Benson"},
                10: {female: "Minerva", male: "Allister"},
                11: {female: "Rosette", male: "Aland"},
                12: {female: "Missy",  male:  "Amherst"},
                13: {female: "Harper", male: "Harper"},
                14: {female: "Neivette", male: "Neive"},
                15: {female: "Roxanna", male: "Yorick"},
                16: {female: "Tatiana", male: "Elric"},
                17: {female: "Velma", male: "Tress"},
                18: {female: "Tianna", male: "Vello"},
                19: {female: "Sapphire", male: "Allard"},
                20: {female: "Rhiannon", male: "Huran"},
                21: {female: "Olthea", male: "Crane"},
                22: {female: "Merry", male: "Felix"},
                23: {female: "Brighton", male: "Wes"},
                24: {female: "Whitney",  male: "Whitney"},
                25: {female: "Corliss", male: "Godwim"},
                26: {female: "Isis", male:"Iki"},
                27: {female: "Bellarose", male: "Auden"},
                28: {female: "Estelle", male:"Barse"},
                29: {female: "Elvina", male:"Mack"},
                30: {female: "Della", male:"Markus"},
                31: {female: "Gwendolyn", male:"Oden"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Eden", male: "Veras"},
                2:  {female: "Rosalind",  male: "Hugh"},
                3:  {female: "Luissa", male: "Leo"},
                4:  {female: "Helueua", male: "Pine"},
                5:  {female: "Jossy", male: "Godfry"},
                6:  {female: "Geva", male: "Barrett"},
                7:  {female: "Tillie", male: "Jarrett"},
                8:  {female: "Melisenda", male: "Northwan"},
                9:  {female: "Orella", male: "Easten"},
                10: {female: "Gailina", male: "Weston"},
                11: {female: "Emma", male: "Rio"},
                12: {female: "Erla", male: "Brana"},
                13: {female: "Gemma", male: "Burne"},
                14: {female: "Misty", male: "Brenner"},
                15: {female: "Avin", male: "Brock"},
                16: {female: "Acelina", male: "Ash"},
                17: {female: "Clarissa", male: "Cyane"},
                18: {female: "Amiria", male: "Thomas"},
                19: {female: "Constance", male: "Marsh"},
                20: {female: "Philippa", male: "Astor"},
                21: {female: "Vera", male: "Martin"},
                22: {female: "Lucille", male: "Noble"},
                23: {female: "Cheena", male: "Walter"},
                24: {female: "Gina", male: "Benjin"},
                25: {female: "Samantha", male: "Thorn"},
                26: {female: "Martha Anne", male: "Ostero"},
                27: {female: "Edith", male: "Billan"},
                28: {female: "Daphne", male: "Fredrick"},
                29: {female: "Alita", male: "Fordwin"},
                30: {female: "Evorea", male: "Rivven"},
                31: {female: "Faun", male: "Colax"}
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Tova", male: "Jorrin"},
                2:  {female: "Visi", male: "Hilton"},
                3:  {female: "June", male: "Lance"},
                4:  {female: "Mirabella", male: "Gawain"},
                5:  {female: "Octavia", male: "Percival"},
                6:  {female: "Odessa",  male: "Sir Kay"},
                7:  {female: "Rosella", male: "Bran"},
                8:  {female: "Ruelle", male: "Merlin"},
                9:  {female: "Vivine", male: "Hammond"},
                10: {female:  "Dorothea", male: "Tarlon"},
                11: {female:  "Edvine", male: "James"},
                12: {female:  "Jocelyn", male: "Joshua"},
                13: {female:  "Arwen", male: "Kimee"},
                14: {female:  "Celestia", male: "Stalios"},
                15: {female:  "Elowyn", male: "Rippen"},
                16: {female:  "Elora", male: "Rip"},
                17: {female:  "Elys", male: "Redwin"},
                18: {female:  "Illyria", male: "Harvey"},
                19: {female:  "Medora", male: "Heron"},
                20: {female:  "Rhodeia", male: "Hernon"},
                21: {female:  "Solenne", male: "Michelle"},
                22: {female:  "Solstice", male: "Romeo"},
                23: {female:  "Juliet", male: "Julian"},
                24: {female:  "Portia", male: "Lindsey"},
                25: {female:  "Roaslind",  male: "Theobald"},
                26: {female:  "Usrula", male: "Puck"},
                27: {female:  "Viola", male: ""},
                28: {female:  "Serena", male: "Laertes"},
                29: {female:  "Venus", male: "Tybalt"},
                30: {female:  "Ariel", male: "Roger"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female: "Artemis",  male: "Lysander"},
                2:  {female: "Frida", male: "Duncan"},
                3:  {female: "Desdemona", male: "Othello"},
                4:  {female: "Helenia", male: "Emmett"},
                5:  {female: "Halette", male: "Falstaff"},
                6:  {female: "Antonia", male: "Antonio"},
                7:  {female: "Elwin", male: "Aaron"},
                8:  {female: "Ilene", male: "Boyet"},
                9:  {female: "Anne", male: "Baxter"},
                10: {female:  "Brianna", male: "Jack"},
                11: {female:  "Tabitha", male: "Ace"},
                12: {female:  "Willamina", male: "Davy"},
                13: {female:  "Dion", male: "Dion"},
                14: {female:  "Yvonnette", male: "Duke"},
                15: {female:  "Emilia", male: "Arnald"},
                16: {female:  "Yviene", male: "Fang"},
                17: {female:  "Onessa",  male: "Fortinbras"},
                18: {female:  "Galina", male: "Gladwin"},
                19: {female:  "Rhyanon", male: "Owen"},
                20: {female:  "Lolinda", male: "Grey"},
                21: {female:  "Iris", male: "Ernest"},
                22: {female:  "Kressara", male: "Olivia"},
                23: {female:  "Destinee", male: "Night"},
                24: {female:  "Ellenore", male: "Erwin"},
                25: {female:  "Dylena", male: "Cohen"},
                26: {female:  "Diya", male: "Brady"},
                27: {female:  "Annalyn", male: "Adler"},
                28: {female:  "Joan", male: "Beckette"},
                29: {female:  "Clarice", male: "Jennings"},
                30: {female:  "Sybille", male: "Nash"},
                31: {female:  "Circe", male: "Penn"},
            },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
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
                1:  {female:  "Narisa",  male: "Forwin"},
                2:  {female:  "Lina", male: "Sullivan"},
                3:  {female:  "Addison", male: "Addison"},
                4:  {female:  "Jessica", male: "Bellamy"},
                5:  {female:  "Nyx", male: "Blaine"},
                6:  {female:  "Cassidy", male: "Bardon"},
                7:  {female:  "Monroe", male: "Monroe"},
                8:  {female:  "Selene", male: "Olly"},
                9:  {female:  "Evian", male: "Leif"},
                10: {female:  "Avalon", male: "Aelric"},
                11: {female:  "Elise", male: "Godwin"},
                12: {female:  "Lila", male: "Torkel"},
                13: {female:  "Victoria", male: "Godric"},
                14: {female:  "Silvia", male: "Wulf"},
                15: {female:  "Azalia", male: "Wulfwin"},
                16: {female:  "Magnolia", male: "Robert"},
                17: {female:  "Buttercup", male: "Tori"},
                18: {female:  "Cora", male: "Leofric"},
                19: {female:  "Dahlia", male: "Edric"},
                20: {female:  "Danica", male: "Osgood"},
                21: {female:  "Flossy", male: "Ailwin"},
                22: {female:  "Herlewin", male: "Allard"},
                23: {female:  "Heather",  male: "Jordan"},
                24: {female:  "Olivia", male: "Anakin"},
                25: {female:  "Poppy", male: "Umfrey"},
                26: {female:  "Patience", male: "Gilbert"},
                27: {female:  "Temperance", male: "Bennet"},
                28: {female:  "Jonquil", male: "Toby"},
                29: {female:  "Lady", male: "Baldric"},
                30: {female:  "Lavender", male: "Terric"},
                },
                calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                    if (radioBtn === "female") {
                    let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                } else {
                    let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                    $("#namePlace").append(generatedName)
                }
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
                1:  {female: "May", male: "Gladwin"},
                2:  {female: "Colin", male: "Aldis"},
                3:  {female: "Pansy", male: "Nicola"},
                4:  {female: "Oswyn", male: "Oswyn"},
                5:  {female: "Marion", male: "Marion"},
                6:  {female: "Viola", male: "Archie"},
                7:  {female: "Briar", male: "Bows"},
                8:  {female: "Geillis", male: "Barley"},
                9:  {female: "Blithe", male: "Quincy"},
                10: {female:  "Helenia", male: "Clarell"},
                11: {female:  "Katlyn",  male: "Arley"},
                12: {female:  "Dew", male: "Andre"},
                13: {female:  "Myra", male: "Dale"},
                14: {female:  "Demi", male: "Demi"},
                15: {female:  "Sunete", male: "Gill"},
                16: {female:  "Lacy", male: "Branton"},
                17: {female:  "Acacia", male: "Otto"},
                18: {female:  "Faylinn", male: "Rodes"},
                19: {female:  "Fossette", male: "Ridley"},
                20: {female:  "Shirley", male: "Chay"},
                21: {female:  "Lunette", male: "Spicer"},
                22: {female:  "Nolana", male: "Wade"},
                23: {female:  "Trixy", male: "Yorke"},
                24: {female:  "Loxy", male: "Wyndell"},
                25: {female:  "Fay", male: "Conrad"},
                26: {female:  "Venell", male: "Brody"},
                27: {female:  "Rys", male: "Beck"},
                28: {female:  "Evvie", male: "Rowlyn"},
                29: {female:  "Delicia",  male: "Porter"},
                30: {female:  "Clairette", male: "Price"},
                31: {female:  "Nevette", male: "Nielle"},
                },
            calculate: function(dayOfBirth, dayOfWeek, radioBtn) {
                if (radioBtn === "female") {
                let generatedName = this.day[dayOfBirth].female + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            } else {
                let generatedName = this.day[dayOfBirth].male + " " + this.week[dayOfWeek]  
                $("#namePlace").append(generatedName)
            }
            }
            
        }
    }

    $("#birthday").keypress(function(e) {
        if (e.which === 13) {
            $('#generate').click();
        };
    });

    $("#generate").on("click", function () {
        $("#namePlace").empty()
        let birthday = $("#birthday").val()
        let birthDate = new Date(birthday)
        let dayOfWeek = birthDate.getDay() + 1
        let radioBtn = $("input[name=gender]:checked").val()

        birthDate = moment(birthDate).add(1, 'days').calendar()

        let month = moment(birthDate).format("MM")
        month = parseInt(month)
        let dayOfBirth = moment(birthDate).format("DD")
        dayOfBirth = parseInt(dayOfBirth)


        if (month === 01) {
            nameInfo.january.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 02) {
            nameInfo.february.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 03) {
            nameInfo.march.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 04) {
            nameInfo.april.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 05) {
            nameInfo.may.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 06) {
            nameInfo.june.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 07) {
            nameInfo.july.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 08) {
            nameInfo.august.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 09) {
            nameInfo.september.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 10) {
            nameInfo.october.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 11) {
            nameInfo.november.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }

        if (month === 12) {
            nameInfo.december.calculate(dayOfBirth, dayOfWeek, radioBtn)
        }
})

    $("#randomize").on("click", function () {
        const janLastNames = Object.values(nameInfo.january.week)
        const febLastNames = Object.values(nameInfo.february.week)
        const marchLastNames = Object.values(nameInfo.march.week)
        const aprilLastNames = Object.values(nameInfo.april.week)
        const mayLastNames = Object.values(nameInfo.may.week)
        const juneLastNames = Object.values(nameInfo.june.week)
        const julyLastNames = Object.values(nameInfo.july.week)
        const augLastNames = Object.values(nameInfo.august.week)
        const septLastNames = Object.values(nameInfo.september.week)
        const octLastNames = Object.values(nameInfo.october.week)
        const novLastNames = Object.values(nameInfo.november.week)
        const decLastNames = Object.values(nameInfo.december.week)

        const janFirstNames = Object.values(nameInfo.january.day)
        const janFemaleFirstNames = janFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const janMaleFirstNames = janFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const febFirstNames = Object.values(nameInfo.february.day)
        const febFemaleFirstNames = febFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const febMaleFirstNames = febFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const marchFirstNames = Object.values(nameInfo.march.day)
        const marchFemaleFirstNames = febFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const marchMaleFirstNames = marchFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const aprilFirstNames = Object.values(nameInfo.april.day)
        const aprilFemaleFirstNames = aprilFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const aprilMaleFirstNames = aprilFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const mayFirstNames = Object.values(nameInfo.may.day)
        const mayFemaleFirstNames = mayFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const mayMaleFirstNames = mayFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const juneFirstNames = Object.values(nameInfo.june.day)
        const juneFemaleFirstNames = juneFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const juneMaleFirstNames = juneFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const julyFirstNames = Object.values(nameInfo.july.day)
        const julyFemaleFirstNames = julyFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const julyMaleFirstNames = julyFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const augFirstNames = Object.values(nameInfo.august.day)
        const augFemaleFirstNames = augFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const augMaleFirstNames = augFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const septFirstNames = Object.values(nameInfo.september.day)
        const septFemaleFirstNames = septFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const septMaleFirstNames = septFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const octFirstNames = Object.values(nameInfo.october.day)
        const octFemaleFirstNames = octFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const octMaleFirstNames = octFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const novFirstNames = Object.values(nameInfo.november.day)
        const novFemaleFirstNames = novFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const novMaleFirstNames = novFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        const decFirstNames = Object.values(nameInfo.december.day)
        const decFemaleFirstNames = decFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ female }))(currentDate);
            name = name.female;
            finalArr.push(name);
            return finalArr;
        }, []);
        const decMaleFirstNames = decFirstNames.reduce((finalArr, currentDate) => {
            let name = (({ male, female }) => ({ male }))(currentDate);
            name = name.male;
            finalArr.push(name);
            return finalArr;
        }, []);

        firstNameArray.push(janFemaleFirstNames, janMaleFirstNames, febFemaleFirstNames, febMaleFirstNames, marchFemaleFirstNames, marchMaleFirstNames, aprilFemaleFirstNames, aprilMaleFirstNames, mayFemaleFirstNames, mayMaleFirstNames, juneFemaleFirstNames, juneMaleFirstNames, julyFemaleFirstNames, julyMaleFirstNames, augFemaleFirstNames, augMaleFirstNames, septFemaleFirstNames, septMaleFirstNames, octFemaleFirstNames, octMaleFirstNames, novFemaleFirstNames, novMaleFirstNames, decFemaleFirstNames, decMaleFirstNames)

        lastNameArray.push(janLastNames, febLastNames, marchLastNames, aprilLastNames, mayLastNames, juneLastNames, julyLastNames, augLastNames, septLastNames, octLastNames, novLastNames, decLastNames)
        newLastArray = lastNameArray[Math.floor(Math.random()*lastNameArray.length)]
        randomLastName = newLastArray[Math.floor(Math.random()*newLastArray.length)]

        newFirstArray = firstNameArray[Math.floor(Math.random()*firstNameArray.length)]
        randomFirstName = newFirstArray[Math.floor(Math.random()*newFirstArray.length)]

        $("#namePlace").text(randomFirstName + " " +  randomLastName)
    })

})


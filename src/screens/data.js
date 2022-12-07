import soundwave from '../soundwave.png';
import soundwave1 from '../soundwave1.png';
import megatron from '../megatron.png';
import megatron1 from '../megatron1.png';
import starscream from '../starscream.png';
import starscream1 from '../starscream1.png';
import shockwave from '../shockwave.png';
import shockwave1 from '../shockwave1.png';
import knock from '../knock.png';
import knock1 from '../knock1.png';
import dreadwing from '../dreadwing.png';
import dreadwing1 from '../dreadwing1.png';
import breakdown from '../breakdown.png';
import breakdown1 from '../breakdown1.png';
import airachnid from '../airachnid.png';
import airachnid1 from '../airachnid1.png';

const data =[
        {
        "id": "1",
        "link": "1",
        "name": "Megatron",
        "image": megatron,
        "image1": megatron1,
        "text": "Leader des Decepticons; extrêmement massif, puissant et cruel, il est craint de ses ennemies et respecté par ses troupes.",
        "text1":"Avant la guerre, c'était un gladiateur portant le nom de Megatronus, qui était également un très bon ami d’Optimus Prime à cette époque.",
        "text2":"Il est impitoyable sur son poste de leader, refusant de laisser quelqu'un d'autre que lui diriger les Decepticons à sa place.",
        "text3":"Arme :  canon atomique destructeur et lame dans le canon",
        "text4":"Transformation :  chasseur d'attaque cybertronien",
        "stat":  {
            xAxis: {
                type: 'category',
                data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [200, 200, 150, 120, 200, 200],
                type: 'bar',
                itemStyle: { color: "grey" }
                }
            ]
            }
        },
        {
        "id": "2",
        "link": "2",
        "name": "Soundwave",
        "image": soundwave,
        "image1": soundwave1,
        "text": "Lieutenant de Megatron chargé de l'espionnage et de communication, Soundwave assure aussi la tache d’espion dans l’armée Decepticon.",
        "text1":"Sa particularité étant qu’il ne dit jamais le moindre mot, ne s’exprimant que par des images et échantillons de voix d’autres personnages. Il est le seul Decepticon qui n'ait jamais échoué à la moindre de ses missions.",
        "text2":"Il est très fidèle à Megatron, on le voit par ailleurs combattre à ses côtés avant la guerre. Ses seuls mots dans la série ont été 'Soundwave, supérieur. Autobots inférieurs'.",
        "text3":"Arme :  canon soninque, bras mecanique allongeable, ultrason et Laserbeak. Laserbeak : mini-drone qui forme une partie du torse de Soundwave",
        "text4":"Transformation :  Drone de chase",
        "stat":  {
            xAxis: {
                type: 'category',
                data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [150, 140, 200, 200, 200, 200],
                type: 'bar',
                itemStyle: { color: "#5A5194" }
                }
            ],
            "audio": "../soundwave.mp3"
            }
            
        },
        {
        "id": "3",
        "link": "3",
        "name": "Starscream",
        "image": starscream,
        "image1": starscream1,
        "text": "Lieutenant de Megatron chargé des opérations militaires.",
        "text1":"Le but de Starscream est de prendre la place de Megatron en tant que leader des Decepticons.",
        "text2":"Il n’aura donc de cesse d’élaborer des plans pour trahir Megatron. Starscream est très intelligent, cruel et compétent, mais également couard, arrogant et malchanceux",
        "text3":"Arme :  canon laser et lance missile",
        "text4":"Transformation :  chasseur",
        "stat":  {
            xAxis: {
                type: 'category',
                data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [160, 120, 200, 200, 200, 200],
                type: 'bar',
                itemStyle: { color: "#945251" }
                }
            ]
            }
        },
        
        {
            "id": "4",
            "link": "4",
            "name": "Shockwave",
            "image": shockwave,
            "image1": shockwave1,
            "text": "Lieutenant de Mégatron chargé des recherches scientifiques, Shockwave ne sert naturellement que son seul vrai maître : la logique.",
            "text1":"Il est prêt à ignorer les petites querelles et les piques contre lui, et ne fera que ce qu'il trouve logique.",
            "text2":"Sa nature passive à ce qui se passe autour de lui peut le dépeindre comme apathique, Shockwave est aussi brutal et féroce que n'importe quel guerrier Decepticon, et a la force et la durabilité nécessaires pour résister à tout.",
            "text3":"Arme :  canon atomique destructeur modifié",
            "text4":"Transformation :  tank cybertronien",
            "stat":  {
                xAxis: {
                    type: 'category',
                    data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [200, 170, 150, 120, 200, 200],
                    type: 'bar',
                    itemStyle: { color: "#772994" }
                    }
                ]
                }
            },
            {
                "id": "5",
                "link": "5",
                "name": "Knock Out",
                "image": knock,
                "image1": knock1,
                "text": "Médecin des Decepticons et lieutenant de Mégatron chargé des recherches scientifiques jusqu'au retour de Shockwave.",
                "text1":"Knock Out est essentiellement la version de Ratchet des Decepticon. Cependant, plutôt que d'être grincheux, KnockOut est effronté, arrogant et très vaniteux.",
                "text2":"Il valorise sa propre apparence avant tout, y compris le bien-être de ses patients.",
                "text3":"Arme :  canon laser, scie rotative, perceuse et baton electrique",
                "text4":"Transformation :  Voiture de sport ressemblant à une Aston Martin",
                "stat":  {
                    xAxis: {
                        type: 'category',
                        data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        data: [140, 200, 180, 200, 200, 200],
                        type: 'bar',
                        itemStyle: { color: "#FF2824" }
                        }
                    ]
                    }
                },
                {
                    "id": "6",
                    "link": "6",
                    "name": "Dreadwing",
                    "image": dreadwing,
                    "image1": dreadwing1,
                    "text": "Dreadwing était le troisième commandant des armée en second des forces Decepticons et le plus fidèle des trois.",
                    "text1":"Dreadwing avait également un fort sens de l'honneur contrairement au reste des Decepticons mais très semblable à son frère jumeau Skyquake. Dreadwing,  comme son frère, appréciait la loyauté et l'honneur. Cependant, Dreadwing était mieux pour garder son sang-froid la plupart du temps.",
                    "text2":"Plus tard, Dreadwing fut exécuté par Megatron pour avoir désobéi à ses ordres pendant une dispute personnelle de vengeance avec Starscream.",
                    "text3":"Arme :  Bombe,canon laser et épee",
                    "text4":"Transformation :  Jet de Combat",
                    "stat":  {
                        xAxis: {
                            type: 'category',
                            data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                            data: [200, 200, 180, 140, 200, 200],
                            type: 'bar',
                            itemStyle: { color: "#0A4494" }
                            }
                        ]
                        }
                    },
                    {
                        "id": "7",
                        "link": "7",
                        "name": "Breakdown",
                        "image": breakdown,
                        "image1": breakdown1,
                        "text": "Breakdown était un soldat Decepticon et un guerrier, Breakdown est arrivé sur Terre, avec son partenaire et ami de longue date, KnockOut,",
                        "text1":"Pendant la guerre sur Cybertron, il a développé une rivalité avec Bulkhead. Breakdown était très fidèle à Megatron et à la cause Decepticon, mais pas aussi fermement que Soundwave.",
                        "text2":"Bulkhead est l'ennemi juré de Breakdown, Breakdwn fut tué par Airachnid",
                        "text3":"Arme :  canon laser, lance missile et marteau",
                        "text4":"Transformation :  voiture militaire",
                        "stat":  {
                            xAxis: {
                                type: 'category',
                                data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                data: [200, 200, 100, 100, 120, 150],
                                type: 'bar',
                                itemStyle: { color: "#010BF0" }
                                }
                            ]
                            }
                        },
                        {
                            "id": "8",
                            "link": "8",
                            "name": "Airachnid",
                            "image": airachnid,
                            "image1": airachnid1,
                            "text": "Airachnid est une triple-changeur se transforment en araignée géante métalique et en hélicoptère. C'est une chasseuse de Prime.",
                            "text1":"Airachnid prend un plaisir malsain et tordu à infliger de la douleur aux autres; que ce soit physique, mental ou émotionnel. Ayant étudié et pratiqué les arts de la torture à des degrés horrifiants, elle est capable de mesurer la force de sa volonté par sa résistance à l'agonie qu'elle lui inflige.",
                            "text2":"Airachnid aime chasser, ainsi que collectionner des espèces en voie de disparition (et si elles ne le sont pas, elle le fera). Elle aime jouer avec ses victimes, prolongeant leur souffrance le plus longtemps possible. Une femme vengeresse et conspiratrice, Airachnid réglera toujours ses comptes, ",
                            "text3":"Arme :  toile gluante, canon laser et acide",
                            "text4":"Transformation :  Araignée cybertronien et hélicoptere militaire",
                            "stat":  {
                                xAxis: {
                                    type: 'category',
                                    data: ['Force', 'Endurance', 'Agilité', 'Vitesse', 'Intelligence', 'Mechanceté']
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                series: [
                                    {
                                    data: [140, 140, 200, 200, 200, 200],
                                    type: 'bar',
                                    itemStyle: { color: "#65506B" }
                                    }
                                ]
                                }
                            },
    ]
    


export default data;
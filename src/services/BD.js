
const BD=[
    {
    maritime:[
        {
            numero:145,
            dateDep:"12-12-2022",
            dateAr:"13-2-2023",
            lieuDep:"Dakar",
            lieuArr:"Nigeria",
            distance:500,
            image:"https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=600",
            alimentaires:
            [
             {
             id:1,
             libelle:"café",
             poids:4,
             volume:5,
             image:"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600", 
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:2,
              libelle:"cacao",
             poids:0.20,
             volume:0.50,
             image:"https://images.pexels.com/photos/1212845/pexels-photo-1212845.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:3,
              libelle:"cacahuète",
             poids:0.10,
             volume:0.20,
             image:"https://images.pexels.com/photos/209345/pexels-photo-209345.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:4,
              libelle:"Amande",
             poids:0.05,
             volume:0.08,
             image:"https://images.pexels.com/photos/3997459/pexels-photo-3997459.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
                ],
             chimiques:
                [
                {
                id:1,
              libelle:"Charbon",
             poids:50 ,
             volume:19,
             image:"https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=600",
             degresTox:7,
             fraisMaritime:500,
             autresFraisChimique:10000,
                },
                {
                    id:2,
            libelle:"Bronze",
            poids:160 ,
            volume:11,
            image:"https://images.pexels.com/photos/3544171/pexels-photo-3544171.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:4,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
     
     
                ],
            materiels:
            [
                {
                    id:1,
              libelle:"Parfum Channel",
             poids:3,
             volume:3,
             type:'fragile',
             image:"https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:2,
              libelle:"Maquillage",
             poids:0.02,
             volume:0.03,
             type:'fragile',
             image:"https://images.pexels.com/photos/7290089/pexels-photo-7290089.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:3,
              libelle:"Table en bois",
             poids:4,
             volume:5,
             type:'Incassable',
             image:"https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:4,
              libelle:"Chaise en bois",
             poids:2,
             volume:0.03,
             type:'Incasssable',
             image:"https://images.pexels.com/photos/5794015/pexels-photo-5794015.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
    

   
                ]
        },
        {
            numero:184,
            dateDep:"12-7-2022",
            dateAr:'6-1-2022',
            lieuDep:"st-louis",
            lieuArr:"Sedan",
            distance:900,
            image:"https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=600",
            alimentaires:
            [
             {
             id:1,
             libelle:"crevettes",
             poids:4,
             volume:5,
             image:"https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=600", 
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:2,
              libelle:"Crabe",
             poids:0.20,
             volume:0.50,
             image:"https://images.pexels.com/photos/2630954/pexels-photo-2630954.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:3,
              libelle:"Homard",
             poids:0.10,
             volume:0.20,
             image:"https://images.pexels.com/photos/5147257/pexels-photo-5147257.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:4,
              libelle:"Riz",
             poids:0.05,
             volume:0.08,
             image:"https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:5,
              libelle:"maïs",
             poids:0.02,
             volume:0.01,
             image:"https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             
             
                ],
             chimiques:
                [
                {
                id:1,
              libelle:"Briquet",
             poids:50 ,
             volume:3,
             image:"https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=600",
             degresTox:7,
             fraisMaritime:500,
             autresFraisChimique:10000,
                },
                {
                    id:2,
            libelle:"Gel Antibacterial",
            poids:160 ,
            volume:11,
            image:"https://images.pexels.com/photos/6044918/pexels-photo-6044918.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:4,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
                 {
                    id:3,
             libelle:"Savon",
            poids:160 ,
            volume:8,
            image:"https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:6,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
   
        
                ],
            materiels:
            [
                {
                    id:1,
              libelle:"Biere",
             poids:3,
             volume:3,
             type:'fragile',
             image:"https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:2,
              libelle:"Whisqy",
             poids:0.02,
             volume:0.03,
             type:'fragile',
             image:"https://images.pexels.com/photos/372959/pexels-photo-372959.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:3,
              libelle:"Vin",
             poids:4,
             volume:5,
             type:'fragile',
             image:"https://images.pexels.com/photos/121191/pexels-photo-121191.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:4,
              libelle:"Climatiseur",
             poids:2,
             volume:0.03,
             type:'fragile',
             image:"https://media.istockphoto.com/id/519619698/photo/air-conditioner-blowing-warm-air.jpg?s=1024x1024&w=is&k=20&c=WRb32FWvlz_QfA2Rd6g5ZcgneM6eipLi0mGlgUY-J9I=",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:5,
              libelle:"Ventilateur",
             poids:0.02,
             volume:0.01,
             type:'Incassable',
             image:"https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:6,
              libelle:"Sac à Dos",
             poids:0.02,
             volume:0.01,
             type:'Incassable',
             image:"https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                ]
        },
    ],
    aerienne:[
        {
            numero:123,
            dateDep:"12-12-2022",
            dateAr:'13-12-2022',
            lieuDep:"Dakar",
            lieuArr:"Bamako",
            distance:800,
            image:"https://images.pexels.com/photos/674783/pexels-photo-674783.jpeg?auto=compress&cs=tinysrgb&w=600",
            alimentaires:
            [
             {
             id:1,
             libelle:"Pasteque",
             poids:4,
             volume:15,
             image:"https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=600", 
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:2,
              libelle:"Orange",
             poids:0.20,
             volume:10,
             image:"https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:3,
              libelle:"Citron",
             poids:0.10,
             volume:10,
             image:"https://images.pexels.com/photos/1414122/pexels-photo-1414122.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:4,
              libelle:"Poisson",
             poids:0.05,
             volume:25,
             image:"https://images.pexels.com/photos/2792153/pexels-photo-2792153.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:5,
              libelle:"Café",
             poids:0.02,
             volume:25,
             image:"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:6,
              libelle:"Tomate",
             poids:0.03,
             volume:12,
             image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             
                ],
             chimiques:
                [
                {
                id:1,
              libelle:"Batterie",
             poids:50 ,
             volume:3,
             image:"https://media.istockphoto.com/id/997122950/fr/photo/groupe-de-piles-de-taille-aa.jpg?b=1&s=612x612&w=0&k=20&c=OhZuz6Y0yie9AlvVRVWD9sBtuzmwm8PWrN_Ey92Mk7I=",
             degresTox:7,
             fraisMaritime:500,
             autresFraisChimique:10000,
                },
                {
                    id:2,
            libelle:"Eau de Javel",
            poids:160 ,
            volume:11,
            image:"https://images.pexels.com/photos/7451952/pexels-photo-7451952.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:4,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
                 {
                    id:3,
             libelle:"Pesticide",
            poids:160 ,
            volume:8,
            image:"https://media.istockphoto.com/id/919732824/photo/three-multi-colored-bottle-spray-for-cleaning-on-a-white-background.jpg?s=612x612&w=0&k=20&c=AkzQUIy_PkC7PsW1juZa41frNh883CutwDeSff7sKos=",
            degresTox:6,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
                {
                    id:4,
            libelle:"Insecticide",
            poids:160 ,
            volume:10,
            image:"https://media.istockphoto.com/id/1066978818/photo/exterminator-working.jpg?s=612x612&w=0&k=20&c=sddrtDtVPnyn8jIukuNcyCQS0gm6I4GwQQ_CGvs9UYM=",
            degresTox:5,
            fraisMaritime:500,
            autresFraisChimique:10000,
            },
            {
                id:5,
            libelle:"Toxic Substance",
            poids:160 ,
            volume:70,
            image:"https://media.istockphoto.com/id/157529625/photo/toxic-substance.jpg?s=612x612&w=0&k=20&c=YxS0aRk5Rg5gqZm9rsdW6jAmnYk_FrFcRaRg_KRIeN8=",
            degresTox:9,
             fraisMaritime:500,
             autresFraisChimique:10000,
            },
                ],
            materiels:
            [
                {
                    id:1,
              libelle:"Vase",
             poids:3,
             volume:3,
             type:'fragile',
             image:"https://images.pexels.com/photos/220987/pexels-photo-220987.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:120,
                },
                {
                    id:2,
              libelle:"Lunette",
             poids:0.02,
             volume:0.03,
             type:'fragile',
             image:"https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:440,
                },
                {
                    id:3,
              libelle:"Miroir",
             poids:4,
             volume:5,
             type:'fragile',
             image:"https://images.pexels.com/photos/954539/pexels-photo-954539.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:220,
                },
                {
                    id:4,
              libelle:"Carreaux",
             poids:2,
             volume:0.03,
             type:'fragile',
             image:"https://images.pexels.com/photos/1652544/pexels-photo-1652544.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:80,
                },
                {
                    id:5,
              libelle:"Tissu",
             poids:0.02,
             volume:0.01,
             type:'Incassable',
             image:"https://images.pexels.com/photos/365067/pexels-photo-365067.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:700,
                },
                {
                    id:6,
              libelle:"Laine",
             poids:0.02,
             volume:0.01,
             type:'Incassable',
             image:"https://images.pexels.com/photos/2070676/pexels-photo-2070676.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:470,
                },
                {
                    id:7,
              libelle:"Matelas",
             poids:15,
             volume:0.70,
             type:'Incassable',
             image:"https://media.istockphoto.com/id/174948425/photo/a-white-mattress-with-no-bedding.jpg?s=612x612&w=0&k=20&c=XBqJcd0mc9qOxrTILSY-FN1p7dei5wlcliy7kaLdQzA=",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
             distance:100,
                },
                ]
        },
        {
            numero:124,
            dateDep:"25-2-2022",
            dateAr:'1-3-2022',
            lieuDep:"Maroc",
            lieuArr:"New York",
            distance:700,
            image:"https://images.pexels.com/photos/674783/pexels-photo-674783.jpeg?auto=compress&cs=tinysrgb&w=600",
            alimentaires:
            [
             {
             id:1,
             libelle:"Macaroni",
             poids:4,
             volume:5,
             image:"https://images.pexels.com/photos/6287280/pexels-photo-6287280.jpeg?auto=compress&cs=tinysrgb&w=600", 
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:2,
              libelle:"spaghetti",
             poids:0.20,
             volume:0.50,
             image:"https://images.pexels.com/photos/262905/pexels-photo-262905.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:3,
              libelle:"Nouilles",
             poids:0.10,
             volume:0.20,
             image:"https://images.pexels.com/photos/47306/pasta-spaghetti-noodle-pasta-nests-47306.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:4,
              libelle:"Lait",
             poids:0.05,
             volume:0.08,
             image:"https://images.pexels.com/photos/1675976/pexels-photo-1675976.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:5,
              libelle:"Curcuma",
             poids:0.02,
             volume:0.01,
             image:"https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             
             
                ],
             chimiques:
                [
                {
                id:1,
              libelle:"Shampoing",
             poids:50 ,
             volume:"3",
             image:"https://images.pexels.com/photos/3735627/pexels-photo-3735627.jpeg?auto=compress&cs=tinysrgb&w=600",
             degresTox:7,
             fraisMaritime:500,
             autresFraisChimique:10000,
                },
                {
                    id:2,
            libelle:"Bougie",
            poids:160 ,
            volume:"11",
            image:"https://images.pexels.com/photos/278823/pexels-photo-278823.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:4,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
                 {
                    id:3,
             libelle:"handelles",
            poids:160 ,
            volume:"8",
            image:"Pesticide",
            degresTox:6,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
  
                ],
            materiels:
            [
                {
                    id:1,
              libelle:"Jordan",
             poids:3,
             volume:3,
             type:'Incassable',
             image:"https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:2,
              libelle:"Montre",
             poids:0.02,
             volume:0.03,
             type:'fragile',
             image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
                {
                    id:3,
              libelle:"Soutien-Gorge",
             poids:4,
             volume:5,
             type:'Incassable',
             image:"https://images.pexels.com/photos/3927388/pexels-photo-3927388.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisMaritime:400,
             fraisRoutiere:200,
             fraisAerienne:1000,
                },
 
                ]
        },
    ],
    routiere:[
        {
            numero:584,
            dateDep:"15-1-2022",
            dateAr:'10-12-2022',
            lieuDep:"Gabon",
            lieuArr:"Dakar",
            distance:600,
            image:"https://media.istockphoto.com/id/946210052/fr/photo/caravane-ou-convoi-de-camions-sur-la-route.jpg?b=1&s=612x612&w=0&k=20&c=wB2SadbUdSYrewa3NmjulvevIC-JRrhutoZlRq7VEtk=",
            alimentaires:
            [
             {
             id:1,
             libelle:"Fromage",
             poids:4,
             volume:5,
             image:"https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=600", 
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:2,
              libelle:"Laitue",
             poids:0.20,
             volume:0.50,
             image:"https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:3,
              libelle:"Carottes",
             poids:0.10,
             volume:0.20,
             image:"https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             {
             id:4,
              libelle:"Pomme de terre",
             poids:0.05,
             volume:0.08,
             image:"https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
             fraisRoutiere:100,
             fraisMaritime:90,
             fraisAerienne:300,
             autresFraisAlimentaire:5000,
             },
             
             
             ],
             chimiques:   [
                {
                id:1,
              libelle:"Gaz",
             poids:50 ,
             volume:3,
             image:"https://images.pexels.com/photos/266896/pexels-photo-266896.jpeg?auto=compress&cs=tinysrgb&w=600",
             degresTox:7,
             fraisMaritime:500,
             autresFraisChimique:10000,
                },
                {
                    id:2,
            libelle:"Huile Moteur",
            poids:160 ,
            volume:11,
            image:"https://images.pexels.com/photos/13065697/pexels-photo-13065697.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:4,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
                 {
                    id:3,
             libelle:"Allumette",
            poids:160 ,
            volume:8,
            image:"https://images.pexels.com/photos/67540/matches-matchstick-flammable-wood-67540.jpeg?auto=compress&cs=tinysrgb&w=600",
            degresTox:6,
            fraisMaritime:500,
            autresFraisChimique:10000,
                 },
     
      
            ],
            materiels:
        [
            {
                id:1,
          libelle:"Guitare",
         poids:3,
         volume:3,
         type:'fragile',
         image:"https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600",
         fraisMaritime:400,
         fraisRoutiere:200,
         fraisAerienne:1000,
         distance:120,
            },
            {
                id:2,
          libelle:"Flute",
         poids:0.02,
         volume:0.03,
         type:'fragile',
         image:"https://images.pexels.com/photos/6647698/pexels-photo-6647698.jpeg?auto=compress&cs=tinysrgb&w=600",
         fraisMaritime:400,
         fraisRoutiere:200,
         fraisAerienne:1000,
         distance:440,
            },
            {
                id:3,
          libelle:"Pianno YAMAHA",
         poids:4,
         volume:5,
         type:'fragile',
         image:"https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600",
         fraisMaritime:400,
         fraisRoutiere:200,
         fraisAerienne:1000,
         distance:220,
            },
            {
                id:4,
          libelle:"Pneu",
         poids:2,
         volume:0.03,
         type:'Incassable',
         image:"https://images.pexels.com/photos/441103/pexels-photo-441103.jpeg?auto=compress&cs=tinysrgb&w=600",
         fraisMaritime:400,
         fraisRoutiere:200,
         fraisAerienne:1000,
         distance:80,
            },
            
 
            ]
        },
    ],
}];

const LOGINBD=[
    {
        email:"gpDuMonde@gmail.com",
        password:"gpdumonde"
    }
];
export function login(){  
    return LOGINBD
}

export function addCarg(numero,image,dateDep,dateAr,lieuDep,lieuArr,typeCarg,distance){
        const destruct= {numero,image,dateDep,dateAr,lieuDep,lieuArr,distance}
    if( typeCarg==="maritime"){
        BD[0]["maritime"].push(destruct)
            console.log("maritime")
       }else if(typeCarg==="aerienne"){
         BD[0]["aerienne"].push(destruct)
            console.log("aerienne")
       }else if(typeCarg==="routiere"){
     BD[0]["routiere"].push(destruct);
        console.log("routiere")
       }else{
        alert('nothing to add')
       }
}
export function AllBD(){
    const tt= BD
    return tt;
}

// export function MAJALLBD(){
//     const allbd= AllBD()
//     const newCarg= addCarg()
//     const maj=[...allbd,...newCarg]
//     console.log(maj)
//     return maj
// }

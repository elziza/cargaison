const alimentaires=
   [
    {
    id:1,
    libelle:"Pasteque",
    poids:4,
    volume:5,
    image:"https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=600", 
    fraisRoutiere:100,
    distance:1000,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    {
    id:2,
     libelle:"Orange",
    poids:0.20,
    volume:0.50,
    image:"https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
    fraisRoutiere:100,
    distance:105,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    {
    id:3,
     libelle:"Citron",
    poids:0.10,
    volume:0.20,
    image:"https://images.pexels.com/photos/1414122/pexels-photo-1414122.jpeg?auto=compress&cs=tinysrgb&w=600",
    fraisRoutiere:100,
    distance:900,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    {
    id:4,
     libelle:"Poisson",
    poids:0.05,
    volume:0.08,
    image:"https://images.pexels.com/photos/2792153/pexels-photo-2792153.jpeg?auto=compress&cs=tinysrgb&w=600",
    fraisRoutiere:100,
    distance:100,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    {
    id:5,
     libelle:"Café",
    poids:0.02,
    volume:0.01,
    image:"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    fraisRoutiere:100,
    distance:120,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    {
    id:6,
     libelle:"Tomate",
    poids:0.03,
    volume:0.02,
    image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
    fraisRoutiere:100,
    distance:600,
    fraisMaritime:90,
    fraisAerienne:300,
    autresFraisAlimentaire:5000,
    },
    
    ];

    export function bdAlimentaire(){
        return alimentaires;
    }

    export function getAllProduitAlimById(idAlimentaire){
        const alimentaireFound= alimentaires.find(ali=>{
           return  ali.id = idAlimentaire ;
         });
         return alimentaireFound;
     }
     
     export function addProduitAlim(alimentaire){
       
            alimentaires.push(alimentaire);
     }
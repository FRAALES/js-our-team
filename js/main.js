// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const membri = [
    {
    'nome': 'Wayne Barnett',
    'ruolo': 'Wayne Barnett	Founder & CEO',
    'foto': 'wayne-barnett-founder-ceo.jpg'
},
{
    'nome': 'Angela Caroll',
    'ruolo': 'Chief Editor',
    'foto': 'angela-caroll-chief-editor.jpg'
},
{
    'nome': 'Walter Gordon',
    'ruolo': 'Office Manager',
    'foto': 'walter-gordon-office-manager.jpg'
},
{
    'nome': 'Angela Lopez',
    'ruolo': 'Social Media Manager',
    'foto': 'angela-lopez-social-media-manager.jpg'
},
{
    'nome': 'Scott Estrada',
    'ruolo': 'Developer',
    'foto': 'scott-estrada-developer.jpg'
},
{
    'nome': 'Barbara Ramos',
    'ruolo': 'Graphic Designer',
    'foto': 'barbara-ramos-graphic-designer.jpg'
},
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//Usa console.log() per stampare in console le proprietà di ogni membro del team;

console.log(membri);


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


const containerSelection = document.getElementById("container");
console.log(containerSelection);

for (let i = 0; i < membri.length; i++){
    let objectIesimo = membri[i];
    
    

    const nomeMembro = objectIesimo.nome;
    const ruoloMembro = objectIesimo.ruolo;
    const fotoMembro = objectIesimo.foto;

    const cardElement = `<div class="card">
                            <img src=img/${fotoMembro} alt="">
                            <div class="cardElement_description">${nomeMembro}</div>
                            <div class="cardElement_description">${ruoloMembro}</div>

                        </div>`;


    containerSelection.innerHTML += cardElement;
}


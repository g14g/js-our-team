const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png",
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png",
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png",
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png",
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png",
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png",
    },
];

const teamList = document.querySelector("#team-list");
const formAddMember = document.querySelector("#form-add-member");

function renderMemberCards(member) {
    return `
    <div class="col md:col-6 xl:col-4">
        <div class="card card-row">
            <img class="card-img-start w-8 ratio-1x1 object-fit-cover" src="./${member.img}" alt="${member.name}" />
            <div class="card-body p-0 ps-6 justify-content-center">
                <h4 class="card-title text-uppercase">${member.name}</h4>
                <p class="card-text">${member.role}</p>
                <p class="card-text fg-primary">${member.email}</p>
            </div>
        </div>
    </div>
    `;
}

function loadMembers(members) {
    // let htmlCard; // Questo è un errore -> Bisogna inizializzare la variabile htmlCard con un valore vuoto, altrimenti viene aggiunto un undefined e poi tutto l'html delle cards...
    let htmlCard = "";

    for (const member of members) {
        console.log(member.name);

        // teamList.innerHTML += renderMemberCards(member);

        htmlCard += renderMemberCards(member);
    }

    teamList.innerHTML = htmlCard;
}

loadMembers(teamMembers);

// formAddMember.addEventListener("submit", (e) => {
function onSubmit(e) {
    e.preventDefault();
    // console.log("Ho cliccato su Add Member");

    const name = document.querySelector("#inputName").value;
    const role = document.querySelector("#inputRole").value;
    const email = document.querySelector("#inputEmail").value;
    const img = document.querySelector("#inputImage").value;

    if (!name || !role || !email || !img) {
        console.log("Tutti i campi sono obbligatori!");
        return;
    }

    const newMember = {
        name,
        role,
        email,
        img,
    };

    // Anche se l'array di object teamMembers è una variabile const, con push posso aggiornarne il contenuto, aggiungendo un nuovo object.
    teamMembers.push(newMember);

    loadMembers(teamMembers);

    // Reset del form dopo submit
    e.target.reset();
}
// });

formAddMember.addEventListener("submit", onSubmit);

function buscar(cb) {
    // TODO simula buscar 12 casais do banco de dados, demorando meio segundo
    setTimeout(() => {
        const mockCasais = [
            [
                {
                    id: "guido",
                    name: "Guido",
                },
                {
                    id: "abigail",
                    name: "Abigail",
                },
            ],
            [
                {
                    id: "pancho",
                    name: "Pancho",
                },
                {
                    id: "kiwi",
                    name: "Kiwi",
                },
            ],
            [
                {
                    id: "bingo",
                    name: "Bingo",
                },
                {
                    id: "jade",
                    name: "Jade",
                },
            ],
            [
                {
                    id: "lennon",
                    name: "Lennon",
                },
                {
                    id: "jujuba",
                    name: "Jujuba",
                },
            ],
            [
                {
                    id: "guido",
                    name: "Guido",
                },
                {
                    id: "abigail",
                    name: "Abigail",
                },
            ],
            [
                {
                    id: "pancho",
                    name: "Pancho",
                },
                {
                    id: "kiwi",
                    name: "Kiwi",
                },
            ],
        ];
        cb([...mockCasais, ...mockCasais]);
    }, 500);
}

function render(casais) {
    divpetsnamorando = document.getElementById("petsnamorando");

    casais.forEach((casal, i) => {
        divcasal = document.createElement("div");
        divcasal.classList = "casal";

        let divcasalpfp = document.createElement("div");
        divcasalpfp.className = "casalpfp";

        casal.forEach((pet) => {
            let imgpfp = document.createElement("img");
            imgpfp.className = "pfp";
            imgpfp.src = `/pettlove/assets/namorando/pfp/${pet.id}.png`;
            imgpfp.alt = pet.name;
            divcasalpfp.appendChild(imgpfp);
        });

        let imgheart = document.createElement("img");
        imgheart.classList = "heart";
        imgheart.src = "/pettlove/assets/namorando/heart.svg";
        divcasalpfp.appendChild(imgheart);

        divcasal.appendChild(divcasalpfp);

        let h3casalname = document.createElement("h3");
        h3casalname.innerText = `${casal[0].name} e ${casal[1].name}`;
        divcasal.appendChild(h3casalname);

        divpetsnamorando.appendChild(divcasal)

        if (i % 6 == 5) {
            let divpublicidade = document.createElement("div");
            divpublicidade.classList = "publicidade";
            divpublicidade.innerText = "Publicidade";
            divpetsnamorando.appendChild(divpublicidade);
        }
    });

    document.getElementById("carregar-mais").classList.remove("loading");
}

function carregarmais() {
    document.getElementById("carregar-mais").classList.add("loading");
    buscar(render);
}

carregarmais();

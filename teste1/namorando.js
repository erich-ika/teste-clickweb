function buscar(cb) {
    // TODO simula buscar 4 casais do banco de dados, demorando 2 segundos
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
        ];
        cb([...mockCasais, ...mockCasais]);
    }, 500);
}

function render(casais) {
    divpetsnamorando = document.getElementById("petsnamorando");
    casais.forEach((casal, i) => {
        if ((i - 2) % 4 == 0) {
            let divpublicidade = document.createElement("div");
            divpublicidade.classList = "publicidade";
            divpublicidade.innerText = "Publicidade 315x80";
            divpetsnamorando.appendChild(divpublicidade);
        }

        let divcasal = document.createElement("div");
        divcasal.className = "casal";

        casal.forEach((pet) => {
            let imgpfp = document.createElement("img");
            imgpfp.className = "pfp";
            imgpfp.src = `./assets/namorando/pfp/${pet.id}.png`;
            imgpfp.alt = pet.name;
            divcasal.appendChild(imgpfp);
        });

        let imgheart = document.createElement("img");
        imgheart.classList = "heart";
        imgheart.src = "./assets/namorando/heart.svg";
        divcasal.appendChild(imgheart);

        divpetsnamorando.appendChild(divcasal);

        let h3casalname = document.createElement("h3");
        h3casalname.innerText = `${casal[0].name} e ${casal[1].name}`;
        divpetsnamorando.appendChild(h3casalname);
    });

    document.getElementById("carregar-mais").classList.remove("loading");
}

function carregarmais() {
    document.getElementById("carregar-mais").classList.add("loading");
    buscar(render);
}

carregarmais();

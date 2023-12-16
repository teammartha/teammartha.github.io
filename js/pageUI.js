function signatures(){
    let signatures = Array.from(document.getElementsByTagName("signature"));
    signatures.forEach(element => {
        let name = element.getAttribute("name");
        switch(name){
            case "pasta":
                element.setAttribute("title", 
                "Pasta (he/they) 🏳️‍🌈\n" +
                "Lead Developer\n" +
                "https://github.com/teammartha\n" +
                "pokeheartgold-expanded\n" +
                "hgss-learnset-viewer");
                //Pasta (he/they) 🏳️‍🌈
                //Lead Developer
                //https://github.com/teammartha
                //pokeheartgold-expanded
                break;
            default:
                break;
        }
    });
    return;
}

function homePage(){
    window.location.href = "../pokeheartgold-expanded/";
}

function repository(){
    window.location.href = "https://github.com/teammartha";
}

function summary(){
    window.location.href = "../summary/";
}

function updatedPokemon(){
    window.location.href = "../updated-pokemon/";
}

function buildHeader(){
    let wikiheader = Array.from(document.getElementsByTagName("wikiheader"));
    wikiheader.forEach(element => {
        // Create a header
        let header = document.createElement("div");
        header.id = "header";
        header.classList.add("gsheader");
            let header_table = document.createElement("table");
                let header_tr = document.createElement("tr");
                    let header_td1 = document.createElement("td");
                        let img = document.createElement("img");
                        img.setAttribute("src", "../img/ho-oh.png");
                    header_td1.appendChild(img);
                header_tr.appendChild(header_td1);
                    let header_td2 = document.createElement("td");
                        let header_h2 = document.createElement("h2");
                            let header_h2_text = document.createTextNode("pokeheartgold-expanded Wiki");
                        header_h2.appendChild(header_h2_text);
                    header_td2.appendChild(header_h2);
                        let header_p = document.createElement("p");
                            let htd2_text1 = document.createTextNode("A ");
                        header_p.appendChild(htd2_text1);
                            let htd2_a1 = document.createElement("a");
                            htd2_a1.setAttribute("href", "../home/");
                            htd2_a1.text = "Team Martha";
                        header_p.appendChild(htd2_a1);
                            let htd2_text2 = document.createTextNode(" project built from the ");
                        header_p.appendChild(htd2_text2);
                            let htd2_a2 = document.createElement("a");
                            htd2_a2.setAttribute("href", "https://github.com/pret/pokeheartgold");
                            htd2_a2.text = "pokeheartgold";
                        header_p.appendChild(htd2_a2);
                            let htd2_text3 = document.createTextNode(" decompilation");
                        header_p.appendChild(htd2_text3);
                    header_td2.appendChild(header_p);
                header_tr.appendChild(header_td2);
            header_table.appendChild(header_tr);
        header.appendChild(header_table);
        // Create header buttons
        let buttons = document.createElement("div");
        buttons.id = "buttons";
            let button_table = document.createElement("table");
                let button_tr = document.createElement("tr");
                    let button_td0 = document.createElement("td");
                        let button0 = document.createElement("button");
                        button0.classList.add("gsheaderbutton");
                        button0.setAttribute("onclick", "homePage()");
                        button0.textContent = "Home";
                    button_td0.appendChild(button0);
                button_tr.appendChild(button_td0);
                    let button_td1 = document.createElement("td");
                        let button1 = document.createElement("button");
                        button1.classList.add("gsheaderbutton");
                        button1.setAttribute("onclick", "repository()");
                        button1.textContent = "Repository";
                    button_td1.appendChild(button1);
                button_tr.appendChild(button_td1);
                    let button_td2 = document.createElement("td");
                        let button2 = document.createElement("button");
                        button2.classList.add("gsheaderbutton");
                        button2.setAttribute("onclick", "summary()");
                        button2.textContent = "Summary";
                    button_td2.appendChild(button2);
                button_tr.appendChild(button_td2);
                    let button_td3 = document.createElement("td");
                        let button3 = document.createElement("button");
                        button3.classList.add("gsheaderbutton");
                        button3.setAttribute("onclick", "updatedPokemon()");
                        button3.textContent = "Updated Pokemon";
                    button_td3.appendChild(button3);
                button_tr.appendChild(button_td3);
            button_table.appendChild(button_tr);
        buttons.appendChild(button_table);
        // Add to wikiheader
        element.appendChild(header);
        element.appendChild(buttons);
    });
}

function onStartup(){
    buildHeader();
    signatures();
}
const sections = [
  {
    title: "Welkom",
    body: `
      Welkom in jouw nieuwe favoriete tuinhoekje — waar planten groeien en jij meegroeit.
      Of je nu een balkon, tuin of vensterbank hebt, hier vind je tips die werken.
    `
  },
  {
    title: "Deze Week’s Tips",
    list: [
      "Geef ’s ochtends water zodat planten kunnen drinken voor de zon te sterk wordt.",
      "Voed de bodem met compost — gezonde grond betekent sterke wortels.",
      "Begin klein: één kruidenpotje of één verhoogde bak is genoeg."
    ]
  },
  {
    title: "Tuin Basics",
    list: [
      "Gele bladeren? Vaak stress: te veel water, te weinig licht of voedingstekort.",
      "Companion planting helpt: sommige planten beschermen elkaar tegen plagen.",
      "Kies inheemse planten: minder onderhoud en beter voor lokale dieren."
    ]
  },
  {
    title: "Februari Checklist",
    list: [
      "Plan je lente-bedden en kies je zaden.",
      "Zaai binnen: tomaten, paprika’s en kruiden.",
      "Snoei fruitbomen voor nieuwe groei begint.",
      "Ververs mulch om wortels te beschermen tegen late vorst."
    ]
  }
];

function renderSections() {
  const container = document.getElementById("content");

  sections.forEach(section => {
    const div = document.createElement("div");
    div.className = "section";

    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    div.appendChild(h2);

    if (section.body) {
      const p = document.createElement("p");
      p.textContent = section.body.trim();
      div.appendChild(p);
    }

    if (section.list) {
      const ul = document.createElement("ul");
      section.list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      div.appendChild(ul);
    }

    container.appendChild(div);
  });
}

renderSections();
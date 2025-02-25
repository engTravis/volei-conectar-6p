const inputsContainer = document.getElementById('inputsContainer');
for (let i = 1; i <= 18; i++) {
    const div = document.createElement('div');
    div.className = 'input-group';
    
    const label = document.createElement('label');
    label.innerText = `Jogador ${i}:`;
    
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Nome';
    inputName.required = true;
    
    const inputSkill = document.createElement('input');
    inputSkill.type = 'number';
    inputSkill.min = 1;
    inputSkill.max = 5;
    inputSkill.placeholder = 'Nível (1-5)';
    inputSkill.required = true;
    
    div.appendChild(label);
    div.appendChild(inputName);
    div.appendChild(inputSkill);
    inputsContainer.appendChild(div);
}

function gerarGrupos() {
    const players = [];
    const inputs = document.querySelectorAll('.input-group');
    
    inputs.forEach(input => {
        const name = input.querySelector('input[type="text"]').value;
        const skill = parseInt(input.querySelector('input[type="number"]').value);
        players.push({ name, skill });
    });

    players.sort((a, b) => b.skill - a.skill);

    const grupos = [[], [], []];
    for (let i = 0; i < players.length; i++) {
        grupos[i % 3].push(players[i]);
    }

    const gruposContainer = document.getElementById('gruposContainer');
    gruposContainer.innerHTML = '';
    
    grupos.forEach((grupo, index) => {
        const grupoDiv = document.createElement('div');
        grupoDiv.className = 'grupo';
        
        const titulo = document.createElement('h2');
        titulo.innerText = `Grupo ${index + 1}`;
        
        const lista = document.createElement('ul');
        grupo.forEach(jogador => {
            const item = document.createElement('li');
            item.innerText = `${jogador.name} (Nível ${jogador.skill})`;
            lista.appendChild(item);
        });
        
        grupoDiv.appendChild(titulo);
        grupoDiv.appendChild(lista);
        gruposContainer.appendChild(grupoDiv);
    });
}
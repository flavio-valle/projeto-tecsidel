

const template = document.createElement('template')
template.innerHTML = `
 	<div class="drawer-menu">
 		<button class="drawer-button" id="button1">Cameras</button>
 		<button class="drawer-button" id="button2">verificar tabelas</button>
 	</div>
`;

class Drawer extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({mode: 'closed'});
		let clone = template.content.cloneNode(true)

		const style = document.createElement("style");
		style.textContent = `
			.drawer-menu {
				position: fixed;
				top: 0;
				z-index: 2;
				
				background-color: grey;
				width: 200px;
				height: 100%;
			
				display: flex;
				flex-direction: column;
				align-items: start;
			}

			.drawer-button {
				background-color: rgba(0,0,0,0);
				border:none;
			}
		`;

		shadowRoot.append(clone);
		shadowRoot.appendChild(style);

		
		const button1 = shadowRoot.getElementById('button1');
		const button2 = shadowRoot.getElementById('button2');
		button1.addEventListener('click', this.onClickButton1.bind(this));
		button2.addEventListener('click', this.onClickButton2.bind(this));
	}

	onClickButton1(event) {
		console.log('Botão 1 clicado!');
	}

	onClickButton2(event) {
			console.log('Botão 2 clicado!');
	}
}

customElements.define('drawer-component', Drawer);
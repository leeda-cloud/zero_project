// do something!
const Nav = $list => {

	let $this = $list;

	const list = [{
		id: "all",
		content: "전체보기",
	}, {
		id: "business",
		content: "비즈니스",
	}, {
		id: "entertainment",
		content: "엔터테인먼트",
	}, {
		id: "health",
		content: "건강",
	}, {
		id: "science",
		content: "과학",
	}, {
		id: "sports",
		content: "스포츠",
	}, {
		id: "technology",
		content: "기술",
	}]

	const makeNav = () => {
		let listUL = document.createElement('ul');

		list.forEach(i => {
			let listLI = document.createElement('li');
			listLI.id = i.id;
			listLI.innerText = `${i.content}`;
			listLI.style.cursor = "pointer";

			listUL.appendChild(listLI);


			// listLI.addEventListener("click", e => {
			// 	let getID = e.target.id;
			// 	let getInfo = new CustomEvent("get-info", {
			// 		bubbles: true,
			// 		cancelable: false,
			// 		detail: {
			// 			getID
			// 		},
			// 	})
			// 	e.target.dispatchEvent(getInfo)
			// })
		})

		$this.appendChild(listUL);
	}

	makeNav()

};

export default Nav;





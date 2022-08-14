
let linkStyle = document.getElementsByTagName("link");
let n = linkStyle.length - 1;
let link = document.createElement("link");
link.href = "star-rating/theme.css";
link.rel = "stylesheet"

linkStyle[n].after(link);


const StarRating = $container => {

	let maxStar = $container.getAttribute("data-max-rating");

	function makeStar(n) {
		for (let i = 1; i <= n; i++) {

			let star = document.createElement("i");
			star.classList.add("bx", "bxs-star");
			star.style.color = "#dcdcdc";
			star.style.fontSize = "60px";
			star.setAttribute("data-num", i);

			$container.append(star);
			//$container.innerHTML += `<i class="bx bxs-star" data-num="${i}"></i>`

		}
	}

	makeStar(maxStar);



	let isClick = -1;

	$container.addEventListener("mouseover", (e) => {
		let item = $container.childNodes;
		let count = e.target.getAttribute("data-num");

		for (let n = 0; n < count; n++) {
			if (isClick <= n) {
				item[n].style.color = "#a7a7a7";
			}
		}
	});

	$container.addEventListener("mouseout", (e) => {
		let item = $container.childNodes;
		let count = e.target.getAttribute("data-num");

		for (let n = 0; n < count; n++) {
			if (isClick <= n) {
				item[n].style.color = "#dcdcdc";
			}
		}
	});

	$container.addEventListener("click", e => {
		let item = $container.childNodes;
		let count = e.target.getAttribute("data-num")

		isClick = count;

		for (let m = 0; m < item.length; m++) {
			item[m].style.color = "#dcdcdc";
		}

		for (let n = 0; n < count; n++) {
			item[n].style.color = "#db5b33";
		}

		let starCount = new CustomEvent("rating-change", {
			bubbles: true,
			cancelable: false,
			detail: {
				count,
			},
		})
		e.target.dispatchEvent(starCount)
	})
};

export default StarRating;

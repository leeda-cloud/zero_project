const ScrollObserver = (categoryList, newsList, fnc) => {

	const options = {
		root: newsList,
		rootMargin: '0px',
		threshold: 0.7,
	};


	const target = document.querySelector(".scroll-observer");

	const io = new IntersectionObserver(
		async ([entry]) => {
			if (entry.isIntersecting) {
				categoryList.addEventListener("click", (e) => {
					if (e.target.id !== "") {
						newsList.innerHTML = '';
						cate = e.target.id;
						page = 1;
					}
				});
				fnc(newsList, cate, page, pageSize)
				page++;
				console.log(page)
			}
		}, { options });

	io.observe(target);

}


export default ScrollObserver;
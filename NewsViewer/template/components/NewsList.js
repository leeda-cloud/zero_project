// do something!
const NewsList = ($list, $category, $page, $pageSize) => {

	let category = $category;
	let pageSize = $pageSize;
	let page = $page;

	const getNews = async (category, page, pageSize) => {
		let apiKey = '55957f5b2275426792af97c2be1b2fcb';
		await fetch(`https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`)
			.then((a) => a.json())
			.then((response) => {
				response.articles.forEach((article) => {
					makeItem(article)
				});
			})
	}

	const makeItem = (article) => {
		let $title = article.title;
		let $description = article.description;
		let $url = article.url;
		let $urlToImage = article.urlToImage;

		let $item = document.createElement("section");
		$item.classList.add("news-item");
		let $thumbnail = document.createElement("div");
		$thumbnail.classList.add("thumbnail");
		$thumbnail.innerHTML = `
			<a
				href="${$url}"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="${$urlToImage}"
					alt="thumbnail"
				/>
			</a>
		`;

		let $contents = document.createElement("div");
		$contents.classList.add("contents");
		$contents.innerHTML = `
		<h2>
			<a
				href="${$url}"
				target="_blank"
				rel="noopener noreferrer"
			>
				${$title}
			</a>
		</h2>
		<p>
			${$description}
		</p>
		`;

		$item.appendChild($thumbnail);
		$item.appendChild($contents);
		$list.appendChild($item);
	}


	getNews(category, page, pageSize);

};

export default NewsList;






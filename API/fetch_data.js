	// URL của mock API							
								
	const apiUrl = 'https://jsonplaceholder.typicode.com/posts';							
								
								
	// Sử dụng Fetch API để gửi yêu cầu GET đến mock API							
								
	fetch(apiUrl)							
								
	.then(response => {							
								
	if (!response.ok) {							
								
	throw new Error('Network response was not ok');							
								
	}							
								
	return response.json();							
								
	})							
								
	.then(data => {							
								
	// Xử lý dữ liệu trả về từ mock API							
								
	console.log(data);							
								
	// Ví dụ: Hiển thị dữ liệu ra màn hình							
								
	data.forEach(post => {							
								
	const postElement = document.createElement('div');							
								
	postElement.innerHTML = `							
								
	<h2>${post.title}</h2>							
								
	<p>${post.body}</p>							
								
	`;							
								
	document.body.appendChild(postElement);							
								
	});							
								
	})							
								
	.catch(error => {							
								
	console.error('There was a problem with the fetch operation:', error);							
								
	});							
								
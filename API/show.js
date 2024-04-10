function getProducts (callback){
	fetch('https://660d3b1f6ddfa2943b33a232.mockapi.io/Products')							
.then(Response => Response.json())
.then(data => callback(null, data))
.catch(error => callback(error,null));
}

function handleProducts(error, data){
    if (error){
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);						
							
	} else {						
							
	const productTableBody = document.getElementById('productTableBody');						
							
	data.forEach(product => {						
							
	const row = `<tr>						
							
	<td>${product.id}</td>						
							
	<td>${product.name}</td>						
							
	<td>${product.price}</td>						
							
	</tr>`;						
							
	productTableBody.innerHTML += row;						
							
	});						
							
	}						
							
	}						
							
							
	// Gọi hàm getProducts với callback handleProducts						
							
	getProducts(handleProducts);						
							
WEB API

Task1
Verilan endpointte sadece image urli '.gif' olan obyektleri qaytaran bir funksiya yazin... 
https://api.thecatapi.com/v1/images/search?limit=10


Task2
Verilen enpointte limit adli query vererek 10 edet cat datasi getirirsiz ve url olan keyi catUrl olaraq deyisdirirsiz Then catchden istifade olunmalidir... https://api.thecatapi.com/v1/images/search 
Example: id: 'eF3HSMIB_', width: 1800, height: 1592, catUrl: 'https://cdn2.thecatapi.com/images/eF3HSMIB_.jpg'


Task3
Asinxron funksiya yaradaraq verilen endpointden datani cekerek logda gosteririk... (Async awaitden istifade olunmalidir) Output olaraq aşağıdaki kimi bir log göstərilməlidir. 
Endpoint: https://api.thecatapi.com/v1/images/search 
{ id: '4nr', catUrl: 'https://cdn2.thecatapi.com/images/4nr.jpg', width: 500, height: 333 }


Task4
Verilen kitab obyektini bir arraya yigan funksiya yazin. Bu funksiya yeni kitab elave etmekle beraber cari kitablarin oldugu arrayi logda gostermelidir. 
Input: { title: "1984", author: "George Orwell", isbn: "9780451524935", genre: "Dystopian", price: 9.99, quantity: 20 } 
Output: 1984 George Orwell 9780451524935 Dystopian 9.99 20
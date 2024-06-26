$(document).ready(function() {
    $("#DCP-T220").click(function (e) { 
        e.preventDefault();
        var destinationURL = "./html/DCP-T220.html"; 
        window.location.href = destinationURL;
    });
    $("#DCP-T720").click(function (e) { 
        e.preventDefault();
        var destinationURL = "./html/DCP-T720DW.html"; 
        window.location.href = destinationURL;
    });
    $("#B7535").click(function (e) { 
        e.preventDefault();
        var destinationURL = "./html/B7535DW.html"; 
        window.location.href = destinationURL;
    });
    $("#MFP").click(function (e) { 
        e.preventDefault();
        var destinationURL = "./html/MFP.html"; 
        window.location.href = destinationURL;
    });
    $("#L2520D").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/L2520D.html"; 
        window.location.href = destinationURL;
    });
    $("#135a").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/135a.html"; 
        window.location.href = destinationURL;
    });
    $("#T520W").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/T520W.html"; 
        window.location.href = destinationURL;
    });
    $("#LBP2900").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/LBP2900.html"; 
        window.location.href = destinationURL;
    });
    $("#C330").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/DS-C330.html"; 
        window.location.href = destinationURL;
    });
    $("#ADS3100").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/ADS3100.html"; 
        window.location.href = destinationURL;
    });
    $("#3600F1").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/3600F1.html"; 
        window.location.href = destinationURL;
    });
    $("#2000S2").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/2000S2.html"; 
        window.location.href = destinationURL;
    });
    $("#3000S4").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/3000S4.html"; 
        window.location.href = destinationURL;
    });
    $("#5000S5").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/5000S5.html"; 
        window.location.href = destinationURL;
    });
    $("#2600F1").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/2600F1.html"; 
        window.location.href = destinationURL;
    });
    $("#N9120").click(function (e) { 
        e.preventDefault();
        var destinationURL = "../html/N9120.html"; 
        window.location.href = destinationURL;
    });
    
    
    document.querySelector('.btn-outline-primary').addEventListener('click', function(event) {
        event.preventDefault(); 
    
        var searchTerm = document.querySelector('.form-control').value.toLowerCase();
    
        var matchingProducts = [];
        var products = document.querySelectorAll('.col h5');
        products.forEach(function(product) {
            var productName = product.innerText.toLowerCase();
            if (productName.includes(searchTerm)) {
                matchingProducts.push(product.parentNode); 
            }
        });
    
        if (matchingProducts.length > 0) {
            var resultHTML = '';
            matchingProducts.forEach(function(product) {
                resultHTML += '<div class="col">' + product.innerHTML + '</div>';
            });
            sessionStorage.setItem('searchResults', resultHTML);
            window.location.href = '../html/KetQuaTimKiem.html';
        } else {
            alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa tìm kiếm.');
        }
    });
    


    
});

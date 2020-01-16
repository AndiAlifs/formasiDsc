function isi() { 
            var doc = prompt("Ganti judul gede", 
                "Judul Gede"); 
            if (doc != null) { 
                document.getElementById("mantap").innerHTML = 
                    doc; 
            } 
        } 
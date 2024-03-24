polariod_border = new Boolean(false);
film_border = new Boolean(false);
function myFunction(elem)
{
    console.log(elem.id);
    if(elem.id == "photo-upload") {
        document.getElementById('photo-upload').addEventListener('change', function(event) {
            const previewContainer = document.getElementById('preview-container');
            previewContainer.innerHTML = ''; // Clear existing previews
            const files = event.target.files;
            for (const file of files) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '200px';
                    img.style.margin = '10px';
                    previewContainer.appendChild(img);
                };
                console.log(file);
                reader.readAsDataURL(file);
            }
        });
    }
    if(elem.id == "page-polariod" ){
        if(polariod_border == false) {
            elem.style.borderStyle = "solid";
            elem.style.borderColor = "black";
            elem.style.borderWidth = "2px";
            polariod_border = Boolean(true);
        } else {
            elem.style.border = 0;
            polariod_border = Boolean(false);
        }
    }
    if(elem.id == "page-film") {
        if(film_border == false) {
            elem.style.borderStyle = "solid";
            elem.style.borderColor = "black";
            elem.style.borderWidth = "2px";
            film_border = Boolean(true);
        } else {
            elem.style.border = 0;
            film_border = Boolean(false);
        }
    }
}






polariod_border = new Boolean(false);
film_border = new Boolean(false);
let images = [];

function myFunction(elem)
{
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
                    images = [];
                    images.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    /*<a href="gallery/gallery.html" class="website-gallery purple">Gallery</a>*/
    if(elem.id == "page-gallery") {
        window.location.href = "gallery/gallery.html";
    }
    if(elem.id == "photo-distrubute") {
        
        if(images.length > 0) {
            const imagesArray = localStorage.getItem('images')
            let images2 = []
            if (imagesArray) {
                images2 = [...JSON.parse(imagesArray)]
                images2.push(images[0])
            }
            else {
                images2.push(images[0])
            }
            localStorage.setItem('images', JSON.stringify(images2))
        }
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






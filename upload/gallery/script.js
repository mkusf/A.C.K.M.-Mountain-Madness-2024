const displayImages = document.getElementById('page-polariods')
const images = JSON.parse(localStorage.getItem('images'));

images.forEach((image) => {
    displayImages.innerHTML += `
        <div class="gallery-polariod-image">
            <div class ="test">
                <img style="height:100% ; width: 100%" src="${image}">
            </div>
        </div>
    `
})

/*
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
                reader.readAsDataURL(file);
            }
        });
    }
    if(elem.id == "page-polariod" ){
        window.location.href = "polariod/polariod.html";
    }
    if(elem.id == "page-film") {
        window.location.href = "film/film.html";
    }
}
*/





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

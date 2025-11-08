<script>
function filterGallery() {
const input = document.getElementById('searchInput').value.toLowerCase();
const figures = document.querySelectorAll('#galleryGrid figure');
figures.forEach(figure => {
const caption = figure.querySelector('figcaption').textContent.toLowerCase();
if (caption.includes(input)) {
figure.style.display = '';
} else {
figure.style.display = 'none';
}
});
}
</script>

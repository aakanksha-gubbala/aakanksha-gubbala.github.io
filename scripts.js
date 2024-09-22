document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll('.tag');
    const publications = document.querySelectorAll('.publication');

    let selectedTags = [];

    // Event listener for tag clicks
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagText = tag.getAttribute('data-tag');

            // Toggle tag selection
            if (selectedTags.includes(tagText)) {
                selectedTags = selectedTags.filter(t => t !== tagText);
                tag.classList.remove('active');
            } else {
                selectedTags.push(tagText);
                tag.classList.add('active');
            }

            // Filter publications based on selected tags
            filterPublications();
        });
    });

    function filterPublications() {
        publications.forEach(publication => {
            const pubTags = publication.getAttribute('data-tags').split(' ');

            // Check if all selected tags are in the publication's tags
            if (selectedTags.every(tag => pubTags.includes(tag))) {
                publication.style.display = "block"; // Show if matches
            } else {
                publication.style.display = "flex"; // Hide if not matches
            }
        });
    }
});

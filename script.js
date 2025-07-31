// This file is currently empty because basic horizontal scrolling
// is handled purely by HTML and CSS!

// You would add JavaScript here if you wanted more advanced features like:
// - A lightbox (clicking an image opens a larger version in a popup)
// - Lazy loading (only loads images when they're about to be seen)
// - Dynamic image loading (e.g., fetching image paths from a JSON file)
// - Navigation arrows (to scroll left/right programmatically)
// - A 'load more' button
document.addEventListener('DOMContentLoaded', () => {
    // Get all tab buttons and tab content sections
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Add a click event listener to each tab button
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and hide all content
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Get the ID of the content to display
            const contentId = 'content-' + tab.id.split('-')[1];

            // Display the corresponding content
            document.getElementById(contentId).style.display = 'block';
        });
    });
});

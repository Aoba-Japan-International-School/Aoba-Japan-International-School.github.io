document.addEventListener('DOMContentLoaded', function() {
    const datesUl = document.getElementById('dates');
    const issuesUl = document.getElementById('issues');
    const dateLinks = datesUl.querySelectorAll('li a');
    const issueItems = issuesUl.querySelectorAll('li');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const splashScreen = document.getElementById('splash-screen');
    const enterButton = document.getElementById('enter-button');
    const timelineElement = document.getElementById('timeline');
    // const mainHistoryTitle = document.getElementById('main-history-title'); // Removed this element


    let currentIndex = 0; // The index of the currently selected timeline item

    // Function to update the timeline display
    function updateTimeline(index) {
        // Ensure index is within bounds
        if (index < 0) {
            index = 0;
        } else if (index >= dateLinks.length) {
            index = dateLinks.length - 1;
        }
        currentIndex = index;

        // Update 'selected' class for dates
        dateLinks.forEach((link, i) => {
            if (i === currentIndex) {
                link.classList.add('selected');
            } else {
                link.classList.remove('selected');
            }
        });

        // Update 'selected' class for issues and scroll into view
        issueItems.forEach((item, i) => {
            if (i === currentIndex) {
                item.classList.add('selected');
                // Scroll the issue into view smoothly
                issuesUl.scrollTo({
                    top: item.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                item.classList.remove('selected');
            }
        });

        // Scroll the corresponding date into view smoothly if it's off-screen
        datesUl.scrollTo({
            top: dateLinks[currentIndex].parentNode.offsetTop - (datesUl.clientHeight / 2) + (dateLinks[currentIndex].parentNode.clientHeight / 2),
            behavior: 'smooth'
        });

        // Update button states (disabled/enabled)
        if (currentIndex === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (currentIndex === dateLinks.length - 1) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // Event listeners for date links
    dateLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor link behavior
            updateTimeline(index);
        });
    });

    // Event listener for next button
    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex < dateLinks.length - 1) {
            updateTimeline(currentIndex + 1);
        }
    });

    // Event listener for prev button
    prevButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            updateTimeline(currentIndex - 1);
        }
    });

    // Splash screen functionality
    enterButton.addEventListener('click', function () {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden'; // Hide element after fade out
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Remove from layout
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            timelineElement.style.opacity = '1'; // Show timeline
            // mainHistoryTitle.style.opacity = '1'; // No longer referencing this element
        }, 1000); // Match CSS transition duration
    });


    // Initialize the timeline to the starting position
    updateTimeline(0);
});
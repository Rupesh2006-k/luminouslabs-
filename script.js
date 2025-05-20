const scrollBox = document.getElementById('scrollBox');
    const scrollWidth = scrollBox.scrollWidth;
    const scrollMid = scrollWidth / 3;

    // Set scroll to middle at start
    scrollBox.scrollLeft = scrollMid;

    // When scrolling ends, reset scroll if at edge
    scrollBox.addEventListener('scroll', () => {
      if (scrollBox.scrollLeft <= 0) {
        scrollBox.scrollLeft = scrollMid;
      } else if (scrollBox.scrollLeft + scrollBox.offsetWidth >= scrollWidth) {
        scrollBox.scrollLeft = scrollMid;
      }
    });

    // Box active on click
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
      });
    });
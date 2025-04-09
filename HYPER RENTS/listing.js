document.querySelector('.filter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;
  
    console.log(`Filtering by Brand: ${brand}, Price: ${price}`);
    // Add logic to filter cars dynamically
  });

  document.querySelector('.load-more').addEventListener('click', function () {
    console.log('Loading more cars...');
    // Add logic to fetch and append more cars to the grid
  });
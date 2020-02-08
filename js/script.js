// const categories = document.querySelector('.categories');
// const result = document.querySelector('.results');

// categories.addEventListener('change', (event) => {

//   $.ajax({
//     method: 'GET',
//       url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP'
//   })

//   .done(function (data) {
//     data.results.forEach(element => {
//       console.log(element[0, 'abstract']); // returns all abstacts
//     });
//   });

//   result.textContent = `You like ${event.target.value}`;
// });
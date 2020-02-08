document.addEventListener('DOMContentLoaded', function () {

  const categories = document.querySelector('.categories');

  categories.addEventListener('change', () => {
    let section = event.target.value;

    $.ajax({
      method: 'GET',
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP`
    })

      .done(function (data) {

        // let areaSelected = 0;
        for (let i = 0; i < 12; i++) {
          console.log(data.results[i]);
        }

        // data.results.forEach(element => {
        //   console.log(element[0, 'abstract']); // returns all abstacts
        //   $('.teaser').text(`${element[0, 'abstract']}`);
        // });
      });
    // teaser.textContent = `${event.target.value}`;
  });

}); // end of DOM content load


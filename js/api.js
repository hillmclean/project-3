document.addEventListener('DOMContentLoaded', function () {

  const categories = document.querySelector('.categories');


  categories.addEventListener('change', () => {
    let section = event.target.value;

    $.ajax({
      method: 'GET',
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP`
    })

      .done(function (data) {

        for (let i = 0; i < 12; i++) {
          console.log(data.results[i].abstract);
          $('.results').append(`<li>${data.results[i].abstract}</li>`);
          $("li").addClass("remove");
        }

        categories.addEventListener('change', () => {
          $(".remove").remove();
        });

      }); // end of .done()

  }); // end of eventlistener

}); // end of DOM content load




// old functions below: --------- //

   // $.each(data.results, function (index, abstract) {
        //   console.log(index, abstract);
        // });

   // data.results.forEach(element => {
        //   console.log(element[0, 'abstract']); // returns all abstacts
        //   $('.teaser').text(`${element[0, 'abstract']}`);
        // });


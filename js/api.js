document.addEventListener('DOMContentLoaded', function () {

  const categories = document.querySelector('.categories');
  const results = $('.results');
  const stories = $('.stories');

  categories.addEventListener('change', () => {
    let section = event.target.value;
    results.innerHTML = '';

    $.ajax({
      method: 'GET',
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP`
    })

      .done(function (data) {

        data.results.forEach(element => {

          console.log(element.multimedia[0].url);
          results.append(`
          <a href="${element.url}" target="_blank">
            <li class='remove' style="background-image: url(${element.multimedia[0].url})">  
              <p>${element.abstract}</p>
            </li>
          </a>`
          );
        });

      }); // end of .done()

  }); // end of eventlistener adding content

  categories.addEventListener('change', () => {
    $('.remove').remove();

  }); // end of eventlistener removing content

}); // end of DOM content load




// old functions below: --------- //

   // $.each(data.results, function (index, abstract) {
        //   console.log(index, abstract);
        // });

   // data.results.forEach(element => {
        //   console.log(element[0, 'abstract']); // returns all abstacts
        //   $('.teaser').text(`${element[0, 'abstract']}`);
        // });

// for (let i = 0; i < 12; i++) {
        //   console.log(data.results[i].abstract);
        //   results.append(`<li>${data.results[i].abstract}</li>`);
        //   //$('li').addClass('remove');
        // }

        // for (let i = 0; i < 12; i++) {
        //   console.log(data.results[i].multimedia[2].url);
        //   $('li').append(`<img src="${data.results[i].multimedia[2].url}"</img>`);
        //   $('li').addClass('remove');
        // }


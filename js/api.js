$(function () {

  const categories = $('.categories');
  const results = $('.results');
  const logo = $('.nyt-logo');
  const filter = $('.filter');
  const header = $('.header');
  const stories = $('.stories')
  const loader = $('.loader-gif');

  categories.change(function () {
    let section = event.target.value;
    results[0].innerHTML = '';

    loader.addClass('loader-gif-animation');
    logo.addClass('logo-animation');
    filter.addClass('filter-animation');
    header.addClass('header-animation');

    $(document).ajaxStart(function () {
      loader.show();
    });

    $.ajax({
      method: 'GET',
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP`
    })

      .done(function (data) {

        let getContent = data.results.filter(function (item) {
          if (item.multimedia !== null) {
            return item;
          }
        }).slice(0, 12);

        getContent.forEach(element => {
          let articles = (`
                <a href="${element.url}" target="_blank">
                  <li class='article' style="background-image: url(${element.multimedia[0].url})">  
                    <p>${element.abstract}</p>
                  </li>
                </a>`);
          results.append(articles);
          // $(lazyLoader).lazyload().removeClass(lazyClass);
        });

        $(document).ajaxStop(function () {
          loader.hide();
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

        // if (results.length > 12) {
        //   results.splice(0, 12);
        // }

      //   results.append(`
      //   <a href="${element.url}" target="_blank">
      //     <li class='article' style="background-image: url(${element.multimedia[0].url})">  
      //       <p>${element.abstract}</p>
      //     </li>
      //   </a>`
      //   )
      // });
$(function () {

  const categories = $('.categories');
  const results = $('.results');
  const logo = $('.nyt-logo');
  const filter = $('.filter');
  const header = $('.header');
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
                <li class='article' style='background-image: url(${element.multimedia[0].url})'>
                  <a href="${element.url}" target="_blank">
                    <p>${element.abstract}</p>
                    <p class='screen-reader-text'> Image caption: ${element.multimedia[0].caption}</p>
                  </a>
                </li>
              `);
          results.append(articles);
        });

        $(document).ajaxStop(function () {
          loader.hide();
        });

      }); // end of .done()

  }); // end of eventlistener

}); // end of DOM content load

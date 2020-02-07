document.addEventListener('DOMContentLoaded', function () {

  const teaserBox = document.getElementsByClassName('teaser');

  teaserBox[0].addEventListener('click', function () {
    $.ajax({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=tGGrhXgAGkkUeGlxub1PQ7smASFvNVgP'
    })

      .done(function (data) {
        console.log(data);
      });
  });
}); // end of DOM content load

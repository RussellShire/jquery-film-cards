import testData from '/testData.js';

const loadCards = (start, end) => {
    $(() => {$("#App").html(
        $('.card-grid').append(
            $.map(
            $(testData).filter(function( index ) {
                    return index >= start && index < end;
                })
        , film => 
            $("<div class='card'>")
            .append($('<img/>')
                .attr({
                    src: 'https://x2x.media/?action=asset&id=' + film.Guid,
                    alt: film.Name,
                    loading: 'lazy'
                })
                .addClass('film-front'))
            .append($("<div>")
                .addClass('film-back')
                .append(
                    $("<h2>")
                    .text(film.Name)
                    .addClass('film-title')
                    .add($("<p>")
                        .text(film.Content))
                    .addClass('film-info'))
            )
        )
    )).append("<div id='bottom'>")}
)}

$(() => {
    $("#App").html(
        $("#App")
        .add("<div class='card-grid'>")
    )
});

const interval = 5
let start = 0
let end = interval

loadCards(start, end)

window.addEventListener("scroll", () => {
    const bottomElm = document.getElementById('bottom')
    const bottomLoc = window.scrollY + bottomElm.getBoundingClientRect().y

    if((window.scrollY + window.innerHeight) > (bottomLoc-200)){
        start = start+interval
        end = end+interval
        console.log(start)
        console.log(end)
        
        loadCards(start, end)
    }
})

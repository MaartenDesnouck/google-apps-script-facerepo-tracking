function updateHistory(HISTORY, META, row, date, kolom) {
    var page = getValue(0, kolom, HISTORY);
    var currentPage = page;
    var offset = 0;
    var found = false;
    var onPage = 0;

    // Date op de juiste rij zetten
    setValue(row, 0, HISTORY, date);

    // find op welke pagina hij te vinden is;
    while (!found) {
        currentPage = page + offset;
        onPage = findWatchface(currentPage);
        if (onPage != 0) {
            found = true;
        } else {
            currentPage = page - offset;
            onPage = findWatchface(currentPage);
        }

        if (onPage != 0) {
            found = true;
        } else {
            offset = offset + 1;
        }
    }

    // schrijf bovenaan kolom welke pagina dat was
    setValue(0, kolom, HISTORY, currentPage);

    // reken uit welke positie dat is
    var rank = 24 * (currentPage - 1) + onPage;

    // zet positie op juiste row
    setValue(row, kolom, HISTORY, rank);

    // zet positie in meta
    setValue(kolom, 1, META, rank);

}

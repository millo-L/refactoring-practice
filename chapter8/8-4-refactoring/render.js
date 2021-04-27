function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStrema, person.photo);
    outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter((p) => p.date > recentDateCutoff())
        .forEach((p) => {
            outStream.write('<div>\n');
            emitPhotoData(outStrema, p);
            outStream.write(`<p>위치: ${p.location}</p>\n`);
            outStream.write('</div>\n');
        });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>`);
    outStream.write(`<p>날짜: ${photo.toDateString()}</p>`);
}

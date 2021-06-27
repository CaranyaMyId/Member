let getData = "https://member.caranya.my.id/data.json";
    let request = new XMLHttpRequest();
    request.open('GET', getData);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const cmi = request.response;
        var table = document.getElementById("member");
        for (var i=0; i<999999999; i++) {
            var row = document.createElement("tr");
            var membernya = document.createElement("td");
            membernya.innerHTML = cmi[i].member;
            row.appendChild(membernya);
            var url = cmi[i].url;
            var hostname = new URL(url).hostname;
            var urlnya = document.createElement("td");
            urlnya.innerHTML = "<a href='"+url+"' target='_blank' rel='nofollow noopener noreferrer'>"+hostname+"</a>";
            row.appendChild(urlnya);
            table.appendChild(row);
    }
}

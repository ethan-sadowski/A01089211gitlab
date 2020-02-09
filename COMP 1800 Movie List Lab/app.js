var tbl = document.createElement("table");
tbl.setAttribute("id", "tbl");
var div = document.getElementById("myHistory");

moviehistory = [];

function countMovie(){
    var movieInput = document.getElementById("thisMovie").value;
    var inList = false;

    //If there is no movie in the list already, add it to the table and list with a watch number = 1
    if (moviehistory.length == 0){
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.width = "400";
        var celltext = document.createTextNode(movieInput);
        cell.appendChild(celltext);
        row.appendChild(cell);
        var cell = document.createElement("td");
        cell.width = "50"
        cell.style = "border: 1px solid; text-align: center"
        var celltext = document.createTextNode(1);
        cell.appendChild(celltext);
        row.appendChild(cell);
        tbl.appendChild(row);
        div.appendChild(tbl);
        moviehistory.push({
            "movie": movieInput,
            "watchnum": 1
        })
    } else {
        var inlist = false;

        //iterate through moviehistory array
        for (var i = 0; i < moviehistory.length; i++){
            
            //if the movie is already in the list, increment watch counter by 1
            if (movieInput == moviehistory[i]['movie']){
                moviehistory[i]['watchnum']++;
                document.getElementById("tbl").rows[i].cells[1].innerHTML = moviehistory[i]['watchnum'];
                inlist = true;
                //exit out of function
                return;
            }
            
        }
        //If the movie is not in the table, add it to the table and create a new object in moviehistory array
        if (inlist == false){
            
            //Create new row in table
            var row = document.createElement("tr");

            //Create cell in row for movie name
            var cell = document.createElement("td");
            var celltext = document.createTextNode(movieInput);
            cell.appendChild(celltext);
            row.appendChild(cell);

            //Create cell in row for watch number
            var cell = document.createElement("td");
            var celltext = document.createTextNode(1);
            cell.appendChild(celltext);
            row.appendChild(cell);
            cell.width = "50"
            cell.style = "border: 1px solid; text-align: center"

            //Add row to table and append it to div
            tbl.appendChild(row);
            div.appendChild(tbl);

            //Add object into moviehistory array
            moviehistory.push({
                "movie": movieInput,
                "watchnum": 1
            })
        }
    }
}

  function newListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("thisMovie").value;
    if (inputValue == "") {
      return;
    } else {
      var movie = document.createTextNode(inputValue);
      li.appendChild(movie);
      document.getElementById("myList").appendChild(li);
      countMovie();
    }
  }

  var list = document.getElementById("myList")
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI')
      document.getElementById("myList").removeChild(ev.target)
  });

  function clearMovies() {
    var movieList = document.getElementById("myList");
    while (movieList.hasChildNodes) {
      movieList.removeChild(movieList.firstChild);
    }
  }


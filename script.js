$(document).ready(function () {

    let today = new Date();
    let currMonth = today.getMonth();
    let currYear = today.getFullYear();

    // const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    let month_year = document.getElementById("month-year");

    showCalendar(currMonth, currYear);

    function showCalendar(month, year) {
        let firstDay = (new Date(year, month)).getDay();
        console.log(firstDay);

        let monthDays = 32 - new Date(year, month, 32).getDate();
        console.log(monthDays);

        let tbl = document.getElementById("cal-body");
        tbl.innerHTML = "";

        month_year.innerHTML = months[month] + " " + year;
        let date = 1;

        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                if (i == 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > monthDays) {
                    break
                } else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);

                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        // style current date
                        cell.classList.add('current');
                    }
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row);
        }
    }

    document.getElementById('next').addEventListener('click', nextMonth, false);
    function nextMonth() {
        currYear = currMonth === 11 ? currYear + 1 : currYear;
        currMonth = currMonth + 1;
        showCalendar(currMonth, currYear);
    }

    document.getElementById('prev').addEventListener('click', prevMonth, false);
    function prevMonth() {
        currYear = currMonth === 0 ? currYear - 1 : currYear;
        currMonth = currMonth - 1;
        showCalendar(currMonth, currYear);
    }
});
/* 
 * Display the numbers from 0 to 1000 by 10's
 * 0, 10, 20, 30, ... 1000
 */

document.write("This program displays the numbers 0 to 1000 by 10's <br>");

let int = 0;

while (int <= 1000) {
    document.write(int + "<br>");
    int = int + 10;
}

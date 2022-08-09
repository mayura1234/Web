document.write("<h3>Square of n Numbers</h3>");
var n=prompt("Enter the Number to calculate Square : ");
document.write("<br><table border=1><tr><th>Number</th><th>Square</th></tr>");
m="Number | Square\n";
for(i = 1; i <= n; i++){
    m+="      " + i + "       :     " + i**2 + "\n";
    document.write("<tr><td>" + i + "</td><td>" + i**2 + "</td></tr>");
}
alert(m);
var n=prompt("Enter the Range for Fibonaccy :");
f1=0;
f2=1;
document.write("Fibonaccy Series.....</br>");
document.write(f1+"</br>"+f2+"</br>");
for(i=3;i<=n;i++)
{
    f3=f1+f2;
    f2=f3;
    f1=f2;
    document.write(f3+"</br>");
}

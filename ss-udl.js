function calculate() 
{
var w = document.getElementById("load").value;
var L= document.getElementById("span").value;
var a= document.getElementById("dista").value;
var E = document.getElementById("elasticity").value;
var I = document.getElementById("mi").value;
var x1 = document.getElementById("distx1").value;
var x2 = document.getElementById("distx2").value;
var b = (L-a);
var RA = w*a*(2*L-a)/(2*L);
var RB = w*a*a/(2*L);
var vx1 = RA - w*x1;
var vc = RA - w*a;
var Mx1 = RA*x1 - w*x1*x1/2;
var Mx2 = RB*(L-x2);
var Mmax = RA*RA/(2*w);
var xm = RA/w;
var yx1 = (w*x1*1000*1000*1000)*(a*a*(2*L-a)**2-2*a*x1*x1*(2*L-a)+L*x1**3)/(24*L*E*I);
var yx2 = (w*a*a*1000*1000*1000)*(L-x2)*(4*x2*L-2*x2*x2-a*a)/(24*L*E*I);
var ix1 = (w*1000*1000)*(a*a*(2*L-a)**2-6*a*x1*x1*(2*L-a)+4*L*x1*x1*x1)/(24*E*I*L);
var ix2 = (w*a*a*1000*1000)*((4*L*L+a*a)-12*x2*L+6*x2*x2)/(24*E*I*L);


document.getElementById("distb").value = b;
document.getElementById("recA").value = RA;
document.getElementById("recB").value = RB;
document.getElementById("shearvx1").value = vx1;
document.getElementById("shearvc").value = vc;
document.getElementById("momentx1").value = Mx1;
document.getElementById("momentx2").value = Mx2;
document.getElementById("momentmax").value = Mmax;
document.getElementById("distmax").value = xm;
document.getElementById("deltax1").value = yx1;
document.getElementById("deltax2").value = yx2;
document.getElementById("thetax1").value = ix1;
document.getElementById("thetax2").value = ix2;

}
function clearall() 
{
document.getElementById("load").value = "";
document.getElementById("span").value = "";
document.getElementById("dista").value = "";
document.getElementById("distx1").value = "";
document.getElementById("distx2").value = "";
document.getElementById("distb").value = "";
document.getElementById("recA").value = "";
document.getElementById("recB").value = "";
document.getElementById("shearvx1").value = "";
document.getElementById("shearvc").value = "";
document.getElementById("momentmax").value = "";
document.getElementById("momentx1").value = "";
document.getElementById("momentx2").value = "";
document.getElementById("deltax1").value = "";
document.getElementById("deltax2").value = "";
document.getElementById("distmax").value = "";
document.getElementById("elasticity").value = "200";
document.getElementById("mi").value = "0.000005";

}
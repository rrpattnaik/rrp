function calculate() 
{
var p = document.getElementById("load").value;
var L= document.getElementById("span").value;
var a= document.getElementById("dista").value;
var E = document.getElementById("elasticity").value;
var I = document.getElementById("mi").value;
var x1 = document.getElementById("distx1").value;
var x2 = document.getElementById("distx2").value;
var RA = p*(L-a)/L;
var RB = p*a/L;
var Mc = p*a*(L-a)/L;
var Mx1 = RA*x1;
var Mx2 = RB*(L-x2);
var iA = (p*(L-a)*1000*1000)*(L*L-(L-a)**2)/(6*E*I*L);
var iB = (p*a*1000*1000)*(L*L-a*a)/(6*E*I*L);
var ix1 = (p*(L-a)*1000*1000)*(3*x1**2-2*a*(L-a)-a**2)/(6*E*I*L);
var ix2 = (1000*1000/(E*I))*((-p*(L-a)*x2**2/(2*L))+(p*(L-a)*(L**2-(L-a)**2/(6*L)))+p*(x2-a)**2/2);
var ym = (p*a*1000*1000*1000)*((L*L-a*a)**1.5)/(9*3**0.5*L*E*I);
var yc = -(p*a*(L-a)*1000*1000*1000)*(L*L-a*a-(L-a)**2)/(6*L*E*I);
var yx1 = (p*(L-a)*1000*1000*1000)*(x1**3-x1*(a*a+2*a*(L-a)))/(6*L*E*I);
var yx2 = (1000**3/(E*I))*((-p*(L-a)*x2**3/(6*L))+(p*(L-a)*x2*(L**2-(L-a)**2)/(6*L))+(p*(x2-a)**3)/6)
var xm = Math.sqrt(((L*L-a*a)/3));

document.getElementById("recA").value = RA;
document.getElementById("recB").value = RB;
document.getElementById("momentC").value = Mc;
document.getElementById("momentx1").value = Mx1;
document.getElementById("momentx2").value = Mx2;
document.getElementById("thetaA").value = iA;
document.getElementById("thetaB").value = iB;
document.getElementById("thetax1").value = ix1;
document.getElementById("thetax2").value = ix2;
document.getElementById("deltamax").value = ym;
document.getElementById("deltaC").value = yc;
document.getElementById("deltax1").value = yx1;
document.getElementById("deltax2").value = yx2;
document.getElementById("distmax").value = xm;


}
function clearall() 
{
document.getElementById("load").value = "";
document.getElementById("span").value = "";
document.getElementById("dista").value = "";
document.getElementById("distx1").value = "";

}
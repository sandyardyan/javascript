<style type="text/css">
#gb{
position:fixed;
top:20px;
z-index:+1000;
}* html #gb{position:relative;}

.gbtab{
height:150px;
width:50px;
float:left;
background:url('http://i1108.photobucket.com/albums/h405/christian410/ghtrf.png') no-repeat;
}

.gbcontent {
float:left;
border:1px solid #000000;
-moz-border-radius-bottomleft:5px;
-webkit-border-radius-bottomleft:5px;
-o-border-radius-bottomleft:5px;
-khtml-border-radius-bottomleft:5px;
-moz-border-radius-topright: 5px;
-moz-border-radius-topleft: 5px;
background: #F2F2F2; url() no-repeat bottom;
padding:10px;
}

</style>

<script type="text/javascript">
function showHideGB(){
var gb = document.getElementById("gb");
var w = gb.offsetWidth;
gb.opened ? moveGB(0, 51-w) : moveGB(30-w, 0);
gb.opened = !gb.opened;
}function moveGB(x0, xf){

var gb = document.getElementById("gb");
var dx = Math.abs(x0-xf) > 25 ? 25 : 1;
var dir = xf>x0 ? 1 : -1;
var x = x0 + dx * dir;
gb.style.right = x.toString() + "px";
if(x0!=xf){setTimeout("moveGB("+x+", "+xf+")", 5);}
}</script>

<div id="gb">
<div class="gbtab" onmouseover="showHideGB()"> </div>

<div class="gbcontent">
<center>
<!-- BEGIN CBOX - www.cbox.ws - v4.2 -->
<div id="cboxdiv" style="position: relative; margin: 0 auto; width: 200px; font-size: 0; line-height: 0;">
<div style="position: relative; height: 305px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border:#ababab 1px solid;"><iframe src="//www4.cbox.ws/box/?boxid=4254274&boxtag=jc64ea&sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain4-4254274" id="cboxmain4-4254274"></iframe></div>
<div style="position: relative; height: 75px; overflow: hidden; border:#ababab 1px solid; border-top: 0px;"><iframe src="//www4.cbox.ws/box/?boxid=4254274&boxtag=jc64ea&sec=form" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform4-4254274" id="cboxform4-4254274"></iframe></div>
</div>
<!-- END CBOX -->
<br />
<div style="text-align:center">
<span style="float:right; color:#000000;">Get this <a target="_blank" href="http://varietyofindonesian.blogspot.com/2012/03/cara-membuat-buku-tamu-auto-hide-di.html"> widget! </a></span>
</div>
</center></div>
<script type="text/javascript">
var gb = document.getElementById("gb");
gb.style.right = (50-gb.offsetWidth).toString() + "px";
</script>

</div>

function rajaongkir_widget() {
    var theme = document.getElementById("rajaongkir-widget").getAttribute("data-theme");
    document.getElementById("rajaongkir-widget").innerHTML = '<iframe src="//rajaongkir.com/widget/frame?t=' + theme + '&h=' + window.location.host + '" height="385px" style="border:0px;" border="0" frameborder="0"></iframe>';
}
rajaongkir_widget();

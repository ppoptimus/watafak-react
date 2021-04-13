// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


function shf_hh() {
    var arr_hh = [];
    while (arr_hh.length < 5) {
        var r = Math.floor(Math.random() * 24);
        if (arr_hh.indexOf(r) === -1) arr_hh.push(r);
    }
    arr_hh = arr_hh.sort(function (a, b) { return a - b })
    let h1 = ("0" + arr_hh[0]).slice(-2)
    let h2 = ("0" + arr_hh[1]).slice(-2)
    let h3 = ("0" + arr_hh[2]).slice(-2)
    let h4 = ("0" + arr_hh[3]).slice(-2)
    let h5 = ("0" + arr_hh[4]).slice(-2)

    //--------------------------------------//
    var arr_mm = [];
    while (arr_mm.length < 5) {
        var r = Math.floor(Math.random() * 60);
        if (arr_mm.indexOf(r) === -1) arr_mm.push(r);
    }
    arr_mm = arr_mm.sort(function (a, b) { return a - b })
    let m1 = ("0" + arr_mm[0]).slice(-2)
    let m2 = ("0" + arr_mm[1]).slice(-2)
    let m3 = ("0" + arr_mm[2]).slice(-2)
    let m4 = ("0" + arr_mm[3]).slice(-2)
    let m5 = ("0" + arr_mm[4]).slice(-2)

    let hm1 = h1 + ":" + m1
    let hm2 = h2 + ":" + m2
    let hm3 = h3 + ":" + m3
    let hm4 = h4 + ":" + m4
    let hm5 = h5 + ":" + m5

    document.getElementById('time1').innerHTML = hm1
    document.getElementById('time2').innerHTML = hm2
    document.getElementById('time3').innerHTML = hm3
    document.getElementById('time4').innerHTML = hm4
    document.getElementById('time5').innerHTML = hm5
    console.log(h1+":"+m2);
}

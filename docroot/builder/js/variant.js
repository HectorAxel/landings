function Variant() {
    function a() {
        f(), g(), h(), i()
    }

    function b() {
        mr_variant.wp.saveType = "manual", q(".viu"), L("all"), cd.wp.saveHTML(ga(wp_data.current_page.post_id), "manual")
    }

    function c() {
        v() || _c || (mr_variant.wp.saveType = "auto", L("all"), cd.wp.saveHTML(ga(Vb()), "auto"))
    }

    function d(a) {
        var c = Oc(".vfj .vrv"),
            d = Oc(".vdm .vrv");
        window.localStorage.clear(), Kb(), Ib(a), mr_variant.wp.renderNavContainer(c.data("default").value), mr_variant.wp.renderFooter(d.data("default").value), g(wp_data.current_page.post_title), f(), h(), i(), bd.dropdown.resetToDefault(c), bd.dropdown.resetToDefault(d), Cb(), b()
    }

    function e(a) {
        var b = a;
        Db(b.postId), Oc.modal.close(), window.localStorage.clear(), Kb(), mr_variant.wp.updateWpData(b.postId, mr_variant.wp.load), g(b.title)
    }

    function f() {
        history.replaceState(wp_data.current_page.post_id, wp_data.current_page.post_id, he.decode(wp_data.current_page.variant_url))
    }

    function g(a) {
        a = he.decode(_.isUndefined(a) ? wp_data.current_page.post_title : a), window.document.title = a + " - Variant"
    }

    function h() {
        Oc(".vrz a").attr("data-href", he.decode(wp_data.current_page.wp_edit_url))
    }

    function i() {
        Oc(".vrt").attr("href", he.decode(wp_data.current_page.url))
    }

    function j() {
        _c = !1
    }

    function k() {
        _c = !0
    }

    function l(a) {
        var b, c, d, e = "",
            f = "",
            g = ["class"];
        return b = a.get(0), c = _.pairs(_.reduce(b.attributes, function(a, b) {
            return a[b.name] = b.value, a
        }, {})), c.forEach(function(a) {
            var b = a[0],
                c = a[1];
            _.contains(b, g) || ("data-shortcode-name" === b && (d = c), 0 === b.indexOf("data-param") && (f = f + ("" !== f ? " " : "") + b.replace("data-param-", "") + '="' + c + '"'))
        }), e = "[" + d + ("" !== f ? " " : "") + f + "]"
    }

    function m(a) {
        var b, c, d, e;
        sc(a) && (b = l(a), c = Oc(a), cd.wp.renderShortcode(b, c.attr("vic"))), _.isUndefined(a.html) || _.isUndefined(a.target) || (d = Oc(".variant-shortcode." + a.target), e = d.closest("section, header, footer").attr("vic"), d.html(a.html).addClass("vru"), d.css("min-height", "auto"), Hb(), mr.documentReady(mr.setContext(".viu ." + e)), mr.windowLoad(mr.setContext(".viu  ." + e)))
    }

    function n(a, b) {
        return b = _.isUndefined(b) ? !1 : !0, a.find("div.variant-shortcode").each(function() {
            var a = l(Oc(this)),
                c = Oc(this);
            b && c.empty(), b ? c.append(a) : (c.before(a), c.remove())
        }), a
    }

    function o(a) {
        return a = Oc("<div>").append(a), a.find(".nav-container").remove(), a.find("footer").remove(), a = n(a, !0), a.html().replace(/(\n|\t)/g, "")
    }

    function p(a) {
        Array.isArray(a) ? Bc.options = Bc.options.concat(a) : _.isObject(a) && Bc.options.push(a)
    }

    function q(a) {
        Oc(a).addClass("loading")
    }

    function r(a) {
        Oc(a).removeClass("loading")
    }

    function s() {
        _.isUndefined(wp_data.config.autosave_interval) || (_.isUndefined(this.wp.autoSaveTimer) || clearInterval(this.wp.autoSaveTimer), parseInt(wp_data.config.autosave_interval, 10) > 0 && (u(), this.wp.autoSaveTimer = setInterval(c, 1e3 * parseInt(wp_data.config.autosave_interval, 10) * 60)))
    }

    function t() {
        this.wp.pauseAutoSave = !0
    }

    function u() {
        this.wp.pauseAutoSave = !1
    }

    function v() {
        return this.wp.pauseAutoSave
    }

    function w() {
        Vb() ? (Oc(".vet span").html("Load " + Oc.localStorage(Gc + ".vhg")), Oc(".vhe").removeClass("vih")) : Oc.localStorage(Gc + ".state.veu") ? (Oc(".vet span").removeClass("vih"), Oc(".vhe").removeClass("vih")) : Oc(".vhd").removeClass("vih"), Zc && Oc(".vah, .vdi, .vgy").remove()
    }

    function x() {
        var a = jc("demo");
        if (null !== a) {
            var b = new XMLHttpRequest;
            b.open("GET", "../demos/" + a + ".variant", !0), b.responseType = "blob", b.onload = function(a) {
                var c = [b.response];
                Da(c, !0)
            }, b.onerror = function(a) {
                Yb("Could not load specified demo file.")
            }, b.send()
        }
    }

    function y() {
        var a = Oc("body");
        Dc = Oc("#blank-veu").html(), Oc(".viu").html(Oc("#veu").html()), Ec = Oc("#veu"), Fc = Oc(".viu"), Gc = "undefined" !== a.attr("mrv_namespace") ? a.attr("mrv_namespace") : "mrv_variant.default", Hc = a.attr("mrv_contentTarget") ? Oc("#veu " + a.attr("mrv_contentTarget")) : Ec, Ic = a.attr("mrv_contentTarget") ? Oc(".viu " + a.attr("mrv_contentTarget")) : Fc, Jc = a.attr("mrv_navTarget") ? Oc("#veu " + a.attr("mrv_navTarget")) : Hc, Kc = a.attr("mrv_navTarget") ? Oc(".viu " + a.attr("mrv_navTarget")) : Ic, Lc = a.attr("mrv_footerTarget") ? Oc("#veu " + a.attr("mrv_footerTarget")) : Hc, Mc = a.attr("mrv_footerTarget") ? Oc(".viu " + a.attr("mrv_footerTarget")) : Ic
    }

    function z() {
        var a = window.navigator.userAgent,
            b = a.indexOf("MSIE "),
            c = 0;
        (b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (Oc("#if-ie").removeClass("vih"), c = 1), 0 === c && setTimeout(function() {
            Oc(".vhc").addClass("vba"), Oc(".vhv").removeClass("vba"), setTimeout(function() {
                Oc(".vhc").remove(), w(), Wb()
            }, 300)
        }, 100)
    }

    function A(a) {
        Oc("head").append('<link class="viw" href="theme/css/' + a + '" rel="alternate stylesheet" type="text/css" media="all">')
    }

    function B() {
        var a;
        try {
            a = JSON.parse(Oc(".vaz").html()), Oc(".vho").eq(2).removeClass("vih"), C("Original", a.original.colours, "theme"), Oc(".vay").attr("viq", a.original.originalFileName + ".css").attr("vhx", a.original.originalFileName + ".css"), Oc(a.schemes).each(function() {
                C(this.name, this.colours, "theme-" + this.name), A("theme-" + this.name.toLowerCase() + ".css")
            }), Oc(".viw").remove(), Oc(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function C(a, b, c) {
        var d, e = "",
            f = a + ": ",
            g = 100 / b.length;
        Oc(b).each(function(a, b) {
            e += '<div class="vax" style="width: ' + g + "%; background-color: " + b + '"></div>', f += " " + b
        }), d = '<li title="' + f + '" class="vhu" viz="' + c.toLowerCase() + '.css">', Oc(".vay").append(d + e + "</li>")
    }

    function D(a, b) {
        try {
            var c = (JSON.parse(Oc(".vaz").html()), a),
                d = Oc('[href*="' + Oc(".vay").attr("vhx") + '"]').attr("href"),
                e = Oc(".vay").attr("vhx");
            c = d.replace(e, c), Oc('[href*="' + Oc(".vay").attr("vhx") + '"]').attr("href", c), Oc(".vay").attr("vhx", a), b === !0 && Hb()
        } catch (f) {}
    }

    function E(a) {
        var b, c, d, e, f = Oc(".viu ." + a),
            g = !1;
        return f.is(".medium-editor-element") && (g = !0, tc.removeElements(f.get(0)), f.removeClass("medium-editor-element").removeAttr("data-medium-editor-element").removeAttr("data-medium-editor-editor-index").removeAttr("medium-editor-index")), Oc("#veu ." + a).attr("vht") ? a = "parent" === Oc("#veu ." + a).attr("vht") ? Oc("#veu ." + a).parent().attr("vic") : Oc("#veu ." + a).closest(Oc("#veu ." + a).attr("vht")).attr("vic") : Oc("#veu ." + a).closest(".vpe").length && (a = Oc("#veu ." + a).closest(".vpe").attr("vic")), b = Oc(".viu ." + a).not("ul.slides .clone ." + a).clone(), c = Oc("#veu ." + a).clone(), d = (new Date).getTime(), e = "vjs-" + d, b.find(".vnw").remove(), b.attr("vic", e), c.attr("vic", e), b.alterClass("vjs-*", ""), c.alterClass("vjs-*", ""), b.addClass(e), c.addClass(e), b.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a,
                c = Oc(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a,
                c = Oc(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), b.addClass("vpf").insertAfter(Oc(".viu ." + a)), g === !0 && tc.addElements([b.get(0), f.get(0)]), c.insertAfter(Oc("#veu ." + a)), Hb(), Oc(".vhw").hide(), Oc("#veu ." + a).is(Sc) ? void gd(a) : void Oc(".viu ." + a).parents().each(function() {
            return Oc(this).is(Tc) ? (gd(a), !1) : void 0
        })
    }

    function F(a, b) {
        var c, d = "undefined" != typeof b ? b : !1,
            e = Oc(".viu ." + a).parents(),
            f = Oc("#veu ." + a).is(Sc) ? !0 : !1;
        Oc("#veu ." + a).attr("vht") ? a = "parent" === Oc("#veu ." + a).attr("vht") ? Oc("#veu ." + a).parent().attr("vic") : Oc("#veu ." + a).closest(Oc("#veu ." + a).attr("vht")).attr("vic") : Oc("#veu ." + a).closest(".vpe").length && (a = Oc("#veu ." + a).closest(".vpe").attr("vic")), c = Oc("#veu ." + a).attr("vjw") ? Oc("#veu ." + a).closest("nav, section, header, footer").find(Oc("#veu ." + a).attr("vjw")).attr("vic") : a, d === !0 && (Oc(".viu ." + a).remove(), Oc("#veu ." + a).remove()), Oc(".vdv").length ? (Oc(".viu ." + a + ", .viu ." + c).addClass("vjb").removeClass("vjm"), Oc("#veu ." + a + ", #veu ." + c).addClass("vjb").removeClass("vjm")) : (Oc(".viu ." + a + ", .viu ." + c).addClass("vib").removeClass("vjm"), Oc("#veu ." + a + ", #veu ." + c).addClass("vib").removeClass("vjm")), f ? gd(a) : e.each(function() {
            return Oc(this).is(Tc) ? (gd(a), !1) : void 0
        }), Hb(), Oc(".vhw").hide()
    }

    function G(a) {
        var b = Oc("#veu ." + a),
            c = Oc(".viu ." + a),
            d = Oc("#veu ." + mc(b)),
            e = Oc(".viu ." + mc(c));
        b.is(":first-child") || (b.detach().insertBefore(d), c.detach().find(".vnw").remove(), c.insertBefore(e), Hb(), b.is(Sc) ? gd(a) : c.parents().each(function() {
            return Oc(this).is(Tc) ? (gd(a), !1) : void 0
        }))
    }

    function H(a) {
        var b = Oc("#veu ." + a),
            c = Oc(".viu ." + a),
            d = b.next(),
            e = c.next();
        b.is(":last-child") || (b.detach().insertAfter(d), c.detach().find(".vnw").remove(), c.insertAfter(e), Hb(), b.is(Sc) ? gd(a) : c.parents().each(function() {
            return Oc(this).is(Tc) ? (gd(a), !1) : void 0
        }))
    }

    function I(a) {
        if (Oc(a).siblings().length) return void Oc(a).remove();
        if (Oc(a).parent().length) {
            var b = Oc(a).parent();
            return Oc(a).remove(), I(b)
        }
    }

    function J(a) {
        var b = Oc("." + a);
        if (Oc(b).is("p , div, span, figure, article, img"))
            if (Oc(b).is('[class*="medium-"]') || Oc(b).parent().is('div [class*="medium-"]')) {
                if (Oc(b).parent().is('div [class*="medium-"]') && (b = Oc(b).parent()), !Oc(b).hasClass("medium-12")) {
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-12");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-11");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-10");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-9");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-8");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-7");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-6");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-5");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-4");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-3");
                    if (b.hasClass("medium-1")) return void b.removeClass("medium-1").addClass("medium-2")
                }
            } else if (Oc(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || Oc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (Oc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = Oc(b).parent()), !Oc(b).hasClass("col-xs-12")) {
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-12");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-11");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-10");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-9");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-8");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-7");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-6");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-5");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-4");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-3");
                if (b.hasClass("col-xs-1")) return void b.removeClass("col-xs-1").addClass("col-xs-2")
            }
        } else if (Oc(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || Oc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (Oc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = Oc(b).parent()), !Oc(b).hasClass("col-sm-12")) {
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-12");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-11");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-10");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-9");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-8");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-7");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-6");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-5");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-4");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-3");
                if (b.hasClass("col-sm-1")) return void b.removeClass("col-sm-1").addClass("col-sm-2")
            }
        } else if ((Oc(b).is('[class*="col-md-"]') || Oc(b).parent().is('div [class*="col-md-"]')) && (Oc(b).parent().is('div [class*="col-md-"]') && (b = Oc(b).parent()), !Oc(b).hasClass("col-md-12"))) {
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-12");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-11");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-10");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-9");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-8");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-7");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-6");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-5");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-4");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-3");
            if (b.hasClass("col-md-1")) return void b.removeClass("col-md-1").addClass("col-md-2")
        }
        Hb()
    }

    function K(a) {
        var b = Oc("." + a);
        if (Oc(b).is("p , div, span, figure, article, img"))
            if (Oc(b).is('[class*="medium-"]') || Oc(b).parent().is('div [class*="medium-"]')) {
                if (Oc(b).parent().is('div [class*="medium-"]') && (b = Oc(b).parent()), !Oc(b).hasClass("medium-1")) {
                    if (b.hasClass("medium-12")) return void b.removeClass("medium-12").addClass("medium-11");
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-10");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-9");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-8");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-7");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-6");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-5");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-4");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-3");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-2");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-1")
                }
            } else if (Oc(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || Oc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (Oc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = Oc(b).parent()), !Oc(b).hasClass("col-xs-1")) {
                if (b.hasClass("col-xs-12")) return void b.removeClass("col-xs-12").addClass("col-xs-11");
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-10");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-9");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-8");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-7");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-6");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-5");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-4");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-3");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-2");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-1")
            }
        } else if (Oc(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || Oc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (Oc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = Oc(b).parent()), !Oc(b).hasClass("col-sm-1")) {
                if (b.hasClass("col-sm-12")) return void b.removeClass("col-sm-12").addClass("col-sm-11");
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-10");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-9");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-8");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-7");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-6");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-5");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-4");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-3");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-2");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-1")
            }
        } else if ((Oc(b).is('[class*="col-md-"]') || Oc(b).parent().is('div [class*="col-md-"]')) && (Oc(b).parent().is('div [class*="col-md-"]') && (b = Oc(b).parent()), !Oc(b).hasClass("col-md-1"))) {
            if (b.hasClass("col-md-12")) return void b.removeClass("col-md-12").addClass("col-md-11");
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-10");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-9");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-8");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-7");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-6");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-5");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-4");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-3");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-2");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-1")
        }
        Hb()
    }

    function L(a) {
        if (rc()) return void M();
        var b, c, d, e, f, g, h, i, j, k, l, m, n, p, q, r = [],
            s = new Date;
        return rc() || (b = new JSZip, Oc("#vhl .viy").length) ? ("all" === a ? (Oc("#vhl .viy").each(function() {
            r.push(Oc(this).attr("viy"))
        }), c = "variant-exported-" + ic(s.toDateString())) : r.push(a), r.forEach(function(a, c) {
            d = Oc.localStorage(Gc + ".state.veu." + a), g = Oc.localStorage(Gc + ".state.vem." + a) || "", h = Oc.localStorage(Gc + ".vhf." + a), i = Oc.localStorage(Gc + "vmp." + a), j = Oc.localStorage(Gc + ".vkp." + a) || "", k = Oc('#vhl [viy="' + a + '"]').attr("vjh") || "", l = Oc('#vhl [viy="' + a + '"]').attr("page-title"), l = "undefined" != typeof l ? l : "", e = Oc.localStorage(Gc + ".state.page-meta-description-mrv." + a) || "", f = Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + a) || "", rc() && (d = o(d)), m = {
                stateID: a,
                templateName: Gc,
                pageName: k,
                pageTitle: l,
                colourScheme: h,
                fontOption: i,
                bodyClasses: j,
                layoutMap: g,
                masterHtml: d,
                metaDescription: e,
                googleAnalyticsID: f
            }, n = JSON.stringify(m), rc() || b.file(ic(k) + "-" + s.getTime() + ".page", n)
        }), void(rc() || (b.file(Gc + ".navs", Oc("#vbn").html()), b.file(Gc + ".footers", Oc("#vbl").html()), "all" !== a && (c = ic(k)), Zc && (q = b.generate({
            type: "base64",
            compression: "deflate"
        }), Oc.localStorage("allpages", q)), Zc || (p = b.generate({
            type: "blob",
            compression: "deflate"
        }), saveAs(p, c + ".variant"))))) : void Yb("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.")
    }

    function M() {
        var a, b, c, d, e, f, g, h = new Date;
        a = "" + wp_data.current_page.post_id, b = o(Oc("#veu").html()), c = Oc(".vem").html(), d = wp_data.current_page.post_title, e = wp_data.current_page.post_title, f = {
            templateName: Gc,
            stateID: a,
            pageName: d,
            pageTitle: e,
            layoutMap: c,
            masterHtml: b
        }, g = JSON.stringify(f), _.isArray(mr_variant.wp.debug) || (mr_variant.wp.debug = []), mr_variant.wp.debug.push({
            time: h,
            output: f
        }), cd.wp.saveVariant(g, mr_variant.wp.saveType)
    }

    function N() {
        var a;
        try {
            a = JSON.parse(Oc(".vmq").html()), Oc(".vmy").removeClass("vih"), Oc(".vmz").text(a.title), O(a.originalSet), Oc(a.optionalSets).each(function() {
                O(this)
            }), Oc(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function O(a) {
        var b = Oc("<li>").addClass("vmv").attr("vmw", a.setName);
        a.css.length > 0 ? b.attr("vmo", a.css) : b.attr("vmo", "vir"), Oc(a.fonts).each(function() {
            b.append(Oc("<img>").attr("src", "img/fonts/" + ic(this.fontName) + ".png"))
        }), Oc(".vms").append(b)
    }

    function P(a, b) {
        try {
            if (_.isString(a)) {
                var c = (JSON.parse(Oc(".vmq").html()), Oc("[vmw=" + a + "]").attr("vmo"));
                Oc("head link.vmx").remove(), Oc("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../css/font-' + ic(a) + '.css" rel="stylesheet" type="text/css">'), Oc(".vms").attr("vmr", a), Oc(".vmv.vhr").removeClass("vhr"), Oc('.vmv[vmw="' + a + '"]').addClass("vhr"), b === !0 && Hb()
            }
        } catch (d) {}
    }

    function Q() {
        var a = Y(),
            b = a.attr("vhy"),
            c = $();
        c.attr("class", a.attr("class")), Oc("#vbl ." + b).html(c.html()).attr("class", a.attr("class")), Oc("#vbl .vjb").removeClass("vjb"), Oc.localStorage(Gc + ".vbm", Oc("#vbl").html())
    }

    function R(a) {
        Oc(".vfb").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vfy").val(""), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function S() {
        var a, b = (new Date).getTime(),
            c = "vhy-" + b,
            d = Oc(".vfz").val();
        Oc(".vdm").closest(".vho").find(".vly").text(d), Oc(".vfz").val(""), Oc("#veu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), Oc(".viu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), Oc("#vbl").append(Oc("#veu footer").clone()), a = Oc("#vbl").html(), Oc.localStorage(Gc + ".vbm", a), T(Oc("." + c)), Q(), V(c, !0), Hb()
    }

    function T(a) {
        Oc(".vdm").append('<li class="vdl" vid="' + Oc(a).attr("vhy") + '" vdn="' + Oc(a).attr("vhy") + '" vit="vhz"><span>' + Oc(a).attr("vie") + '</span><span class="vbx oi" data-glyph="x"></span></li>')
    }

    function U() {
        if (rc()) {
            var a = bd.dropdown.render(wp_data.footer_layouts, wp_data.footer_layouts_default);
            Oc(".vdm").append(a)
        } else Oc("#vbl").append(Oc.localStorage(Gc + ".vbm")), Oc("#vbl footer").each(function() {
            T(Oc(this))
        })
    }

    function V(a, b) {
        var c = (X(), Y()),
            d = Z(),
            e = $(),
            f = b === !0 ? !0 : !1,
            g = "";
        e.remove(), c.remove(), Oc("#vbl [vhy=" + a + "]").length ? (g = nc(Oc("#vbl [vhy=" + a + "]").get(0), !0), d.append(g), ca(aa(a))) : Oc("#vdk section#" + a).length ? (g = Oc("#vdk section#" + a).html(), d.append(g), d.find("footer").addClass("vir").attr("footer-id", a), vb(d.find("footer")), ca(aa(a))) : ca(dd.ui.sidebar.footerOptionsListText), f && (Hb(), gd())
    }

    function W() {
        Oc("#veu footer").remove(), Oc(".viu footer").remove(), Wb(), Xb(), Hb(), gd()
    }

    function X() {
        return Oc(Mc.selector)
    }

    function Y() {
        return X().find("footer").first()
    }

    function Z() {
        return Oc(Lc.selector)
    }

    function $() {
        return Z().find("footer").first()
    }

    function aa(a) {
        return Oc('[vhy="' + a + '"]').attr("vie") || Oc("#vdk #" + a).attr("vbr")
    }

    function ba(a) {
        var b;
        return _.isUndefined(a) ? "" : (b = nc(Oc("#vbl [vhy=" + a + "]").get(0), !0), _.isUndefined(b) ? "" : b)
    }

    function ca(a) {
        var b = Oc(".vdm").siblings(".vly");
        _.isUndefined(a) ? b.text(dd.ui.sidebar.footerOptionsListText) : b.text(a)
    }

    function da() {
        var a, b = Oc("<div>").append(Oc(".vpi").val()),
            c = Oc("#veu").find("." + Oc(".vpj").val()),
            d = c.closest("section"),
            e = "",
            f = null,
            g = null;
        return Oc(Uc).each(function(a, b) {
            e += (a > 0 ? ", " : " ") + b.name
        }), Oc(b).find("form[action]:first").length ? (g = Oc(b).find("form[action]:first"), Oc(Uc).each(function(a, b) {
            return g.attr("action").toLowerCase().includes(b.action) ? (f = b.handler, !1) : void 0
        }), f ? (a = f(b, c), a ? (a.insertBefore(c), F(c.attr("vic")), vb(d), gd(c.attr("vic")), !0) : !1) : ($b("Please use an embed code from: " + e + ".", "warning", null, 7e3), !1)) : ($b("No valid form found in your embed code.", "warning"), !1)
    }

    function ea(a, b) {
        var c = Oc(a).find("form[action]:first"),
            d = Oc("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = Oc("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = Oc("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = Oc("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = Oc("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? ($b('The form you are embedding will not fit. Use "Super Slim" form instead.', "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find("label, input, textarea").each(function() {
            var a = Oc(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : ($b("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function fa(a, b) {
        var c = Oc(a).find("form[action]:first"),
            d = Oc("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = Oc("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = Oc("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = Oc("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = Oc("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? ($b("The form you are embedding will not fit. Use a single field instead.", "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.removeAttr("vic"), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find('label, input, textarea, button[type="submit"]').each(function() {
            var a = Oc(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : ($b("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function ga(a) {
        var b, c, d, e, f, g, h, i, j, k = Oc('<div id="vjk" />').html(Mb(a)),
            l = Nb(a),
            m = (Rb(a), Pb(a)),
            o = Qb(a),
            p = "",
            q = {
                indent_inner_html: !0,
                indent_size: 4,
                indent_char: " ",
                wrap_line_length: 0,
                brace_style: "expand",
                preserve_newlines: !1,
                max_preserve_newlines: 0,
                indent_handlebars: !1,
                extra_liners: ["/html", "/head", "/body"]
            };
        return zc.options && zc.options.forEach(function(a) {
            "undefined" != typeof a.disposableSelector && (p = p + " " + a.disposableSelector.replace(".", ""))
        }), rc() && (k = n(k)), g = Oc(k).find("[via]"), g.length && (h = Ya(g.attr("via")), "" !== h && (g.before(h), g.remove())), e = Oc(k).find("footer[vhy]"), e.length && (f = ba(e.attr("vhy")), "" !== f && (e.before(f), e.remove())), k.find("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, a:empty, p:empty, span:empty, li:empty, em:empty, strong:empty, blockquote:empty, figcaption:empty, table:empty, label:empty").not(".in-page-link").not(Xc).addClass("vib"), k.find(".vib, .vjb").each(function() {
            I(Oc(this))
        }), k.find("div.row:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >button, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), k.find(".vjd:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >button, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), Oc(k).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, form, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, label, address").removeAttr("vbq").removeClass("vrh").removeClass("vjm vjb").removeClass("vhz").removeClass("vir").alterClass("vjs-*", "").alterClass("variant-*", "").removeClass("vjd").removeClass("voz").removeClass("viv").removeClass("lightbox-gallery-mrv").removeClass("veo").removeClass("vlk").removeClass("ven").removeClass("vjy").removeClass("vdw").removeAttr("vic").removeClass("vjx").removeClass("vog").removeClass("voh").removeAttr("vij").removeAttr("vik").removeAttr("contenteditable").removeAttr("data-vip").removeAttr("vli").removeAttr("vht").removeAttr("vjw").removeAttr("vii").removeAttr("nav-id").removeAttr("footer-id").removeClass("ui-sortable").removeClass(p).removeClass("vns").removeClass("vnx").removeClass("vpd").removeClass("vnn").removeClass("vpe").removeAttr("vqj").removeClass("vru"), Oc(k).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, form, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, label, address").not(".wysiwyg *, .wysiwyg").removeAttr("style"), Oc(k).find("nav, header, nav div").alterClass("via-*", "").removeAttr("via").removeAttr("vio").removeAttr("style"), Oc(k).find("footer").alterClass("vhy-*", "").removeAttr("vhy").removeAttr("vie"), Oc(k).find('*[class=""]').removeAttr("class"), b = Oc("#vji").html(), b = String(b).replace("[title]", l), b = String(b).replace(Ub(), Rb(a)), j = ma(b, o), b = j ? j : b, b = na(b, m), c = he.encode(Oc(k).html()), d = Oc("#vif").html(), b = ha(b, c, d), b = ia(b, c, d), b = oa(a, b), d = ja(b, c, d), d = pa(a, d), i = String(b + c + d), i = String(i).replace(/\.\.\/img\//g, "img/").replace(/\.\.\/video\//g, "video/").replace(/delay-src/g, "src").replace(/no-src/g, "src"), i = html_beautify(he.decode(i), q);
    }

    function ha(a, b, c) {
        var d = a;
        return wc.forEach(function(a, e) {
            var f, g, h, i, j, k;
            f = he.decode(b + c), g = Oc("<div>").html(f), d = d.replace("\n        " + a.headString.replace(/&quot;/g, '"') + "\n", "\n"), d = d.replace(a.headString.replace(/&quot;/g, '"') + "\n", ""), j = "undefined" != typeof a.iconClass && "" !== a.iconClass ? 'i[class*="' + a.iconClass + '"]' : "", k = "undefined" != typeof a.iconPrefix && "" !== a.iconPrefix ? ("" !== j ? "," : "") + 'i[class*="' + a.iconPrefix + '"]' : "", h = "undefined" != typeof a.requiredBy && "" !== a.requiredBy ? (j + k !== "" ? "," : "") + a.requiredBy : "", i = "undefined" != typeof a.notRequiredBy && "" !== a.notRequiredBy ? a.notRequiredBy : "", Oc(g).find(j + k + h).not(i).length && (d = d.replace("\n        &lt;link ", "\n        " + a.headString + "\n        &lt;link "))
        }), d
    }

    function ia(a, b, c) {
        var d = a;
        return xc.forEach(function(a, e) {
            var f = he.decode(b + c),
                g = Oc("<div>").html(f);
            Oc(g).find(a.requiredBy).length || (d = d.replace(a.styleRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function ja(a, b, c) {
        var d = c;
        return yc.forEach(function(a, e) {
            var f = he.decode(b + c),
                g = Oc("<div>").html(f);
            Oc(g).find(a.requiredBy).length || (d = d.replace(a.scriptRef, "\n").replace(/\n[ ]+\n/g, ""))
        }), d
    }

    function ka() {
        var a;
        if (Oc("#vpb").length) try {
            return a = JSON.parse(Oc("#vpb").html()).dynamicCSS
        } catch (b) {
            return []
        }
    }

    function la() {
        var a;
        if (Oc("#vpa").length) try {
            return a = JSON.parse(Oc("#vpa").html()).dynamicScripts
        } catch (b) {
            return []
        }
    }

    function ma(a, b) {
        var c = a.replace(/(\r\n|\n|\r)/gm, ","),
            d = c.split(","),
            e = !1,
            f = a;
        return b = " " === b ? "" : b, -1 === a.indexOf("[optional-body-classes]") ? a : (d.forEach(function(c) {
            -1 !== c.indexOf("[optional-body-classes]") && ("" !== b ? -1 !== c.indexOf('class="') ? (f = String(a).replace("[optional-body-classes]", b), e = !0) : (f = String(a).replace("[optional-body-classes]", 'class="' + b + '"'), e = !0) : (f = String(a).replace(" [optional-body-classes]", ""), f = String(f).replace("[optional-body-classes]", ""), e = !0))
        }), e ? f : void 0)
    }

    function na(a, b) {
        var c, d = a,
            e = "";
        return !_.isUndefined(b) && b.length > 0 && "vir" !== Oc('.vmv[vmw="' + b + '"]').attr("vmo") && (e = Oc('.vmv[vmw="' + b + '"]').attr("vmo"), c = '&#13;&#10;        &lt;link href="' + e + '" rel="stylesheet" type="text/css"&gt;&#13;&#10;', c += '        &lt;link href="css/font-' + ic(b) + '.css" rel="stylesheet" type="text/css"&gt;&#13;&#10;    &lt;/head&gt;\n', d = d.replace(/\t\&lt;\/head\&gt;/g, c), d = d.replace(/[\s]*\&lt;\/head\&gt;/g, c)), d
    }

    function oa(a, b) {
        var c = b,
            d = Tb(a);
        return "string" == typeof d && "" !== d ? (d = "&lt;meta name=&quot;description&quot; content=&quot;" + he.escape(he.escape(d)) + "&quot;/&gt;", c.replace("&lt;/title&gt;", "&lt;/title&gt;&#13;&#10;        " + d)) : b
    }

    function pa(a, b) {
        var c = "&lt;script&gt; (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '{{TRACKING-ID}}', 'auto'); ga('send', 'pageview'); &lt;/script&gt;",
            d = Sb(a);
        return "string" == typeof d && "" !== d ? (c = c.replace("{{TRACKING-ID}}", d), b.replace("&lt;/body&gt;", "    " + c + "\n    &lt;/body&gt;")) : b
    }

    function qa() {
        var a, b = "",
            c = Oc('<ul class="voj">'),
            d = Oc('<ul class="vrj">');
        if (Oc("#voi").length) try {
            return a = JSON.parse(Oc("#voi").html()).iconPacks, a.forEach(function(a) {
                c.append(Oc("<li><span>" + a.name + "</span></li>")), b = '<li class="vou"><span class="vot">' + a.name + '</span> <span class="vom">' + a.icons.length + ' icons </span><span class="voo"><a target="_blank" href="' + a.url + '">more info</a></span></li>', b += '<li class="vov">', a.icons.forEach(function(c) {
                    b += '<div class="vam" data-icon-name="' + c + '" data-icon-type="' + (_.isUndefined(a.type) ? "class" : a.type) + '" von="' + c.toLowerCase().replace(a.iconPrefix, "") + '"><i class="icon ' + a.iconClass + (_.isUndefined(a.type) ? " " + c : "text" === a.type ? "" : " " + c) + '" icon-class="' + a.iconClass + (_.isUndefined(a.type) ? " " + c : "text" === a.type ? "" : " " + c) + '" title="' + c + '">' + (_.isUndefined(a.type) ? "" : "text" === a.type ? c : "") + "</i></div>"
                }), b += "</li>", d.append(b)
            }), Oc(c).find("li:first").addClass("vhr"), Oc(d).find("li.vou:first, li.vov:first").addClass("vhr"), Oc(".vce").html("").append(c).append(d), a
        } catch (e) {
            return JSON.parse('{"iconPacks":[]}')
        }
    }

    function ra(a, b, c, d) {
        var e, f = "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d + " " : "";
        return e = Oc("<" + f + ' data-glyph="' + a + '" class="' + g + 'oi vnv" title="' + b + '"></' + f + ">")
    }

    function sa(a, b) {
        var c, d = Oc(".viu ." + b);
        d.width();
        return c = ra("star", "Edit Icon"), Oc(c).off("click").on("click", function(b) {
            return ta(Oc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", Oc("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function ta(a) {
        Oc(".vcd").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            minHeight: 620,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc("#vgo").val(a), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), wa(), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ua(a) {
        Oc(".vce").addClass("vri"), Oc(".vcd ul.vrj div.vam").addClass("vih"), Oc(".vcd ul.vrj div.vam span.vor").remove(), Oc('.vcd ul.vrj div.vam[von*="' + a + '"]').each(function() {
            var b = Oc(this);
            b.append('<span class="vor">' + b.attr("von").replace(a, "<strong>" + a + "</strong>") + "</span>"), b.removeClass("vih")
        }), wa()
    }

    function va() {
        Oc(".vce").removeClass("vri"), Oc(".vcd .vrj li div.vam.vih").removeClass("vih"), Oc(".vok").val(""), Oc(".vcd .vol").addClass("vih"), Oc(".vcd ul.vrj div.vam span.vor").remove(), wa()
    }

    function wa() {
        var a, b = !0;
        Oc(".vow").remove(), Oc(".vcd ul.vrj li.vov").each(function(c, d) {
            a = Oc(this).find("div.vam:not(.vih)").length, 0 === a ? Oc(this).addClass("vih").prev().addClass("vih") : (a > 70 ? Oc(".vce").addClass("vrk") : Oc(".vce").removeClass("vrk"), Oc(this).removeClass("vih").prev().removeClass("vih"), b = !1), Oc(".vcd .vrj li span.vom").eq(c).text(a + " icon" + (a > 1 ? "s" : "") + " " + ("" !== Oc(".vok").val() ? "found" : "in this pack") + " ")
        }), b && (Oc(".vce").append('<span class="vow">None Found</span>'), Oc(".vce").removeClass("vrk"))
    }

    function xa(a) {
        if (rc()) {
            cd.wp.editImageID = a;
            var b = {},
                c = Oc("#veu img." + a);
            b.imageID = a, b.imageElement = c.get(0), b.imageSrc = c.attr("src"), b.imageAlt = c.attr("alt"), cd.wp.editImage(b)
        } else Oc(".vcl").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                var b = Oc("." + a),
                    c = b.is("img"),
                    d = b.is("a"),
                    e = c ? b.attr("src") : d ? b.attr("href") : "",
                    f = c ? b.attr("alt") : d ? b.attr("data-title") : "";
                Oc(".vdx").html(Oc("#vdp").html()), Oc(".vcp").attr("src", e), Oc(".vcm .veb").text(c ? Oc("." + a).get(0).naturalWidth + "x" + Oc("." + a).get(0).naturalHeight + " pixels" : ""), Oc(".vco").val(e.replace("../img/", "img/")), Oc(".vck").val(a), Oc(".vcf").val(f), Oc(".vdx .vdy").each(function() {
                    var a = Oc(this).find("img").get(0),
                        b = Oc(this).find(".vec");
                    b.text(a.naturalWidth + "x" + a.naturalHeight)
                }), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Aa(), Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ya(a) {
        var b, c, d, e = a.target.files;
        for (d = Oc(".vdx .vmh").first(), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), b = 0, c = e[b]; b < e.length; b++) c = e[b], Oc('#vdp [vis="' + c.name + '"]').length || (Oc('#vdp [vis="' + c.name + '"]').remove(), Oc(d).prepend('<div class="vdy"><img class="vcj" src="../img/' + c.name + '" vis="' + c.name + '" onerror="window.mr_variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>')), d = Oc(d).is(".vdx .vmh:last") ? Oc(".vdx .vmh:first") : Oc(d).next(".vdx .vmh");
        Aa()
    }

    function za() {
        if (!rc()) {
            var a = Oc("<div />").addClass("vmh"),
                b = Oc("<div />").addClass("vmh"),
                c = Oc("<div />").addClass("vmh"),
                d = "";
            if (Oc.localStorage(Gc + ".gallery.images")) Oc("#vdp").html(Oc.localStorage(Gc + ".gallery.images")), Oc("#vdp div").each(function() {
                Oc(this).find("img").length || Oc(this).remove(), Oc(this).hasClass("no-image") && Oc(this).remove()
            });
            else {
                var e = Oc(".vdz").attr("vbv").split(",");
                e.forEach(function(e, f) {
                    d = '<div class="vdy"><img class="vcj" delay-src="../img/' + e + '" vis="' + e + '" onerror="window.mr_variant.defaultImageError(this)"/><span class="vec"></span></div>', f % 3 === 0 ? c.append(d) : f % 2 === 0 ? b.append(d) : a.append(d), Oc("#vdp").append(a).append(b).append(c)
                })
            }
        }
    }

    function Aa() {
        Oc.localStorage(Gc + ".gallery.images", Oc(".vdx").html()), Oc("#vdp").html(Oc(".vdx").html())
    }

    function Ba(a) {
        var b = Oc(a).find("img");
        b.attr("src", ""), b.attr("src", "../img/" + b.attr("vis")), b.css("display", "inline"), Oc(a).removeClass("no-image"), Oc(a).find(".vjn, .vec").html("")
    }

    function Ca(a, b, c, d, e) {
        var f, g = "undefined" != typeof c && "string" == typeof c && "" !== c ? c : "div",
            h = "undefined" != typeof d && "string" == typeof d && "" !== d ? d : "",
            i = b !== !1 ? Oc(".viu ." + b) : !1,
            j = i ? i.outerWidth() : null,
            k = "10px",
            l = i && "img" === i.prop("tagName").toLowerCase() ? !0 : !1,
            m = i && "absolute" === i.css("position") ? !0 : !1,
            n = ra(_.isString(e) ? e : "image", "Edit Image", g, h),
            o = Oc('<div class="vnu"></div>'),
            p = Oc('<div class="vnw"></div>');
        if (Oc(n).unbind("click").bind("click", function(b) {
                return xa(Oc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
            }).attr("vof", Oc("." + a).attr("vic")), 100 >= j && (k = "2px"), b !== !1) {
            if (l) return m ? !0 : (f = i.parent(), i.parent().is(".vnu") || (f = o, "" !== i.css("float") && f.css("float", i.css("float")), "" !== i.css("padding") ? f.css("padding", i.css("padding")) : ("" !== i.css("padding-left") && (f.css("padding-left", i.css("padding-left")), i.css("padding-left", "0px")), "" !== i.css("padding-right") && (f.css("padding-right", i.css("padding-right")), i.css("padding-right", "0px"))), "" !== i.css("margin-right") && (f.css("margin-right", i.css("margin-right")), i.css("margin-right", "0px")), "" !== i.css("margin-left") && (f.css("margin-left", i.css("margin-left")), i.css("margin-left", "0px")), i.hasClass("pull-right") && f.addClass("pull-right"), i.hasClass("pull-left") && f.addClass("pull-left"), f.css("max-width", j), i.wrap(f)), Oc(p).css("padding", k).css("width", i.innerWidth()).append(n), i.parent().append(p), !0);
            Oc(p).css("padding", k).css("width", j).append(n), i.append(p)
        }
        return b === !1 ? n : void 0
    }

    function Da(a, b) {
        if (rc()) return void Ea(a, b);
        var c = "undefined" != typeof a.target ? a.target.files : a,
            d = "";
        b = b === !0 ? !0 : !1;
        for (var e = 0; e < c.length; e++) {
            var f = new FileReader,
                g = c[e];
            f.onload = function(a) {
                return function(c) {
                    try {
                        var e = new JSZip(c.target.result),
                            f = '<span class="vjl">Imported the following:</span>',
                            g = '<span class="vjl">Excluded these:</span>',
                            h = "<ul>",
                            i = "<ul>";
                        Oc.each(e.files, function(a, b) {
                            var c, e, f, g;
                            b.name === Gc + ".navs" ? (c = b.asText().trim(), c = Oc('<div id="vrl" />').html(c), Oc(c).children().each(function() {
                                Oc('#vbn [via="' + Oc(this).attr("via") + '"]').length ? i += "<li>Nav - " + Oc(this).attr("vio") + " (already exists)</li>" : (Na(Oc(this)), Oc("#vbn").append(Oc(this)), Oc.localStorage(Gc + ".vbo", Oc("#vbn").html()), h += "<li>Nav - " + Oc(this).attr("vio") + "</li>")
                            })) : b.name === Gc + ".footers" ? (e = b.asText().trim(), e = Oc('<div id="vjj" />').html(e), Oc(e).find("footer").each(function() {
                                Oc('#vbl [vhy="' + Oc(this).attr("vhy") + '"]').length ? i += "<li>Footer - " + Oc(this).attr("vie") + " (already exists)</li>" : (T(Oc(this)), Oc("#vbl").append(Oc(this)), Oc.localStorage(Gc + ".custom-footers", Oc("#vbl").html()), h += "<li>Footer - " + Oc(this).attr("vie") + "</li>")
                            })) : (g = JSON.parse(b.asText()), g.templateName === Gc ? Oc('#vhl [viy="' + g.stateID + '"]').length ? i += "<li>Page - " + g.pageName + " (already exists)</li>" : (h += "<li>Page - " + g.pageName + "</li>", f = g.stateID, Oc("#vhl").append('<li class="viy" viy="' + g.stateID + '" vjh="' + g.pageName + '" page-title="' + g.pageTitle + '"></li>'), kb(g.pageName, g.stateID), Oc.localStorage(Gc + ".state.veu." + f, g.masterHtml), Oc.localStorage(Gc + ".state.vem." + f, g.layoutMap), Oc.localStorage(Gc + ".vhf." + f, g.colourScheme), Oc.localStorage(Gc + "vmp." + f, g.fontOption), Oc.localStorage(Gc + ".vkp." + f, g.bodyClasses), Oc.localStorage(Gc + ".state.page-meta-description-mrv." + f, g.metaDescription), Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + f, g.googleAnalyticsID), Oc.localStorage(Gc + ".vhj." + f, g.pageTitle)) : i += "<li>Page - " + g.pageName + " (not designed for this template)</li>", d = {
                                id: g.stateID,
                                name: g.pageName
                            })
                        }), Oc.localStorage(Gc + ".vhk", Oc("#vhl").html()), h += "</ul>", i += "</ul>", "<ul></ul>" !== h && (h = f + h), "<ul></ul>" !== i && (i = g + i), b ? (Oc(".vhe").remove(), Jb(d.id)) : Yb("Import", h + "<br />" + i), setTimeout(function() {
                            Oc(".vfw").find(".ves").length ? Oc(".vfw").removeClass("empty-vfw") : Oc(".vfw").addClass("empty-vfw")
                        }, 100)
                    } catch (c) {
                        Yb("Page Import Error", "Error reading " + a.name + " : <br /><br />" + c.message)
                    }
                }
            }(g), f.readAsArrayBuffer(g)
        }
        Oc(".vef").val("")
    }

    function Ea(a, b) {
        b = b === !0 ? !0 : !1, _.isUndefined(a.newpage) ? (a.templateName === Gc && (Oc(".vhe").remove(), stateID = a.stateID, Oc('#vhl li[viy="' + a.stateID + '"]').remove(), Oc("#vhl").append('<li class="viy" viy="' + a.stateID + '" vjh="' + a.pageName + '" page-title="' + a.pageTitle + '"></li>'), Db(wp_data.post_id), Oc.localStorage(Gc + ".state.veu." + stateID, a.masterHtml), Oc.localStorage(Gc + ".state.vem." + stateID, a.layoutMap), Oc.localStorage(Gc + ".vhf." + stateID, a.colourScheme), Oc.localStorage(Gc + "vmp." + stateID, a.fontOption), Oc.localStorage(Gc + ".vkp." + stateID, a.bodyClasses), Oc.localStorage(Gc + ".state.page-meta-description-mrv." + stateID, a.metaDescription), Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + stateID, a.googleAnalyticsID)), stateToLoadNow = {
            id: a.stateID,
            name: a.pageName
        }, Oc.localStorage(Gc + ".vhk", Oc("#vhl").html()), Jb(stateToLoadNow.id), k()) : d(a.newpage)
    }

    function Fa(a) {
        var b = Oc("." + a);
        return rc() ? void mr_variant.wp.editLink(b.attr("href"), b.text(), b.attr("target"), b.attr("vic")) : void Oc(".vcw").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vgp").addClass("vih");
                var b = Oc("." + a);
                b.hasClass("ven") ? Oc(".vcq").text("for Lightbox Image") : Ia(), Oc(".vcu").val(Oc("." + a).attr("href").replace("../img/", "img/")), Oc(".vcv").val(a), Oc(".vcz").removeAttr("selected"), "undefined" != typeof Oc("." + a).attr("target") ? Oc(".vcy").val(Oc("." + a).attr("target")) : Oc(".vcy").val("_self"), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ga() {
        var a = Oc("." + Oc(".vcv").val()),
            b = Oc(".vcu").val(),
            c = Oc(".vcy").val();
        a.hasClass("ven") && (a.find("img[alt]").length && a.attr("data-title", a.find("img").attr("alt")), "img/" === b.substring(0, 4) && (b = b.replace("img/", "../img/"))), a.removeClass("inner-link").attr("href", b).attr("target", c), -1 !== b.indexOf("#") && a.addClass("inner-link"), Hb()
    }

    function Ha(a) {
        var b, c, d;
        Oc("[vik=" + Oc(a).parent().parent().attr("vbq") + "]").length ? (c = Oc("[vik=" + Oc(a).parent().parent().attr("vbq") + "]").attr("id"), d = Oc('.viu[href="#' + Oc("[vik=" + Oc(a).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + Oc("[vik=" + Oc(a).parent().parent().attr("vbq") + "]").attr("id") + '"]'), d.attr("href", "#" + ic(Oc(a).text())), Oa(), Oc("[vik=" + Oc(a).parent().parent().attr("vbq") + "]").attr("id", ic(Oc(a).text())).attr("vij", Oc(a).text())) : (b = Oc("." + Oc(a).parent().parent().attr("vbq")), b.before('<a id="' + ic(Oc(a).text()) + '" class="in-page-link" vij="' + Oc(a).text() + '" vik="' + Oc(a).parent().parent().attr("vbq") + '"></a>'))
    }

    function Ia() {
        var a;
        Oc(".vgp").addClass("vih");
        var b = Oc(Hc).find(".in-page-link");
        b.length && (a = '<option value="">Select an in-page navigation link</option>', b.each(function() {
            var b = Oc(this);
            a += '<option value="#' + b.attr("id") + '">' + b.attr("vij") + "</option>"
        }), Oc(".veh").html(a), Oc(".vgp").removeClass("vih"))
    }

    function Ja() {
        _.isObject(tc) && tc.destroy(), Qc = [], Oc('.viu [contenteditable="true"]').filter(uc).not(vc).each(function(a, b) {
            Qc.push(Oc(this).get(0))
        }), tc = new MediumEditor(Qc, {
            paste: {
                cleanPastedHTML: !0,
                unwrapTags: ["span", "a", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "ol", "ul", "li", "address", "form", "iframe", "blockquote", "figure", "section", "header", "footer"]
            },
            toolbar: {
                allowMultiParagraphSelection: !0,
                buttons: ["bold", "italic", "underline", "strikethrough", "anchor"]
            }
        }), tc.subscribe("showToolbar", function(a, b) {
            var c = Oc(b);
            c.closest(".voh").addClass("medium-editor-active-mrv")
        }), tc.subscribe("hideToolbar", function(a, b) {
            var c = Oc(b);
            c.closest(".voh").removeClass("medium-editor-active-mrv")
        })
    }

    function Ka(a) {
        Oc(".vfc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vga").val(""), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function La() {
        var a, b = (new Date).getTime(),
            c = "via-" + b,
            d = Oc(".vgb").val(),
            e = Wa(),
            f = Ta();
        Oc(".vfj").closest(".vho").find(".vly").text(d), Oc(".vgb").val(""), e.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), f.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), Oc("#vbn").append(e.clone()), a = Oc("#vbn").html(), Oc.localStorage(Gc + ".vbo", a), Na(Oc("." + c)), Oa(), Pa(c, !0), Hb()
    }

    function Ma() {
        if (rc()) {
            var a = bd.dropdown.render(wp_data.header_layouts, wp_data.header_layouts_default);
            Oc(".vfj").append(a)
        } else Oc("#vbn").append(Oc.localStorage(Gc + ".vbo")), Oc("#vbn").children().each(function() {
            Na(Oc(this))
        })
    }

    function Na(a) {
        Oc(".vfj").append('<li class="vfi" nav-id="' + Oc(a).attr("via") + '" vit="vhz"><span>' + Oc(a).attr("vio") + '</span><span class="vby oi" data-glyph="x"></span></li>')
    }

    function Oa() {
        var a = Ta(),
            b = a.attr("via"),
            c = Oc("#veu ." + b);
        c.attr("class", a.attr("class")), Oc("#vbn ." + b).html(c.html()).attr("class", a.attr("class")), Oc("#vbn .vjb").removeClass("vjb"), Oc.localStorage(Gc + ".vbo", Oc("#vbn").html())
    }

    function Pa(a, b) {
        var c, d, e = (Sa(), Ta()),
            f = Va(),
            g = Wa(),
            h = b === !0 ? !0 : !1;
        g.remove(), e.remove(), Oc("#vbn [via=" + a + "]").length ? (c = nc(Oc("#vbn [via=" + a + "]").get(0), !0), f.prepend(c), Ra(Oc("#vbn [via=" + a + "]").attr("nav-id")), Za(Xa(a))) : Oc("section.vev#" + a).length ? (c = Oc("#" + a).clone(), Oc(c).find("script.options").remove(), f.prepend(c.html()), g = Wa(), g.addClass("vir").attr("nav-id", a), g.find(".modal-container, .notification-container").length && (d = (new Date).getTime(), g.find(".modal-container, .notification-container").attr("vqj", a + "-" + d).addClass("vir")), vb(g), Ra(a), Za(Xa(a))) : Za(dd.ui.sidebar.navOptionsListText), h && (Hb(), gd())
    }

    function Qa() {
        Wa().remove(), Ta().remove(), Wb(), Xb(), Hb(), gd()
    }

    function Ra(a) {
        var b = Va(),
            c = Sa();
        arguments.length || (a = Wa().attr("nav-id")), Oc(".vmm").closest(".vkq").remove();
        try {
            var d = JSON.parse(Oc("#" + a + " script.options").html());
            Oc("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb");
            if (Oc.isArray(d.options)) Oc(d.options).each(function(a, d) {
                var e = "undefined" != typeof d.target ? d.target : "";
                ib(d, ".vmm", c.selector + " nav " + e + ", " + b.selector + " nav " + e, !0)
            });
            else {
                var e = "undefined" != typeof d.options.target ? d.options.target : "";
                ib(d.options, ".vmm", c.selector + " nav  " + e + ", " + b.selector + " nav  " + e, !0)
            }
        } catch (f) {
            return
        }
    }

    function Sa() {
        return Oc(Kc.selector)
    }

    function Ta() {
        return Sa().children().not("a").first()
    }

    function Ua() {
        return Ta().attr("vic")
    }

    function Va() {
        return Oc(Jc.selector)
    }

    function Wa() {
        return Va().children().not("a").first()
    }

    function Xa(a) {
        return Oc('[via="' + a + '"]').attr("vio") || Oc("#vgg .vev#" + a).attr("vbr")
    }

    function Ya(a) {
        var b;
        return _.isUndefined(a) ? "" : (b = nc(Oc("#vbn [via=" + a + "]").get(0), !0), _.isUndefined(b) ? "" : b)
    }

    function Za(a) {
        Oc(".vfj").siblings(".vly").text(a)
    }

    function $a() {
        try {
            return JSON.parse(Oc("#vnd").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function _a() {
        try {
            var a = JSON.parse(Oc("#vkk").html());
            Oc("<div>").addClass("vkq").append('<div class="vlq"><span>Page Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb");
            Oc.isArray(a.options) ? Oc(a.options).each(function() {
                ib(this, ".vkx", "body, #vkk", !0)
            }) : ib(a.options, ".vkx", "body, #vkk", !0)
        } catch (b) {
            return
        }
    }

    function ab() {
        try {
            return JSON.parse(Oc("#voy").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function bb(a, b) {
        var c, d = Oc("." + a),
            e = "";
        zc.options.forEach(function(a) {
            c = a.disposableSelector || a.selector, "undefined" != typeof a.closest && (d = Oc("." + Oc(d).closest(a.closest).attr("vic"))), "undefined" != typeof a.menu && (e = "." + a.menu), Oc(d).is(c) && (ib(a, ".vnc" + e, d.selector, !0), "undefined" != typeof b && b === !0 && Oc(".vnc" + e).removeClass("vih"))
        })
    }

    function cb(a) {
        var b = Oc("." + a);
        Oc("ul.vnc li").remove(), Oc(Ac.options).each(function() {
            b.is(this.selector) && eb(b, this)
        })
    }

    function db(a) {
        a = "undefined" != typeof a ? a : "", Oc("#vkk").removeAttr("class").addClass(a), Oc("body").addClass(a), Oc(".vkx .vky").each(function() {
            Oc(this).find(".vks").removeClass("vkr"), -1 !== a.indexOf(Oc(this).attr("optionalclass")) ? Oc(this).find(".choice-button-on").addClass("vkr") : (Oc(this).find(".choice-button-off").addClass("vkr"), Oc("body").removeClass(Oc(this).attr("optionalclass")))
        }), Oc(".vkx .vkz").each(function() {
            Oc(this).find(".vkt").removeClass("vku"), -1 !== a.indexOf(Oc(this).attr("optionalclass")) ? Oc(this).find(".vkt").addClass("vku") : Oc("body").removeClass(Oc(this).attr("optionalclass"))
        }), Oc(".vkx .vkv").removeClass("vkw"), Oc('.vkx .vkv[optionalclass=" "]').addClass("vkw"), Oc(".vkx .vkv").each(function() {
            -1 !== a.indexOf(Oc(this).attr("optionalclass")) && " " !== Oc(this).attr("optionalclass") ? (Oc(this).addClass("vkw"), Oc('.vkx .vkv[optionalclass=" "]').removeClass("vkw")) : Oc("body").removeClass(Oc(this).attr("optionalclass"))
        })
    }

    function eb(a, b, c) {
        var d, e, f, g, h = b || a.data("vip");
        d = Oc(a).find(h.selector + "[" + h.attribute + "]").length ? Oc("#veu " + Oc(a).attr("vic")).find(h.selector + "[" + h.attribute + "]") : Oc("#veu ." + Oc(a).attr("vic")), f = "undefined" != typeof h.modalInputIcon ? h.modalInputIcon : "pencil", g = "undefined" != typeof h.refresh ? h.refresh : "false", e = d.attr(h.attribute), Oc(".vbk").text(h.modalTitle), Oc(".vbh").text(h.modalIntro), Oc(".vbf").text(h.modalInputLabel), Oc(".vkh").attr("data-glyph", f), Oc(".vbg").val(e), Oc(".vbe").val(Oc(d).attr("vic")).attr("vnn", g), Oc(".vbc").val(h.attribute), Oc(".vbk").text(h.modalTitle), "string" != typeof c && c === !0 ? fb() : Oc(a).is("section, header") ? Oc(".vgk").text(h.buttonText).attr("data-glyph", f).removeClass("vih") : Oc(".vdh").text(h.buttonText).attr("data-glyph", f).removeClass("vih")
    }

    function fb() {
        Oc(".vbi").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function gb() {
        var a = Oc("#veu ." + Oc(".vbe").val()),
            b = Oc(".vbg").val(),
            c = Oc(".vbc").val();
        Oc(a).closest("[data-vip]").data("vip"); - 1 !== b.indexOf("<") && (!Oc(b).is("iframe") || "src" !== c && "no-src" !== c && "data-src" !== c || (b = Oc(b).attr("src"), "//" === b.substring(0, 2) && (b = "https:" + b), -1 !== b.indexOf("youtube.com") && (b += "?showinfo=0&rel=0&modestbranding=1", a.hasClass("youtube-bg-iframe") && (b += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3")), -1 !== b.indexOf("vimeo.com") && (b += "?badge=0&title=0&byline=0"))), Oc(a).is("iframe") && "no-src" === c ? (Oc(a).attr(c, b), Oc(".viu ." + Oc(".vbe").val()).attr("src", b)) : (Oc(a).attr(c, b), Oc(".viu ." + Oc(".vbe").val()).attr(c, b)), Hb(), "true" === Oc(".vbe").attr("vnn") && gd(a.attr("vic")), Oc(".vbe").removeAttr("refresh")
    }

    function hb(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = Oc('<div data-glyph="' + e + '" class="oi vnv" title="' + a.buttonText + '"></div>'), d.addClass("vno"), d.data("vnq", a), d.attr("vnr", c), b === !1 ? d : void Oc(b).append(d)
    }

    function ib(a, b, c, d) {
        var e, f = "undefined" != typeof d ? d : !1,
            g = "on" === a.initial ? "on" : "off",
            h = Oc("<li>"),
            i = Oc("<div>"),
            j = "";
        return c = "undefined" != typeof c ? c : !1, e = "undefined" != typeof a.refresh && "true" === a.refresh ? "refresh" : "", h.addClass("vmk"), a.title && h.append("<span>" + a.title + "</span>"), "choice" === a.type && ("on" === g && f === !0 && Oc(c).addClass(a["class"]), i.addClass("vky").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<div class="vks choice-button-on ' + e + " " + ("on" === g && f === !0 ? "vkr" : "") + (Oc(c).hasClass(a["class"]) && f !== !0 ? "vkr" : "") + '">' + a.onText + "</div>"), i.append('<div class="vks choice-button-off ' + e + " " + ("off" === g && f === !0 ? "vkr" : "") + (Oc(c).hasClass(a["class"]) || f === !0 ? "" : "vkr") + '">' + a.offText + "</div>"), h.append(i)), "toggle" === a.type && ("on" === g && f === !0 && Oc(c).addClass(a["class"]), j = "on" === g && f === !0 ? " vku" : "", j = "auto" === a.initial && Oc(c).hasClass(a["class"]) ? " vku" : j, i.addClass("vkz").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<span class="oi" data-glyph="' + a.icon + '"></span><span>' + a.text + "</span>"), i.append('<div class="vkt' + j + " " + e + '"><div class="vmi"></div></div>'), h.append(i)), "multi" === a.type && (i.addClass("vmj").attr("classtarget", c), Oc.each(a.classes, function(b, c) {
            i.append('<div class="vkv ' + e + " " + (a.initial === b + 1 && f === !0 ? "vkw" : "") + '" optionalclass="' + ("" !== c["class"] ? c["class"] : " ") + '">' + c.text + "</div>")
        }), h.append(i)), "undefined" != typeof a.submenu && (Oc(b).find('li.vnk[submenu-name="' + a.submenu + '"]').length || Oc(b).append('<li class="vnk" submenu-name="' + a.submenu + '"><span class="vnl">' + a.submenu + "</span><ul></ul></li>"), b = Oc(b).find('li.vnk[submenu-name="' + a.submenu + '"] ul')), b === !1 ? h : void Oc(b).append(h)
    }

    function jb(a) {
        "" !== a && (rc() ? (mr_variant.wp.newPage(a), mr_variant.wp.newPageName = a) : Ib(!0), Oc.modal.close())
    }

    function kb(a, b, c) {
        var d;
        rc() ? (d = Oc('<div class="ves" data-post-id="' + b + '"><span class="vfx">' + a + "</span></div>"), d.data(c), Oc(".vfw").append(d)) : (Oc(".vfw").prepend('<div class="ves" vjh="' + a + '" state-id="' + b + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + a + '</span><span class="vbz oi" data-glyph="x"></span><span class="vpy oi" data-glyph="pencil"></span></div>'), Zc && Oc(".vdj").remove()), Oc(".vfw").removeClass("empty-vfw")
    }

    function lb(a) {
        "undefined" != typeof a && (Oc('.ves[state-id="' + a + '"]').remove(), setTimeout(function() {
            Oc(".vfw").find(".ves").length ? Oc(".vfw").removeClass("empty-vfw") : Oc(".vfw").addClass("empty-vfw")
        }, 50))
    }

    function mb(a) {
        var b = nb("Page");
        a && Kb(), Oc(".vhe").addClass("vih"), Ib(b)
    }

    function nb(a) {
        var b, c = [];
        return Oc("#vhl li").each(function() {
            c.push(Oc(this).attr("vjh"))
        }), b = a.split(" ").length > 1 ? parseInt(a.split(" ").pop()) : 0, _.contains(c, a) ? nb(a.split(" ")[0] + " " + (b + 1)) : a
    }

    function ob(a) {
        return a === Oc.localStorage(Gc + ".vhh")
    }

    function pb() {
        dc(), Kb(), Oc(".vhe").removeClass("vih"), Oc(".vet").addClass("vih"), Oc.localStorage(Gc + ".vhh", ""), Oc.localStorage(Gc + ".vhg", "")
    }

    function qb() {
        Oc(".vqm").removeClass("vhr"), Oc(".viu, .viu .vrh").removeClass("vrh")
    }

    function rb() {
        try {
            return JSON.parse(Oc("#variant-section-vgu").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function sb(a) {
        var b, c = Oc(".viu ." + a),
            d = (Oc("#veu ." + a), c.attr("vic")),
            e = Oc(".vqm"),
            f = c.position(),
            g = c.offset(),
            h = Sa(),
            i = Math.max(h.children().not(Wc).first().outerHeight(!0), h.find(".nav-bar:nth-of-type(1)").outerHeight(!0), Oc(".viu .nav-container:nth-of-type(1)").outerHeight(!0)),
            j = h.children().not(Wc).first().css("position"),
            k = Oc(".viu nav .nav-bar").css("position"),
            l = Oc(".viu"),
            m = c.width(),
            n = (Oc(".vqm").width(), Oc(window).width(), Oc(window).height(), Math.round(g.left + m));
        Oc.find('.section-vgw[vnt="' + d + '"]').length || (Oc(".viu .section-vgw").remove(), b = Oc("<div />").addClass("section-vgw").append('<span class="vnm oi" data-glyph="cog"></span>'), b.attr("vnt", d), c.is(":first-child") || "absolute" !== j && "fixed" !== j && "fixed" !== k && "absolute" !== k || (i = 0), b.css("top", Math.round(f.top + 10 + i)), b.appendTo(l), e.attr("vnt", d), b.css("left", n - b.width()))
    }

    function tb(a) {
        var b, c, d = Oc(".viu ." + a),
            e = Oc("#veu ." + a),
            f = d.attr("vbq"),
            g = Oc(".vhv .vqm"),
            h = g.find(".vqp"),
            i = g.find(".vqn span"),
            j = {
                title: "Visible On",
                type: "multi",
                selector: "section, header, footer",
                explainer: "Select the device sizes which this section should appear on.",
                required: !0,
                options: [{
                    html: '<span class="oi" data-glyph="phone"></span>',
                    onClass: "",
                    onTitle: "Shown on mobile",
                    offClass: "hidden-xs",
                    offTitle: "Hidden on mobile"
                }, {
                    html: '<span class="oi" data-glyph="tablet"></span>',
                    onClass: "",
                    onTitle: "Shown on tablet",
                    offClass: "hidden-sm",
                    offTitle: "Hidden on tablet"
                }, {
                    html: '<span class="oi" data-glyph="monitor"></span>',
                    onClass: "",
                    onTitle: "Shown on desktop",
                    offClass: "hidden-md hidden-lg",
                    offTitle: "Hidden on desktop"
                }],
                targetID: a,
                targetSelector: "." + a,
                target: Oc(".viu ." + a + ", #veu ." + a),
                masterTarget: Oc("#veu ." + a)
            };
        h.empty(), d.is("section") && (b = Oc('.vjc .vem .vaa[vbq="' + f + '"] div.vab span').text()), d.is("footer") && (b = d.is("[vhy]") ? Oc('.vdm li.vdl[vid="' + d.attr("vhy") + '"] span').text() : Oc('.vdm li.vdl[vid="' + d.attr("footer-id") + '"] ').text()), i.text(b), h.append(Rc.choice.render(j)), c = d.find("img[vic]").not(".voh img, .slider li img"), c.length && h.append(Rc.images.render(c)), Oc(Bc.options).each(function(a, b) {
            var c, f, i, j, k, l;
            if (e.is(b.selector)) c = d;
            else {
                if (!e.find(b.selector).length) return;
                c = e.find(b.selector)
            }
            i = c.attr("vic"), j = "." + i, k = Oc(".viu " + j + ", #veu " + j), l = Oc("#veu " + j), "undefined" != typeof b.group ? (f = Oc("<div>").addClass("vqr"), f.append(Rc.controlTitle.render(b.title)), Oc(b.group).each(function(a, b) {
                b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, f.append(Rc[b.type].render(b, c, g))
            }), h.append(f)) : (b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, h.append(Rc[b.type].render(b, c, g)))
        }), g.find('input[type="text"]').each(function() {
            var a = g.data();
            a.focussedElementAttribute === Oc(this).data("attribute") && a.focussedElementValue === Oc(this).val() && (Oc(this).focus(), Oc(this).selectRange(a.cursorPosition))
        })
    }

    function ub(a) {
        var b = a.find(".vab span").text(),
            c = a.attr("vbq"),
            d = Oc('.viu [vbq="' + c + '"]'),
            e = d.attr("vic"),
            f = Oc('.vqm.vhr[vnt="' + e + '"] .vqn span');
        f.length && f.text(b)
    }

    function vb(a) {
        var b = (new Date).getTime(),
            c = Oc(a),
            d = "vjs-" + b;
        return c.is("section, nav, header, footer, .divider-background") && (c.is("[vic]") || (c.attr("vic", d), c.addClass(d))), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, form, label, address").not(".vog, [vic], .wysiwyg *").each(function(a) {
            var b = d + "-" + a,
                c = Oc(this);
            c.attr("vic", b), c.addClass(b), c.is("nav, nav li, .slides > li, .slides .owl-item > li, .slides .flickity-slider > li, ul, div, i, img, section, header, figure, .veo, video, iframe, input, textarea, form, tbody, tr, td, .vjx, .variant-shortcode, .variant-shortcode *") || (c.addClass("vir"), c.attr("contenteditable", "true")), c.is("span, a, strong, em, i") ? 0 === c.parent().text().replace(Oc(this).text(), "").replace(/\s/g, "").length && c.parent().removeAttr("contenteditable") : c.parent().removeAttr("contenteditable")
        }), b
    }

    function wb() {
        var a = Oc(".vgm"),
            b = "",
            c = Oc(".vgi"),
            d = "";
        thumbnailPath = "img/sections/", rc() && (thumbnailPath = wp_data.config.section_img_url), Oc("#vgg .vim").each(function(a) {
            var c, e = Oc(this),
                f = e.attr("vbp").split(","),
                g = "";
            f.forEach(function(a) {
                -1 === d.indexOf(a) && (d += '<div class="vgh" vbp="' + a + '">' + a + "</div>")
            }), c = e.attr("icons"), "undefined" != typeof c && c !== !1 && (c = e.attr("icons").split(","), c.forEach(function(a) {
                g += '<img class="vgj" src="img/' + a + '.png" />'
            })), b += '<div class="vgl" vbp="' + Oc(this).attr("vbp") + '" vgv="' + Oc(this).attr("id") + '"><img delay-src="' + thumbnailPath + Oc(this).attr("id") + '.jpg"/>' + g + '<span class="vjl">' + Oc(this).attr("vbr") + "</span></div>"
        }), a.html(b), c.append(d)
    }

    function xb(a) {
        var b, c, d, e, f = Oc("#" + a).find("section, header, footer").clone(),
            g = vb(Oc(f)),
            h = a + "-" + g;
        d = Oc(f).attr("vbq", h).addClass(h), Lc.selector != Hc.selector ? d.appendTo(Hc) : (b = Oc(Hc).find("footer"), b.length ? d.insertBefore(b) : d.appendTo(Hc)), Oc(".vem").append('<div class="vaa data-vfs="' + a + '" vbq="' + a + "-" + g + '"><div class="vab"><span class="vir" contenteditable="true">' + Oc("#" + a).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + a + "-" + g + '"></i></div>'),
            Bb(), Hb(), gd(a + "-" + g), Wb(), c = Oc(".vem"), e = c[0].scrollHeight, c.animate({
                scrollTop: e
            }, 480)
    }

    function yb() {
        var a = Oc(Ic.selector),
            b = Oc(Hc.selector),
            c = a.find("footer"),
            d = b.find("footer");
        Oc(".vem .vaa").each(function() {
            var e = Oc(this).attr("vbq"),
                f = b.find("." + e),
                g = f.clone(),
                h = b.find("[vik=" + e + "]"),
                i = h.clone();
            h.remove(), d.length ? i.insertBefore(d) : i.appendTo(b), f.remove(), d.length ? g.insertBefore(d) : g.appendTo(b), f = a.find("." + e), g = f.clone(), h = a.find("[vik=" + e + "]"), i = h.clone(), h.remove(), c.length ? i.insertBefore(c) : i.appendTo(a), f.remove(), c.length ? g.insertBefore(c) : g.appendTo(a)
        }), Hb(), gd()
    }

    function zb() {
        Oc(".global-vfr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ab() {
        Oc(".vjq").removeClass("vgq"), Oc(".vad").toggleClass("vgq")
    }

    function Bb() {
        Oc(".vem").sortable({
            items: "> .vaa",
            revert: !1,
            cursor: "move",
            opacity: .7,
            delay: 150,
            cancel: "[contenteditable]",
            update: function() {
                yb()
            }
        })
    }

    function Cb() {
        Oc(".vkm").addClass("vjz"), Oc(".vlh").trigger("click"), Oc(".vlv").hasClass("vmf") || Oc(".vac").trigger("click")
    }

    function Db(a) {
        Oc(".ves.vqb").removeClass("vqb"), rc() ? Oc('.vfw [data-post-id="' + a + '"]').addClass("vqb") : Oc('.ves[state-id="' + a + '"]').addClass("vqb")
    }

    function Eb(a) {
        var b, c, d, e, f = Oc(".viu ul.slides." + a),
            g = Oc(f).parents(".slider"),
            h = f.parents(".slider[data-items]").length ? f.parents(".slider[data-items]").attr("data-items") : 0,
            i = h > 1 ? f.find(".owl-item.active").length : 0,
            j = Sa(),
            k = j.children().first().css("position"),
            l = j.children().first().find(".nav-bar").css("position"),
            m = f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").length,
            n = g.length && i > 1 && m > i ? !0 : !1,
            o = 0;
        "absolute" !== k && "fixed" !== k && "absolute" !== l && "fixed" !== l || !f.closest("section").is(".viu section:nth-of-type(1), .viu header:nth-of-type(1)") || (o = Math.max(j.children().first().outerHeight(!0), Oc(".viu .nav-container").outerHeight(!0), j.children().first().find(".nav-bar").outerHeight(!0))), f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").each(function(a) {
            var b, c, d = Oc(this),
                e = "",
                g = "",
                h = "",
                i = "",
                j = "",
                k = "",
                l = "";
            b = Oc('<div class="vnw"></div>'), b.css("top", o + 10), f.find("img").length || b.addClass("vny"), f.find("li > p, li > span").length && b.addClass("vny"), d.find(".vnv").length || (m > 1 && (e = ra("arrow-thick-left", "Show Previous Slide"), Oc(e).unbind("click").bind("click", function(a) {
                try {
                    f.parent().flexslider("prev")
                } catch (b) {}
                try {
                    f.closest(".slider").flexslider("prev")
                } catch (b) {}
                try {
                    f.trigger("prev.owl.carousel")
                } catch (b) {}
                try {
                    f.flickity("previous")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), g = ra("arrow-thick-right", "Show next Slide"), Oc(g).unbind("click").bind("click", function(a) {
                try {
                    f.parent().flexslider("next")
                } catch (b) {}
                try {
                    f.closest(".slider").flexslider("next")
                } catch (b) {}
                try {
                    f.trigger("next.owl.carousel")
                } catch (b) {}
                try {
                    f.flickity("next")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), h = ra("minus", "Delete Slide"), Oc(h).unbind("click").bind("click", function(a) {
                return F(d.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            })), c = ra("plus", "Clone Slide"), Oc(c).unbind("click").bind("click", function(a) {
                return E(d.attr("vic")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), d.find(" > div.background-image-holder img").length && (k = Ca(d.find(" > div.background-image-holder img").attr("vic"), !1)), 1 === d.find("img").length && (k = Ca(d.find("img").attr("vic"), !1), d.find("img").closest("a[data-lightbox]").length && (j = Ca(d.find("img").closest("a[data-lightbox]").attr("vic"), !1, null, null, "link-intact"))), 1 === d.find("video").length && (l = fc(d.find("video").attr("vic"), !1)), 1 === d.find("i").length && (i = sa(d.find("i").attr("vic"), !1)), b.append(e).append(h).append(k).append(j).append(l).append(i).append(c).append(g), d.prepend(b))
        }), n && (c = Oc('<div class="vob vnw"></div>'), e = ra("arrow-thick-left", "Show Previous Slide"), Oc(e).unbind("click").bind("click", function(a) {
            try {
                f.trigger("prev.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(c), b = Oc('<div class="voc vnw"></div>'), d = ra("arrow-thick-right", "Show next Slide"), Oc(d).unbind("click").bind("click", function(a) {
            try {
                f.trigger("next.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(b), g.prepend(b).prepend(c))
    }

    function Fb() {
        rc() ? Oc(wp_data.all_pages).each(function(a, b) {
            kb(b.title, b.ID, b)
        }) : (Oc("#vhl").html(Oc.localStorage(Gc + ".vhk")), Oc("#vhl li").each(function() {
            kb(Oc(this).attr("vjh"), Oc(this).attr("viy"))
        }))
    }

    function Gb(a) {
        Oc(".vge").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                "undefined" != typeof a ? "vpz" === a ? Oc(".vgf").attr("vpz", "true") : "vhd" === a && Oc(".vgf").attr("vhd", "true") : Oc(".vgf").val(""), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb(), Oc(".vgf").val(""), Oc(".vgf").removeAttr("viy").removeAttr("vqa")
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Hb() {
        $c || mb();
        var a = Vb(),
            b = Oc(".vei").val(),
            c = Oc(".vpp").val(),
            d = Oc(".vpq").val();
        Oc(".vhe").addClass("vih"), Oa(), Q(), Oc.localStorage(Gc + ".vhh") ? (Oc.localStorage(Gc + ".state.veu." + a, Oc("#veu").html()), Oc.localStorage(Gc + ".state.vem." + a, Oc(".vem").html()), Oc.localStorage(Gc + ".vhj." + a, b), Oc.localStorage(Gc + ".state.page-meta-description-mrv." + a, c), Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + a, d), Oc.localStorage(Gc + ".vhf." + a, Oc(".vay").attr("vhx")), Oc.localStorage(Gc + "vmp." + a, Oc(".vms").attr("vmr")), Oc.localStorage(Gc + ".vkp." + a, "undefined" != typeof Oc("#vkk").attr("class") ? Oc("#vkk").attr("class") : " ")) : (Oc.localStorage(Gc + ".state.veu", Oc("#veu").html()), Oc.localStorage(Gc + ".state.vem", Oc(".vem").html()), Oc.localStorage(Gc + ".vhj", b), Oc.localStorage(Gc + ".state.page-meta-description-mrv", c), Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv", d), Oc.localStorage(Gc + ".vhf", Oc(".vay").attr("vhx")), Oc.localStorage(Gc + "vmp", Oc(".vms").attr("vmr")), Oc.localStorage(Gc + ".vkp", "undefined" != typeof Oc("#vkk").attr("class") ? Oc("#vkk").attr("class") : " ")), rc() && j()
    }

    function Ib(a) {
        var b, c, d = Oc(".vgf"),
            e = "string" == typeof a ? a : d.val();
        if ("true" === d.attr("vhd") && (Kb(), setTimeout(function() {
                var a = Oc(".vge .vjl");
                a.text(a.attr("vpx")).removeAttr("vpx");
                var b = Oc(".vge .vew p:first");
                b.text(b.attr("vpx")).removeAttr("vpx")
            }, 500), Cb()), "true" === d.attr("vpz")) return b = d.attr("viy"), c = d.attr("vqa"), setTimeout(function() {
            var a = Oc(".vge .vjl");
            a.text(a.attr("vpx")).removeAttr("vpx");
            var b = Oc(".vge .vew p:first");
            b.text(b.attr("vpx")).removeAttr("vpx")
        }, 500), Oc('.ves[state-id="' + b + '"]').attr("vjh", e).find("span.vfx").text(e), d.removeAttr("viy"), $b("Renamed page: " + c + " to <strong>" + e + "</strong>", "check", "success"), Oc('#vhl [viy="' + b + '"]').attr("vjh", e), Vb() === b && (Oc.localStorage(Gc + ".vhg", e), Oc(".vcr").text(e)), void Oc.localStorage(Gc + ".vhk", Oc("#vhl").html());
        var f = (new Date).getTime(),
            g = "undefined" != typeof Oc(".vei").val() ? Oc(".vei").val() : Yc,
            h = "" !== Oc(".vpp").val() ? Oc(".vpp").val() : "",
            i = "" !== Oc(".vpq").val() ? Oc(".vpq").val() : "";
        b = rc() ? wp_data.current_page.post_id : "viy-" + f, Oc("#vhl").append('<li class="viy" viy="' + b + '" vjh="' + e + '" page-title="' + Oc(".vei").val() + '"></li>'), kb(e, b), Oc('#vhl [viy="' + Vb() + '"]').attr("page-title", Oc(".vei").val()), Oc.localStorage(Gc + ".vhk", Oc("#vhl").html()), Oc.localStorage(Gc + ".state.veu." + b, Oc("#veu").html()), Oc.localStorage(Gc + ".state.vem." + b, Oc(".vem").html()), Oc.localStorage(Gc + ".vhj." + b, g), Oc.localStorage(Gc + ".state.page-meta-description-mrv." + b, h), Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + b, i), Oc.localStorage(Gc + ".vhf." + b, Oc(".vay").attr("vhx")), Oc.localStorage(Gc + "vmp." + b, Oc(".vms").attr("vmr")), Oc.localStorage(Gc + ".vkp." + b, Oc("#vkk").attr("class")), Oc.localStorage(Gc + ".vhh", b), Oc.localStorage(Gc + ".vhg", e), Oc(".vcr").text(e).removeClass("vih"), Db(rc() ? wp_data.current_page.post_id : b), cc(), $b("Created page: <strong>" + e + "</strong>", "check", "success")
    }

    function Jb(b) {
        Oc(".vei").removeClass("vlx"), Oc(".vhe").addClass("vih");
        var c, d, e, f, g, h, i, j, k, l, m = _.isUndefined(b) ? Vb() : b,
            n = Ob(m);
        g = ".state.veu." + m, f = ".state.vem." + m, h = ".vhf." + m, i = "vmp." + m, j = ".vkp." + m, k = ".state.page-meta-description-mrv." + m, l = ".state.page-google-analytics-id-mrv." + m, c = Nb(m), "" === c && (Oc(".vei").val("Edit Title Tag"), document.title = "Variant HTML Builder by Medium Rare"), Oc.localStorage(Gc + g) && (Oc(".vcr").text(n).removeClass("vih"), Oc(".vei").val(c), document.title = c || Yc, Oc(".vpp").val(Oc.localStorage(Gc + k)), Oc(".vpq").val(Oc.localStorage(Gc + l)), Oc("#veu").html(Oc.localStorage(Gc + g)), Oc(".vem").html(Oc.localStorage(Gc + f) || ""), d = _.isUndefined(Wa().attr("via")) ? Wa().attr("nav-id") : Wa().attr("via"), Pa(d), e = _.isUndefined($().attr("vhy")) ? $().attr("footer-id") : $().attr("vhy"), V(e), db(Oc.localStorage(Gc + j)), D(Oc.localStorage(Gc + h), !1), P(Oc.localStorage(Gc + i), !1), Bb(), y(), Ra(), Db(rc() ? wp_data.post_id : m), Oc.localStorage(Gc + ".vhh", m), Oc.localStorage(Gc + ".vhg", n), rc() && (a(), s()), cc(), gd()), Oc(".vem").find(".vaa").length ? Oc(".vem").removeClass("empty-vem") : Oc(".vem").addClass("empty-vem")
    }

    function Kb() {
        Oc(".vhe").addClass("vih"), Oa(), Q(), Oc("#veu").html(Dc), Oc(".viu").html(Dc), y(), Oc(".vem").html("").addClass("empty-vem"), Oc(".vei").val(""), Oc(".vpq").val(""), Oc(".vpp").val(""), Oc(".vfj").siblings(".vly").text("Navigation Type"), Oc(".vdm").siblings(".vly").text("Footer Type"), Oc(".vgf").removeAttr("vhd")
    }

    function Lb(a) {
        var b;
        ob(a) && pb(), Oc("#vhl [viy=" + a + "]").remove(), Oc.localStorage(Gc + ".vhk", Oc("#vhl").html()), b = Oc.localStorage.io(Gc + ".state.veu." + a), b.remove(), b = Oc.localStorage.io(Gc + ".state.vem." + a), b.remove(), lb(a)
    }

    function Mb(a) {
        return rc() ? Oc("#veu").html() : Oc.localStorage(Gc + ".state.veu." + a)
    }

    function Nb(a) {
        return Oc.localStorage(Gc + ".vhj." + a) || ""
    }

    function Ob(a) {
        return Oc('#vhl li.viy[viy="' + a + '"]').attr("vjh")
    }

    function Pb(a) {
        var b = Oc.localStorage(Gc + "vmp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function Qb(a) {
        var b = Oc.localStorage(Gc + ".vkp." + a);
        return _.isUndefined(b) ? "" : b
    }

    function Rb(a) {
        var b = Oc.localStorage(Gc + ".vhf." + a);
        return _.isUndefined(b) ? Ub() : b
    }

    function Sb(a) {
        return Oc.localStorage(Gc + ".state.page-google-analytics-id-mrv." + a) || ""
    }

    function Tb(a) {
        return Oc.localStorage(Gc + ".state.page-meta-description-mrv." + a) || ""
    }

    function Ub() {
        return Oc("[viq]").attr("viq")
    }

    function Vb() {
        return rc() ? wp_data.current_page.post_id : Oc.localStorage(Gc + ".vhh")
    }

    function Wb() {
        var a;
        Oc(".vhv").css("height", Oc(window).height()), a = Oc(".vlv").height() - Oc(".vlv .vlq").height() - Oc(".vlv .vls").height() - Oc(".vlv .vlw").height() - 2 * Oc(".vlv .vho").height() - Oc(".vac").height() - 64, Oc(".vem").css("max-height", a);
        var b = Oc(window).height() - Oc(".vem").outerHeight(!1) - Oc(".vlv .vls").height() - Oc(".vlz").height() - 9;
        Oc(".vgm").css("height", b);
        var c = Oc(window).height() - Oc(".vlo .vls").height() - Oc(".vlo .vlq").height() - Oc(".vgc").height() - 32;
        Oc(".vfw").css("max-height", c), _b()
    }

    function Xb() {
        void 0 !== window.mr_parallax && (setTimeout(window.mr_parallax.profileParallaxElements, 100), void 0 !== window.mr_parallax.callback && Oc(".viu .parallax").each(function() {
            window.mr_parallax.callback(this)
        }))
    }

    function Yb(a, b) {
        a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", Oc(".vag").text(a), Oc(".vae").html(b), Oc(".vaf").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Zb(a, b, c, d, e) {
        "function" == typeof d && "undefined" != typeof c && (a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", Oc(".vqe").text(a), Oc(".vqf").html(b), Oc(".vqc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vqc .vqd").text(c).on("click", d), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                _.isUndefined(e) || "function" != typeof e || e(), Oc(".vqc .vqd").off("click"), setTimeout(function() {
                    Oc.modal.close(), Wb(), Oc(".vqc .vqd").text("")
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        }))
    }

    function $b(a, b, c, d) {
        var e, f = "undefined" != typeof a && "" !== a ? a : "",
            g = Oc("body div.vrn"),
            h = Oc("<div>").addClass("vrm"),
            i = (new Date).getTime(),
            j = "notification-" + i;
        b = "undefined" != typeof b ? b : !1, d = "undefined" != typeof d ? parseInt(d) : 5e3, c = "undefined" != typeof c ? c : "", Oc("div.vrn").length || (Oc("body").append(Oc('<div class="vrn"></div>')), g = "body div.vrn"), b && (e = Oc('<span class="oi">').attr("data-glyph", b), h.append(e)), h.append("<span>" + f + "</span>"), h.addClass(j).addClass("vhr"), h.addClass(c), Oc(g).append(h), setTimeout(function() {
            Oc(".vrm." + j).fadeOut(700, function() {
                Oc(this).remove()
            })
        }, d)
    }

    function _b() {
        Oc("#simplemodal-container").draggable({
            handle: ".vfa"
        })
    }

    function ac() {
        Oc(".vjy").unbind("click").click(function() {
            return !1
        })
    }

    function bc() {
        Oc(".viu form").unbind("submit").bind("submit", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), Oc('.viu button[type="submit"]').unbind("click").bind("click", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        })
    }

    function cc() {
        Oc(".vgc, .vlt, .vdq, .vah, .vdi").removeClass("vqg"), $c = !0
    }

    function dc() {
        Oc(".vgc, .vlt, .vdq, .vah, .vdi").addClass("vqg"), $c = !1
    }

    function ec() {
        bd.tooltip = {}, bd.tooltip.element = null, Oc(document).on("mouseenter touchstart", "[data-mrv-tooltip]", function() {
            null === bd.tooltip.element && (bd.tooltip.element = Oc('<div class="mrv-tooltip"></div>').appendTo("body"));
            var a = Oc(this),
                b = Math.round(a.offset().top),
                c = Math.round(a.offset().left) + a.outerWidth(!0),
                d = a.attr("data-mrv-tooltip");
            bd.tooltip.trigger = a, bd.tooltip.element.css("top", b).css("left", c).addClass("mrv-active").text(d)
        }), Oc(document).on("mouseleave", "[data-mrv-tooltip]", function() {
            bd.tooltip.close()
        }), Oc(document).on("touchstart", function(a) {
            Oc(a.target).is(bd.tooltip.trigger) || bd.tooltip.close()
        }), bd.tooltip.close = function() {
            bd.tooltip.element.removeClass("mrv-active")
        }, bd.dropdown = {}, bd.dropdown.render = function(a, b) {
            var c = Oc("<div>"),
                d = Oc("<div>"),
                e = Oc("<span>"),
                f = Oc("<ul>");
            return c.addClass("vrv").addClass("vry"), d.addClass("vrw"), f.addClass("vrx").attr("vrf", a.length), Oc(a).each(function(a, d) {
                var g = Oc("<li>"),
                    h = Oc("<span>"),
                    i = "undefined" != typeof d.text ? d.text : "";
                "undefined" != typeof d.colourClass && (f.addClass("vqz"), g.addClass(d.colourClass)), "" !== i && (h.attr("data-mrv-tooltip", i), h.text(i)), c.data("value", b.value), e.text(b.text), c.data("default", b), g.data(d), g.on("click", bd.dropdown.handle), g.append(h), f.append(g)
            }), c.data(a), d.append(e), c.append(d), c.append(f), c
        }, bd.dropdown.active = null, bd.dropdown.handle = function(a) {
            _.isUndefined(a.type) || ("click" === a.type, a = Oc(this));
            var b = a.data();
            bd.dropdown.active && (bd.dropdown.active.find(".vrw span").text(b.text), bd.dropdown.closeActive()), "undefined" != typeof b.callback && qc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && gd(b.targetID)
        }, Oc(document).on("click touchstart", ".vrv", function(a) {
            var b = Oc(this),
                c = Oc(a.target);
            return bd.dropdown.active && bd.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? bd.dropdown.closeActive() : bd.dropdown.open(b), !1
        }), Oc(document).on("click touchstart", function(a) {
            bd.dropdown.closeActive()
        }), bd.dropdown.open = function(a) {
            bd.dropdown.closeActive(), bd.dropdown.active = a, a.addClass("vhr")
        }, bd.dropdown.closeActive = function() {
            null !== bd.dropdown.active && (bd.dropdown.active.removeClass("vhr"), bd.dropdown.active = null)
        }, bd.dropdown.resetToDefault = function(a) {
            var b;
            a = Oc(a), b = a.data("default"), a.data("value", b.value), a.find(".vrw span").text(b.text)
        }
    }

    function fc(a, b) {
        var c, d = Oc(".viu ." + b);
        d.width();
        return c = ra("video", "Edit Video"), Oc(c).unbind("click").bind("click", function(b) {
            return gc(Oc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", Oc("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function gc(a) {
        Oc(".vde").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vdd").val(a), Oc(".vda").val(Oc("." + a + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/")), Oc(".vdg").val(Oc("." + a + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/")), Oc(".vdb").val(Oc("." + a + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/")), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function hc() {
        var a = Oc(".vda").val(),
            b = Oc(".vdg").val(),
            c = Oc(".vdb").val(),
            d = Oc("." + Oc(".vdd").val()),
            e = Oc(".vdd").val();
        a.length && "video/" === a.substring(0, 6) && (a = a.replace("video/", "../video/")), b.length && "video/" === b.substring(0, 6) && (b = b.replace("video/", "../video/")), c.length && "video/" === c.substring(0, 6) && (c = c.replace("video/", "../video/")), d.find('source[type="video/mp4"]').attr("src", a), d.find('source[type="video/webm"]').attr("src", b), d.find('source[type="video/ogg"]').attr("src", c), gd(e), Hb()
    }

    function ic(a) {
        return a.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-")
    }

    function jc(a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }

    function kc(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").first().attr("vic");
        return c === e ? !0 : !1
    }

    function lc(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").last().attr("vic");
        return c === e ? !0 : !1
    }

    function mc(a) {
        var b = a.attr("vic"),
            c = a.parent().children().not(".vib, .vjb"),
            d = c.index(a),
            e = d > 0 ? c.eq(d - 1).attr("vic") : b;
        return e
    }

    function nc(a, b) {
        if (!a || !a.tagName) return "";
        var c, d, e = document.createElement("div");
        return e.appendChild(a.cloneNode(!1)), c = e.innerHTML, b && (d = c.indexOf(">") + 1, c = c.substring(0, d) + a.innerHTML + c.substring(d)), e = null, c
    }

    function oc(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createElement("br");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function pc(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createTextNode(" ");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function qc(a, b, c) {
        var d, e;
        c = [].slice.call(arguments).splice(2), d = a.split("."), e = d.pop();
        for (var f = 0; f < d.length; f++) b = b[d[f]];
        return b[e].apply(b, c)
    }

    function rc() {
        return "undefined" != typeof window.wp_data
    }

    function sc(a) {
        return "undefined" != typeof a.selector ? !0 : !1
    }
    var tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc = window.jQuery,
        Pc = "",
        Qc = [],
        Rc = {},
        Sc = ".vnn, ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li , .masonry .project, .accordion li, .accordion, .masonry__item, .variant-shortcode",
        Tc = ".vnn, .grid-layout, .tabbed-content, .tabs",
        Uc = [{
            name: "Campaign Monitor",
            action: "createsend.com",
            handler: fa
        }, {
            name: "MailChimp",
            action: "list-manage.com",
            handler: ea
        }],
        Vc = ".variant-disable-vjr, .flickity-prev-next-button, div.flickity-viewport, div.flickity-slider, li.slide *:not(a), .variant-shortcode *",
        Wc = '[class*="notification"]',
        Xc = "span.countdown, span.checkmark, span.update-year",
        Yc = "Edit Page Title",
        Zc = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        $c = !1,
        _c = !0,
        ad = {},
        bd = {},
        cd = this,
        dd = {
            ui: {
                sidebar: {
                    navOptionsListText: "Nav Type",
                    footerOptionsListText: "Footer Type"
                }
            }
        };
    Cc = new Date, this.removeIconButtons = !0, rc() && (cd.wp = {}), Oc(".vkg").text(Cc.getFullYear()), ec(), rc() && (window.localStorage.clear(), Oc(".vhe").remove(), Oc(".vpn.vlp").remove(), Oc(".vlj, .vmb.vlp").remove(), Oc(".vpo").removeAttr("title").append('<i class="material-icons">&#xE161;</i>').find("span[data-glyph]").remove(), Oc(".vpo").attr("data-mrv-tooltip", "Save Page"), Oc(".vpo").off("click").on("click", b).on("click", function() {
        q(".viu")
    }).removeClass("vpo").addClass("vrr"), Oc('<li class="vrs">').append('<a class="vrt" data-mrv-tooltip="View page in new tab" target="_blank" href="' + he.decode(wp_data.current_page.url) + '">').find("a").append('<i class="material-icons">&#xE89E;</i>').end().insertAfter(".vrr"), Oc(".vlf > ul").append('<li data-mrv-tooltip="Exit to WordPress" class="vrz"><a data-href="' + he.decode(wp_data.current_page.wp_edit_url) + '"><i class="material-icons">&#xE879;</i></a></li>'), Oc(".vgc").remove(), Oc(".vjc .vlt").remove(), Oc(".vjc .vdq").remove(), Oc(".vjc .vlm").remove(), Oc(".ved").remove(), Oc(".vpt").attr("data-mrv-tooltip", "Create New Page"), Oc(".vrz").on("click", function() {
        _c === !0 ? window.location.href = he.decode(wp_data.current_page.wp_edit_url) : (t(), Zb("You have unsaved changes.", "Proceed without saving?", "Proceed", function() {
            window.location.href = he.decode(wp_data.current_page.wp_edit_url)
        }, function() {
            u()
        }))
    }), ad["interface"] = {}, ad["interface"].sidebarButtons = ".vrr, .vrs, .vrz", cd.variantNotification = $b, dd.ui.sidebar.navOptionsListText = "Navigation:", dd.ui.sidebar.footerOptionsListText = "Footer:", this.wpNewPage = d, this.wpSwitchPage = e, this.setUnsaved = j, this.setSaved = k, this.renderShortCode = m, this.loadShortcodeOptions = p, this.reloadShortcodes = function(a, b) {
        var c, d, e, f;
        c = _.isUndefined(a) ? "" : a, d = Oc("#veu .vru" + c), d.removeClass("vru"), e = Oc(".viu .vru" + c), f = e.outerHeight(!0), e.removeClass("vru"), b && b()
    }, Oc(window).on("load", function() {
        rc() && (cd.wp.saveImage = function(a, b) {
            cd.wp.newSrc = a, cd.wp.newAlt = b, setImageSrc()
        })
    }), cd.wp.saveImage = function(a) {}, Oc(document).on("click", ".vfj .vrx li", function() {
        mr_variant.wp.updateHeader(Oc(this).data("value"))
    }), Oc(document).on("click", ".vdm .vrx li", function() {
        mr_variant.wp.updateFooter(Oc(this).data("value"))
    }), this.renderNavContainer = function(a) {
        var b = (Sa(), Va(), Oc("#veu")),
            c = Oc(".viu");
        b.find(".nav-container").remove(), c.find(".nav-container").remove(), b.find(".main-container").before(a), c.find(".main-container").before(a), y(), hd(), r(".nav-container")
    }, this.renderFooter = function(a) {
        var b = X(),
            c = Y(),
            d = Z(),
            e = $();
        e.remove(), d.append(a), c.remove(), b.append(a), hd(), r(".main-container footer, .main-container, .viu")
    }, this.startLoading = q, this.stopLoading = r), Oc("#blank-veu").html(Oc("#veu").html()), y(), Oc(window).resize(Wb), Wb(), wb(), za(), wc = qa(), xc = ka(), yc = la(), Fb(), Ma(), U(), B(), N(), _a(), zc = ab(), Ac = $a(), Bc = rb(), Oc(window).load(function() {
        z(), Oc("[delay-src]").each(function(a, b) {
            b = Oc(this), b.attr("src", b.attr("delay-src")).removeAttr("delay-src")
        }), wc.forEach(function(a) {
            var b = a.headString;
            b = b.replace("href=&quot;css/", 'href="theme/css/').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), Oc("head").prepend(b)
        }), rc() || x()
    });
    try {
        Oc.isFunction(ga)
    } catch (ed) {
        Oc(".vml").removeClass("vih"), Oc(".vdq, .vah, .vgy").click(function() {
            Yb("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="#" target="_blank">purchase the full version</a>.')
        })
    }
    Oc(".vfw").find(".ves").length && Oc(".vfw").removeClass("empty-vfw"), Oc(document).on("click", ".vhu", function() {
        D(Oc(this).attr("viz"), !0)
    }), Oc(document).bind("mouseup", function(a) {
        Oc(a.target).closest(".vnc, .vnj").length || 1 === a.which && (a.ctrlKey || (Oc(".vhw").hide(), Oc(".vni").removeClass("vhr")))
    }), Oc(document).on("click", ".vav", function() {
        Oc(".vhw").hide()
    }), Oc(document).on("click", ".vkd", function() {
        Oc(".vkd").remove()
    }), Oc(document).on("contextmenu", "[vic]", function(a) {
        if (a.stopPropagation && a.stopPropagation(), a.shiftKey) return !0;
        if (Oc(this).is(Vc)) return !1;
        Oc(".vaw").removeClass("vih"), Oc(".vcg").text("Edit Image"), Oc(".vct").text("Edit Link"), Oc(".vfq").addClass("vih");
        var b, c, d, e, f, g, h, i, j, k, l, m, n = Oc(this).attr("vic"),
            o = Oc("#veu ." + n),
            p = (Oc(o).closest("section"), {
                SECTION: "Section",
                LI: "List Item",
                H1: "Heading",
                H2: "Heading",
                H3: "Heading",
                H4: "Heading",
                H5: "Heading",
                H6: "Heading",
                P: "Paragraph",
                SPAN: "Span",
                UL: "Unordered List",
                DIV: "Div",
                IMG: "Image",
                STRONG: "Strong Text",
                EM: "Emphasised Text",
                I: "Icon",
                A: "Link",
                INPUT: "Input",
                BLOCKQUOTE: "Quote",
                FIGCAPTION: "Caption",
                TD: "Teble Cell",
                TH: "Table Heading",
                FORM: "Form",
                ADDRESS: "Address"
            });
        return Oc(".vau").text(p[o.get(0).tagName]).removeClass("vih"), Oc(o).data("vip") ? eb(o, !1, !1) : Oc(o).closest("[data-vip]").length && eb(Oc(o).closest("[data-vip]"), !1, !1), cb(n), o.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li:not(ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li), ul, div, blockquote, figcaption, address") && (Oc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), Oc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("a") && (Oc(".vct").removeClass("vih"), Oc(".vct").unbind("click").bind("click", function() {
            Fa(o.attr("vic"))
        }), Oc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), Oc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        }), o.parent().is("nav li") && !o.parent().is("nav li:last-child") && (Oc(".vqh").removeClass("vih"), Oc(".vqh").unbind("click").bind("click", function() {
            H(o.parent().attr("vic"))
        })), o.parent().is("nav li") && !o.parent().is("nav li:first-child") && (Oc(".vqi").removeClass("vih"), Oc(".vqi").unbind("click").bind("click", function() {
            G(o.parent().attr("vic"))
        }))), o.closest("a:not(.vog)").length && (Oc(".vct").removeClass("vih"), o.closest("a").hasClass("ven") && (Oc(".vau").text("Lightbox Thumbnail"), Oc(".vct").text("Edit Lightbox Link"), Oc(".vcg").text("Edit Thumbnail Image")), i = o.closest("a").attr("vic"), Oc(".vct").unbind("click").bind("click", function() {
            Fa(i)
        })), o.closest("section, header").find(".video-wrapper").children("video").length && (o.is(".overlay") && (Oc(".vau").text("Video Background"), Oc(".var").addClass("vih"), Oc(".vbw").addClass("vih")), d = o.closest("section, header").find(".video-wrapper").children("video"), Oc(".vdc").removeClass("vih"), Oc(".vdc").unbind("click").bind("click", function() {
            gc(Oc(d).attr("vic"))
        }), o.closest("section, header").find(".background-image-holder").children(".background-image").length && (Oc(".vcg").text("Edit Poster Image"), Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(o.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.closest(".divider-background").find(".background-image").length && (Oc(".vcg").text("Edit Poster Image"), Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(o.closest(".divider-background").find(".background-image").attr("vic"))
        }))), o.closest(".slides li").find(".video-wrapper").children("video").length && (o.is(".overlay") && (Oc(".vau").text("Video Slide Background"), Oc(".var").addClass("vih"), Oc(".vbw").addClass("vih")), d = o.closest(".slides li").find(".video-wrapper").children("video"), Oc(".vcg").text("Edit Poster Image"), Oc(".vdc").removeClass("vih"), Oc(".vdc").unbind("click").bind("click", function() {
            gc(Oc(d).attr("vic"))
        })), o.closest("video").length && (Oc(".vau").text("Video"), Oc(".var").addClass("vih"), Oc(".vbw").addClass("vih"), d = o.closest("video"), Oc(".vdc").removeClass("vih"), Oc(".vdc").unbind("click").bind("click", function() {
            gc(Oc(d).attr("vic"))
        })), o.closest(".slides li").find(".video-wrapper").children("video").length && o.closest(".slides li").find(".background-image-holder").children(".background-image").length && (Oc(".vcg").text("Edit Poster Image"), Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(o.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.is("p , div, span, figure, article, img") && (o.closest('[class*="medium-"]').length && (h = o.closest('[class*="medium-"]'), h.hasClass("medium-12") || (Oc(".veg").removeClass("vih"), Oc(".veg").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        })), h.hasClass("medium-1") || (Oc(".vbt").removeClass("vih"), Oc(".vbt").unbind("click").bind("click", function() {
            K(h.attr("vic"))
        }))), o.parent().is('div [class*="medium-"]') && (o.parent().hasClass("medium-1") || (Oc(".vbt").removeClass("vih"), Oc(".vbt").unbind("click").bind("click", function() {
            K(o.attr("vic"))
        })), o.parent().hasClass("medium-12") || (Oc(".veg").removeClass("vih"), Oc(".veg").unbind("click").bind("click", function() {
            J(o.attr("vic"))
        }))), o.closest('[class*="col-md-"]').length && (h = o.closest('[class*="col-md-"]'), h.hasClass("col-md-12") || (Oc(".veg").removeClass("vih"), Oc(".veg").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        })), h.hasClass("col-md-1") || (Oc(".vbt").removeClass("vih"), Oc(".vbt").unbind("click").bind("click", function() {
            K(h.attr("vic"))
        }))), o.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-sm-"]:not([class*="col-md-"])'), h.hasClass("col-sm-12") || (Oc(".veg").removeClass("vih"), Oc(".veg").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        })), h.hasClass("col-sm-1") || (Oc(".vbt").removeClass("vih"), Oc(".vbt").unbind("click").bind("click", function() {
            K(h.attr("vic"))
        }))), o.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-xs-"]:not([class*="col-md-"])'), h.hasClass("col-xs-12") || (Oc(".veg").removeClass("vih"), Oc(".veg").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        })), h.hasClass("col-xs-1") || (Oc(".vbt").removeClass("vih"), Oc(".vbt").unbind("click").bind("click", function() {
            K(h.attr("vic"))
        })))), o.is(".cover-wrapper, .hover-state") && (b = o.closest("figure").find("img").get(0), c = o.closest("a").first(), Oc(b).is("img") && (Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(Oc(b).attr("vic"))
        })), o.closest("figure").length && (j = o.closest("figure").attr("vic"), j.length && (Oc(".var").unbind("click").bind("click", function() {
            E(j)
        }), Oc(".vbw").unbind("click").bind("click", function() {
            F(j)
        })))), (o.parents("nav, header").length || o.is("nav") || o.is("header")) && (o.is("nav, header") ? (g = o.attr("nav-id"), Oc(".vau").text("Nav"), Oc(".vaw").addClass("vih")) : (g = o.closest("nav").attr("nav-id"), Oc(".vau").text("Nav > " + Oc(".vau").text())), Oc(".vfe").removeClass("vih"), Oc(".vfg[nav-id=" + g + "]").each(function() {
            Oc(".viu nav").hasClass(Oc(this).attr("nav-class")) || Oc(this).removeClass("vih")
        }), Oc(".vhw .vaw").not(".vih").length || Oc(".vfe .vfm").removeClass("vih")), o.closest(".hover-background").length && (b = o.closest("section").find(".hover-background .background-image").get(0), Oc(b).is("img") && (Oc(".vcg").text("Edit Background Image").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(Oc(b).attr("vic"))
        })), Oc(o).closest(".hover-background").find(".foreground-image-holder .background-image").each(function(a) {
            var b = a + 1,
                c = Oc(this);
            e = Oc(".vcg").clone(), e.removeClass("vcg").addClass("vkd edit-foreground-" + b), e.text("Edit Layer " + b + " Image"), Oc(this).attr("src"), e.unbind("click").bind("click", function() {
                xa(c.attr("vic"))
            }), e.insertBefore(Oc(".vcg"))
        })), o.is("i") && (Oc(".vau").text("Icon"), Oc(".vcc").removeClass("vih"), Oc(".vcc").unbind("click").bind("click", function() {
            ta(o.attr("vic"))
        }), Oc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), Oc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("img") && (Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(o.attr("vic"))
        }), Oc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), Oc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("section") && (Oc(".vau").text("Section"), Oc(".var").unbind("click").addClass("vih"), Oc(".vbw").unbind("click").addClass("vih")), o.is("header") && (Oc(".vau").text("Section"), Oc(".var").unbind("click").addClass("vih"), Oc(".vbw").unbind("click").addClass("vih")), o.closest(".veo").length && (f = Oc(o).closest(".veo"), b = Oc(o).closest(".veo").find("img"), Oc(".vcg").removeClass("vih"), Oc(".vcg").unbind("click").bind("click", function() {
            xa(b.attr("vic"))
        }), Oc(".var").removeClass("vih").unbind("click").bind("click", function() {
            E(f.attr("vic"))
        }), Oc(".vbw").removeClass("vih").unbind("click").bind("click", function() {
            F(f.attr("vic"))
        })), o.hasClass("vns") && Oc(".var").unbind("click").addClass("vih"), bb(n, !0), k = Oc("body > .vhw"), k.find(".vaw:not(.vih)").length ? (l = Oc(window).width(), m = Oc(window).height(), a.pageX + k.outerWidth() > l ? k.css("left", l - k.outerWidth()) : k.css("left", a.pageX), a.pageY + k.outerHeight() > m ? k.css("top", m - k.outerHeight()) : k.css("top", a.pageY), Wb(), k.show()) : k.hide(), !1
    }), Oc(document).on("click", ".vdi:not(.vqg)", function() {
        L("all")
    }), Oc(document).on("click", ".vmv", function() {
        P(Oc(this).attr("vmw"), !0)
    }), Oc(".vfy").on("click", function() {
        "" !== Oc(".vfz").val() && (S(), Oc.modal.close())
    }), Oc(".vfz").keyup(function(a) {
        13 === a.keyCode && "" !== Oc(".vfz").val() && (S(), Oc.modal.close())
    }), Oc(document).on("keyup paste input", "footer.vir", function() {
        var a = Oc(this);
        R(a)
    }), Oc(document).on("keyup paste input", "footer.vhz", function() {
        Q()
    }), Oc(document).on("keyup paste input", ".vfz", function() {
        "" !== Oc(this).val() ? Oc(".vfy").show() : Oc(".vfy").hide()
    }), Oc(".vfl").click(function() {
        Oc(this).closest(".vho").removeClass("vhr");
        var a = Oc(this).text();
        Oc(this).closest(".vho").find(".vly").text(a), W()
    }), Oc(document).on("click", ".vbx", function() {
        var a = Oc(this).parent().attr("vid");
        Oc(this).parent().remove(), Oc("." + a).remove(), Q()
    }), Oc(document).on("click", ".vdl", function() {
        V(Oc(this).attr("vid"), !0), Oc(this).closest(".vho").removeClass("vhr"), Oc(".vhe").addClass("vih");
        var a = Oc(this).text();
        Oc(this).closest(".vho").find(".vly").text(a)
    }), Oc(".vpk").on("click", function() {
        da() === !0 && Oc.modal.close()
    });
    var fd = function(a) {
        Oc(".vph").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                Oc(".vpj").val(a), setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        })
    };
    cd.promptEditForm = fd, Oc(document).on("click", ".vdq:not(.vqg)", function() {
        var a = Oc(".vfu"),
            b = ga(Vb());
        return a.html(he.encode(b)), rc() ? void cd.wp.saveHTML(Oc(".vfu").text()) : (Oc(".vdr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                switch (window.location.protocol) {
                    case "http:":
                    case "https:":
                    case "file:":
                        Oc(".vgn").click(function() {
                            Oc(".vfu").select()
                        }), Oc(".vgn").show(), Oc(".code-copy-simple").show(), Oc(".vfu").select()
                }
                setTimeout(function() {
                    Oc(".simplemodal-container").addClass("vko"), Oc(".simplemodal-overlay").addClass("vko")
                }, 100), Wb()
            },
            onClose: function() {
                setTimeout(function() {
                    Oc.modal.close(), Wb()
                }, 300), Oc(".simplemodal-container").removeClass("vko"), Oc(".simplemodal-overlay").removeClass("vko")
            }
        }), void("" !== Oc.localStorage(Gc + ".vbu") && Oc.localStorage(Gc + ".vbu", Oc("#image-edit-chooser").attr("vbv"))))
    }), Oc(".vgy").click(function() {
        var a, b = "",
            c = "";
        b = Oc.localStorage(Gc + ".vhg"), b = "undefined" != typeof Oc.localStorage(Gc + ".vhg") ? Oc.localStorage(Gc + ".vhg") : "page", c = ga(Vb()), a = new Blob([c], {
            type: "text/plain;charset=utf-8"
        }), saveAs(a, ic(b) + ".html")
    }), Oc(document).on("click", ".vah:not(.vqg)", function() {
        var a, b, c = new JSZip,
            d = [],
            e = new Date;
        return Oc("#vhl .viy").length ? (Oc("#vhl .viy").each(function() {
            d.push(Oc(this).attr("viy"))
        }), a = "variant-exported-" + ic(e.toDateString()), d.forEach(function(a, b) {
            var d;
            e = new Date, d = Oc('#vhl [viy="' + a + '"]').attr("vjh"), source = ga(a), d = 1 === Oc('#vhl [vjh="' + d + '"]').length ? ic(d) + ".html" : ic(d) + "-" + e.getTime() + ".html", c.file(d, source)
        }), b = c.generate({
            type: "blob",
            compression: "deflate"
        }), void saveAs(b, "html-pages-" + ic(e.toDateString()) + ".zip")) : void Yb("Export HTML", "There was nothing to export.<br /><br />Save at least one page before exporting.")
    }), Oc(document).on("keyup paste input", ".vcd .vok", function() {
        var a = Oc(".vcd .vok").val();
        "" !== a ? (ua(a), Oc(".vcd .vol").removeClass("vih")) : va()
    }), Oc(document).on("click", ".voj li:not(.vhr)", function() {
        var a = Oc(this);
        Oc(".voj li.vhr, .vrj li.vhr").removeClass("vhr"), a.addClass("vhr"), Oc(".vrj li.vou").eq(a.index()).addClass("vhr"), Oc(".vrj li.vov").eq(a.index()).addClass("vhr")
    }), Oc(document).on("click", ".vcd .vol", function() {
        va()
    }), Oc(document).on("click", ".viu i", function() {
        var a = Oc(this);
        a.hasClass("catch-double-click") ? ta(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), Oc(document).on("click", "div.vam", function() {
        var a = Oc("." + Oc("#vgo").val()),
            b = Oc(this),
            c = b.find("i"),
            d = b.attr("data-icon-type");
        b.attr("data-icon-name");
        a.hasClass("icon-large") && a.addClass("keep-large-icon").removeClass("icon-large"), a.hasClass("icon-lg") && a.addClass("keep-lg-icon").removeClass("icon-lg"), a.hasClass("icon--lg") && a.addClass("keep--lg-icon").removeClass("icon--lg"), a.hasClass("icon-sm") && a.addClass("keep-sm-icon").removeClass("icon-sm"), a.hasClass("icon--sm") && a.addClass("keep--sm-icon").removeClass("icon--sm"), a.hasClass("icon--xs") && a.addClass("keep--xs-icon").removeClass("icon--xs"), wc.forEach(function(b) {
            "" !== b.iconPrefix && a.alterClass(b.iconPrefix + "*", ""), a.removeClass(b.iconClass)
        }), a.html("text" === d ? b.attr("data-icon-name") : ""), a.addClass(c.attr("icon-class")), a.hasClass("keep-large-icon") && a.removeClass("keep-large-icon").addClass("icon-large"), a.hasClass("keep-lg-icon") && a.removeClass("keep-lg-icon").addClass("icon-lg"), a.hasClass("keep--lg-icon") && a.removeClass("keep--lg-icon").addClass("icon--lg"), a.hasClass("keep-sm-icon") && a.removeClass("keep-sm-icon").addClass("icon-sm"), a.hasClass("keep--sm-icon") && a.removeClass("keep--sm-icon").addClass("icon--sm"), a.hasClass("keep--xs-icon") && a.removeClass("keep--xs-icon").addClass("icon--xs"), wa(), Hb()
    }), Oc(".vcn").on("click", function() {
        setImageSrc(), Oc.modal.close()
    }), Oc(".vco").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        Oc(".vco").val(b), Oc(".vcp").attr("src", b)
    }, !1), Oc(".vcp").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        Oc(".vco").val(b), Oc(".vcp").attr("src", b)
    }, !1), Oc(".vco").get(0).addEventListener("dragover", function(a) {
        a.preventDefault(), a.stopPropagation()
    }, !1), Oc(".vco, .vcf").keyup(function(a) {
        13 === a.keyCode && (setImageSrc(), Oc.modal.close())
    }), Oc(".vhp").click(function() {
        Oc(".vdz,.vcl").toggleClass("vhr")
    }), Oc(".vcp").click(function() {
        Oc(".vhp").trigger("click")
    }), Oc(".vch").change(function(a) {
        ya(a)
    }), Oc(".vee").click(function() {
        Oc(".vch").focus().trigger("click")
    }), Oc(document).on("click", ".vcj", function() {
        var a = Oc(this).get(0);
        Oc(".vco").val(Oc(this).attr("src").replace("../img/", "img/")), Oc(".vcp").attr("src", Oc(this).attr("src")), Oc(".veb").text(a.naturalWidth + "x" + a.naturalHeight + " pixels"), Oc(".vdz,.vcl").toggleClass("vhr")
    }), Oc(document).on("click", ".no-image", function() {
        Ba(this)
    }), Oc(document).on("click", ".viu img", function() {
        var a = Oc(this);
        a.hasClass("catch-double-click") ? xa(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), Oc(document).on("mouseenter", ".viu img[vic]:not(.viu ul.slides > li > img, .viu ul.slides .owl-item img, ul.slides .flickity-slider > li img, .voh img, ul.flickr-feed img )", function(a) {
        Oc('[vof="' + Oc(this).attr("vic") + '"]').length || Ca(Oc(this).attr("vic"), Oc(this).attr("vic"))
    }), Oc(document).on("mouseenter", '.viu div[class*="col-"]', function(a) {
        var b = Oc(this);
        b.find(".image-holder, .background-image-holder:not(.voh .background-image-holder, .viu .slides > li > img, .viu .slides .owl-item img, ul.slides .flickity-slider > li img, .viu .slides > li > .background-image-holder, .viu .slides .owl-item > li > .background-image-holder, .viu ul.slides .flickity-slider > li > .background-image-holder, .viu section > .background-image-holder, .viu header > .background-image-holder, .viu footer > .background-image-holder)").filter("[vic]").each(function() {
            var a = Oc(this);
            a.closest('div[class*="col-"]').find("div.hover-state").length && !a.closest('div[class*="col-"]').find("div.hover-state").find(".vnv").length ? Oc('[vof="' + a.find("img").attr("vic") + '"]').length || Ca(a.find("img").attr("vic"), a.closest('div[class*="col-"]').find(".hover-state").attr("vic")) : a.find(".vnv").length || Oc('[vof="' + a.find("img").attr("vic") + '"]').length || Ca(a.find("img").attr("vic"), a.attr("vic"))
        })
    }), setImageSrc = function() {
        var a = rc(),
            b = a ? cd.wp.editImageID : Oc(".vck").val(),
            c = a ? cd.wp.newSrc : Oc(".vco").val(),
            d = a ? cd.wp.newAlt : Oc(".vcf").val(),
            e = Oc("." + b),
            f = b,
            g = a ? wp_data.imgPath : "../img/";
        "img/" === c.substring(0, 4) && (c = c.replace("img/", g)), e.is("img") && (e.attr("src", c), e.attr("alt", d)), e.is("a") && (e.attr("href", c), e.attr("data-title", d)), e.closest("a.ven").length && e.closest("a.ven").attr("data-title", e.attr("alt")).attr("href", c), e.is(".background-image, .background-image-holder img") ? gd(f) : e.parents().find(Tc).length && gd(f), rc() && (cd.wp.editImageID = null, cd.wp.newSrc = null, cd.wp.newAlt = null), Hb()
    }, this.chooserImageError = function(a) {
        Oc(a).parent().addClass("no-image"), Oc(a).parent().find(".vjn").html("Copy <strong>" + Oc(a).attr("vis") + "</strong> to your img folder then click here to refresh."), Oc(a).css("display", "none")
    }, this.defaultImageError = function(a) {
        Oc(a).parent().remove(), Oc(a).remove()
    }, Oc(".ved").click(function() {
        Oc(".vef").focus().trigger("click")
    }), Oc(".vef").change(function(a) {
        "variant" === Oc(this).val().split(".").pop() ? Da(a) : Yb("Please select a .variant file", "Variant cannot import plain HTML files. <br /><br />You can import .variant files that have been exported from Variant here, or by someone else.")
    }), Oc(".veh").change(function(a) {
        Oc(".vcu").val(Oc(this).val())
    }), Oc(".vcu").keyup(function(a) {
        13 === a.keyCode && "" !== Oc(".vcu").val() && (Ga(), Oc.modal.close())
    }), Oc(".vcx").on("click", function() {
        Ga(), Oc.modal.close()
    }), Oc(document).on("click", ".viu a, .viu nav a, .viu header a", function() {
        var a = Oc(this);
        return a.hasClass("catch-double-click") ? Fa(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300)), !1
    }), uc = "p,h1,h2,h3,h4,h5,h6,span.h1,span.h2,span.h3,span.h4,span.h5,span.h6", vc = "div, .typed-text, .countdown, .btn__text, .wysiwyg *", Oc(document).on("mouseenter", ".viu .voh:not(.vib, .vjb)", function(a) {
        var b, c, d, e, f, g, h = "",
            i = Oc(".viu ." + Oc(this).attr("vic")),
            j = i.parent().find(".voh").not(".vjb , .vib").length > 1 ? !0 : !1,
            k = kc(i, ".voh"),
            l = lc(i, ".voh");
        b = Oc('<div class="vnw"></div>'), j && !k && (e = ra("arrow-thick-left", "Sort Previous"), Oc(e).unbind("click").bind("click", function(a) {
            return G(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(e)), j && (c = ra("minus", "Delete"), Oc(c).unbind("click").bind("click", function(a) {
            return F(i.attr("vic"), i.is(".vrp")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(c)), g = i.find("img:not(.vib)"), g.each(function() {
            var a = Oc(this);
            b.append(Ca(a.attr("vic"), !1))
        }), Ac.options.forEach(function(a) {
            i.is(a.selector) && (f = hb(a, !1, i.attr("vic")), b.append(f)), i.find(a.selector).length && (f = hb(a, !1, i.find(a.selector).first().attr("vic")), b.append(f))
        }), d = ra("plus", "Clone"), Oc(d).unbind("click").bind("click", function(a) {
            return E(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(d), j && !l && (h = ra("arrow-thick-right", "Sort Next"), Oc(h).unbind("click").bind("click", function(a) {
            return H(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(h)), i.append(b)
    }), Oc(document).on("keyup paste input", ".vgb", function() {
        "" !== Oc(this).val() ? Oc(".vga").removeClass("vih") : Oc(".vga").addClass("vih")
    }), Oc(".vgb").keyup(function(a) {
        13 === a.keyCode && "" !== Oc(".vgb").val() && (La(), Oc.modal.close())
    }), Oc(".vga").on("click", function() {
        La(), Oc.modal.close()
    }), Oc(document).on("keyup paste input", '.nav-container .vhz [contenteditable="true"], header.vhz [contenteditable], [vqj].modal-container.vhz [contenteditable]', function() {
        Oa()
    }), Oc(document).on("keyup paste input focus mousedown mouseup", ".nav-container .vir[nav-id] [contenteditable], header.vir, [vqj].modal-container.vir", function() {
        var a = Oc(this);
        a.is("[vqj]") && Oc('#veu [vqj="' + a.attr("vqj") + '"]').removeClass("vir").addClass("vhz"), Ka(Oc(this)), Oc(this).removeClass("vir").addClass("vhz")
    }), Oc(".vfo").click(function() {
        Oc(".vmm").closest(".vkq").remove(), Oc(this).closest(".vho").removeClass("vhr");
        var a = Oc(this).text();
        Oc(this).closest(".vho").find(".vly").text(a), Qa()
    }), Oc(document).on("click", ".vby", function() {
        var a = Oc(this).parent().attr("nav-id");
        Oc(this).parent().remove(), Oc("." + a).remove(), Oa()
    }), Oc(document).on("click", ".vfi", function() {
        Pa(Oc(this).attr("nav-id"), !0), Oc(this).closest(".vho").removeClass("vhr");
        var a = Oc(this).text();
        Oc(this).closest(".vho").find(".vly").text(a)
    }), Oc(document).on("click", ".vfg", function() {
        var a = Oc("." + Ua());
        Oc(".vev").each(function() {
            var b = Oc(this).data("vff");
            b.forEach(function(b) {
                a.removeClass(b.className)
            })
        }), a.addClass(Oc(this).attr("nav-class")), Hb(), gd()
    }), Oc(".vgk").click(fb), Oc(".vdh").click(fb), Oc(document).on("click", ".vks", function() {
        var a = Oc(this).parent().attr("optionalclass"),
            b = Oc(this).parent().attr("classtarget");
        Oc(this).hasClass("vkr") || (Oc(this).parent().find(".vks").toggleClass("vkr"), Oc(this).hasClass("choice-button-on") ? Oc(b).addClass(a) : Oc(b).removeClass(a)), Oc(b).each(function() {
            "" === Oc(this).attr("class") && Oc(this).removeAttr("class")
        }), Oc(this).hasClass("refresh") && gd(b), Hb()
    }), Oc(document).on("click", ".vkt", function(a) {
        var b = Oc(this).parent().attr("optionalClass"),
            c = Oc(this).parent().attr("classtarget"),
            d = "";
        a.stopPropagation(), Oc(this).hasClass("vku") ? (Oc(c).removeClass(b), d = !1) : (Oc(c).addClass(b), d = !0), Oc(this).toggleClass("vku"), Oc(c).each(function() {
            "" === Oc(this).attr("class") && Oc(this).removeAttr("class")
        }), Oc(this).hasClass("refresh") && gd(Oc(c).attr("vic")), "parallax" === b && (Xb(), "undefined" != typeof window.mr_parallax && window.mr_parallax.callback(c)), "scroll-assist" === b && "undefined" != typeof window.mr_parallax && (window.mr_parallax.mr_scrollAssist = d), Hb()
    }), Oc(document).on("click", ".vkv", function() {
        var a, b = Oc(this).attr("optionalclass"),
            c = Oc(this).parent().attr("classtarget");
        Oc(this).hasClass("vkr") || (a = Oc(this).parent().find(".vkv.vkw").attr("optionalclass"), Oc(this).parent().find(".vkv").removeClass("vkw"), Oc(this).addClass("vkw"), Oc(c).removeClass(a).addClass(b)), Oc(c).each(function() {
            "" === Oc(this).attr("class") && Oc(this).removeAttr("class")
        }), Hb(), Oc(this).hasClass("refresh") && gd(c)
    }), Oc(document).on("click", ".vno", function() {
        eb("." + Oc(this).attr("vnr"), Oc(this).data("vnq"), !0)
    }), Oc(".vbj").on("click", function() {
        gb(), Oc.modal.close()
    }), Oc(".vbg").keyup(function(a) {
        13 === a.keyCode && (gb(), Oc.modal.close())
    }), Oc(document).on("click", ".vgc:not(.vqg)", function() {
        Gb(), Oc(".vfw").removeClass("empty-vfw")
    }), Oc(".vpt").click(function() {
        $c === !0 && Hb();
        var a = Oc(".vge .vjl");
        a.attr("vpx", a.text()).text("New Page");
        var b = Oc(".vge .vew p:first");
        b.attr("vpx", b.text()).text("Give your new page a name."), Gb("vhd"), Oc(".vfw").removeClass("empty-vfw")
    }), Oc(document).on("keyup paste input", ".vgf", function() {
        "" !== Oc(this).val() ? Oc(".vgd").removeClass("vih") : Oc(".vgd").addClass("vih")
    }), Oc(".vgf").keyup(function(a) {
        var b = Oc(this).val();
        13 === a.keyCode && "" !== b && jb(b)
    }), Oc(".vgd").on("click", function() {
        var a = Oc(".vgf").val();
        "" !== a && jb(Oc(".vgf").val())
    }), Oc(document).on("click", ".ves", function() {
        var a;
        rc() ? (a = Oc(this).data(), a.postId !== wp_data.current_page.post_id && (_c === !0 ? e(a) : (t(), Zb("You have unsaved changes.", "Proceed without saving?", "Proceed", function() {
            e(a)
        }, function() {
            u()
        })))) : Jb(Oc(this).attr("state-id"))
    }), Oc(document).on("click", ".vdj", function() {
        return L(Oc(this).parent().attr("state-id")), !1
    }), Oc(document).on("click", ".vbz", function() {
        var a = Oc(this).parent(),
            b = a.attr("state-id"),
            c = a.attr("vjh");
        return Zb("Confirm Delete", "Are you sure you want to delete " + c + "?", "Delete", function() {
            Lb(b)
        }), !1
    }), Oc(document).on("click", ".vpy", function() {
        var a = Oc(this).parent().attr("state-id"),
            b = Oc(this).parent().attr("vjh"),
            c = Oc(".vge .vjl"),
            d = Oc(".vge .vew p:first"),
            e = Oc(".vge .vgf");
        return c.attr("vpx", c.text()).text("Rename " + b), d.attr("vpx", d.text()).text("Give your page a new name."), e.attr("viy", a), e.attr("vqa", b), e.val(b), Gb("vpz"), !1
    }), Oc(".vei").on("blur keyup paste input", function() {
        var a = "undefined" == typeof Oc(this).val() ? "" : Oc(this).val();
        document.title = "" !== a ? a : Yc, Oc.localStorage(Gc + ".vhh") ? (Oc('#vhl [viy="' + Oc.localStorage(Gc + ".vhh") + '"]').attr("page-title", a), Oc.localStorage(Gc + ".vhk", Oc("#vhl").html())) : Oc.localStorage(Gc + ".vhj", a), Hb()
    }), Oc(document).on("click focus blur keyup paste input", ".vei.vlx", function() {
        Oc.localStorage(Gc + ".vhh", ""), Oc.localStorage(Gc + ".vhg", ""), Oc(".vhe").addClass("vih"), Oc(this).removeClass("vlx")
    }), Oc(".vpp").on("blur keyup paste input", function() {
        Hb()
    }), Oc(".vpq").on("blur keyup paste input", function() {
        Hb()
    });
    var gd = function(a) {
            function b(a) {
                var b = ".viu";
                _.isUndefined(a) || (b = ".viu " + a), Oc(b).find("[no-src]").each(function() {
                    Oc(this).attr("src", Oc(this).attr("no-src")).removeAttr("no-src")
                }), rc() && Oc(b).find(".variant-shortcode:not(.vru)").each(function() {
                    m(Oc(this))
                })
            }
            var c, d = Oc(".viu").get(0).scrollTop;
            Oc(".viu " + Oc("body").attr("mrv_contentTarget"));
            Oc(".viu").empty().html(Oc("#veu").html()), c = Oc(".viu ." + a).closest("footer").length ? "footer" : "section", c = Oc(".viu ." + a).closest(c).attr("vic"), Oc('.vqm[vnt="' + c + '"]').length && tb(c), setTimeout(function() {
                "undefined" == typeof mr ? (b(), reInit(".viu")) : (b(), mr.documentReady(mr.setContext(".viu")), mr.windowLoad(mr.setContext(".viu"))), ac(), bc(), Ja(), Oc(".viu .embedded-video-holder").each(function() {
                    Oc(this).addClass("vju")
                }), Xb(), Oc(".viu").get(0).scrollTop = d, Oc(".viu .vnx").trigger("mouseenter")
            }, 100)
        },
        hd = _.debounce(gd, 1e3);
    Oc(".vhv").on("submit", ".vqm form", function() {
            return !1
        }), Rc.controlTitle = {}, Rc.controlTitle.render = function(a, b) {
            var c = Oc("<div>"),
                d = Oc("<span>"),
                e = "undefined" != typeof b ? Oc("<div>") : !1;
            return c.addClass("vqt"), d.addClass("vqu").text(a), c.append(d), e && (e.addClass("vqv").attr("vrg", b).text("?"), c.append(e)), c
        }, Rc.images = {}, Rc.images.render = function(a) {
            var b = Oc("<div>"),
                c = Rc.controlTitle.render("Images", "Images in the section are shown here, click a thumbnail to change the image."),
                d = Oc("<ul>");
            return b.addClass("vqq"), d.addClass("vqw").attr("vrf", a.length), Oc(a).each(function() {
                var a = Oc("<li>"),
                    b = Oc("<img>"),
                    c = Oc(this),
                    e = c.attr("vic");
                b.attr("alt", "Image Thumbnail").attr("src", c.attr("src")).addClass(e).attr("vic", e), a.append(b), d.append(a)
            }), b.append(c).append(d), b
        }, Oc(document).on("click", ".vhv .vqm .vqw li img", function() {
            xa(Oc(this).attr("vic"))
        }), Rc["switch"] = {}, Rc["switch"].render = function(a, b) {
            var c = Rc.controlTitle.render(a.title, a.explainer),
                d = Oc("<div>"),
                e = Oc("<div>"),
                f = Oc("<div>"),
                g = _.isUndefined(a.attribute) ? b.hasClass(a.onClass) ? !0 : !1 : a.masterTarget.attr(a.attribute) === a.onProperty ? !0 : !1;
            return e.addClass("vqx").append(f), g && e.addClass("vhr"), d.addClass("vqq vqs").append(c).append(e), d.data(a), d
        }, Rc["switch"].handle = function(a) {
            var b = a.data();
            "undefined" != typeof b.attribute ? (b.target.attr(b.attribute, b.state ? b.onProperty : b.offProperty), "" === b.target.attr(b.attribute) && b.target.removeAttr(b.attribute)) : b.target.addClass(b.state ? b.onClass : b.offClass).removeClass(b.state ? b.offClass : b.onClass), Hb(), Rc.callback.after(a), "undefined" != typeof b.callback && qc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && gd(b.targetID)
        }, Oc(document).on("click", ".vhv .vqm .vqx", function() {
            var a = Oc(this).closest(".vqq");
            Oc(this).toggleClass("vhr");
            var b = Oc(this).is(".vhr") ? !0 : !1;
            a.data("state", b), Rc["switch"].handle(a)
        }), Rc.slider = {}, Rc.slider.render = function(a, b) {
            var c, d, e, f = Rc.controlTitle.render(a.title, a.explainer),
                g = Oc("<div>"),
                h = Oc("<form>"),
                i = Oc("<input>"),
                j = Oc("<ul>"),
                k = !1,
                l = null;
            return i.addClass("vrd").attr("type", "range").attr("min", "0").attr("max", a.options.length - 1), h.append(i), _.isUndefined(a["default"]) || (l = a["default"]), j.addClass("vre").attr("vrf", a.labels.length), Oc(a.labels).each(function() {
                Oc("<li>").text(this).appendTo(j)
            }), "undefined" != typeof a.attribute ? (e = b.attr(a.attribute), i.attr("value", Oc.inArray(e, a.options)).attr("title", a.title + ": " + e)) : (Oc(a.options).each(function(a, e) {
                b.hasClass(e) && "" !== e && (k = !0, i.attr("value", a).attr("title", e.title + ": " + this)), e === l && (c = a, d = e)
            }), k || null === l || i.attr("value", c).attr("title", a.title + ": " + d)), g.addClass("vqq").append(f).append(h).append(j), g.data(a), g
        }, Rc.slider.handle = function(a) {
            var b = a.closest(".vqq"),
                c = b.data(),
                d = parseInt(a.val(), 10),
                e = c.options[d];
            "undefined" != typeof c.attribute ? "" === e ? c.target.removeAttr(c.attribute) : c.target.attr(c.attribute, e) : (Oc(c.options).each(function(a, b) {
                c.target.removeClass(b)
            }), c.target.addClass(e)), !_.isUndefined(c.titles) && _.isArray(c.titles) ? a.attr("title", c.title + ": " + c.titles[d]) : a.attr("title", c.title + ": " + e), Rc.callback.after(b), "undefined" != typeof c.callback && qc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && hd(c.targetID), Nc()
        }, Oc(".vhv").on("change, input", ".vqm .vrd", function(a) {
            Rc.slider.handle(Oc(this))
        }), Rc.text = {}, Rc.text.render = function(a, b, c) {
            var d = Rc.controlTitle.render(a.title, a.explainer),
                e = Oc("<div>"),
                f = Oc("<form>"),
                g = Oc("<input>");
            return e.addClass("vqq"), g.addClass("vrc").attr("type", "text").attr("placeholder", a.placeholder).attr("name", a.title), "undefined" != typeof a.masterTarget.attr(a.attribute) && g.val(a.masterTarget.attr(a.attribute)), f.append(g), e.append(d).append(f), g.data(a), e
        }, Rc.text.handle = _.debounce(function(a) {
            var b = a.data(),
                c = a.val(),
                d = a.getCursorPosition();
            a.closest(".vqm").data("focussedElementValue", a.val()).data("focussedElementAttribute", b.attribute).data("cursorPosition", d), "" !== c ? b.masterTarget.attr(b.attribute, c) : b.masterTarget.removeAttr(b.attribute), Nc(), Rc.callback.after(a), "undefined" != typeof b.callback && qc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && gd(b.targetID)
        }, 700), Oc(".vhv").on("keyup paste", ".vqm .vrc", function(a) {
            _.contains([37, 38, 39, 40], a.which) || Rc.text.handle(Oc(this))
        }), Rc.choice = {}, Rc.choice.render = function(a) {
            var b, c, d = Rc.controlTitle.render(a.title, a.explainer),
                e = Oc("<div>"),
                f = Oc("<ul>");
            return e.addClass("vqq"), f.addClass("vqy").attr("vrf", a.options.length), "multi" === a.type && f.addClass("vra"), "undefined" != typeof a.required && (a.required === !0 || "true" === a.required) && f.addClass("vrb"), Oc(a.options).each(function(d, e) {
                var g = Oc("<li>"),
                    h = "";
                h = "undefined" != typeof e.onClass ? e.onClass : h, h = "undefined" != typeof e.onProperty ? e.onProperty : h, "undefined" != typeof e.colourClass && (f.addClass("vqz"), g.addClass(e.colourClass)), "undefined" != typeof e.html && g.html(e.html), "multi" === a.type ? "undefined" != typeof e.offClass && (a.masterTarget.hasClass(e.offClass) || a.masterTarget.hasClass(e.onClass) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : "" !== h ? "undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute, h) && (g.addClass("vhr"), c = !0) : (a.masterTarget.hasClass(h) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : b = g, g.data(a), g.data("subOption", e), f.append(g)
            }), c || b.addClass("vhr"), e.append(d).append(f), e
        }, Rc.choice.handle = function(a) {
            var b, c = a.data();
            b = _.pluck(c.options, "onClass"), _.each(b, function(a) {
                c.target.removeClass(a)
            }), c.target.addClass(c.subOption.onClass), Hb(), Rc.callback.after(a), "undefined" != typeof c.callback && qc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && gd(c.targetID)
        }, Oc(document).on("click", ".vhv .vqm .vqy li:not(.vra li)", function() {
            Oc(this).addClass("vhr"), Oc(this).siblings().removeClass("vhr");
            Oc(this).is(".vhr") ? !0 : !1;
            Rc.choice.handle(Oc(this))
        }), Rc.multi = {}, Rc.multi.render = Rc.choice.render, Oc(document).on("click", ".vhv .vqm .vqy.vra li", function() {
            var a = Oc(this),
                b = a.is(".vhr") ? !0 : !1;
            return a.closest(".vra").is(".vrb") && b && !a.siblings("li.vhr").length ? !1 : (Oc(this).toggleClass("vhr"), b = b ? !1 : !0, Oc(this).data("state", b), void Rc.multi.handle(Oc(this)))
        }), Rc.multi.handle = function(a) {
            var b = a.data();
            b.state ? (b.target.removeClass(b.subOption.offClass).addClass(b.subOption.onClass), a.attr("title", b.subOption.onTitle)) : (b.target.removeClass(b.subOption.onClass).addClass(b.subOption.offClass), a.attr("title", b.subOption.offTitle)), Hb(), Rc.callback.after(a), "undefined" != typeof b.callback && qc(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && gd(b.targetID)
        }, Rc.button = {}, Rc.button.render = function(a, b, c) {
            var d = Rc.controlTitle.render(a.title, a.explainer),
                e = Oc("<div>"),
                f = Oc("<div>");
            return f.addClass("vrq").text(a.buttonText), e.addClass("vqq vqs").append(d).append(f), f.data(a), e
        }, Oc(document).on("click", ".vhv .vqm div.vrq", function() {
            Rc.button.handle(Oc(this))
        }), Rc.button.handle = function(a) {
            var b = a.data();
            b.context = _.isUndefined(b.context) ? cd : b.context, Rc.callback.after(a), "undefined" != typeof b.callback && qc(b.callback, b.context, b.targetID)
        }, Rc.dropdown = {}, Rc.dropdown.render = function(a) {
            var b = Rc.controlTitle.render(a.title, a.explainer),
                c = Oc("<div>"),
                d = Oc("<div>"),
                e = Oc("<div>"),
                f = Oc("<span>"),
                g = Oc("<ul>");
            return c.addClass("vqq"), d.addClass("vrv").addClass("vry"), e.addClass("vrw"), g.addClass("vrx").attr("vrf", a.options.length), Oc(a.options).each(function(b, c) {
                var d = Oc("<li>"),
                    e = "undefined" != typeof c.text ? c.text : "";
                "undefined" != typeof c.colourClass && (g.addClass("vqz"), d.addClass(c.colourClass)), "" !== e && ("undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute) === c.value && (d.addClass("vhr"), f.text(e)) : a.masterTarget.hasClass(c.value) && (f.text(e), d.addClass("vhr")), e = Oc("<span>").text(e)), d.data(a), d.data("subOption", c), d.append(e), g.append(d)
            }), c.append(b).append(g), e.append(f), d.append(e), d.append(g), c.append(d), c
        }, Rc.dropdown.handle = function(a) {
            var b, c = a.data();
            _.isUndefined(c.attribute) ? (b = _.pluck(c.options, "onClass"), _.each(b, function(a) {
                c.target.removeClass(a)
            }), c.target.addClass(c.subOption.onClass)) : (c.target.attr(c.attribute, c.subOption.value), Rc.dropdown.active.find(".vrw").text(c.subOption.text)), Rc.dropdown.closeActive(), Hb(), Rc.callback.after(a), "undefined" != typeof c.callback && qc(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && gd(c.targetID)
        }, Oc(document).on("click", ".vhv .vqm .vrx li:not(.vra li)", function() {
            return Oc(this).addClass("vhr"), Oc(this).siblings().removeClass("vhr"), Rc.dropdown.handle(Oc(this)), !1
        }), Rc.dropdown.active = null, Oc(document).on("click touchstart", ".vrv", function(a) {
            var b = Oc(this),
                c = Oc(a.target);
            return Rc.dropdown.active && Rc.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? Rc.dropdown.closeActive() : Rc.dropdown.open(b), !1
        }), Oc(document).on("click touchstart", function(a) {
            Rc.dropdown.closeActive()
        }), Rc.dropdown.open = function(a) {
            Rc.dropdown.closeActive(), Rc.dropdown.active = a, a.addClass("vhr")
        }, Rc.dropdown.closeActive = function() {
            null !== Rc.dropdown.active && (Rc.dropdown.active.removeClass("vhr"), Rc.dropdown.active = null)
        }, Rc.callback = {}, Rc.callback.after = function(a) {
            var b = a.data();
            (b.target.is("footer.vir") || b.target.closest("footer.vir").length) && Oc(".viu " + b.targetSelector).trigger("input")
        }, Oc(document).on("click", ".section-vgw", function() {
            Oc(".vqm").addClass("vhr"), Oc(".section-vgw").remove();
            var a = Oc(this).attr("vnt");
            return Oc(".viu, .viu ." + a + ", #veu ." + a).addClass("vrh"), tb(a), !1
        }), Oc(document).on("click", ".close-vqm, .viu, .vjc", function() {
            qb()
        }), Oc(document).on("contextmenu", ".vqm, .vni", function(a) {
            a.stopPropagation(), Oc(this).trigger("click")
        }), Oc(document).on("click", ".vca", function() {
            var a = Oc(this).attr("vbq");
            Oc("#veu ." + a).remove(), Oc(".viu ." + a).remove(), Oc("[vik=" + a + "]").remove(), Oc(this).parent().remove(), gd(), Oc(".vem").find(".vaa").length ? Oc(".vem").removeClass("empty-vem") : Oc(".vem").addClass("empty-vem"), Oc(".viu .vnj").remove(), Nc(), Wb(), Xb()
        }), Oc(document).on("keydown", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : void 0
        }), Oc(document).on("keyup paste input", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : (ub(Oc(this).closest(".vaa")), Ha(Oc(this)), Hb(), !0)
        }), Oc(".vap").click(function() {
            Oc('.vfj [vit="vhz"]').remove(), Oc("#vbn").html(""), Oc.localStorage(Gc + ".vbo", ""), Oc(".vap").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                Oc(".vap").html("Clear Navs").removeClass("vak").addClass("val")
            }, 1500)
        }), Oc(".vao").click(function() {
            Oc('.vdm [vit="vhz"]').remove(), Oc.localStorage(Gc + ".vbm", ""), Oc(".vao").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                Oc(".vao").html("Clear Footers").removeClass("vak").addClass("val")
            }, 1500)
        }), Oc(".vaq").click(function() {
            var a;
            Oc("#vhl li").each(function() {
                var a, b = Oc(this).attr("viy");
                a = Oc.localStorage.io(Gc + ".state.veu." + b), a.remove(), a = Oc.localStorage.io(Gc + ".state.vem." + b), a.remove(), Oc(this).remove()
            }), Oc(".vfw div").remove(), Oc(".vfw").addClass("empty-vfw"), a = Oc.localStorage.io(Gc + ".state.veu"), a.remove(), a = Oc.localStorage.io(Gc + ".state.vem"), a.remove(), a = Oc.localStorage.io(Gc + ".vhj"), a.remove(), a = Oc.localStorage.io(Gc + ".vhh"), a.remove(), a = Oc.localStorage.io(Gc + ".vhg"), a.remove(), a = Oc.localStorage.io(Gc + ".vhk"), a.remove(), Oc(".vaq").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                Oc(".vaq").html("Clear Pages").removeClass("vak").addClass("val")
            }, 1500)
        }), Oc(".vpc").click(function() {
            Oc.localStorage(Gc + ".gallery.images", ""), setTimeout(function() {
                Oc(".vpc").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
            }, 1500)
        }), Oc(".van").click(function() {
            Oc(".vfw div").remove(), Oc("#vhl li").remove(), window.localStorage.clear(), Oc(".van").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                Oc(".van").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
            }, 1500)
        }), Oc(".viu").click(function() {
            Oc(".vjq").removeClass("vgq")
        }), Oc(".vjq .vex").click(function() {
            Oc(this).closest(".vjq").removeClass("vgq")
        }), Oc(".vgw").click(function() {
            Oc(".vkm").toggleClass("vme"), Oc(".vgw").toggleClass("vmg")
        }), Oc(".vjc").mouseenter(function() {
            Oc(".vkm").removeClass("vjz")
        }), Oc(".vlf li").not(_.isUndefined(ad["interface"]) ? "" : ad["interface"].sidebarButtons).click(function() {
            Oc(".vlf li").removeClass("vhr"), Oc(this).addClass("vhr");
            var a = Oc(this).index() + 1;
            Oc(".vlp").removeClass("vhr"), Oc(".vlp:nth-child(" + a + ")").addClass("vhr")
        }), Oc(".vac").click(function() {
            Ab(), Oc(".vgm").click(), Oc(".vlv").toggleClass("vmf"), Oc(".vlv").find(".vho").removeClass("vhr"), Wb()
        }), Oc(".vma").click(function() {
            Oc(".vgi").toggleClass("vhr"), Oc(this).toggleClass("vhr")
        }), Oc(".vgh").click(function() {
            Oc(".vgi").removeClass("vhr"), Oc(".vma").removeClass("vhr")
        }), Oc(".vlm").click(function() {
            zb()
        }), Oc(".vho span").click(function() {
            Oc(this).closest(".vho").toggleClass("vhr"), setTimeout(function() {
                Wb()
            }, 301)
        }), Oc(document).on("click", ".vgl", function() {
            var a = Oc(this);
            a.hasClass("catch-double-click") ? Oc(".vad").toggleClass("vhr") : (a.addClass("catch-double-click"), setTimeout(function() {
                a.removeClass("catch-double-click")
            }, 300), xb(Oc(this).attr("vgv"))), Oc(".vem").removeClass("empty-vem"), Wb()
        }), Oc(".vev").each(function() {
            var a = (Oc(this).data("vjt"), Oc(this).attr("id"));
            Oc(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + Oc(this).attr("data-vjt") + "</li>");
        }), Oc("#vdk .vim").each(function() {
            var a = Oc(this).attr("vbr"),
                b = Oc(this).attr("id");
            Oc(".vdm").append('<li class="vdl" vid="' + b + '" vit="vir">' + a + "</li>")
        }), Oc(document).on("click", ".vgr", function() {
            Oc(".vib").toggleClass("vib vjb"), Oc(this).toggleClass("vhr vdv vgr")
        }), Oc(document).on("click", ".vdv", function() {
            Oc(".vjb").toggleClass("vib vjb"), Oc(this).toggleClass("vgr vdv vhr")
        }), Oc(document).on("click", ".vgh", function() {
            if (Oc(".vgh").removeClass("vhr"), Oc(this).addClass("vhr"), "*" === Oc(this).attr("vbp")) return Oc(".vgl").removeClass("vih"), void Oc(".vma span").text("All");
            Oc(".vgl").addClass("vih"), Oc('.vgl[vbp*="' + Oc(this).attr("vbp") + '"]').removeClass("vih");
            var a = Oc(this).text();
            Oc(".vma span").text(a), Wb()
        }), this.showSectionsSelector = Cb, Oc(document).on("mouseenter", ".viu ul.slides:not(.vjx)", function(a) {
            var b = Oc(this);
            try {
                b.parent().flexslider("pause")
            } catch (c) {}
            try {
                b.closest(".slider").flexslider("pause")
            } catch (c) {}
            try {
                b.trigger("stop.owl.autoplay")
            } catch (c) {}
            try {
                b.closest(".slider").length && b.flickity("pausePlayer")
            } catch (c) {}
            b.addClass("paused"), Oc("#veu .vnx").removeClass("vnx"), Eb(b.attr("vic")), Oc("#veu ." + b.attr("vic")).addClass("vnx")
        }), Oc(document).on("mouseleave", ".viu ul.slides.paused:not(.vjx)", function(a) {
            var b = Oc(this);
            try {
                b.parent().flexslider("play")
            } catch (c) {}
            try {
                b.closest(".slider").flexslider("play")
            } catch (c) {}
            try {
                b.closest(".slider").length && b.flickity("unpausePlayer")
            } catch (c) {}
            b.removeClass("paused")
        }), Nc = _.debounce(Hb, 400), -1 !== navigator.userAgent.indexOf("NT 6.") && Oc("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>"), Oc(".vet").click(function() {
            Oc(".vet").addClass("vih"), Jb()
        }), Oc(".vhd").click(function() {
            mb(!0), Cb()
        }), Oc(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function(a) {
            var b, c = Oc(this);
            "paste" === a.type && (a.preventDefault(), b = (a.originalEvent || a).clipboardData.getData("text/plain").replace(/\n/g, "<br>"), document.execCommand("insertHtml", !1, b)), c.children().length ? "" === c.html() && c.html("&nbsp;") : "" === c.text() && c.text(" "), Oc("#veu ." + c.attr("vic")).html(c.html()), Hb()
        }), Oc(document).on("keydown", ".viu [contenteditable]", function(a) {
            return 13 === a.keyCode ? oc(a) ? !0 : !1 : void 0
        }), Oc(document).on("keydown", '.viu [type="submit"]', function(a) {
            return 32 === a.keyCode ? pc(a) ? !0 : !1 : void 0
        }), Oc(document).on("blur keyup paste input", ".vir:not(nav,header,footer,[vqj],[nav-id])", function() {
            Oc(this).removeClass("vir").addClass("vhz")
        }), Oc(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, label, address", function() {
            Oc(this).addClass("vdw")
        }), Oc(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, .vnu, label, address", function() {
            Oc(this).removeClass("vdw")
        }), Oc(".viu").on("mouseenter", "section, header, footer", function() {
            _.isUndefined(Oc(this).attr("vic")) || sb(Oc(this).attr("vic"))
        }), Oc(document).on("mouseenter", '[vic] [class*="medium-"]', function(a) {
            Pc = Oc(this).attr("vic")
        }), Oc(document).on("mouseenter", '[vic] [class*="col-md-"]', function(a) {
            Pc = Oc(this).attr("vic")
        }), Oc(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function(a) {
            Pc = Oc(this).attr("vic")
        }), Oc(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function(a) {
            Pc = Oc(this).attr("vic")
        }), Oc(document).on("keyup", document, function(a) {
            _.isString(Pc) && a.ctrlKey && (219 === a.keyCode && K(Pc), 221 === a.keyCode && J(Pc))
        }), Oc(document).on("click", "a.vjx", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), Oc("img").on("dragstart", function(a) {
            a.preventDefault()
        }), Oc(document).on("submit", ".viu form", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), Oc(document).on("click", ".vjb", function() {
            var a;
            Oc(this).removeClass("vjb vib").addClass("vjm"), Oc("#veu ." + Oc(this).attr("vic")).removeClass("vjb vib").addClass("vjm"), Oc(this).attr("vjw") && (a = Oc(this).closest("nav, header, section, footer").find(Oc(this).attr("vjw")).attr("vic"), Oc(".viu ." + a).removeClass("vjb vib").addClass("vjm"), Oc("#veu ." + a).removeClass("vjb vib").addClass("vjm")), Oa(), Q(), Hb()
        }), Oc(document).on("mouseleave", '.viu .vnu, .viu div[class*="col-"], .viu .embed-video-container, .viu .local-video-container, .viu .media-embed-container, .viu ul.slides, .viu .slider, .viu .voh', function(a) {
            window.mr_variant.removeIconButtons === !0 && Oc(this).find(".vnw").remove()
        }), this.initSizes = Wb, Oc(".vdf").on("click", function() {
            hc(), Oc.modal.close()
        }), Oc(".vda, .vdg, .vdb").keyup(function(a) {
            13 === a.keyCode && (hc(), Oc.modal.close())
        }), Oc(document).on("mouseenter", ".viu .embed-video-container:not(.voh .embed-video-container, .viu .slides > li > .embed-video-container), .viu .media-embed-container:not(.voh .media-embed-container, .viu .slides > li > .media-embed-container)", function() {
            var a, b = Oc('<div class="vnw"></div>'),
                c = Oc(this).find("iframe");
            Ac.options.forEach(function(d) {
                c.is(d.selector) && (a = hb(d, !1, c.attr("vic")), b.append(a))
            }), c.closest(".embed-video-container, .media-embed-container").append(b)
        }), Oc(document).on("mouseenter", ".viu .local-video-container video:not(.voh .local-video-container video, .viu .slides > li > .local-video-container video, .viu .slides .owl-item > li > .local-video-container video)", function() {
            var a, b = Oc(this).closest(".local-video-container").find(".vnw").length ? Oc(this).closest(".local-video-container").find(".vnw") : Oc('<div class="vnw"></div>'),
                c = Oc(this);
            b.find('[vof="' + c.attr("vic") + '"]').length || (a = fc(c.attr("vic"), !1), b.append(a), c.closest(".local-video-container").append(b))
        }), Oc.fn.focusEnd = function() {
            Oc(this).focus();
            var a = Oc("<span />").appendTo(Oc(this)),
                b = a.get(0),
                c = null,
                d = null;
            return document.selection ? (c = document.body.createTextRange(), c.moveToElementText(b), c.select()) : window.getSelection && (c = document.createRange(), c.selectNode(b), d = window.getSelection(), d.removeAllRanges(), d.addRange(c)), a.remove(), this
        },
        function(a, b) {
            a.fn.selectRange = function(a, c) {
                return c === b && (c = a), this.each(function() {
                    if ("selectionStart" in this) this.selectionStart = a, this.selectionEnd = c;
                    else if (this.setSelectionRange) this.setSelectionRange(a, c);
                    else if (this.createTextRange) {
                        var b = this.createTextRange();
                        b.collapse(!0), b.moveEnd("character", c), b.moveStart("character", a), b.select()
                    }
                })
            }
        }(window.jQuery),
        function(a, b) {
            a.fn.getCursorPosition = function() {
                var b = a(this).get(0),
                    c = 0;
                if ("selectionStart" in b) c = b.selectionStart;
                else if ("selection" in document) {
                    b.focus();
                    var d = document.selection.createRange(),
                        e = document.selection.createRange().text.length;
                    d.moveStart("character", -b.value.length), c = d.text.length - e
                }
                return c
            }
        }(window.jQuery), this.getURLParameter = jc, this.importState = Da, this.variantAlert = Yb
}
window.mr_variant = new Variant;
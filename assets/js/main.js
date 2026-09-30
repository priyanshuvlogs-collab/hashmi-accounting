/* Hashmi Accounting: interactions and motion.
   Everything works without GSAP; motion is layered on when it loads. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Photo fallback: hide broken images, keep the tinted frame ---------- */
  document.querySelectorAll(".about__media img").forEach(function (img) {
    var hide = function () { img.style.visibility = "hidden"; };
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener("error", hide);
  });

  /* ---------- CRT power switch ---------- */
  var crtToggle = document.querySelector("[data-crt-toggle]");
  function setCrt(on) {
    root.setAttribute("data-crt", on ? "on" : "off");
    if (crtToggle) crtToggle.setAttribute("aria-pressed", on ? "true" : "false");
    store.set("ha-crt", on ? "on" : "off");
  }
  setCrt(store.get("ha-crt") !== "off");
  if (crtToggle) {
    crtToggle.addEventListener("click", function () {
      setCrt(root.getAttribute("data-crt") !== "on");
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    menuBtn.innerHTML = '<i class="ph ph-list" aria-hidden="true"></i>';
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.hidden;
      menu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuBtn.innerHTML = '<i class="ph ' + (open ? "ph-x" : "ph-list") + '" aria-hidden="true"></i>';
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- Ledger terminal ---------- */
  var BOOT = [
    "HASHMI LEDGER SYSTEM",
    "(C) HASHMI ACCOUNTING",
    "",
    "> open books ........... <ok>OK</ok>",
    "> match bank feeds ..... <ok>OK</ok>",
    "> file receipts ........ <ok>OK</ok>",
    "> check deadlines ...... <ok>OK</ok>",
    "> trial balance ........ <ok>0.00</ok>",
    "",
    "BOOKS BALANCED. SELECT 1-4"
  ];

  var SERVICES = {
    "1": ["> RUN bookkeeping", "", "bank feeds ..... reconciled", "receipts ....... matched", "reports ........ monthly P&L", "queries ........ one short list"],
    "2": ["> RUN tax", "", "personal ....... prepared, filed", "company ........ prepared, filed", "the bill ....... known early", "deadlines ...... on our calendar"],
    "3": ["> RUN payroll", "", "payslips ....... every pay run", "pensions ....... calculated", "filings ........ submitted", "team size ...... 1 to 40"],
    "4": ["> RUN advice", "", "cash flow ...... 12 month view", "structure ...... sole trader/ltd", "hiring ......... can you afford it", "reviews ........ quarterly"]
  };
  var FOOTER = ["", "SELECT 1-4 OR BOOK A CALL"];

  var log = document.querySelector("[data-log]");
  var screen = document.querySelector("[data-screen]");
  var keys = document.querySelectorAll("[data-key]");
  var typeJob = 0;

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // Lines may contain <ok>..</ok> markers; render them as highlighted spans.
  function renderLine(raw) {
    return escapeHtml(raw)
      .replace(/&lt;ok&gt;/g, '<span class="ok">')
      .replace(/&lt;\/ok&gt;/g, "</span>");
  }
  function plain(raw) { return raw.replace(/<\/?ok>/g, ""); }

  function typeLines(lines, done) {
    if (!log) return;
    var job = ++typeJob;
    var caret = '<span class="screen__caret"></span>';

    if (reduceMotion) {
      log.innerHTML = lines.map(renderLine).join("\n") + caret;
      if (done) done();
      return;
    }

    var li = 0, ci = 0, finished = [];
    function tick() {
      if (job !== typeJob) return; // a newer command took over
      if (li >= lines.length) {
        log.innerHTML = finished.join("\n") + caret;
        if (done) done();
        return;
      }
      var text = plain(lines[li]);
      ci += 2;
      if (ci >= text.length) {
        finished.push(renderLine(lines[li]));
        li++; ci = 0;
        log.innerHTML = finished.join("\n") + caret;
        setTimeout(tick, text.length ? 70 : 30);
      } else {
        log.innerHTML = finished.concat(escapeHtml(text.slice(0, ci))).join("\n") + caret;
        setTimeout(tick, 18);
      }
    }
    tick();
  }

  function runService(k) {
    if (!SERVICES[k]) return;
    keys.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-key") === k)); });
    typeLines(SERVICES[k].concat(FOOTER));
  }

  keys.forEach(function (b) {
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { runService(b.getAttribute("data-key")); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (SERVICES[e.key]) runService(e.key);
  });

  // Boot the screen when it first comes into view.
  if (screen && log) {
    var booted = false;
    var boot = function () {
      if (booted) return;
      booted = true;
      if (!reduceMotion) screen.classList.add("is-booting");
      setTimeout(function () { typeLines(BOOT); }, reduceMotion ? 0 : 650);
    };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (en) { return en.isIntersecting; })) { boot(); io.disconnect(); }
      }, { threshold: 0.3 });
      io.observe(screen);
    } else {
      boot();
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.querySelector("[data-form]");
  if (form) {
    var MAILTO = "hello@hashmiaccounting.com"; // TODO: confirm the real address
    var rules = {
      name: function (v) { return v.trim() ? "" : "Please add your name."; },
      email: function (v) {
        if (!v.trim()) return "Please add your email so we can reply.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "That email address looks incomplete.";
      },
      type: function (v) { return v ? "" : "Please choose the option closest to you."; }
    };

    function check(field) {
      var rule = rules[field.name];
      if (!rule) return true;
      var msg = rule(field.value);
      var wrap = field.closest(".field");
      var err = document.getElementById(field.getAttribute("aria-describedby"));
      if (msg) { wrap.setAttribute("data-invalid", ""); field.setAttribute("aria-invalid", "true"); }
      else { wrap.removeAttribute("data-invalid"); field.removeAttribute("aria-invalid"); }
      if (err) err.textContent = msg;
      return !msg;
    }

    Object.keys(rules).forEach(function (name) {
      var f = form.elements[name];
      f.addEventListener("blur", function () { if (f.value) check(f); });
      f.addEventListener("input", function () { if (f.closest("[data-invalid]")) check(f); });
      f.addEventListener("change", function () { if (f.closest("[data-invalid]")) check(f); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        var f = form.elements[name];
        if (!check(f) && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); return; }

      var d = form.elements;
      var body = "Name: " + d.name.value.trim() + "\nEmail: " + d.email.value.trim() +
        "\nBusiness: " + d.type.value + "\n\n" + (d.message.value.trim() || "(no details added)");
      var href = "mailto:" + MAILTO + "?subject=" + encodeURIComponent("Call request from " + d.name.value.trim()) +
        "&body=" + encodeURIComponent(body);
      form.querySelector("[data-form-done]").hidden = false;
      window.location.href = href;
    });
  }

  /* ---------- Motion (GSAP) ---------- */
  function initMotion() {
    var gsap = window.gsap;
    if (!gsap) return;
    gsap.registerPlugin(window.ScrollTrigger, window.SplitText, window.ScrambleTextPlugin);

    var title = document.querySelector(".hero__title");
    var addCursor = function () {
      if (title && !title.querySelector(".cursor")) {
        var c = document.createElement("span");
        c.className = "cursor";
        c.setAttribute("aria-hidden", "true");
        // Sit the cursor inside the last word so it never wraps onto its own line.
        var words = title.querySelectorAll(".word");
        (words.length ? words[words.length - 1] : title).appendChild(c);
      }
    };

    var mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", function () {
      addCursor();
    });

    mm.add("(prefers-reduced-motion: no-preference)", function () {
      /* Hero: headline lines rise out of a mask, then supporting copy follows */
      var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (title && window.SplitText) {
        var split = new SplitText(title, { type: "lines,words", mask: "lines", wordsClass: "word" });
        tl.from(split.words, { yPercent: 110, duration: 0.9, stagger: 0.06 });
        tl.add(addCursor, "-=0.3");
      } else {
        addCursor();
      }
      tl.from(".hero .eyebrow", { opacity: 0, y: 8, duration: 0.5 }, 0)
        .from(".hero__sub", { opacity: 0, y: 14, duration: 0.7 }, "-=0.55")
        .from(".hero__ctas > *", { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .from(".monitor", { opacity: 0, y: 30, duration: 1 }, 0.15);

      /* Generic reveal for anything marked data-reveal */
      gsap.set("[data-reveal]", { opacity: 0, y: 26 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: function (els) {
          gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true });
        }
      });

      /* Eyebrows decode like a terminal readout */
      gsap.utils.toArray(".eyebrow").forEach(function (el) {
        if (el.closest(".hero")) return;
        var text = el.textContent;
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: function () {
            gsap.to(el, { duration: 1, scrambleText: { text: text, chars: "01$%#=+", speed: 0.6 } });
          }
        });
      });

      /* Sample ledger counts up once, like figures settling after a reconcile */
      gsap.utils.toArray("[data-count]").forEach(function (el) {
        var target = parseFloat(el.getAttribute("data-count"));
        var obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: function () { el.textContent = formatMoney(obj.v); }
        });
      });

      /* Step glyphs decode like a terminal readout when the section arrives */
      var glyphs = gsap.utils.toArray(".panel__glyph");
      var glyphText = glyphs.map(function (el) { return el.textContent; });
      glyphs.forEach(function (el) { el.textContent = ""; });
      ScrollTrigger.create({
        trigger: ".process",
        start: "top 65%",
        once: true,
        onEnter: function () {
          glyphs.forEach(function (el, i) {
            gsap.to(el, { duration: 0.9, delay: i * 0.15, scrambleText: { text: glyphText[i], chars: "<>[]{}$=_", speed: 0.5 } });
          });
        }
      });

      /* Tools marquee: one continuous loop, pauses on hover */
      var track = document.querySelector(".marquee__track");
      if (track) {
        track.innerHTML += track.innerHTML;
        Array.prototype.slice.call(track.children, track.children.length / 2).forEach(function (n) {
          n.setAttribute("aria-hidden", "true");
        });
        var loop = gsap.to(track, { xPercent: -50, duration: 32, ease: "none", repeat: -1 });
        track.addEventListener("mouseenter", function () { gsap.to(loop, { timeScale: 0.15, duration: 0.6 }); });
        track.addEventListener("mouseleave", function () { gsap.to(loop, { timeScale: 1, duration: 0.6 }); });
      }
    });

    /* Process: pinned horizontal pan on wide screens only */
    mm.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", function () {
      var section = document.querySelector(".process");
      var pin = document.querySelector("[data-process]");
      var track = document.querySelector("[data-process-track]");
      if (!section || !pin || !track) return;
      section.classList.add("is-panning");

      var distance = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      var pan = gsap.to(track, {
        x: function () { return -distance(); },
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: function () { return "+=" + distance(); },
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });

      gsap.utils.toArray(".panel", track).forEach(function (panel) {
        gsap.from(panel, {
          opacity: 0.25,
          scale: 0.96,
          ease: "none",
          scrollTrigger: { trigger: panel, containerAnimation: pan, start: "left 95%", end: "left 60%", scrub: true }
        });
      });

      return function () { section.classList.remove("is-panning"); };
    });

    // Fonts change line lengths; recompute trigger positions once they land.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  }

  function formatMoney(v) {
    var n = Math.round(v);
    var s = Math.abs(n).toLocaleString("en-US");
    return (n < 0 ? "(" + s + ")" : s);
  }

  // Ledger numbers should read correctly even without animation.
  document.querySelectorAll("[data-count]").forEach(function (el) {
    el.textContent = formatMoney(parseFloat(el.getAttribute("data-count")));
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion);
  } else {
    initMotion();
  }
})();

// content.js
(function(){
    document.querySelectorAll('[aria-label^="Owned by"]').forEach((el) => {
        el.innerText = el.getAttribute('aria-label');
    });
})();

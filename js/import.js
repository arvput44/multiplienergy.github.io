document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      const headerEl = document.getElementById('header');
      if (headerEl) headerEl.innerHTML = data;
    });

  // Load footer
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footerEl = document.getElementById('footer');
      if (footerEl) footerEl.innerHTML = data;
    });

    fetch('bottomnavbar.html')
    .then(res => res.text())
    .then(data => {
      const footerEl = document.getElementById('bottomnavbar');
      if (footerEl) footerEl.innerHTML = data;
    });
});

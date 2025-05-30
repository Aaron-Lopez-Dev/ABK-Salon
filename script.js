window.addEventListener('scroll', function() {

    const navbar = document.getElementById('navbar');
    const name = document.getElementById('name');
    const links = document.getElementById('links');
    const links2 = document.getElementById('links2');

    if (window.scrollY > 200) {
      navbar.classList.add('scrolled');
      name.classList.add('scrolled');
      links.classList.add('scrolled');
      links2.classList.add('scrolled');

    } else {
      navbar.classList.remove('scrolled');
      name.classList.remove('scrolled');
      links.classList.remove('scrolled');
      links2.classList.remove('scrolled');
    }
  });
  

  
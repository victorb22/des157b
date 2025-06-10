(function () {
  'use strict';

  console.log('reading js');

  const overlay = document.querySelector('#overlay');
  const instructions = document.querySelector('#instruct');
  const close = document.querySelector('#close');

  const timePeriodSelect = document.querySelector('#timePeriod');
  const filterSelect = document.querySelector('#categoryFilter');

  const presentPositiveSocial = document.querySelector('#presentPositiveSocial');
  const presentNegativeSocial = document.querySelector('#presentNegativeSocial');
  const presentPositiveEcon = document.querySelector('#presentPositiveEcon'); 
  const presentNegativeEcon = document.querySelector('#presentNegativeEcon'); 
  const presentPositiveWorld = document.querySelector('#presentPositiveWorld'); 
  const presentNegativeWorld = document.querySelector('#presentNegativeWorld'); 

  const pastPage = document.querySelector('#pastPage');
  const pastPage1 = document.querySelector('#pastPage1');
  const pastPositiveEcon = document.querySelector('#pastPositiveEcon');
  const pastNegativeEcon = document.querySelector('#pastNegativeEcon');
  const pastPositiveWorld = document.querySelector('#pastPositiveWorld');
  const pastNegativeWorld = document.querySelector('#pastNegativeWorld');

  const futurePage = document.querySelector('#futurePage');
  const futureSocNeg = document.querySelector('#futurePage1');
  const futurePositiveEcon = document.querySelector('#futurePositiveEcon');
  const futureNegativeEcon = document.querySelector('#futureNegativeEcon');
  const futurePositiveWorld = document.querySelector('#futurePositiveWorld');
  const futureNegativeWorld = document.querySelector('#futureNegativeWorld');

  const searchIcon = document.querySelector('#search');
  const logInButton = document.querySelector('#logIn');
  const topNav = document.querySelector('#main-nav');
  const bottomNav = document.querySelector('#main-nav1');
  const menu = document.querySelector('#menu');

  instructions.addEventListener('click', function(){
    overlay.className = 'showing';
  });

  close.addEventListener('click', function(){
    overlay.className = 'hidden';
  });

  // When filter changes
  filterSelect.addEventListener('change', updateView);

  // Updates which section is shown based on period and category
  function updateView() {
    const period = timePeriodSelect.value;
    const category = filterSelect.value;

    // Hide all content sections
    presentPositiveSocial.className = 'hidden';
    presentNegativeSocial.className = 'hidden';
    presentPositiveEcon.className = 'hidden';
    presentNegativeEcon.className = 'hidden';
    presentPositiveWorld.className = 'hidden';
    presentNegativeWorld.className = 'hidden';

    pastPage.className = 'hidden';
    pastPage1.className = 'hidden';
    pastPositiveEcon.className = 'hidden';
    pastNegativeEcon.className = 'hidden';
    pastPositiveWorld.className = 'hidden';
    pastNegativeWorld.className = 'hidden';

    futurePage.className = 'hidden';
    futureSocNeg.className = 'hidden';
    futurePositiveEcon.className = 'hidden';
    futureNegativeEcon.className = 'hidden';
    futurePositiveWorld.className = 'hidden';
    futureNegativeWorld.className = 'hidden';

    searchIcon.className = 'hidden';
    logInButton.className = 'hidden';
    instructions.className = 'hidden';
    topNav.className = 'hidden';
    bottomNav.className = 'hidden';
    menu.className = 'hidden';

    // Conditional section showing
    if (period === 'present' && category === 'Social - Positive') {
      presentPositiveSocial.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }

    if (period === 'present' && category === 'Social - Negative') {
      presentNegativeSocial.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }

    if (period === 'present' && category === 'Econ/Politics - Positive') {
      presentPositiveEcon.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }

    if (period === 'present' && category === 'Econ/Politics - Negative') {
      presentNegativeEcon.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }


    if (period === 'present' && category === 'World - Positive') {
      presentPositiveWorld.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }

    if (period === 'present' && category === 'World - Negative') {
      presentNegativeWorld.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'showing';
      logInButton.className = 'showing';
      instructions.className = 'showing';
      topNav.className = 'showing';
      bottomNav.className = 'showing';
      menu.className = 'hidden';
    }


    if (period === 'past' && category === 'Social - Positive') {
      pastPage.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.body.className = '.pastText';
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }

    if (period === 'past' && category === 'Social - Negative') {
      pastPage1.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }

    if (period === 'past' && category === 'Econ/Politics - Positive') {
      pastPositiveEcon.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }
    
    if (period === 'past' && category === 'Econ/Politics - Negative') {
      pastNegativeEcon.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }

    if (period === 'past' && category === 'World - Positive') {
      pastPositiveWorld.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }

    if (period === 'past' && category === 'World - Negative') {
      pastNegativeWorld.className = 'showing';
      document.body.style.backgroundImage = "url('images/newspaper-background-past.png')";
      document.body.style.backgroundSize = "cover";
      document.querySelector('#news-ticker').classList.remove('showing');

      searchIcon.className = 'hidden';
      logInButton.className = 'hidden';
      instructions.className = 'hidden';
      topNav.className = 'hidden';
      bottomNav.className = 'hidden';
      menu.className = 'hidden';
    }

    if (period === 'future' && category === 'Social - Positive') {
      futurePage.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 10000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futurePage #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    }

    if (period === 'future' && category === 'Social - Negative') {
      futureSocNeg.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 10000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg1",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futurePage1 #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });

    }

    if (period === 'future' && category === 'Econ/Politics - Positive') {
      futurePositiveEcon.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 12000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg2",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futurePositiveEcon #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    }


    if (period === 'future' && category === 'Econ/Politics - Negative') {
      futureNegativeEcon.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 12000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg3",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futureNegativeEcon #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    }


    if (period === 'future' && category === 'World - Positive') {
      futurePositiveWorld.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 12000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg4",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futurePositiveWorld #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    }

    if (period === 'future' && category === 'World - Negative') {
      futureNegativeWorld.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      menu.className = 'showing';
      
      const ticker = document.querySelector('#news-ticker');
      ticker.classList.add('showing');
    
      if (!ticker.dataset.init) {
        $('.marquee').marquee({
          duration: 12000,
          gap: 50,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true
        });
        ticker.dataset.init = "true";
      }

      gsap.from('#site-title', {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });


      if (window.vantaEffect) {
        window.vantaEffect.destroy();
        window.vantaEffect = null;
      }
    
      setTimeout(() => {
        window.vantaEffect = VANTA.GLOBE({
          el: "#vanta-bg5",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0xffffff
        });
    
        // Animate headline
        const title = document.querySelector('#futureNegativeWorld #site-title');
        // title.style.fontFamily = 'Bebas Neue, sans-serif'
        if (title) {
          title.style.opacity = '0';
          gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
        }
      }, 100);

      // Animate all articles in with floating 3D-like motion
        gsap.from(".future-article, .topfuture-article", {
         z: -200,
         opacity: 0,
           y: 50,
           stagger: 0.2,
         duration: 1.5,
         ease: "power3.out"
          });

      // Animate site title
      const title = document.querySelector('#site-title');
      title.style.opacity = '0';
      gsap.fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    }

  }

})();


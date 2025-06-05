(function () {
  'use strict';

  console.log('reading js');

  const overlay = document.querySelector('#overlay');
  // WORKING ON OVERLAY - CURRENTLY;
  const timePeriodSelect = document.querySelector('#timePeriod');
  const filterSelect = document.querySelector('#categoryFilter');

  const presentPositiveSocial = document.querySelector('#presentPositiveSocial');
  const presentNegativeSocial = document.querySelector('#presentNegativeSocial');

  const pastPage = document.querySelector('#pastPage');
  const pastPage1 = document.querySelector('#pastPage1');

  const futurePage = document.querySelector('#futurePage');
  const futureSocNeg = document.querySelector('#futurePage1');

  const searchIcon = document.querySelector('#search');
  const logInButton = document.querySelector('#logIn');
  const instructions = document.querySelector('#instruct');

  const topNav = document.querySelector('#main-nav');
  const bottomNav = document.querySelector('#main-nav1');

  instructions.addEventListener('click', function(){
    overlay.className = 'showing';
  });

  // When filter changes
  // timePeriodSelect.addEventListener('change', updateView);
  filterSelect.addEventListener('change', updateView);

  // Updates which section is shown based on period and category
  function updateView() {
    const period = timePeriodSelect.value;
    const category = filterSelect.value;

    // Hide all content sections
    presentPositiveSocial.className = 'hidden';
    presentNegativeSocial.className = 'hidden';
    pastPage.className = 'hidden';
    pastPage1.className = 'hidden';
    futurePage.className = 'hidden';
    futureSocNeg.className = 'hidden';


    searchIcon.className = 'hidden';
    logInButton.className = 'hidden';
    instructions.className = 'hidden';
    topNav.className = 'hidden';
    bottomNav.className = 'hidden';

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
    }
    

    if (period === 'future' && category === 'Social - Positive') {
      futurePage.className = 'showing';
      document.body.classList.remove('pastText');
      document.body.style.backgroundImage = 'none';
      
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

  }

})();


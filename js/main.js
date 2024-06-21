const loadMainPage = () => {
  fetch('app.html').then( resp => { resp.text().then ( markup => {
      document.querySelector('#app').innerHTML = markup;
    }) 
  })
}

const bodyHistory = [];

function registerHandler() {
	/*
    loadPage = page_name => {
      fetch(`${page_name}.html`).then( resp => { resp.text().then ( markup => {
        document.querySelector('#app').innerHTML = markup;
      }) 
     })
    }
    	*/

  async function loadPage ( page_name ) {
    resp = await fetch(`${page_name}`);
    markup = await resp.text()
    // document.querySelector('#app').innerHTML = markup;
    return markup;
  }


  document.getElementById("about").onclick = (_event) => {
    _event.preventDefault();
    loadPage('about').then( markup => {
      history.pushState({}, "", "/about.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("gallery").onclick = (_event) => {
    _event.preventDefault();
    loadPage('gallery').then( markup => {
      history.pushState({}, "", "/gallery.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;

      
      function customize(_, observer) {

        let elem_visible = Boolean(document.querySelector('.course-3'));
        
        if (elem_visible && observer) {
                let mainVid = document.querySelector('.main-video');

        document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

            vid.onclick = () =>{
                let src = vid.getAttribute('src');
                mainVid.classList.add('active');
                mainVid.querySelector('video').src = src;
            }

        });

        document.querySelector('#close-vid').onclick = () =>{
            mainVid.classList.remove('active');
        }
            observer.disconnect();
        }
      }
      new MutationObserver(customize).observe(document, { childList: true, subtree: true });

    })
  };
  document.getElementById("blog").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("contactUs").onclick = (_event) => {

    _event.preventDefault();
    loadPage('contactUs').then( markup => {
      history.pushState({}, "", "/contactUs.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("blog").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("about_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('about').then( markup => {
      history.pushState({}, "", "/about.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("gallery_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('gallery').then( markup => {
      history.pushState({}, "", "/gallery.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;

      function customize(_, observer) {

        let elem_visible = Boolean(document.querySelector('.course-3'));
        
        if (elem_visible && observer) {
                let mainVid = document.querySelector('.main-video');

        document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

            vid.onclick = () =>{
                let src = vid.getAttribute('src');
                mainVid.classList.add('active');
                mainVid.querySelector('video').src = src;
            }

        });

        document.querySelector('#close-vid').onclick = () =>{
            mainVid.classList.remove('active');
        }
            observer.disconnect();
        }
      }
      new MutationObserver(customize).observe(document, { childList: true, subtree: true });
    })
  };
  document.getElementById("blog_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("contactUs_").onclick = (_event) => {

    _event.preventDefault();
    loadPage('contactUs').then( markup => {
      history.pushState({}, "", "/contactUs.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
  document.getElementById("blog_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog.html");

      bodyHistory.push(document.body.innerHTML);
      document.querySelector('#app').innerHTML = markup;
    })
  };
}

onpopstate = (_event) => {
  const previousContent = bodyHistory.pop();

  if (previousContent) {
    document.body.innerHTML = previousContent;
    registerHandler();
  }
};


$$( () => {
  loadMainPage();
  registerHandler();
})

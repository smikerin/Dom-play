const spans = document.querySelectorAll('div#play span');
    console.log(spans);
    for (const mySpan of spans) {
      mySpan.addEventListener('click', function(ev){
        //alert(mySpan.dataset.actor);
        highlightActor(mySpan.dataset.actor);
      });
    }

    function highlightActor(actor){
      for (const mySpan of spans) {
        if (actor == mySpan.dataset.actor){
        mySpan.style.backgroundColor = "yellow";
      }
      else {
        mySpan.style.backgroundColor = "white";
      }
      }
    }
    //document.querySelector('span.hamlet').style.backgroundColor = "yellow";
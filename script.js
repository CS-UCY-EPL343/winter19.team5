  function hideJourney(id) {
      document.getElementById(id).hidden = true;
  }

  function addToJourney(id, id1, id2) {
      var x = document.getElementById(id);
      x.hidden = false;
      var x1 = document.getElementById(id1);
      x1.hidden = true;
      var x2 = document.getElementById(id2);
      x2.hidden = true;
  }
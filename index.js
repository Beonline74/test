let container = document.querySelector("#container"); // On sélectionne l'élement qui à l'id container


      const images = document.querySelectorAll("img"); // On sélectionne toutes les images de la page (ce qui crée une sorte de tableau virtuel)

      const nbSlide = images.length; //On crée une variable qui est égale à la quantité d'image dans le tableau vituelle
      console.log(nbSlide);

      const suivant = document.querySelector(".right"); // On sélectionne l'élement qui à la class right

      const precedent = document.querySelector(".left"); // On sélectionne l'élement qui à la class left

      const buttons = document.querySelectorAll("#container button"); //On sélectionne tous les buttons qui sont dans l'élément qui à la classe container

      let count = 0;
      //On crée une variable count qui  est égale à 0 (on s'en servira comme un compteur pour savoir quelle image est affichée)

      // Définit une fonction pour aller à la slide suivante
      function slideSuivante() {
        images[count].classList.remove("active"); //Désactive la classe active de l'image actuelle

        if (count < nbSlide - 1) {
          //Si le compteur (qui correspond donc au numéro de l'image actuelle) est inférieur à 3-1
          count++; //Le compteur s'ajoute 1
        } else {
          //Dans le cas contraire, donc si le compteur n'est plus inférieur à 3-1 alors
          count = 0; //Le conteur revient à 0 (On revient à l'image du rdc)
        }

        images[count].classList.add("active"); //On donne la classe active à l'image actuelle

    
      }
      suivant.addEventListener("click", slideSuivante); //Lorsqu'on click sur suivant, la fonction se lance

      // Définit une fonction pour aller à la slide précédente
      function slidePrecedente() {
        images[count].classList.remove("active"); //Désactive la classe active de l'image actuelle

        if (count > 0) {
          //Si le compteur (qui correspond donc au numéro de l'image actuelle) est supérieur à 0
          count--; //Le compteur se soustrait 1
        } else {
          //Dans le cas contraire, donc si le compteur n'est plus superieur à 0 alors
          count = nbSlide - 1; //Le conteur va à 2 (On revient à 3-1 soit 2, l'image du dernier étage)
        }

        images[count].classList.add("active"); //On donne la classe active à l'image actuelle
      }
      precedent.addEventListener("click", slidePrecedente); //Lorsqu'on click sur précédent, la fonction se lance

      // Définit une fonction pour utiliser le clavier
      function keyPress(e) {
        console.log(e); //Pour voir la valeur de la touche sur laquelle on a cliqué

        if (e.keyCode === 37) {
          //Si le keycode est égale à 37 alors  la fonction slidePrecedente se lance
          slidePrecedente();
        } else if (e.keyCode === 39) {
          //Si le keycode est égale à 39 alors  la fonction slideSuivante se lance
          slideSuivante();
        }
      }
      

      container.addEventListener("click", function () {
        container.classList.add("selected");
      });

       if (container.classList.contains("selected")) {
         document.addEventListener("keydown", keyPress);
     }

      for (let button of buttons) {
        button.addEventListener("click", function () {
        console.log("nooo"); 
            for (let image of images) {
              if (
                image.getAttribute("data-img") ===
                button.getAttribute("data-img")
              ) {
                image.classList.add("active");
              } else{image.classList.remove("active");}
            }
          });
      }

       const changement = setInterval(slideSuivante, 7000) //On crée une variable chargement, elle est égale à la méthode setInterval, avec setInterval tu dois mettre deux arguments, une fonction (ici slideSuivante) puis le temps (ici 5 secondes)

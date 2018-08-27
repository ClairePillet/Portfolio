// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <div id="page-top">


        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Antykhimera</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
          <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">Présentation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#projects">Activité</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#Galerie">Galerie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Antykhimera</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Association de Trollball et Jeux de Rôle Grandeur Nature</h2>
                    <a href="#about" class="btn btn-primary js-scroll-trigger">Présentation</a>
                </div>
            </div>
        </header>


        <section id="about" class="about-section text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Présentation</h2>


                        <p class="text-white-50"> L’Antykhimera est une association promouvant le jeu de rôle Grandeur Nature et le Trollball, créée en novembre 2013, par une bande d’amis souhaitant partager leurs loisirs. Aujourd’hui, elle compte une trentaine de membres et pratique ses activités sur toute la région lyonnaise, et même plus loin !<br />
                            <br />
                            Nous sommes une petite troupe de passionnés qui se réunit tous les dimanches et les mercredis soir, sur la belle ville de Lyon, armée d’épées en mousse et de lourds boucliers, d’arcs, de dagues de lancer et autre jambon en mousse pour s'entrainé à l'escrime ludique et au trollbal.
                                Nous proposons aussi des activités au grand public lors de convention ou de fêtes médiévales-fantastiques, tels que le festival Yggdrasil a Lyon.
                             
                            <br />
                            <br />
                                 L’association donne à tous ceux qui le souhaitent, la possibilité de créer, que ce soit des animations, des entraînements voir même des GNs !<br />
                                Et ses portes vous sont ouvertes !<br />
                            L’Antykhimera, vaincra !<br />

                        </p>
                    </div>
                </div>
                <img src="img/ipad.png" class="img-fluid" alt="" />
            </div>
        </section>


        <section id="projects" class="projects-section bg-light">
            <div class="container">


                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7">
                        <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt="" />
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Escrime ludique</h4>
                            <p class="text-black-50 mb-0"> C'est une activité sportive utilisée notamment en gn, permettant de combattre avec des armes en mousse de manière sécurisé.</p> <p class="text-black-50 mb-0"> <i>Des réglementations strictes sont tout de fois présente comme l'interdiction de l'estoc et des coups trop fort ou aux parties sensibles.</i></p>
                        </div>
                    </div>
                </div>


                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="img/demo-image-01.jpg" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">TrollBall</h4>
                                    <p class="mb-0 text-white-50">Sport mêlant escrime ludique et rugby. Il y a deux équipes armées et une balle au centre, le but est de mettre la balle de l'autre côté des lignes adverses ou d’éliminer l'autre équipe.</p><p class="mb-0 text-white-50"> Pour varier le plaisir nous mettons en place des manches spéciales avec des contraintes variées pour plus de fun! </p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="img/demo-image-02.jpg" alt="" />
                    </div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">GN</h4>
                                    <p class="mb-0 text-white-50">Évolution du JdR papier où les joueurs incarnent physiquement un personnage dans un univers fictif. Ils interprètent leur personnage avec diverses interactions et actions physiques, d'après des règles de jeu et l'arbitrage d'organisateurs. </p> <p class="text-white-50 mb-0"> Le jeu peut se dérouler dans different univers autant medieval-fantastisque que futuriste ou post-apo.</p> <p class="text-white-50 mb-0"><i> Un objectif de l'association sur le long terme est d'organiser son propre gn.</i></p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="img/demo-image-01.jpg" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Craft</h4>
                                    <p class="mb-0 text-white-50" >Que ça soit le travail du cuir, du métal, du tissu ou du bois, certains Gnistes se sont spécialisés dans la fabrication de certains objets pour des besoins personnels et aussi pour le partager aux autres.</p>
                                    <p class="mb-0 text-white-50" > Régulièrement, nos membres se réunissent lors d'atelier où nous travaillons sur des projets d'artisanats pour le groupe comme la fabrication d'éléments pour notre campement, d'arme ou costumes.</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="img/demo-image-02.jpg" alt="" />
                    </div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Evenement</h4>
                                    <p class="mb-0 text-white-50">Pour faire découvrir nos activités, l'association participe à de nombreux événements tout au long de l'année dans la région lyonnaise.</p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>


        <section id="Galerie" class="signup-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">

                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Galerie</h2>

                     

                    </div>
                </div>
            </div>
        </section>


        <section class="contact-section bg-black" id="contact">
            <div class="container">
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <div id="google-map" data-latitude="40.713732" data-longitude="-74.0092704"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Entrainement</h4>
                                    <p class="mb-0 text-white-50">Nous nous entrainons à la doua (voir carte-ci-contre) le samedi à partir de 14h30 et le mercredi à 19h30 uniquement pendant l'heure d'été. </p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Adresse</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">71b Avenue Paul Santy 69008 Lyon</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">
                                    <a href="#">antykhimera@hotmail.fr</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Telephone</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">07 81 78 71 24</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="social d-flex justify-content-center">
                
                    <a href="https://www.facebook.com/antykhimera/" class="mx-2">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                  
                </div>

            </div>
        </section>


        <footer class="bg-black small text-center text-white-50">
            <div class="container">
                Copyright &copy; Your Website 2018
      </div>
        </footer>



    </div>
    ,

    document.getElementById("content")
); 
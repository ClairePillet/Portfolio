
import { applyParams } from "../actions";
import MapMe from "./MapMe";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Map, Point, Feature, View, Tile as TileLayer, Vector as VectorLayer } from "ol";
class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        //  this.state = { someValue: this.props.someDefaultValue };
    }
    public render() {
        //let map: any;
        //var geoMarker = new Feature({
        //    type: 'geoMarker',
        //    geometry: new Point([46, 52])//45°46'50.9"N 4°52'10.3"E

        //});
        //map = (<div id="map" className="map"></div>);
        //var map1 = new Map({
        //    target: document.getElementById('map'),
        //    loadTilesWhileAnimating: true,
        //    view: new View({
        //        zoom: 10,
        //        minZoom: 2,
        //        maxZoom: 19
        //    })

        //});
        //map1.render();
      
        return (
            <div id="page-top">


                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Antykhimera</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
          <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">Présentation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#projects">Activité</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#Galerie">Galerie</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Antykhimera</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Association de Trollball et Jeux de Rôle Grandeur Nature</h2>
                            <a href="#about" className="btn btn-primary js-scroll-trigger">Présentation</a>
                        </div>
                    </div>
                </header>


                <section id="about" className="about-section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-white mb-4">Présentation</h2>


                                <p className="text-white-50"> L’Antykhimera est une association promouvant le jeu de rôle Grandeur Nature et le Trollball, créée en novembre 2013, par une bande d’amis souhaitant partager leurs loisirs. Aujourd’hui, elle compte une trentaine de membres et pratique ses activités sur toute la région lyonnaise, et même plus loin !<br />
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
                        <img src="img/ipad.png" className="img-fluid" alt="" />
                    </div>
                </section>


                <section id="projects" className="projects-section bg-light">
                    <div className="container">


                        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                            <div className="col-xl-8 col-lg-7">
                                <img className="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt="" />
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="featured-text text-center text-lg-left">
                                    <h4>Escrime ludique</h4>
                                    <p className="text-black-50 mb-0"> C'est une activité sportive utilisée notamment en gn, permettant de combattre avec des armes en mousse de manière sécurisé.</p> <p className="text-black-50 mb-0"> <i>Des réglementations strictes sont tout de fois présente comme l'interdiction de l'estoc et des coups trop fort ou aux parties sensibles.</i></p>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div className="col-lg-6">
                                <img className="img-fluid" src="img/demo-image-01.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">TrollBall</h4>
                                            <p className="mb-0 text-white-50">Sport mêlant escrime ludique et rugby. Il y a deux équipes armées et une balle au centre, le but est de mettre la balle de l'autre côté des lignes adverses ou d’éliminer l'autre équipe.</p><p className="mb-0 text-white-50"> Pour varier le plaisir nous mettons en place des manches spéciales avec des contraintes variées pour plus de fun! </p>
                                            <hr className="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center no-gutters">
                            <div className="col-lg-6">
                                <img className="img-fluid" src="img/demo-image-02.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 order-lg-first">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white">GN</h4>
                                            <p className="mb-0 text-white-50">Évolution du JdR papier où les joueurs incarnent physiquement un personnage dans un univers fictif. Ils interprètent leur personnage avec diverses interactions et actions physiques, d'après des règles de jeu et l'arbitrage d'organisateurs. </p> <p className="text-white-50 mb-0"> Le jeu peut se dérouler dans different univers autant medieval-fantastisque que futuriste ou post-apo.</p> <p className="text-white-50 mb-0"><i> Un objectif de l'association sur le long terme est d'organiser son propre gn.</i></p>
                                            <hr className="d-none d-lg-block mb-0 mr-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div className="col-lg-6">
                                <img className="img-fluid" src="img/demo-image-01.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">Craft</h4>
                                            <p className="mb-0 text-white-50" >Que ça soit le travail du cuir, du métal, du tissu ou du bois, certains Gnistes se sont spécialisés dans la fabrication de certains objets pour des besoins personnels et aussi pour le partager aux autres.</p>
                                            <p className="mb-0 text-white-50" > Régulièrement, nos membres se réunissent lors d'atelier où nous travaillons sur des projets d'artisanats pour le groupe comme la fabrication d'éléments pour notre campement, d'arme ou costumes.</p>
                                            <hr className="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center no-gutters">
                            <div className="col-lg-6">
                                <img className="img-fluid" src="img/demo-image-02.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 order-lg-first">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white">Evenement</h4>
                                            <p className="mb-0 text-white-50">Pour faire découvrir nos activités, l'association participe à de nombreux événements tout au long de l'année dans la région lyonnaise.</p>
                                            <hr className="d-none d-lg-block mb-0 mr-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>


                <section id="Galerie" className="signup-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 mx-auto text-center">

                                <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                                <h2 className="text-white mb-5">Galerie</h2>



                            </div>
                        </div>
                    </div>
                </section>


                <section className="contact-section bg-black" id="contact">
                    <div className="container">
                        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div className="col-lg-6">
                                <MapMe/>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">Entrainement</h4>
                                            <p className="mb-0 text-white-50">Nous nous entrainons à la doua (voir carte-ci-contre) le samedi à partir de 14h30 et le mercredi à 19h30 uniquement pendant l'heure d'été. </p>
                                            <hr className="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Adresse</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">71b Avenue Paul Santy 69008 Lyon</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">
                                            <a href="#">antykhimera@hotmail.fr</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Telephone</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">07 81 78 71 24</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="social d-flex justify-content-center">

                            <a href="https://www.facebook.com/antykhimera/" className="mx-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                        </div>

                    </div>
                </section>


                <footer className="bg-black small text-center text-white-50">
                    <div className="container">
                        Copyright &copy; Your Website 2018
      </div>
                </footer>



            </div>

        );
    }

}
    export default connect(
        (store: any) => {
            const { isLoading, error } = store.ui;

            return {
                isLoading,
                error
            } as any
        },
        { applyParams }
    )(Main as any);


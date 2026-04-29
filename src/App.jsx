import useMediaQuery from "./hooks/useMediaQuery";

// PC
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Concept from "./sections/Concept";
import Taste from "./sections/Taste";
import Product from "./sections/Product";
import Craft from "./sections/Craft";
import Origin from "./sections/Origin";
import Encounter from "./sections/Encounter";
import Invitation from "./sections/Invitation";
import Footer from "./sections/Footer";

// SP
import NavSp from "./components-sp/NavSp";
import HeroSp from "./sections-sp/HeroSp";
import ConceptSp from "./sections-sp/ConceptSp";
import TasteSp from "./sections-sp/TasteSp";
import ProductSp from "./sections-sp/ProductSp";
import CraftSp from "./sections-sp/CraftSp";
import OriginSp from "./sections-sp/OriginSp";
import EncounterSp from "./sections-sp/EncounterSp";
import InvitationSp from "./sections-sp/InvitationSp";
import FooterSp from "./sections-sp/FooterSp";

function App() {
  const isSp = useMediaQuery("(max-width: 767px)");

  if (isSp) {
    return (
      <>
        <NavSp />
        <HeroSp />
        <ConceptSp />
        <TasteSp />
        <ProductSp />
        <CraftSp />
        <OriginSp />
        <EncounterSp />
        <InvitationSp />
        <FooterSp />
      </>
    );
  }

  return (
    <>
      <Nav />
      <Hero />
      <Concept />
      <Taste />
      <Product />
      <Craft />
      <Origin />
      <Encounter />
      <Invitation />
      <Footer />
    </>
  );
}

export default App;
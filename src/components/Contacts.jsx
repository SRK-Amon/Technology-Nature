import social_media_1 from "../assets/images/social_media_1.svg";
import social_media_2 from "../assets/images/social_media_2.svg";
import social_media_3 from "../assets/images/social_media_3.svg";
import contacts_1 from "../assets/images/contacts_1.png";

const Contacts = () => {
  return (
    <section class="contacts">
      <div class="contacts__box">
        <h2 class="contacts__title title">CONTACTS</h2>
        <div class="contacts__info info">
          <h3 class="info__title">Call us at this number:</h3>
          <p class="info__text">+(212) 111-4242</p>
        </div>
        <div class="contacts__info info">
          <h3 class="info__title">The agency is located at:</h3>
          <p class="info__text">State of California, Los Angeles Country</p>
        </div>
        <div class="contacts__info info">
          <h3 class="info__title">Contact us by mail:</h3>
          <p class="info__text">Design@interior.agency</p>
        </div>
        <div class="contacts__info info">
          <h3 class="info__title">Follow us on social networks:</h3>
          <div class="info__box social_media__box">
            <img src={social_media_1} alt="" />
            <img src={social_media_2} alt="" />
            <img src={social_media_3} alt="" />
          </div>
        </div>
      </div>
      <img src={contacts_1} alt="" class="contacts__img" />
    </section>
  );
};

export default Contacts;


var blacklisted_postcodes = [''];

var scene7url = "https://gresvig.scene7.com/is/image/gresvig/";

var translations = window.translations || {};

// Validation
translations.validate_required_field = 'Dette er et obligatorisk felt.';
translations.validate_mobile = 'Feil i registrering av mobilnummer, må bestå av 8 tall og begynne med 4 eller 9';
translations.validate_mobile_confirm = 'Mobilnumrene er ikke like';

// General
translations.color = 'Farge';
translations.size = 'Størrelse';
translations.discount = 'Rabatt';
translations.load_failed = 'load_failed';

translations.invoice = 'Fakturagebyr';
translations.shipping = 'Frakt og ekspedisjon';
translations.gift_card_value_out_of_range = 'Du må angi en verdi fra {min} til {max}';
translations.view_all_results = 'Vis alle';

// Product
translations.regular_price = 'Førpris'

// Contact
translations.phone = 'Telefon';
translations.email = 'E-post';

// Cart
translations.product = 'vare';
translations.products = 'varer';
translations.cart_change = 'Endre farge & størrelse';
translations.cart_change_button = 'Lagre & Oppdater';
translations.cart_change_close = 'Avbryte';
translations.cart_remove = 'Fjern vare';

translations.cart_item_price = 'Stykkpris';
translations.cart_row_price = 'Total';

translations.discount_free_shipping = '<strong>Gratis frakt!</strong> Hvis du handler for ytterligere <strong>{amount},-</strong> så gir vi deg gratis frakt. *Gjelder MyPack'

// Details
translations.validate_login = 'Du må logge inn eller fylle ut din adresse';
translations.validate_postcode = 'Må bestå av 4 siffer';
translations.blacklisted_postcode = 'Vi sender dessverre ikke til ditt post nr';

// Shipping
translations.opening_hours = 'Åpningstider';
translations.open_delivery_map = 'Vis / endre leveringssted';
translations.close_map = 'Lukk kartet';
translations.delivery_map_note = 'Bruk kartet og klikk på leveringssted for å vise informasjon og endre leveringssted.';
translations.your_delivery_address = 'your_delivery_address';
translations.selected_delivery_point = 'Selected service point';
translations.choose_this_delivery_point = 'Velg dette leveringsstedet';

// Payment
translations.payment_info_payex2 = 'Du vil bli omdirigert til PayEx for å betale med kort.';
translations.payment_info_payexgift = 'Du vil bli omdirigert til PayEx for å betale med verdikort. Hvis saldoen på verdikortet ditt ikke dekker hele beløpet, kan du betale restbeløpet med Visa eller MasterCard. Verdikortet bør beholdes etter at det er tømt i tilfelle tilbakebetaling i forbindelse med retur eller reklamasjon. I nettbutikken kan du kun bruke ett verdikort per kjøp.';
translations.payment_info_paypal_express = 'Du vil bli omdirigert til PayPal for å betale.';
translations.payment_info_klarna_invoice = 'Når du handler på faktura med Klarna, får du alltid varene dine hjem før du betaler. En e-post med din faktura vil bli sendt til deg fra vår samarbeidspartner Klarna. Klarna vil gjøre en kredittsjekk av deg, og du må derfor oppgi personnummeret ditt.';
translations.payment_info_klarna_partpayment = 'Når du delbetaler eller velger å betale i ditt eget tempo, samles dine kjøp med Klarna på én faktura. Denne betaler du i slutten av måneden etter. Klarna vil gjøre en kredittsjekk av deg, og du må derfor oppgi personnummeret ditt.';
translations.payment_info_klarna_specpayment = 'Når du delbetaler eller velger å betale i ditt eget tempo, samles dine kjøp med Klarna på én faktura. Denne betaler du i slutten av måneden etter. Klarna vil gjøre en kredittsjekk av deg, og du må derfor oppgi personnummeret ditt.';
translations.payment_info_mcash = 'Med mCASH kan du betale enkelt med din mobiltelefon. Om du handler via PC, skanner du en QR-kode med mCASH-appen. Handler du via mobiltelefon, trykker du på en knapp som aktiverer mCASH-appen. Last ned her: www.mca.sh/no/';
translations.pno_subtext = 'Vennligst fyll inn i følgende format DDMMYYXXXXX.';
translations.klarna_terms_action = 'Les mer';
translations.payment_info_monthlycost = 'payment_info_monthlycost';
translations.payment_info_interestrate = 'Årsrente';
translations.payment_info_totalcost = 'Total kredittkjøpspris';
translations.payment_info_invoicefee = 'Fakturagebyr';
translations.payment_info_startfee = 'Etableringsgebyr';
translations.payment_info_vippspaymentmethod = 'Betal med Vipps';

// Review
translations.validate_agreements = 'Vennligst bekreft salgsbetingelsene før du fortsetter.';



// mCash
translations.mcash_fail = 'Servern har sluttet å svare, detta kan bero på at du har ventet for lenge.';

// Stock & reserve
translations.stock_check_title = 'Søk, reserver og hent i våre butikker';
translations.reserve_modal_title = 'Reserver og hent i våre butikker';
translations.reserve_in_store = 'Reserver i butikk';
translations.reserve_in_stock_message = 'Varen finnes på lager og kan reserveres i følgende butikker:';
translations.stock_ok_message = 'Varen finnes på lager i følgende butikker:';
translations.stock_error_message = 'Det oppstod en feil under forsøk på å få varen lagerstatus. Vennligst prøv igjen senere.';
translations.reserve_not_in_stock_message = 'Denne varen er for tiden ikke tilgjengelig for reservasjon i våre butikker.';
translations.stock_not_in_stock_message = 'Denne modellen er for øyeblikket ikke på lager i våre butikker.';
translations.reserve_failed_message = 'Noe gikk feil med din reservasjon. Vennligst prøv igjen eller kontakt kundeservice.';

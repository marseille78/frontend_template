<?

session_start();
$lang = isset($_SESSION['CHECKOUT']['lang']) ? $_SESSION['CHECKOUT']['lang'] : '';
if($lang == 'eu') $lang = 'en';
if($lang == 'en-us') $lang = 'en';
if($lang == 'us') $lang = 'en';
if($lang == 'mx') $lang = 'es';
if($lang == 'br') $lang = 'pt';
if($lang == 'ca') $lang = 'fr';
if(empty($lang)) $lang = 'en';

$current = 'independence';

$texts = array(
   'message'=> array(
      'en'=> '<h1>Get <span class="gold">5% OFF</span>  on Holidays! Use <span class="gold">5OFF</span> coupon on billing page!</h1>',
      'es'=> '<h1>¡Consiga el <span class="gold">5% OFF</span> en días de fiesta! Utilice el cupón de <span class="gold">5OFF</span> en la página de facturación!</h1>',
      'cs'=> '<h1>Získejte <span class="gold">5% slevu</span> na dovolenou! Použijte <span class="gold">5OFF</span> kuponu na stránku fakturace!</h1>',
      'da'=> '<h1>Få <span class="gold">5% rabat</span> på ferie! Brug <span class="gold">5OFF</span> kupon på fakturering side!</h1>',
      'nl'=> '<h1><span class="gold">5% korting</span> op vakantie! Gebruik <span class="gold">5OFF</span> kortingsbon op facturering pagina!</h1>',
      'fi'=> '<h1>Saat <span class="gold">5% alennus</span> Holidays! Käytä <span class="gold">5OFF</span> kuponki laskutukseen sivulla!</h1>',
      'fr'=> '<h1>Obtenez <span class="gold">5% de réduction</span> sur les vacances! Utilisez le coupon <span class="gold">5OFF</span> sur la page de facturation!</h1>',
      'de'=> '<h1>Erhalten Sie <span class="gold">5% WEG</span> auf Feiertage! Verwenden Sie <span class="gold">5OFF</span> Gutschein auf Abrechnung Seite!</h1>',
      'el'=> '<h1>Πάρτε <span class="gold">5% ΕΚΠΤΩΣΗ</span> σε διακοπές! Χρησιμοποιήστε <span class="gold">5OFF</span> κουπόνι στη σελίδα χρέωσης!</h1>',
      'hu'=> '<h1><span class="gold">5% kedvezmény</span> a Ünnepeket! Használja <span class="gold">5OFF</span> kupont számlázási oldal!</h1>',
      'it'=> '<h1>Ottenere <span class="gold">5% OFF</span> in vacanza! Utilizzare <span class="gold">5OFF</span> buono sconto sulla pagina di fatturazione!</h1>',
      'ja'=> '<h1>休日の <span class="gold">5%</span> を下車！課金ページにクーポン <span class="gold">5OFF</span> を使用してください！</h1>',
      'no'=> '<h1>Få <span class="gold">5% rabatt</span> på helligdager ! Bruk <span class="gold">5OFF</span> kupong på fakturering side!</h1>',
      'pl'=> '<h1><span class="gold">5% zniżki</span> na wakacje! Użyj <span class="gold">5OFF</span> na kuponie na stronie rozliczeniowego!</h1>',
      'sv'=> '<h1>Få <span class="gold">5% rabatt</span> på semester! Använd <span class="gold">5OFF</span> kupong på faktureringssidan!</h1>',
      'tr'=> '<h1>Holidays <span class="gold">5% KAPALI</span> olsun! Fatura sayfasındaki kupon <span class="gold">5OFF</span> kullanın!</h1>',
      'pt'=> '<h1>Obtenha <span class="gold">5% de desconto</span> nos feriados! Use <span class="gold">5OFF</span> cupom na página de faturamento!</h1>',
   ),
   'holliday'=> array(
      'thanksgiving'=> array(
         'en'=> '<h2 class="holiday">Happy Thanksgiving Day!</h2>',
         'es'=> '<h2 class="holiday">¡Feliz día de acción de gracias!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný Den díkůvzdání!</h2>',
         'da'=> '<h2 class="holiday">Glad Thanksgiving Day!</h2>',
         'nl'=> '<h2 class="holiday">Gelukkig Thanksgiving day!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää kiitospäivä!</h2>',
         'fr'=> '<h2 class="holiday">Joyeux Thanksgiving!</h2>',
         'de'=> '<h2 class="holiday">Fröhliches Thanksgiving!</h2>',
         'el'=> '<h2 class="holiday">Ευτυχής ημέρα των ευχαριστιών!</h2>',
         'hu'=> '<h2 class="holiday">Happy Thanksgiving Day!</h2>',
         'it'=> '<h2 class="holiday">Felice giorno del Ringraziamento!</h2>',
         'ja'=> '<h2 class="holiday">幸せな感謝祭!</h2>',
         'no'=> '<h2 class="holiday">Glad Thanksgiving Day!</h2>',
         'pl'=> '<h2 class="holiday">Szczęśliwy Dzień Dziękczynienia!</h2>',
         'sv'=> '<h2 class="holiday">Happy Thanksgiving Day!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Şükran Günü!</h2>',
         'pt'=> '<h2 class="holiday">Feliz dia de ação de graças!</h2>',
      ),
      'christmas'=> array(
         'en'=> '<h2 class="holiday">Merry Christmas & Happy New Year!</h2>',
         'es'=> '<h2 class="holiday">¡Feliz Navidad Feliz Año Nuevo!</h2>',
         'cs'=> '<h2 class="holiday">Veselé vánoce a šťastný nový rok!</h2>',
         'da'=> '<h2 class="holiday">Glædelig jul og godt nytår!</h2>',
         'nl'=> '<h2 class="holiday">Vrolijk kerstfeest gelukkig nieuwjaar!</h2>',
         'fi'=> '<h2 class="holiday">Hauskaa joulua onnellista uutta vuotta!</h2>',
         'fr'=> '<h2 class="holiday">Joyeux Noël heureuse nouvelle année!</h2>',
         'de'=> '<h2 class="holiday">Frohe Weihnachten, Frohes neues Jahr!</h2>',
         'el'=> '<h2 class="holiday">Καλά Χριστούγεννα ευτυχισμένο το νέο έτος!</h2>',
         'hu'=> '<h2 class="holiday">Boldog karácsonyt boldog új évet!</h2>',
         'it'=> '<h2 class="holiday">Buon Natale Felice Anno Nuovo!</h2>',
         'ja'=> '<h2 class="holiday">メリークリスマス＆ハッピーニューイヤー！</h2>',
         'no'=> '<h2 class="holiday">God jul og godt nytt år!</h2>',
         'pl'=> '<h2 class="holiday">Wesołych Świąt Szczęśliwego Nowego Roku!</h2>',
         'sv'=> '<h2 class="holiday">God Jul gott Nytt År!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Noeller mutlu yıllar!</h2>',
         'pt'=> '<h2 class="holiday">Feliz Natal Feliz Ano Novo!</h2>',
      ),
      'valentines'=> array(
         'en'=> '<h2 class="holiday">Happy St. Valentines Day!</h2>',
         'es'=> '<h2 class="holiday">¡Día de San Valentín feliz del St.!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný St. Day Valentines!</h2>',
         'da'=> '<h2 class="holiday">Glad St. Valentinsdag!</h2>',
         'nl'=> '<h2 class="holiday">Gelukkige St. Valentijnsdag!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää St. Ystävänpäivä!</h2>',
         'fr'=> '<h2 class="holiday">Bonne Saint-Valentin!</h2>',
         'de'=> '<h2 class="holiday">Glücklicher Valentinsgruß-Tag!</h2>',
         'el'=> '<h2 class="holiday">Ημέρα του Αγίου Βαλεντίνου ευτυχής Αγίου!</h2>',
         'hu'=> '<h2 class="holiday">Boldog Valentin-napot!</h2>',
         'it'=> '<h2 class="holiday">Buon San San Valentino!</h2>',
         'ja'=> '<h2 class="holiday">ハッピー聖バレンタインデー！</h2>',
         'no'=> '<h2 class="holiday">Glad St. Valentinsdag!</h2>',
         'pl'=> '<h2 class="holiday">Szczęśliwy St. Walentynki!</h2>',
         'sv'=> '<h2 class="holiday">Glad St. Alla hjärtans dag!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Aziz Sevgililer Günü!</h2>',
         'pt'=> '<h2 class="holiday">Dia dos namorados feliz do St.!</h2>',
      ),
      'patrics'=> array(
         'en'=> '<h2 class="holiday">Happy St. Patrics Day!</h2>',
         'es'=> '<h2 class="holiday">¡Día feliz de San Patrics!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný St. Day Patrics!</h2>',
         'da'=> '<h2 class="holiday">Glad St. Patrics Day!</h2>',
         'nl'=> '<h2 class="holiday">De gelukkige St. Dag patrics!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää St. Patrics Day!</h2>',
         'fr'=> '<h2 class="holiday">Bonne journée de Patriciens!</h2>',
         'de'=> '<h2 class="holiday">Glücklicher Tag St. Patrics!</h2>',
         'el'=> '<h2 class="holiday">Ημέρα Patrics ευτυχής Αγίου!</h2>',
         'hu'=> '<h2 class="holiday">Boldog Szent Patrics Day!</h2>',
         'it'=> '<h2 class="holiday">Buon San Patrics Day!</h2>',
         'ja'=> '<h2 class="holiday">ハッピー聖Patricsの日！</h2>',
         'no'=> '<h2 class="holiday">Glad St. Patrics Day!</h2>',
         'pl'=> '<h2 class="holiday">Szczęśliwy St. patrics dzień!</h2>',
         'sv'=> '<h2 class="holiday">Lycklig St. Patrics dag!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Aziz Patrics Günü!</h2>',
         'pt'=> '<h2 class="holiday">Dia feliz de St Patrics!</h2>',
      ),
      'easter'=> array(
         'en'=> '<h2 class="holiday">Happy Easter!</h2>',
         'es'=> '<h2 class="holiday">¡Felices Pascuas!</h2>',
         'cs'=> '<h2 class="holiday">Veselé Velikonoce!</h2>',
         'da'=> '<h2 class="holiday">Glædelig påske!</h2>',
         'nl'=> '<h2 class="holiday">Gelukkig Pasen!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää pääsiäistä!</h2>',
         'fr'=> '<h2 class="holiday">Joyeuses Pâques!</h2>',
         'de'=> '<h2 class="holiday">Frohe Ostern!</h2>',
         'el'=> '<h2 class="holiday">Καλό Πάσχα!</h2>',
         'hu'=> '<h2 class="holiday">Kellemes Húsvéti Ünnepeket!</h2>',
         'it'=> '<h2 class="holiday">Buona Pasqua!</h2>',
         'ja'=> '<h2 class="holiday">イースター、おめでとう！</h2>',
         'no'=> '<h2 class="holiday">God påske!</h2>',
         'pl'=> '<h2 class="holiday">Wesołego Alleluja!</h2>',
         'sv'=> '<h2 class="holiday">Glad påsk!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Paskalyalar!</h2>',
         'pt'=> '<h2 class="holiday">Feliz Páscoa!</h2>',
      ),
      'labor'=> array(
         'en'=> '<h2 class="holiday">Happy Labor Day!</h2>',
         'es'=> '<h2 class="holiday">¡Feliz dia DEL Trabajo!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný den práce!</h2>',
         'da'=> '<h2 class="holiday">Glad Labor Day!</h2>',
         'nl'=> '<h2 class="holiday">Gelukkige dag van de arbeid!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää vappua!</h2>',
         'fr'=> '<h2 class="holiday">Joyeuse fête du Travail!</h2>',
         'de'=> '<h2 class="holiday">Glücklicher Tag der Arbeit!</h2>',
         'el'=> '<h2 class="holiday">Ευτυχισμένη ημέρα της εργασίας!</h2>',
         'hu'=> '<h2 class="holiday">Boldog május elsejét!</h2>',
         'it'=> '<h2 class="holiday">Labor Day Felice!</h2>',
         'ja'=> '<h2 class="holiday">幸せな労働日！</h2>',
         'no'=> '<h2 class="holiday">Ha en fin arbeidernes dag!</h2>',
         'pl'=> '<h2 class="holiday">Szczęśliwy dzień pracy!</h2>',
         'sv'=> '<h2 class="holiday">Lycklig Labor Day!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu İşçi Bayramı!</h2>',
         'pt'=> '<h2 class="holiday">Feliz Dia do Trabalho!</h2>',
      ),
      'independence'=> array(
         'en'=> '<h2 class="holiday">Happy Independence Day!</h2>',
         'es'=> '<h2 class="holiday">¡Feliz día de la independencia!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný den nezávislosti!</h2>',
         'da'=> '<h2 class="holiday">Glædelig uafhængighedsdag!</h2>',
         'nl'=> '<h2 class="holiday">Gelukkige Onafhankelijkheidsdag!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää itsenäisyyspäivää!</h2>',
         'fr'=> '<h2 class="holiday">Joyeux Jour de l\'Indépendance!</h2>',
         'de'=> '<h2 class="holiday">Fröhlichen Unabhängigkeitstag!</h2>',
         'el'=> '<h2 class="holiday">Χαρούμενη μέρα ανεξαρτησίας!</h2>',
         'hu'=> '<h2 class="holiday">Boldog függetlenség Napját!</h2>',
         'it'=> '<h2 class="holiday">Felice giorno dell\'indipendenza!</h2>',
         'ja'=> '<h2 class="holiday">幸せな独立記念日！</h2>',
         'no'=> '<h2 class="holiday">God frigjøringsdag!</h2>',
         'pl'=> '<h2 class="holiday">Wesołego dnia niepodległości!</h2>',
         'sv'=> '<h2 class="holiday">Glad självständighetsdag!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu bağımsızlık Günü!</h2>',
         'pt'=> '<h2 class="holiday">Feliz Dia da Independência!</h2>',
      ),
      'halloween'=> array(
         'en'=> '<h2 class="holiday">Happy Halloween!</h2>',
         'es'=> '<h2 class="holiday">¡Feliz Halloween!</h2>',
         'cs'=> '<h2 class="holiday">Šťastný Halloween!</h2>',
         'da'=> '<h2 class="holiday">Glædelig Halloween!</h2>',
         'nl'=> '<h2 class="holiday">Fijne Halloween!</h2>',
         'fi'=> '<h2 class="holiday">Hyvää Halloweenia!</h2>',
         'fr'=> '<h2 class="holiday">Joyeux Halloween!</h2>',
         'de'=> '<h2 class="holiday">Fröhliches Halloween!</h2>',
         'el'=> '<h2 class="holiday">Καλές Απόκριες!</h2>',
         'hu'=> '<h2 class="holiday">Boldog Mindenszenteket!</h2>',
         'it'=> '<h2 class="holiday">Buon Halloween!</h2>',
         'ja'=> '<h2 class="holiday">ハッピーハロウィン！</h2>',
         'no'=> '<h2 class="holiday">God Halloween!</h2>',
         'pl'=> '<h2 class="holiday">Szczęśliwego Halloween!</h2>',
         'sv'=> '<h2 class="holiday">Glad halloween!</h2>',
         'tr'=> '<h2 class="holiday">Mutlu Cadılar Bayramı!</h2>',
         'pt'=> '<h2 class="holiday">Feliz Dia das Bruxas!</h2>',
      ),
   ),
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?= strip_tags($texts['holliday'][$current][$lang]) ?></title>
	<link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700|Titillium+Web" rel="stylesheet">
	<style></style>
</head>


<body>
	<div class="banner">
		<div class="banner__top-bd"></div>
        <div class="banner__bottom-bd"></div> 
		<div class="banner__content">
			<div class="banner__text">
				<div class="banner__al-middle">
					<?= $texts['message'][$lang] ?>
					<?= $texts['holliday'][$current][$lang] ?>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

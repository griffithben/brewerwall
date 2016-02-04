<?php

use Phinx\Migration\AbstractMigration;

class ImperialOrganicYeasts extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-change-method
     *
     * Uncomment this method if you would like to use it.
     *
    public function change()
    {
    }
    */

    /**
     * Migrate Up.
     */
    public function up()
    {
      $this->execute("ALTER TABLE `yeasts` CHANGE COLUMN `tolerance` `tolerance` int(11);");
      $insert = $this->execute("INSERT INTO yeasts (id,laboratory,strain,name,description,attenuation_min,attenuation_max,flocculation,temperature_min,temperature_max,tolerance,form)
      VALUES
      (272,'Imperial Organic Yeast','A07','Flagship','A craft brewing standard, Flagship is a versatile strain loved for its extremely clean character. This strain performs well at standard ale temperatures, but can be used in the low 60s to produce exceptionally crisp ales. Flocculation is in the middle of the road and will typically require filtration or fining to achieve crystal clear beers.',73,77,'Medium-Low',60,72,NULL,'Liquid'),
      (273,'Imperial Organic Yeast','A09','Pub','Brewers swear by this strain to achieve super bright ales in a short amount of time. One of the most flocculent brewer’s strains around, Pub will rip through fermentation and then drop out of the beer quickly. Pub produces higher levels of esters than most domestic ale strains. Be sure to give beers made with Pub a sufficient diacetyl rest.',69,74,'Very High',64,70,NULL,'Liquid'),
      (274,'Imperial Organic Yeast','A01','House','The best of both worlds, House is clean and allows malt and hops to shine. This strain is extremely versatile and flocculent enough to drop out of the beer quickly. Best used in American IPAs but works well in English style ales. House is clean at cold temperatures with increased esters as fermentation temperatures increase.',73,75,'High',62,70,NULL,'Liquid'),
      (275,'Imperial Organic Yeast','A10','Darkness','A beautiful strain for stout, porter, brown, and amber ales. Darkness produces a unique character that matches up perfectly with roasted and caramel malts. This strain is alcohol tolerant, so don’t hesitate to throw high gravity worts its way.',71,75,'Medium',62,72,NULL,'Liquid'),
      (276,'Imperial Organic Yeast','A04','Barbarian','Ready to attack your IPA, Barbarian produces stone fruit esters that work great when paired with citrus hops. Barbarian will give you what you need for an exceptionally balanced IPA.',73,74,'Medium',62,70,NULL,'Liquid'),
      (277,'Imperial Organic Yeast','A15','Independence','Independence is the strain for bringing some new character into your hop-driven beers. Higher in esters than Flagship, this yeast will give some fruit character that will take your hoppy beers to a new level. While it shines in pale ales and IPAs, Liberty is a great all-around strain and will also work well in stouts and English ales.',72,76,'Medium',60,72,NULL,'Liquid'),
      (278,'Imperial Organic Yeast','A05','Four Square','Foursquare’s high flocculation characteristics make it an extremely user-friendly strain and its aroma profile makes it a nice choice for IPAs and other American style ales. This versatile strain works for both malt and hop forward beer styles.',68,72,'High',64,72,NULL,'Liquid'),
      (279,'Imperial Organic Yeast','A18','Joystick','This strain is a fast mover and can be used at the low end of the ale fermentation spectrum to keep it clean. Joystick is a good choice for big, high alcohol, malty beers but has no issues chomping on a hoppy double IPA.',73,77,'Medium High',60,70,NULL,'Liquid'),
      (280,'Imperial Organic Yeast','A13','Sovereign','When it’s time to brew some malt forward beers, Sovereign is ready. This is a very traditional, non-flocculent English ale strain that makes a great choice for your barley wines, ESBs and pales. Sovereign stays in suspension and dries out higher gravity brews quickly.',73,77,'Medium-Low',60,70,NULL,'Liquid'),
      (281,'Imperial Organic Yeast','A20','Citrus','When you want to use Brett, but you don’t. Citrus cranks out orange and lemon aromas along with some tropical fruit. Use this strain at high temps for big ester production. As funky as saccharomyces gets.',74,78,'low',67,80,NULL,'Liquid'),
      (282,'Imperial Organic Yeast','G02','Kaiser','A traditional alt strain, Kaiser is ready to produce an array of German style beers. It will keep the beer clean and allow the delicate malt flavors and aromas to shine through. Characteristics of this strain make it a good choice for traditional Berliner weisse fermentations. Kaizer is a low flocking strain, so expect long clarification times, but very low diacetyl levels.',73,77,'low',56,65,NULL,'Liquid'),
      (283,'Imperial Organic Yeast','G01','Stefon','This is the traditional German strain used to produce world class weizen beers where big banana aroma is required. Balanced with mild clove, depending on your wort profile, this strain will produce amazing beers. Stefon will create a slightly higher level of acidity to give your beer a very crisp finish. Slightly underpitching will help increase the banana character.',73,77,'Low',63,73,NULL,'Liquid'),
      (284,'Imperial Organic Yeast','G03','Deiter','Deiter is a clean, crisp, traditional German Kölsch strain. A very low ester profile makes this strain perfect for Kolsch, Alt and other light colored delicate beers. Deiter has better flocculation characteristics than most Kölsch strains which allows brewers to produce clean, bright beers in a shorter amount of time.',73,77,'Medium',60,69,NULL,'Liquid'),
      (285,'Imperial Organic Yeast','B48','Triple Double','The perfect strain for your classic abbey ales. Triple Double produces moderate esters with low to no phenolic characteristics. This strain is tried and true and works perfectly in a production environment. Keep an eye on Triple Double, it likes to sit on top of the wort throughout fermentation which may result in a slow  fermentation.',74,78,'Medium',65,77,NULL,'Liquid'),
      (286,'Imperial Organic Yeast','B64','Triple Napoleon','This yeast is an insane wort attenuator. Napoleon will destroy the sugars in your saison and farmhouse beers – even the ones in which most brewer’s strains have no interest. When all is said and done, Napoleon produces very dry, crisp beers with nice citrus aromas. Yeast settling times can be long, usually requiring filtration for bright beers.',77,83,'Low',65,78,NULL,'Liquid'),
      (287,'Imperial Organic Yeast','B45','Gnome','The Gnome is the yeast for brewing Belgian inspired beers in a hurry. This strain is extremely flocculent and drops out of the beer quickly after fermentation. Gnome produces a nice phenolic character that goes well with hops, as well as with caramel and toffee flavors. Great for Belgian ales that need to be crystal clear without filtration.',72,76,'Medium-High',65,75,NULL,'Liquid'),
      (288,'Imperial Organic Yeast','B51','Workhorse','Saison…no problem. Belgian stout, double… yep. Workhorse is the strain to use for a wide variety of brews. Super clean, this fast-attenuating strain has good flocculation characteristics. High alcohol tolerance makes this a great option for big Belgian beers.',72,77,'Medium',65,75,NULL,'Liquid'),
      (289,'Imperial Organic Yeast','B56','Rustic','This unique yeast can be used in your saison, farmhouse ale, or other Belgian styles where high ester levels are important. Rustic typically produces a lot of bubblegum and juicy aromas that compliment complex maltiness.',72,76,'Medium',68,80,NULL,'Liquid'),
      (290,'Imperial Organic Yeast','B63','Monastic','This strain is a beautiful yeast for fermenting abbey ales, especially quads; high alcohol and dark Belgian beers. Monastic will produce beers with a high level of phenolic character and esters. It can be slow to begin fermentation but will easily dry out high gravity worts. This strain is a low flocking strain, so expect it to stay suspended for a long time.',74,78,'Medium-Low',68,78,NULL,'Liquid'),
      (291,'Imperial Organic Yeast','B53','Fish Finder','The classic choice for a Belgian IPA. Fish Finder has a very mild phenolic character balanced with moderate fruitiness. Often used for primary and then finished with a secondary Brettanomyces yeast.',74,78,'Medium',65,73,NULL,'Liquid'),
      (292,'Imperial Organic Yeast','B44','Whiteout','This is the strain for Belgian Wit style beers. Whiteout produces an excellent balance of spicy phenolic character and esters. Along with the necessary aromatics, this strain produces a significant amount of acidity which is perfect for wits and other light colored Belgian ales. Whiteout can be flocculent during fermentation, then become non-flocculent at the end. This may lead to slower than normal fermentation.',72,76,'Medium-Low',62,72,NULL,'Liquid'),
      (293,'Imperial Organic Yeast','L13','Global','The world’s most popular lager strain is ready for you. Global is an all-around solid lager strain that produces clean beers with a very low ester profile. This strain is very powdery, so long lagering times or filtration is required for bright beer.',73,77,'Medium-Low',46,56,NULL,'Liquid'),
      (294,'Imperial Organic Yeast','L02','Fest','One of the most flocculent lager strains available, Fest is the strain to use for malt driven lagers. This strong working lager yeast will produce beer that does not require filtration. Make sure yougive this strain a thorough diacetyl rest.',71,75,'Medium-High',46,56,NULL,'Liquid'),
      (295,'Imperial Organic Yeast','L11','Gateway','Strong fermentation and moderate flocculation makes this strain a solid choice for a house lager yeast. Gateway produces crisp and clean light lagers, but will work well for a broad spectrum of lager styles.',72,76,'Medium',47,55,NULL,'Liquid'),
      (296,'Imperial Organic Yeast','L17','Harvest','This strain combines good flocculation characteristics with low sulfur and low diacetyl. Clean fermentations produce amazing bock, helles, pilsner, dunkles, and just about any other lager style you throw its way.',70,74,'Medium',50,60,NULL,'Liquid'),
      (297,'Imperial Organic Yeast','L09','Que Bueno','It’s time for a cerveza. Que Bueno creates refreshing light to dark Mexican-style lagers. Produces lagers with a clean, low ester aroma profile and crisp dry finish.',73,77,'Medium',47,55,NULL,'Liquid'),
      (298,'Imperial Organic Yeast','L05','Cablecar','This strain is for fermenting your “California Common” beer. Cablecar can produce clean pseudo lagers at ale temperatures, but is also willing to work as a traditional lager strain down to the mid 50s.',71,75,'Medium-High',55,65,NULL,'Liquid')");
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

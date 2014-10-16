<?php

use Phinx\Migration\AbstractMigration;

class EastCoastYeast extends AbstractMigration
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
      $insert = $this->execute("INSERT INTO yeasts (id,laboratory,strain,name,description,attenuation_min,attenuation_max,flocculation,temperature_min,temperature_max,tolerance)
      VALUES
      (170,'East Coast Yeast','ECY07','Scottish Heavy','Leaves a fruity profile with woody, oak esters reminiscent of malt whiskey. Well suited for 90/ shilling or heavier ales including old ales and barleywines due to the level of attenuation (77-80%). Suggested fermentation temperature: 60-68F',77,80,'',60,68,0),
      (171,'East Coast Yeast','ECY08','Saison Brasserie','A combination of several saison yeast strains for both fruity and spicy characteristics accompanied with dryness (attenuation ~ 80%). Suggested fermentation temperature: 75-85F.',80,80,'',75,85,0),
      (172,'East Coast Yeast','ECY09','Belgian Abbaye','This yeast produces classic Belgian-style ales - robust, estery with a large note of clove and fruit. Rated highly in sensory tests described in \"Brew Like a Monk\" for complexity and low production of higher alcohols. Attenuation 74-76%, fermentation temperature 66-72F.',74,76,'',66,72,0),
      (173,'East Coast Yeast','ECY10','Old Newark Ale','Sourced from a defunct east coast brewery, this pure strain was identified as their \"ale-pitching yeast\". Good for all styles of American and English ales with high flocculation and a compact sedimentation. Suggested fermentation temperature: 60-68F; attenuation ~76%.',76,76,'',60,68,0),
      (174,'East Coast Yeast','ECY11','Belgian White','Isolated from the Hainaut region in Belgium, this pure yeast will produce flavors reminiscent of witbiers. Suggested fermentation temperature: 70-76. Attenuation ~76%.',76,76,'',70,76,0),
      (175,'East Coast Yeast','ECY12','Old Newark Beer','Sourced from the same east coast brewery as ECY10, this was identified as their \"beer-pitching yeast\" (i.e. lager yeast). The strain was identified as S. cerevisae, hence it is not a true lager yeast, but can ferment at lager fermentation temperatures. Clean and crisp when fermented at 58-68F; attenuation ~78%.',78,78,'',58,68,0),
      (176,'East Coast Yeast','ECY13','Belgian Abbaye 2','Traditional Belgian yeast with a complex, dry, fruity malt profile. Rated highly in sensory tests described in \"Brew Like a Monk\" for complexity and low production of higher alcohols. Attenuation 74-76%; fermentation temperature: 66-72F.',74,76,'',66,72,0),
      (177,'East Coast Yeast','ECY14','Saison Single','This strain leaves a smooth, full farmhouse character with mild esters reminiscent of apple pie spice. Attenuation 76-78%; fermentation temperature: 75-82F.',76,78,'',75,82,0),
      (178,'East Coast Yeast','ECY17','Burton Union','Produces a bold, citrusy character which accentuates mineral and hop flavors. Well suited for classic English pale ales and ESB.  Attenuation 73-75%; fermentation temperature: 64-69F.',73,75,'',64,69,0),
      (179,'East Coast Yeast','ECY18','British Mild','This yeast has a complex woody ester and is typically under-attenuating (does not ferment malto-triose) leaving a pronounced malt profile with a slight sweetness that is perfect for milds and bitters. Apparent attenuation: 66-70%; fermentation temperature: 60-68F.',66,70,'',60,68,0),
      (180,'East Coast Yeast','ECY21','Kolschbier','Produces a clean lager-like profile at ale fermentation temperatures. Smooth mineral and malt flavors come through with a clean, lightly yeasty flavor and aroma in the finish. Recommended fermentation temperature: 58-66F; attenuation:75-78%.',75,78,'',58,66,0),
      (181,'East Coast Yeast','ECY28','Kellerbier','This yeast exhibits a clean, crisp lager in the traditional northern German character. Use in German pilsners including Kellerbier. Recommended fermentation temperature: 46-54F; attenuation: 74-76%.',74,76,'',46,54,0),
      (182,'East Coast Yeast','ECY29','Northeast Ale','A unique ale yeast with an abundance of citrusy esters accentuating American-style hops in any pale ale, IPA, double IPA. Low flocculation. Attenuation: 73-75%; suggested fermentation temperature: 65-70F.',73,75,'',65,70,0)");
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

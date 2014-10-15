<?php

use Phinx\Migration\AbstractMigration;

class YeastBay extends AbstractMigration
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
VALUES (165,'The Yeast Bay','','Vermont Ale','Isolated from a uniquely crafted double IPA out of the Northeastern United States, this yeast produces a balanced fruity ester profile of peaches and light citrus that complements any aggressively hopped beer.',75,82,'Medium-Low',66,70,0),
(166,'The Yeast Bay','','Wallonian Farmhouse','Isolated from a unique farmhouse-style ale that hails from the Walloon region of Belgium, this yeast is one of the funkiest \"clean\" yeast we have in our stable. It imparts a slight earthy funk and tart character to the beer, and is a very mild producer of some slightly spicy and mildly smokey flavor compounds. This yeast exhibits absurdly high attenuation, resulting in a practically bone-dry beer. If desired, we recommend controlling the dryness by adjusting the mash temperature or adding malts or adjuncts to the mash tun that will lend some body and residual sweetness to the beer. Use this yeast for any farmhouse style or experimental Belgian ale.',81,88,'Medium',68,78,0),
(167,'The Yeast Bay','','Northeastern Abbey','This yeast was isolated from a beer crafted by a well-known producer of Belgian-style ales in the Northeastern United States. This yeast produces a very mild spiciness and earthy flavor and aroma which is complemented by a subtle but magnificent array of fruity esters, including pear and light citrus fruit. The brewery from which this strain was isolated uses it in a very versatile manner across an array of Belgian styles. We prefer using this yeast for any and all light Belgian beers, including Wit, Belgian Pale and Belgian Blond, in addition to any experimental fruit beers in which a more unique and robust flavor and aroma profile is desired. Expect this yeast to produce a large, thick krausen.',77,81,'Medium-Low',68,73,0),
(168,'The Yeast Bay','','Saison Blend','A blend of two unique yeast strains isolated from beers that embody the saison style, this blend is a balance of the many characteristic saison flavors and aromas. One yeast strain is a good attenuator that produces a spicy and mildly tart and tangy beer with a full mouthfeel. The other yeast strain is also a good attenuator that produces a delightful ester profile of grapefruit and orange zest and imparts a long, dry and earthy finish to the beer. Together, they produce a dry but balanced beer with a unique flavor and aroma profile.',76,82,'Medium-Low',68,80,0),
(169,'The Yeast Bay','','Dry Belgian Ale','Dry Belgian Ale is single strain of Saccharomyces cerevisiae isolated from a unique golden strong ale. The profile is a complex and balanced mix of apple, pear and light citrus fruit with some mild spicy and peppery notes. The apparent attenuation of this strain ranges anywhere from 85-100%, depending upon the mash profile and the grist composition. For a yeast that\'s as dry as it is, it creates beers with a surprising amount of balance even without the use of specialty grains or adjuncts. While we haven\'t completed our own tests in house, this yeast is used at the brewery from which it was isolated to make big beers that are in the neighborhood of 12-16% ABV and sufficiently dry. Use Dry Belgian Ale as a primary fermenter in any big Belgian beer, or to unstick that pesky stuck fermentation. To achieve high attenuation, we recommend fermenting with this strain at 70-71 ºF for the first 2-3 days, and then bumping up the temperature to 74-75 ºF for the remainder of fermentation.',85,100,'Medium-High',70,76,0)");
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

<?php

use Phinx\Migration\AbstractMigration;

class Srm extends AbstractMigration
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
      $table = $this->table('srms');
      $table->addColumn('value', 'integer')
            ->addColumn('hex', 'text')
            ->create();
            
      $insert = $this->execute("INSERT INTO `srms` VALUES ('1', '1', '#FFE699'), ('2', '2', '#FFD878'), ('3', '3', '#FFCA5A'), ('4', '4', '#FFBF42'), ('5', '5', '#FBB123'), ('6', '6', '#F8A600'), ('7', '7', '#F39C00'), ('8', '8', '#EA8F00'), ('9', '9', '#E58500'), ('10', '10', '#DE7C00'), ('11', '11', '#D77200'), ('12', '12', '#CF6900'), ('13', '13', '#CB6200'), ('14', '14', '#C35900'), ('15', '15', '#BB5100'), ('16', '16', '#B54C00'), ('17', '17', '#B04500'), ('18', '18', '#A63E00'), ('19', '19', '#A13700'), ('20', '20', '#9B3200'), ('21', '21', '#952D00'), ('22', '22', '#8E2900'), ('23', '23', '#882300'), ('24', '24', '#821E00'), ('25', '25', '#7B1A00'), ('26', '26', '#771900'), ('27', '27', '#701400'), ('28', '28', '#6A0E00'), ('29', '29', '#660D00'), ('30', '30', '#5E0B00'), ('31', '31', '#5A0A02'), ('32', '32', '#560A05'), ('33', '33', '#520907'), ('34', '34', '#4C0505'), ('35', '35', '#470606'), ('36', '36', '#440607'), ('37', '37', '#3F0708'), ('38', '38', '#3B0607'), ('39', '39', '#3A070B'), ('40', '40', '#36080A');");
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

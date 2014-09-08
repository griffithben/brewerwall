<?php

use Phinx\Migration\AbstractMigration;

class RemoveNotes extends AbstractMigration
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
      $remote = $this->execute("ALTER TABLE `beer_styles` DROP COLUMN `note`;");
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

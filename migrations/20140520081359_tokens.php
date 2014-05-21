<?php

use Phinx\Migration\AbstractMigration;

class Tokens extends AbstractMigration
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
      $table = $this->table('tokens');
      $table->addColumn('user_id', 'integer')
            ->addColumn('label', 'string')
            ->addColumn('token', 'string')
            ->addForeignKey('user_id', 'users', 'id', array('delete'=> 'NO_ACTION', 'update'=> 'NO_ACTION'))
            ->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

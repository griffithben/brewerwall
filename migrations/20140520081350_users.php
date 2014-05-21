<?php

use Phinx\Migration\AbstractMigration;

class Users extends AbstractMigration
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
      $table = $this->table('users');
      $table->addColumn('username', 'string')
            ->addColumn('password', 'string', array('limit' => 40))
            ->addColumn('email', 'string')
            ->addColumn('created', 'datetime')
            ->addIndex(array('username', 'email'), array('unique' => true))
            ->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

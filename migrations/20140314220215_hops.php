<?php

use Phinx\Migration\AbstractMigration;

class Hops extends AbstractMigration
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
      $table = $this->table('hops');
      $table->addColumn('name', 'string')
            ->addColumn('origin', 'string')
            ->addColumn('type', 'string')
            ->addColumn('aroma', 'string')
            ->addColumn('styles', 'string')
            ->addColumn('alpha_min', 'float')
            ->addColumn('alpha_max', 'float')
            ->addColumn('beta_min', 'float')
            ->addColumn('beta_max', 'float')
            ->addColumn('cohumulone_min', 'float')
            ->addColumn('cohumulone_max', 'float')
            ->addColumn('total_oil_min', 'float')
            ->addColumn('total_oil_max', 'float')
            ->addColumn('myrcene_min', 'float')
            ->addColumn('myrcene_max', 'float')
            ->addColumn('humulene_min', 'float')
            ->addColumn('humulene_max', 'float')
            ->addColumn('farnesene_min', 'float')
            ->addColumn('farnesene_max', 'float')
            ->addColumn('caryophyllene_min', 'float')
            ->addColumn('caryophyllene_max', 'float')
            ->addColumn('source', 'string')
            ->addColumn('source_link', 'string')
            ->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
}

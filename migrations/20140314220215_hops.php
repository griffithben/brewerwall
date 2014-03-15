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
            ->addColumn('alpha_min', 'decimal')
            ->addColumn('alpha_max', 'decimal')
            ->addColumn('beta_min', 'decimal')
            ->addColumn('beta_max', 'decimal')
            ->addColumn('cohumulone_min', 'decimal')
            ->addColumn('cohumulone_max', 'decimal')
            ->addColumn('total_oil_min', 'decimal')
            ->addColumn('total_oil_max', 'decimal')
            ->addColumn('myrcene_min', 'decimal')
            ->addColumn('myrcene_max', 'decimal')
            ->addColumn('humulene_min', 'decimal')
            ->addColumn('humulene_max', 'decimal')
            ->addColumn('farnesene_min', 'decimal')
            ->addColumn('farnesene_max', 'decimal')
            ->addColumn('caryophyllene_min', 'decimal')
            ->addColumn('caryophyllene_max', 'decimal')
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

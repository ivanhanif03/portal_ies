<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Apps extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true
            ],
            'nama' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'hostname' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'ip_address' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'os' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'jenis' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('apps');
    }

    public function down()
    {
        //
    }
}

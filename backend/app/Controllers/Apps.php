<?php

namespace App\Controllers;

use App\Models\AppModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use Config\App;

class Apps extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;

    public function index()
    {
        $model = new AppModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        $model = new AppModel();
        $data = $model->find(['id' => $id]);
        if(!$data) return $this->failNotFound('No Data Found');
        return $this->respond($data[0]);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        helper(['form']);
        $rules = [
            'nama' => 'required',
            'hostname' => 'required',
            'ip_address' => 'required',
            'os' => 'required',
            'jenis' => 'required',
        ];
        $data = [
            'nama' => $this->request->getVar('nama'),
            'hostname' => $this->request->getVar('hostname'),
            'ip_address' => $this->request->getVar('ip_address'),
            'os' => $this->request->getVar('os'),
            'jenis' => $this->request->getVar('jenis'),
        ];
        if(!$this->validate($rules)) return $this->fail($this->validator->getErrors());
        $model = new AppModel();
        $model->save($data);
        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'Data Inserted'
            ]
        ];
        return $this->respondCreated($response);
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        helper(['form']);
        $rules = [
            'nama' => 'required',
            'hostname' => 'required',
            'ip_address' => 'required',
            'os' => 'required',
            'jenis' => 'required',
        ];
        $data = [
            'nama' => $this->request->getVar('nama'),
            'hostname' => $this->request->getVar('hostname'),
            'ip_address' => $this->request->getVar('ip_address'),
            'os' => $this->request->getVar('os'),
            'jenis' => $this->request->getVar('jenis'),
        ];
        if(!$this->validate($rules)) return $this->fail($this->validator->getErrors());
        $model = new AppModel();
        $findById = $model->find(['id' => $id]);
        if(!$findById) return $this->failNotFound('No Data Found');
        $model->update($id, $data);
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'Data Updated'
            ]
        ];
        return $this->respond($response);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        $model = new AppModel();
        $findById = $model->find(['id' => $id]);
        if(!$findById) return $this->failNotFound('No Data Found');
        $model->delete($id);
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'Data Deleted'
            ]
        ];
        return $this->respond($response);
    }
}

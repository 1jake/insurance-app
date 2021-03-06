<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PolicyType extends Model
{

    protected $table = 'policy_types';
    protected $fillable = ['title', 'identifier', 'options'];

    public $timestamps = false;


    public static function getByIndentifier($identifier){
        return self::where('identifier', $identifier)->first();
    }

}

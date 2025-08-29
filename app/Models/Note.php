<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Note extends Model
{
    use Searchable;
    
    protected $fillable = ['name', 'category', 'description', 'user_id'];
    
    /**
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */
    public function toSearchableArray()
    {
        return [
          'name'=>$this->name,
        ];
    }
   
}
 

import React from 'react';
import swal from 'sweetalert';

const CoffeCard = ({coffee}) => {
    const {_id, name, chef, test, suplier } = coffee;

    const handleDelete = (_id) =>{
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                fetch(`http://localhost:5000/addcoffee/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                    }
                })
            
            }


          });
    }
    
    return (
        <div className='border p-10'>
            <div className='flex justify-between px-5'>
                <h1>Name : {name}</h1>
                <h1>Chef : {chef}</h1>
            </div>
            <div className='flex justify-between px-5'>
                <h1>Suplier : {suplier}</h1>
                <h1>Test : {test}</h1>
            </div>
            <div className="btn-group btn-group-horizontal">
                <button className="btn mx-1">Button</button>
                <button className="btn mx-1">Edit</button>
                <button
                    onClick={()=>handleDelete(_id)}
                    className="btn mx-1"
                    
                    >Delete</button>
            </div>
        </div>
    );
};

export default CoffeCard;
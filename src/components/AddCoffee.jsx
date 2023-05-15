import React from 'react';

const AddCoffee = () => {
    const handleAddCoffe = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const chef = e.target.chef.value;
     

        const coffee = {name, chef}


        fetch('http://localhost:5000/addcoffee',{
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl font-semibold my-4'>Add Coffee</h1>
            <form onSubmit={(e)=>handleAddCoffe(e)}>
                <div className=' justify-center'>
                  <input type="text" name='name' placeholder="Nescoffee" className="input input-bordered block border mx-auto m-2" />
                  <input type="text" name='chef' placeholder="Enter Chef name" className="input input-bordered block border mx-auto m-2" />
                </div>
                
                <div className='md:flex justify-around'>
                 
                    <input type="submit" className='btn btn-wide' value="Submit" />
                   
                </div>


            </form>
        </div>
    );
};

export default AddCoffee;
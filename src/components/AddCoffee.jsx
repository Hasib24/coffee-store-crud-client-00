import React from 'react';

const AddCoffee = () => {
    const handleAddCoffe = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const test = e.target.test.value;
        const suplier = e.target.suplier.value;

        const coffee = {name, chef, suplier, test}

        console.log(coffee);

        fetch('http://localhost:5000/addcoffee', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(coffee)
        })

    }


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl font-semibold my-4'>Add Coffee</h1>
            <form onSubmit={(e)=>handleAddCoffe(e)}>
                <div className='md:flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="">
                          <input type="text" name='name' placeholder="Nescoffee" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Chef</span>
                        </label>
                        <label className="">
                          <input type="text" name='chef' placeholder="Enter Chef name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-around'>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Suplier </span>
                        </label>
                        <label className="">
                          <input type="text" name='suplier' placeholder="Suplier " className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Test</span>
                        </label>
                        <label className="">
                          <input type="text" name='test' placeholder="Test" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-around'>
                 
                    <input type="submit" className='btn btn-wide' value="Submit" />
                   
                </div>


            </form>
        </div>
    );
};

export default AddCoffee;
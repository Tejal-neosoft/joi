import bookmodel from './bookmodel.js';


export const createBook = async (req, res) => {
    try {
      const {Name,Author,NumberOfPages,Summary}=req.body;
       
    const book = await bookmodel.create({Name,Author,NumberOfPages,Summary})
    res.status(201).json({
        success:true,
        book
    })
    } catch (error) {
        console.log(error.message)
        
    }
	
};
